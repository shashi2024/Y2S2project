import React from "react";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4 text-red-600">404 - Not Found</h1>
      <p className="text-lg">Sorry, the page you are looking for could not be found.</p>
      <a href="/guestlogin" className="mt-4 text-blue-600 hover:underline">Go back to home page</a>
    </div>
  );
}

export default NotFound;
