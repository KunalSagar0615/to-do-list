import AddTodo from "./AddTodo";
import DisplayTodos from "./DisplayTodos";

const TodoApp = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-4 py-6">
      <h1 className="text-center text-violet-400 text-5xl font-bold mb-8">
      My Todo App
      </h1>
      <div className="w-full md:w-1/2 mx-auto p-4 bg-gray-800 rounded-2xl">
        <AddTodo />
        <DisplayTodos />
      </div>
    </div>
  );
};

export default TodoApp;
