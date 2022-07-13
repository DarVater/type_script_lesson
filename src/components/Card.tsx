import React, {FunctionComponent, useState} from 'react';
export enum CardVariant {
    outlined ='outlined',
    primary = 'primapy'
}
interface CardProps{
    width: string;
    height: string;
    variant: CardVariant
    children: React.ReactNode;
    onClick: (num: number) => void;
}

const Card: FunctionComponent<CardProps> =
    ({
        width,
        variant,
        onClick, height,
        children
    }) => {
    const [state, setState] = useState(0);
    return (
        <div style={{
            width,
            height,
            border: variant === CardVariant.outlined ? '1px solid gray' : 'none',
            background: variant === CardVariant.primary ? 'lightgrey' : '',
        }}
            onClick={() => onClick(state)}
        >
            {children}
        </div>
    );
};

export default Card;
