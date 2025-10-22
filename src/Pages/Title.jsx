import React from 'react';

const Title = ({className = '', title, description}) => {
    return (
        <div>
             <div className='w-full mx-auto py-15'>
         <h2 className={`${className} text-4xl text-center font-bold pb-4`}>{title}</h2>
         <p class={`${className} text-gray-700 text-center max-w-2xl mx-auto mb-8`}>
         {description}
            </p>
        </div>
        </div>
    );
};

export default Title;