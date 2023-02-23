type HangmanWordProps = {
    guessedLetters: string[],
    wordToGuess: string,
    reveal?: boolean
}

function HangmanWord({ guessedLetters, wordToGuess, reveal = false } : HangmanWordProps) {
    return (
        <div style={{ display: "flex", gap: ".25rem", fontSize: "6rem", fontWeight: "bold", textTransform: "uppercase", fontFamily: "monospace", color: "white" }}>
            {wordToGuess.split("").map((letter, index) => (
                <span style={{ borderBottom: ".1em solid white" }} key={index}>
                    <span style={{ visibility: guessedLetters.includes(letter) || reveal ? "visible" : "hidden",
                        color: !guessedLetters.includes(letter) && reveal ? "red" : "white" }}>
                        {letter}
                    </span>
                </span>
            ))}
        </div>
    )
}

export default HangmanWord;