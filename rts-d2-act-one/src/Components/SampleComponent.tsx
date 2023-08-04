import React, {useState} from 'react';

const SampleComponent: React.FC = () => {

const handleClickButton =(): void => {
    setCounter(counter + 1)
}

    const isAnon: boolean =false;
    const userName: string ="Karen";

    return (
        <>
        <button onClick={handleClickButton}>{counter}
        </button>
        <div>
            <p>{isAnon ? "anon" : userName}</p>
        </div>
        </>
    )
}

export default SampleComponent