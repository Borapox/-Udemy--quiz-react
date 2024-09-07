import { useContext } from "react";
import { QuizContext } from "../context/Quiz";
import Quiz from "../img/quiz.svg";

const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto text-center">
      {/* Título de boas-vindas */}
      <h2 className="text-2xl font-bold text-teal-800 mb-4">
        Seja bem-vindo
      </h2>
      {/* Mensagem de introdução */}
      <p className="text-lg text-gray-700 mb-6">
        Clique no botão abaixo para começar:
      </p>
      {/* Botão de iniciar */}
      <button
        onClick={() => dispatch({ type: "CHANGE_STAGE" })}
        className="bg-teal-600 text-white py-2 px-4 rounded-lg shadow hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
      >
        Iniciar
      </button>
      {/* Imagem do quiz */}
      <img
        src={Quiz}
        alt="Início do Quiz"
        className="w-24 h-24 mx-auto mt-6"
      />
    </div>
  );
};

export default Welcome;
