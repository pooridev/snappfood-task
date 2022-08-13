import React, {FC} from 'react';

interface IProps{
    title: string;
    remove: () => void;
}

const Item: FC<IProps> =({title, remove}) => {
    return (
        <li>
            <button>Remove</button> {title}
        </li>
    );
}

export default Item;