import React, {useState}from "react";
import {data} from '../data/data.js';

export default function Food() {
	const [foods, setFoods] = useState(data)

	// Filter Type Burger/pizza/etc

	const filterType = (category) =>{
		setFoods(
			data.filter((item) => {
               return item.category === category;
				})
		);
	};
   // Filter by Price
	const filterprice = (price) => {
		setFoods(
			data.filter((item)=>{
               return item.price === price;
				})
		);
	};
	return(
         <div className="max-w-[1640px] m-auto px-4 py-12">
         <h1 className="text-orange-600 font-bold text-4xl text-center">Top Rated Menu Items</h1>

     {/* Fliter Row */}
       <div className="flex flex-col lg:flex-row justify-between">
   {/* Fliter Type */}
     <div>
      <p className="font-bold text-gray-700">Fliter Type</p>
     <div className="flex justify-between flex-wrap">
        <button onClick={()=> setFoods(data)} className="mt-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">All</button>
        <button onClick={()=> filterType('burger')} className="mt-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">Burgers</button>
        <button onClick={()=> filterType('pizza')} className="mt-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">Pizza</button>
        <button onClick={()=> filterType('salad')} className="mt-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">Salads</button>
        <button onClick={()=> filterType('chicken')} className="mt-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">Chicken</button>
        </div>
       </div>
         
         {/* Fliter Price */}
         <div>
           <p className="font-bold text-gray-700">Fliter Price</p>
           <div className="flex justify-between max-w-[390px] w-full">
             <button onClick={()=> filterprice('$')} className="mt-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">$</button>
             <button onClick={()=> filterprice('$$')} className="mt-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">$$</button>
             <button onClick={()=> filterprice('$$$')} className="mt-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">$$$</button>
             <button onClick={()=> filterprice('$$$$')} className="mt-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">$$$$</button>
           </div>
         </div>
        </div>
 {/* Display foods*/}
   <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
     {foods.map((item, i)=>(
     	<div key={i} className="border shadow-lg rounded-lg hover:scale-105 duration-300">
     	  <img className="w-full h-[200px] object-cover rounded-t-lg" src={item.image} alt={item.name}/>
     	  <div className="flex justify-between px-2 py-4">
     	    <p className="font-bold">{item.name}</p>
     	    <p>
     	      <span className="bg-orange-500 text-white -1 rounded-full">{item.price}</span>
     	    </p>
     	  </div>
     	</div>
     ))}
   </div>
       </div>
		)
}