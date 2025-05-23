"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

   function validateEmail(email: string) {
    if(email === "") {
      alert("Please enter an email address.");
      return false;
    }
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!re.test(email)) {
      alert("Please enter a valid email address.");
      return false;
    }
    alert("Thank you for subscribing!");
    return true;
  }
  
  return (
    <div className="mt-12 text-center">
      <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        Subscribe to our newsletter for the latest articles and updates
      </p>
      <form className="max-w-md mx-auto flex gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 px-4 py-2 rounded-lg border focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
          onClick={(e) => {
              validateEmail(email);
          }}>
          Subscribe
        </button>
      </form>
    </div>
  );
}
