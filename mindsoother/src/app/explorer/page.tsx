"use client";
import { FaMagnifyingGlass } from "../components/icons";
import React, { useState } from "react";

export default function TechniqueExplorer() {
  const [textValue, setTextValue] = useState<string>("");

  const handleRecButton = (event: React.MouseEvent<HTMLButtonElement>) => {
    const value = event.currentTarget.dataset.value;
    if (value) {
      setTextValue(value);
    }
  };

  const handleTextArea = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.currentTarget.value;
    if (value.length > 200) {
      return;
    } else {
      setTextValue(value);
    }
  };

  return (
    <>
      <section className="bg-gray-50 min-h-screen">
        <div className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-center">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-white text-[30px] font-bold">
              Therapy Technique Explorer
            </h1>
            <p className="mt-4 text-gray-50 text-xl">
              Describe what you're experiencing, and we'll match you with
              evidence-based techniques that might help.
            </p>
          </div>
        </div>
        <div className="-mt-8 px-4">
          <div className="p-5 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 rounded bg-white shadow-xl">
            <h2 className="mb-5 font-semibold">
              Describe what you're experiencing
            </h2>
            <label htmlFor="experience" className="sr-only">
              Describe what you're experiencing
            </label>
            <textarea
              id="experience"
              className="w-full shadow-sm pl-2 pt-1 resize-none"
              rows={4}
              placeholder="E.g., I feel overwhelmed at work and find myself procrastinating important tasks..."
              value={textValue}
              onChange={handleTextArea}
            ></textarea>
            <div className="flex justify-between text-gray-500">
              <span className="text-xs">
                Be specific about thoughts, feelings, and situations
              </span>
              <span className="text-xs">{textValue.length}/200</span>
            </div>
            <button className="flex items-center justify-center gap-x-2 text-white bg-indigo-600 hover:bg-indigo-700 opacity-70 w-full mt-5 p-2 rounded-md cursor-pointer">
              <FaMagnifyingGlass />
              <span className="font-semibold">Find Techniques</span>
            </button>
            <div className="pt-5">
              <h2>Try an example:</h2>
              <div className="flex flex-wrap gap-x-5 gap-y-2.5">
                <button
                  data-value="I keep overworking and feel guilty when I rest"
                  className="bg-gray-100 text-xs font-semibold rounded-xl py-1.5 px-3 cursor-pointer hover:bg-indigo-100 hover:text-indigo-500"
                  type="button"
                  onClick={handleRecButton}
                >
                  I keep overworking and feel guilty when I rest
                </button>
                <button
                  data-value="I worry constantly about things I can't control"
                  className="bg-gray-100 text-xs font-semibold rounded-xl p-1.5 px-3 cursor-pointer hover:bg-indigo-100 hover:text-indigo-500"
                  type="button"
                  onClick={handleRecButton}
                >
                  I worry constantly about things I can't control
                </button>
                <button
                  data-value="I have trouble setting boundaries with family members"
                  className="bg-gray-100 text-xs font-semibold rounded-xl p-1.5 px-3 cursor-pointer hover:bg-indigo-100 hover:text-indigo-500"
                  type="button"
                  onClick={handleRecButton}
                >
                  I have trouble setting boundaries with family members
                </button>
                <button
                  data-value="I'm constantly critizing myself for small mistakes"
                  className="bg-gray-100 text-xs font-semibold rounded-xl p-1.5 px-3 cursor-pointer hover:bg-indigo-100 hover:text-indigo-500"
                  type="button"
                  onClick={handleRecButton}
                >
                  I'm constantly critizing myself for small mistakes
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
