import keys from '../../keys.json';
import keyboardStyles from './Keyboard.module.css';

function Keyboard() {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(75px, 1fr))', gap: '.5rem' }}>
            {keys.map(key => {
                return <button className={keyboardStyles.btn} key={key}>{key}</button>
            })}
        </div>
    )
}

export default Keyboard;