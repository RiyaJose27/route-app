import React from 'react';
import { useParams } from 'react-router';


const Input = (props) => {
    const {input} = useParams();

    if (isNaN(input))
    return (
        <div>
            <h1>
                The word is: {input}
            </h1>
        </div>
    )

    else
    return (
        <div>
            <h1>
                The number is: {input}
            </h1>
        </div>
    )
}

export default Input