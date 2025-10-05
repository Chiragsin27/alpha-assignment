"use client";

import React, { useEffect, useState } from "react";

export default function PriceCalculatorPage() {
  const [invites, setInvites] = useState(50);
  const [duration, setDuration] = useState(3);
  const [price, setPrice] = useState(0);

  useEffect(()=>{
    const total = invites * duration * 75;
    setPrice(total);
  },[invites,duration,price]);

  

  return (
    <div className="h-150 flex items-center justify-center bg-gray-50 p-6">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-6 border border-gray-100">

        <h2 className="text-2xl font-semibold text-indigo-700 mb-6 text-center">
          Price Calculator
        </h2>

        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-1">
            Number of Invites
          </label>
          <input
            type="range"
            min="10"
            max="500"
            value={invites}
            onChange={(e) => setInvites(Number(e.target.value))}
            className="w-full accent-purple-600"
          />
          <p className="text-gray-600 mt-1 text-sm">
            Selected: <span className="font-medium">{invites}</span>
          </p>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-1">
            Duration of Event (hours)
          </label>
          <input
            type="range"
            min="1"
            max="12"
            value={duration}
            onChange={(e) => setDuration(Number(e.target.value))}
            className="w-full accent-purple-600"
          />
          <p className="text-gray-600 mt-1 text-sm">
            Selected: <span className="font-medium">{duration}</span> hours
          </p>
        </div>

        {price !== 0 && (
          <div className="mt-6 text-center border-t border-gray-200 pt-4">
            <p className="text-gray-700">Estimated Price</p>
            <p className="text-3xl font-bold text-green-600 mt-2">
              ₹{price}
            </p>
          </div>
        )}

        <p className="text-xs text-gray-400 text-center mt-6">
          *Rates and calculations are for illustration purposes only.
        </p>
      </div>
    </div>
  );
}
