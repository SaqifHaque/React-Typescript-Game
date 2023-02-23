type HangmanWordProps = {
    guessedLetters: string[],
    wordToGuess: string
}

function HangmanWord({ guessedLetters, wordToGuess } : HangmanWordProps) {
    return (
        <div style={{ display: "flex", gap: ".25rem", fontSize: "6rem", fontWeight: "bold", textTransform: "uppercase", fontFamily: "monospace", color: "white" }}>
            {wordToGuess.split("").map((letter, index) => (
                <span style={{ borderBottom: ".1em solid white", color: "white" }} key={index}>
                    <span style={{ visibility: guessedLetters.includes(letter) ? "visible" : "hidden" }}>
                        {letter}
                    </span>
                </span>
            ))}
        </div>
    )
}

export default HangmanWord;