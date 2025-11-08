"use client";

import Link from "next/link";
import React, { useState } from "react";
import { IoBookOutline, IoFolderOutline } from "../../components/icons";
import ManageFolderModal from "./ManageFolderModal";

export default function SignedInLibraryView() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="z-2">
      <div className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-center text-white  px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold">Your Saved Techniuqes</h1>
        <p className="mt-4 text-xl text-indigo-100">
          Organize and revisit your saved psychology research
        </p>
      </div>
      <div className="-mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-y-5 md:gap-y-0 justify-between p-5 rounded bg-white shadow-xl">
          <div className="grid grid-cols-1 gap-y-2 md:flex">
            <h2 className="text-xl md:text-2xl font-semibold">
              0 Saved Techniques
            </h2>
            <button
              className="md:ml-5 py-2 md:py-0 px-2 flex items-center hover:bg-gray-100 border border-gray-300 font-medium rounded-md cursor-pointer"
              onClick={() => setIsModalOpen(true)}
            >
              <IoFolderOutline fontSize={18} className="mr-2" />
              Manage Folders
            </button>
          </div>
          <div className="md:flex md:justify-end">
            <select className="w-full md:w-auto border border-gray-300 rounded-md py-2 md:py-0 pl-2 pr-10 font-medium">
              <option value="all">All Folders</option>
              <option value="unsorted">Unsorted</option>
            </select>
          </div>
        </div>
      </div>
      <div className="my-20 max-w-7xl mx-auto rounded px-4 sm:px-6 lg:px-8">
        <div className="p-12 flex flex-col items-center bg-white shadow-xl">
          <IoBookOutline fontSize={40} className="text-gray-500" />
          <h2 className="text-xl font-semibold mt-5">
            No saved techniques yet
          </h2>
          <p className="mt-5 max-w-md text-center text-gray-600">
            Start building your research library by saving articles from your
            searches.
          </p>
          <Link
            href="/explorer"
            className="mt-5 p-4 bg-indigo-600 rounded-lg text-white text-md font-semibold"
          >
            Explore Techniques
          </Link>
        </div>
      </div>
      <ManageFolderModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </div>
  );
}
