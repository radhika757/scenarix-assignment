"use client";

import { fonts } from "../data/dummy-data";

export default function FontShowcase() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          Our AI Models Can Generate Text in These Fonts
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
          Experience the power of AI with our extensive font collection
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {fonts.map((font) => (
            <div
              key={font.key}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`text-2xl ${font.className}`}>{font.text}</div>
                <button
                  className="ml-4 text-sm px-2 py-1 rounded bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500 transition"
                  onClick={() => navigator.clipboard.writeText(font.text)}
                  title="Copy text"
                >
                  Copy
                </button>
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                {font.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
