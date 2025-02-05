import React from "react";
import Photo from './photo.jpeg';
import Background from './background.jpg';

function Game() { 
    return (
        <div  
            className="min-h-screen flex flex-col justify-center items-center mt-15 px-4  bg-no-repeat bg-center bg-contain"
            style={{ backgroundImage: `url(${Background})` }}
        >
<div className="flex flex-col md:flex-row items-center max-w-4xl bg-white p-6 rounded-lg shadow-lg">
                <img 
                    src={Photo}
                    alt="Restaurant ambiance"
                    className="w-full md:w-1/2 h-auto rounded-lg"
                />
                <div className="md:w-1/2 p-4">
<h2 className="text-2xl font-bold mb-2">Welcome to Ashdip Bistro</h2>
                    <p className="text-gray-700 font-serif">
                        Experience fine dining with a touch of elegance. Our chefs prepare 
                        exquisite dishes using fresh ingredients, ensuring a delightful 
                        culinary journey for every guest. Join us for a memorable experience 
                        filled with flavor and warmth.
</p>
                </div>
            </div>
        </div>
    );
}

export default Game;