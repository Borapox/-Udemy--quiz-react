import Welcome from "./components/Welcome";
import Question from "./components/Question";

import { QuizContext } from "./context/Quiz";
import { useContext, useEffect } from "react";


export default function App() {
  const [quizState, dispatch] = useContext( QuizContext );

  useEffect(() => {
    // Embaralhar perguntas
    dispatch({type: "REORDER_QUESTIONS"})
  }, []
)

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500">
      { quizState.gameStage === "Start" && <Welcome /> }
      { quizState.gameStage === "Playing" && <Question /> }
    </div>
  );
}
