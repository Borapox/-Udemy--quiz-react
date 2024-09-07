import Welcome from "./components/Welcome"; // Importa o componente de boas-vindas
import Question from "./components/Question"; // Importa o componente de perguntas
import GameOver from "./components/GameOver"; // Importa o componente de fim de jogo

import { QuizContext } from "./context/Quiz"; // Importa o contexto do quiz
import { useContext, useEffect } from "react"; // Importa hooks do React

export default function App() {
  // Acessa o estado do quiz e a função de dispatch para atualizar o estado
  const [quizState, dispatch] = useContext(QuizContext);

  useEffect(() => {
    // Embaralha as perguntas quando o componente é montado
    dispatch({ type: "REORDER_QUESTIONS" });
  }, []); // O array vazio significa que o efeito é executado apenas uma vez, quando o componente é montado

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500">
      {/* Renderiza o componente de boas-vindas se o estágio do jogo for "Start" */}
      {quizState.gameStage === "Start" && <Welcome />}
      
      {/* Renderiza o componente de perguntas se o estágio do jogo for "Playing" */}
      {quizState.gameStage === "Playing" && <Question />}
      
      {/* Renderiza o componente de fim de jogo se o estágio do jogo for "End" */}
      {quizState.gameStage === "End" && <GameOver />}
    </div>
  );
}
