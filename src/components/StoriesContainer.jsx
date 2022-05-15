import React from 'react';

export default function StoriesContainer({children}) {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {children}
      </div>
    </div>
  );
}
