import { useRef, useState } from 'react';


const Initial = () => {
    const textInput = useRef();
    const [showNext, setShowNext] = useState(false);

    const handleChange = () => {
        console.log(textInput.current.value.lenght)
        if(textInput.current.value.length >= 5) setShowNext(true)
        else setShowNext((false));
    }

    return (
        <div>
            <h1>Ask a question</h1>
            <input
                ref={textInput}
                onChange={handleChange}
                name="question"
                type="text"
                className="form-control"
            />

            {showNext &&
                <button
                    className="btn"
                >
                    Next
                </button>
            }

        </div>
    );


}

export default Initial;