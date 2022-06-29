import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {

    const [buttonColor, setButtonColor] = useState('red');
    const [isDisabled, setIsDisabled] = useState(false)

    const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';




    return (
        <div>
            <button
                style={{backgroundColor: isDisabled ? 'gray' : buttonColor}}
                onClick={() => setButtonColor(newButtonColor)}
                disabled={isDisabled}
            >
                Change to {newButtonColor}
            </button>
            <label htmlFor="enable-checkbox">Disable Button</label>
            <input
                id='enable-checkbox'
                type="checkbox"
                onClick={(e) => setIsDisabled(e.target.checked)}
            />
        </div>
    );
}

export default App;
