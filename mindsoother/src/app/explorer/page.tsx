"use client";
import { FaMagnifyingGlass } from "../components/icons";
import React, { useEffect, useState } from "react";
import LoadingIcon from "./LoadingIcon";
import { MoonLoader } from 'react-spinners';
import SearchSummary from "./SearchSummary";
import SearchResults from "./SearchResults";
import formHandler from "./helpers/formHandler";

export default function TechniqueExplorer() {
  const [textValue, setTextValue] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<any | null>(null);

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
              Psychology Research Explorer
            </h1>
            <p className="mt-4 text-gray-50 text-xl">
            Search through research articles with AI-powered semantic understanding
            </p>
          </div>
        </div>
        <div className="-mt-8 px-4">
          <div className="p-5 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 rounded bg-white shadow-xl">
            <h2 className="mb-5 font-semibold">
              Describe a topic you'd like to learn more about.
            </h2>
            <label htmlFor="experience" className="sr-only">
              Describe a topic you'd like to learn more about.
            </label>
            <form onSubmit={(e) => formHandler(e, {setIsLoading, setData, setTextValue, textValue}) }>
              <textarea
                id="experience"
                className="w-full shadow-sm pl-2 pt-1 resize-none"
                rows={4}
                placeholder="E.g., 'REM sleep cycles', 'aphasia treatment', 'child development stages', 'anxiety disorders'..."
                value={textValue}
                onChange={handleTextArea}
              ></textarea>
            <div className="flex justify-between text-gray-500">
              <span className="text-xs">
                Be specific about the topic to see if a study exist for it already.
              </span>
              <span className="text-xs">{textValue.length}/200</span>
            </div>
            <button className="flex items-center justify-center gap-x-2 text-white bg-indigo-600 hover:bg-indigo-700 opacity-70 w-full mt-5 p-2 rounded-md cursor-pointer" type="submit">
              {isLoading ? 
                <>
                  <MoonLoader size={18} color="white" />
                  <span className="font-semibold">Searching Research Database</span>
                </>
                :
                <>
                <FaMagnifyingGlass />
                <span className="font-semibold">Find Techniques</span>
                </>
              }
            </button>
            </form>
            <div className="pt-5">
              <h2>Try an example:</h2>
              <div className="flex flex-wrap gap-x-5 gap-y-2.5">
                <button
                  data-value="REM sleep"
                  className="bg-gray-100 text-xs font-semibold rounded-xl py-1.5 px-3 cursor-pointer hover:bg-indigo-100 hover:text-indigo-500"
                  type="button"
                  onClick={handleRecButton}
                >
                  REM sleep
                </button>
                <button
                  data-value="aphasia recovery"
                  className="bg-gray-100 text-xs font-semibold rounded-xl p-1.5 px-3 cursor-pointer hover:bg-indigo-100 hover:text-indigo-500"
                  type="button"
                  onClick={handleRecButton}
                >
                  aphasia recovery
                </button>
                <button
                  data-value="child development"
                  className="bg-gray-100 text-xs font-semibold rounded-xl p-1.5 px-3 cursor-pointer hover:bg-indigo-100 hover:text-indigo-500"
                  type="button"
                  onClick={handleRecButton}
                >
                  child development
                </button>
                <button
                  data-value="anxiety disorders"
                  className="bg-gray-100 text-xs font-semibold rounded-xl p-1.5 px-3 cursor-pointer hover:bg-indigo-100 hover:text-indigo-500"
                  type="button"
                  onClick={handleRecButton}
                >
                  anxiety disorder
                </button>
              </div>
            </div>
          </div>
          <div className="py-5 max-w-7xl mx-auto ">
            <div className="flex justify-center">
            <LoadingIcon loading={isLoading} />
            </div>
            {data && 
            <>
            <SearchSummary chatSummary={data.chatResponse} />
            <SearchResults results={data.alexData.results} />
            </>
            }
          </div>
        </div>
      </section>
    </>
  );
}
