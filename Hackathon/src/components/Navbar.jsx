import React from 'react'

function Navbar() {
    return (
        <>
        <div className="flex flex-row justify-between items-center px-20 py-4 bg-darkblue">
          {/* TITLE */}
          <div className="text-pastelgreen text-xl poppins-bold hover:text-yellow-400 transition duration-300">
            The Story of Van Gogh
          </div>
          {/* PAGES */}
          <div className="flex flex-row gap-6 poppins-semibold text-pastelblue">
            <p className="hover:text-yellow-400 transition duration-300">Paintings</p>
            <p className="hover:text-yellow-400 transition duration-300">Biography</p>
            <p className="hover:text-yellow-400 transition duration-300">Deeper Look</p>
          </div>
        </div>
        <hr className="w-full border-t-4 border-black border-opacity-50" />
        </>
      );
}

export default Navbar