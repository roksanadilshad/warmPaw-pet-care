import React from 'react';

const Title = ({className, childern}) => {
    return (
        <div className={`${className} text-4xl text-center font-bold w-full mx-auto`}>
            {childern}
        </div>
    );
};

export default Title;