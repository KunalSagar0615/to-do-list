import { useContext } from "react";
import TodoContext from "../context/TodoContext";
import { ImCancelCircle } from "react-icons/im";
import { FaRegCheckCircle } from "react-icons/fa";

const DisplayTodos = () => {
    const { allTodos, setAllTodos } = useContext(TodoContext);

    const handleDelete = (index) => {
        setAllTodos(allTodos.filter((_, i) => index !== i));
    };

    const handleComplete = (index) => {
        setAllTodos(allTodos.map((todo, i) => {
            if (i === index) return { ...todo, isCompleted: true };
            return todo;
        }));
    };

    const handleChangeStatus = (index) => {
        setAllTodos(allTodos.map((todo, i) => {
            if (i === index) return { ...todo, isCompleted: !todo.isCompleted };
            return todo;
        }));
    };

    return (
        <div>
            {allTodos.length > 0 ? (
                allTodos.slice().reverse().map((todo, index) => {
                    // compute the correct index in original array so we reversed it for display
                    const realIndex = allTodos.length - 1 - index;

                    return (
                        <div
                            key={realIndex}
                            className={`border border-violet-500 mb-3 text-2xl p-4 rounded-xl shadow-lg ${todo.isCompleted ? 'bg-green-900/30' : 'bg-gray-800 hover:bg-gray-700/80'
                                }`}
                        >
                            <div className='flex justify-between items-center'>
                                <div>
                                    <p
                                        className={`cursor-pointer ${todo.isCompleted ? 'line-through text-green-400' : 'text-gray-100'
                                            }`}
                                        onClick={() => handleChangeStatus(realIndex)}
                                    >
                                        {todo.text}
                                    </p>
                                    <small className="text-gray-400">
                                        Status: {todo.isCompleted ? '✅ Completed' : '⏳ Pending'}
                                    </small>
                                </div>

                                <div className="flex gap-2">
                                    <button onClick={() => handleDelete(realIndex)}>
                                        <ImCancelCircle className="text-red-500 hover:text-red-600 size-8 transition-all" />
                                    </button>
                                    <button onClick={() => handleComplete(realIndex)}>
                                        <FaRegCheckCircle className="text-green-500 hover:text-green-600 size-8 transition-all" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })
            ) : (
                <div className="text-center text-xl text-gray-400">No Todos to display</div>
            )}

        </div>
    );
};

export default DisplayTodos;
