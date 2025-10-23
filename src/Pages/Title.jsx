import React from 'react';

const Title = ({className = '', title, description}) => {
    return (
        <div>
             <div className='w-full mx-auto py-8 lg:py-15'>
         <h2 className={`${className} text-4xl text-center font-bold lg:pb-4 text-[#7B542F]`}>{title}</h2>
         <p className={`${className} text-[#777] text-center max-w-2xl mx-auto mb-4 lg:mb-8`}>
         {description}
            </p>
        </div>
        </div>
    );
};

export default Title;