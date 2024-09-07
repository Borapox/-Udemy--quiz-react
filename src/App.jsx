import { useContext } from "react";
import { QuizContext } from "./context/Quiz";

// Importação dos componentes
import Welcome from "./components/Welcome";
import Question from "./components/Question";
import GameOver from "./components/GameOver";
import PickCategory from "./components/PIckCategory";

function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className="min-h-screen bg-gradient-to-t from-teal-900 to-teal-600 flex flex-col items-center justify-center p-4">
      {/* Título do quiz com estilo */}
      <h1 className="text-4xl font-bold text-white mb-6">
        Quiz de Programação
      </h1>
      {/* Renderiza o componente correspondente com base no estado do jogo */}
      {quizState.gameStage === "Start" && <Welcome />}
      {quizState.gameStage === "Category" && <PickCategory />}
      {quizState.gameStage === "Playing" && <Question />}
      {quizState.gameStage === "End" && <GameOver />}
    </div>
  );
}

export default App;
