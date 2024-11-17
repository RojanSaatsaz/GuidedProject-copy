import React from 'react'

function FeaturedItem() {
  return (
    <div>
        <div className="poppins-thin text-center text-darkblue text-2xl">Homepage</div>
        <hr className="w-1/2 mx-auto border-t-2 border-darkblue" />
        <hr className="w-full mx-auto border-t-8 border-pastelblue" />
        <div className="rounded-3xl relative mx-auto flex h-fit w-fit flex-col bg-gradient-to-r from-darkblue to-pastelgreen p-1 shadow-2xl">
          <div className="flex items-center p-8 rounded-3xl bg-white shadow-inner transition duration-500 hover:scale-105 hover:shadow-2xl">  
            <img src="/Images/art.jpg" width="300" className=" hover-img"></img >
            <div className="w-1/2 pl-8 space-y-3">
              <h1 className="poppins-extrabold text-3xl text-darkblue drop-shadow-lg">Vincent van Gogh</h1>
              <p className="inter-regular text-lg text-gray-600">Café Terrace at Night - 1888</p>
              <p className="inter-regular text-darkgreen">
              With more than 900 paintings, painted in less than 10 years,
              Vincent van Gogh is amongst the most profound artists of history.
              However..
              </p>
              <p className="pt-4 poppins-bold underline text-2xl text-emerald-500">Learn More</p>
            </div>
          </div>
        </div>
    </div>
  );
}
export default FeaturedItem