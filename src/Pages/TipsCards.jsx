import React from 'react';

const TipsCards = ({tipsCard = []}) => {

    //console.log(tipsCard);
     
    const {category, 
             description, 
            difficultyLevel,
            recommendedFor,
            safetyNote,
            title, image
           } = tipsCard

    return (
        <div>
            <div className="lg:p-4 card shadow-lg bg-primary transition-all text-gray-700 hover:bg-[#BAD8B6] rounded-2xl w-full h-[600px]">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800 mb-1">{title}</h2>
        <p className="text-sm text-gray-500 mb-2">{category}</p>
        <p className="text-gray-700 mb-2 text-sm">{description}</p>

        <div className="mb-2">
          <span className="font-semibold text-accent">Recommended For: </span>
          <span className='text-amber-400'> {recommendedFor.join(",")}</span>
        </div>

        <p className="text-sm text-gray-700">
          <span className="font-semibold">Difficulty: </span>
          {difficultyLevel}
        </p>

        <p className="text-sm text-red-300 mt-2">
          <span className="font-semibold text-neutral">Safety Note: </span>
          {safetyNote}
        </p>
      </div>
    </div>
        </div>
    );
};

export default TipsCards;