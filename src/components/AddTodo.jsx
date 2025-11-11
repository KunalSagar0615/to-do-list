import { useContext, useState } from "react";
import TodoContext from "../context/TodoContext";

const AddTodo = () => {
  const [userInput, setUserInput] = useState('');
  const { allTodos, setAllTodos } = useContext(TodoContext);

  const handleClick = () => {
    if (userInput.trim() === '') return;
    setAllTodos([...allTodos, { text: userInput, isCompleted: false }]);
    setUserInput('');
  };

  return (
    <div className='flex gap-4 mb-6'>
      <input type="text"
        className='border border-violet-400 text-2xl w-full rounded-xl px-4 py-2 bg-gray-800 text-gray-100 placeholder-gray-400 focus:outline-none focus:border-violet-500'
        placeholder='Type todo here...'
        onChange={e => setUserInput(e.target.value)}
        value={userInput} />
      <button type="button"
        className='bg-violet-600 text-2xl px-5 py-3 rounded-xl text-white font-bold cursor-pointer'
        onClick={handleClick} >
        Add
      </button>
    </div>
  );
};

export default AddTodo;
