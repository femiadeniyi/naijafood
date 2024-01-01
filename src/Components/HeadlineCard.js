import React from "react";

export default function HeadlineCard() {
	return(
          <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
            {/* Card */}
            <div className="rounded-xl relative">
        {/* Overlay */}
          <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
            <p className="font-bold text-2xl px-2 pt-4">Sun's Out BOGO's Out</p>
            <p className="px-2">Through 8/26</p>
            <button className="border-white bg-white text-black mx-2 absolute bottom-4">Order Now</button>
           </div>
               <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
          </div>

          {/* Card */}
            <div className="rounded-xl relative">
        {/* Overlay */}
          <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
            <p className="font-bold text-2xl px-2 pt-4">New Restaurant</p>
            <p className="px-2">Added Daily</p>
            <button className="border-white bg-white text-black mx-2 absolute bottom-4">Order Now</button>
           </div>
               <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src="https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=400" alt=""/>
          </div>

           {/* Card */}
            <div className="rounded-xl relative">
        {/* Overlay */}
          <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
            <p className="font-bold text-2xl px-2 pt-4">We Deliver Dessert Too</p>
            <p className="px-2">Tasty Treates</p>
            <button className="border-white bg-white text-black mx-2 absolute bottom-4">Order Now</button>
           </div>
               <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src="https://images.pexels.com/photos/2664216/pexels-photo-2664216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
          </div>
         </div>
		);
};