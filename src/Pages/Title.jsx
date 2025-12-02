import React from 'react';

const Title = ({className = '', title, description}) => {
    return (
        <div>
             <div className='w-full mx-auto my-8 lg:my-15'>
         <h2 className={`${className} text-4xl text-center font-bold lg:pb-4 text-gray-700]`}>{title}</h2>
         <p className={`${className} text-gray-500 text-center max-w-2xl mx-auto mb-4 lg:mb-8`}>
         {description}
            </p>
        </div>
        </div>
    );
};

export default Title;