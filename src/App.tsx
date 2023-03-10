import { useCallback, useEffect, useState } from "react"
import HangmanDrawing from "./components/HangmanDrawing";
import HangmanWord from "./components/HangmanWord";
import Keyboard from "./components/keyboard/Keyboard";
import words from './wordList.json';
import { Fireworks } from '@fireworks-js/react'

function App() {
  const randomWord = words[Math.floor(Math.random() * words.length)]
  const [wordToGuess, setWorldToGuess] = useState("test");
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  const incorrectLetters = guessedLetters.filter(letter => !wordToGuess.includes(letter))

  const isLoser = incorrectLetters.length >= 6;
  const isWinner = wordToGuess.split("").every(letter => guessedLetters.includes(letter))

  const addGuessedLetter = useCallback((letter: string) => {
    if(guessedLetters.includes(letter) || isLoser || isWinner) return

    setGuessedLetters(currentLetters => [...currentLetters, letter])
  }, [guessedLetters])

  useEffect(() => {
    const handler = (e: KeyboardEvent) =>  {
      const key = e.key;

      if(!key.match(/^[a-z]$/)) return;

      e.preventDefault();
      addGuessedLetter(key);
    }

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    }
  }, [guessedLetters])

 return (
  <>
   {isWinner && 
    <Fireworks
        options={{
          rocketsPoint: {
            min: 0,
            max: 100
          }
        }}
        style={{
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          position: 'fixed',
          background: '#000'
        }}
      />
    }
  <div style={{
    maxWidth: "800px",
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    margin: "0 auto",
    alignItems: "center",
  }}>
    <div style={{ fontSize: "2rem", textAlign: "center", color: 'white'}}>
        {isWinner && "Winner! - Refresh to try again"}
        {isLoser && "Nice try! - Refresh to try again"}
    </div>
    <HangmanDrawing numberOfGuesses={incorrectLetters.length}/>
    <HangmanWord reveal={isLoser} guessedLetters={guessedLetters} wordToGuess={wordToGuess}/>
    <div style={{ alignSelf: "stretch" }}>
      <Keyboard
        disabled={isWinner || isLoser}
        activeLetters={guessedLetters.filter(letter => wordToGuess.includes(letter))}
        inactiveLetters={incorrectLetters}
        addGuessedLetter={addGuessedLetter}/>
    </div>
  </div>
  </>
 )
}

export default App
