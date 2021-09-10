import React from 'react';
import { useParams } from 'react-router-dom';

const ColorAndNumber = (props) => {
    const {word, Ftcolor, BgColor} = useParams();

    return (
        <div>
            <h1 style = {{color : (Ftcolor), backgroundColor : (BgColor)}}>
                The word is: {word} 
            </h1>
        </div>
    )
    
}

export default ColorAndNumber;