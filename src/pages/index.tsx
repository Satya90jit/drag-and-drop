import React from "react";
import Link from "next/link";

const tasks = [
  { id: 1, title: "Pagination Task", path: "/tasks/pagination" },
  { id: 2, title: "custom-collapse", path: "/tasks/custom-collapse" },
  { id: 3, title: "Drag and Drop Task", path: "/tasks/drag-and-drop-card" },
  { id: 4, title: "Todo List Task", path: "/tasks/todo-list" },
  // Add more tasks as needed
];

const Home = () => {
  return (
    <section className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Machine Coding Tasks
        </h1>
        <p className="text-gray-600 mb-4">
          Explore and contribute to the following machine coding tasks. Click on
          any task to view and interact with its implementation.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out"
            >
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                {task.title}
              </h3>
              <Link href={task.path}>
                <span className="inline-block bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors">
                  View Task
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
