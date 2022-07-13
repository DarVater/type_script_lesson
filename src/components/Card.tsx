import React from 'react';

interface CardProps{
    width: string;
    height: string;
    children?: React.ReactNode
}

const Card = ({width, children, height}: CardProps) => {
    return (
        <div style={{width, height, border: '1px solid gray '}}>
            {children}
        </div>
    );
};

export default Card;