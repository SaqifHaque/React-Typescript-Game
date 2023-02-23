function HangmanWord() {
    const word = "test";
    const guessedLetters = ["t"]
    return (
        <div style={{ display: "flex", gap: ".25rem", fontSize: "6rem", fontWeight: "bold", textTransform: "uppercase", fontFamily: "monospace", color: "white" }}>
            {word.split("").map((letter, index) => (
                <span style={{ borderBottom: ".1em solid white" }} key={index}>
                    <span style={{ visibility: guessedLetters.includes(letter) ? "visible" : "hidden" }}>
                        {letter}
                    </span>
                </span>
            ))}
        </div>
    )
}

export default HangmanWord;