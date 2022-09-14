import React from "react";

export default function FindUser() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="p-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-4">
          <h6 className="text-blueGray-700 text-xl font-bold uppercase">Search For A User By Email</h6>
          <form className="md:flex hidden flex-row flex-wrap items-center mr-3 w-1/2">
            <div className="relative flex w-full flex-wrap items-stretch">
              <span className="z-10 h-full leading-snug font-normal text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                <i className="fas fa-search"></i>
              </span>  
              <input
                type="text"
                placeholder="Search here..."
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
