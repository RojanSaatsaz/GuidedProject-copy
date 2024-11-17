import React from 'react'

function FeaturedItemss() {
  return (
    <div>
      <hr className="w-full mx-auto border-t-8 border-pastelblue" />
      <hr className="w-1/2 mx-auto border-t-2 border-darkblue" />
      <hr className="w-full mx-auto border-t-8 border-pastelblue" />
      <div className="flex justify-center">
        <div className="rounded-3xl relative mx-auto flex h-fit w-fit flex-col bg-gradient-to-r from-darkblue to-pastelgreen p-1 shadow-2xl">
          <div className="flex items-center p-8 rounded-3xl bg-white shadow-inner transition duration-500 hover:scale-105 hover:shadow-2xl">  
            <div className="space-y-4">
              <iframe width="300" src="https://www.youtube.com/embed/GqukPl3u5Pg" title="How artists capture environments | Modern Art &amp; Ideas" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              <iframe width="300" src="https://www.youtube.com/embed/PMerSm2ToFY?si=gnhGl1lvxxUwBgWs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </div>
        </div>
        <div className="rounded-3xl relative mx-auto flex h-fit w-fit flex-col bg-gradient-to-r from-darkblue to-pastelgreen p-1 shadow-2xl">
          <div className="flex items-center p-8 rounded-3xl bg-white shadow-inner transition duration-500 hover:scale-105 hover:shadow-2xl">  
          <div className="space-y-4">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9746.722903559801!2d4.8812053!3d52.3580757!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c609ef96d35a5f%3A0xc22828aef97cc51a!2sVan%20Gogh%20Museum!5e0!3m2!1sen!2sus!4v1731865165345!5m2!1sen!2sus" width="300" style={{ border: 0 }} allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12088.107669490291!2d-73.9776216!3d40.7614327!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258f97bdb102b%3A0xea9f8fc0b3ffff55!2sThe%20Museum%20of%20Modern%20Art!5e0!3m2!1sen!2sus!4v1731865437230!5m2!1sen!2sus" width="300" style={{ border: 0 }} allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}
export default FeaturedItemss