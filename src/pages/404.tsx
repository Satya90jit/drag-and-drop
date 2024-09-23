import React from "react";
import Link from "next/link";

const PageNotFound = () => {
  return (
    <section className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-8">
      <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          404 - Page Not Found
        </h1>
        <p className="text-gray-600 mb-6">
          This page is not yet built. You can contribute to this project and
          help build more awesome features!
        </p>
        <Link href="/">
          <span className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors">
            Go Back to Home
          </span>
        </Link>
      </div>
    </section>
  );
};

export default PageNotFound;
