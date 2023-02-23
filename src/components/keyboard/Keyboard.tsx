import keys from '../../keys.json';
import keyboardStyles from './Keyboard.module.css';

type KeyboardProps = {
    activeLetters: string[],
    inactiveLetters: string[],
    addGuessedLetter: (letter: string) => void
}

function Keyboard({ activeLetters, inactiveLetters, addGuessedLetter }: KeyboardProps ) {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(75px, 1fr))', gap: '.5rem' }}>
            {keys.map(key => {
                const isActive = activeLetters.includes(key);
                const isInactive = inactiveLetters.includes(key);
                return <button onClick={() => addGuessedLetter(key)} className={` ${keyboardStyles.btn} ${isActive ? keyboardStyles.active : "" }
                ${isInactive ? keyboardStyles.active : "" }`} 
                disabled={isInactive || isActive} key={key}>{key}</button>
            })}
        </div>
    )
}

export default Keyboard;