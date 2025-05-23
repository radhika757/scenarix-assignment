"use client";

import Head from "next/head";

export default function Contact() {

function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();

  const form = e.currentTarget;
  const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
  const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();
  const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim();

  if (!name) return alert("Name is empty");
  if (!email) return alert("Email is empty");
  if (!message) return alert("Message is empty");

  alert("Thank you for contacting us! We will reach out to you soon!");
  form.reset();
}

  return (
    <>
      <Head>
        <title>Contact Us</title>
      </Head>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md">
          <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            Contact Us
          </h1>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Name
              </label>
              <input
              name="name"
                type="text"
                className="mt-1 w-full px-4 py-2 border rounded-md bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Email
              </label>
              <input
              name="email"
                type="email"
                className="mt-1 w-full px-4 py-2 border rounded-md bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Message
              </label>
              <textarea
              name="message"
                rows={4}
                className="mt-1 w-full px-4 py-2 border rounded-md bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="Your message"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
