import React from 'react'
import { LoadingCard } from './LoadingCard';

export const Loading = () => {
          const length = [5,3,4,3]
  return (
    <div>
      <h2 className="font-semibold text-2xl px-5 sm:px-0">Basic Statistics</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-12 py-5 px-5 sm:px-0 gap-5">
                                {length.map((item,key) => {
                                          return (
                            <LoadingCard key={key} />
                  )
        })}
      </div>
      <hr />
      <div className="flex items-center justify-between py-5 flex-wrap px-5 sm:px-0">
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-4 sm:gap-5 p-5 gap-2">
        {Array.from({ length: 4 }).map((_, id) => (
          <LoadingCard />
        ))}
        
      </div>
    </div>
  );
}
