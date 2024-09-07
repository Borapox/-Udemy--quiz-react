import { useContext } from "react";
import { QuizContext } from "../context/Quiz";
import WellDone from "../img/welldone.svg";

const GameOver = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto text-center">
      {/* Título do fim de jogo com estilo */}
      <h2 className="text-2xl font-bold text-teal-800 mb-4">
        Fim de jogo!
      </h2>
      {/* Pontuação com estilo */}
      <p className="text-lg text-gray-700 mb-2">
        Pontuação: <span className="font-bold text-teal-600">{quizState.score}</span>
      </p>
      {/* Número de perguntas respondidas com estilo */}
      <p className="text-lg text-gray-700 mb-4">
        Você acertou {quizState.score} de {quizState.questions.length} perguntas.
      </p>
      {/* Imagem de fim de jogo */}
      <img 
        src={WellDone} 
        alt="Fim do Quiz" 
        className="w-24 h-24 mx-auto mb-4"
      />
      {/* Botão para reiniciar o jogo */}
      <button 
        onClick={() => dispatch({ type: "NEW_GAME" })}
        className="bg-teal-600 text-white py-2 px-4 rounded-lg shadow hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
      >
        Reiniciar
      </button>
    </div>
  );
};

export default GameOver;
