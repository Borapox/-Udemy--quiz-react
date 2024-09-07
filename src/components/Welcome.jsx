import { useContext } from "react"; // Importa o hook useContext para acessar o contexto
import { QuizContext } from "../context/Quiz"; // Importa o contexto do Quiz para acessar o estado global

import Quiz from "../img/quiz.svg"; // Importa uma imagem que será exibida no componente
import React from 'react'; // Importa o React para criar o componente

const Welcome = () => {
  // Acessa o estado do quiz e a função de dispatch para atualizar o estado
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 rounded-lg shadow-lg">
      {/* Exibe o título do quiz */}
      <h2 className="text-3xl font-bold text-purple-600 mb-4">Quiz de Programação</h2>
      
      {/* Exibe uma mensagem informando o usuário para clicar no botão abaixo */}
      <p className="text-lg text-gray-700 mb-6">Clique no botão abaixo para iniciar</p>
      
      {/* Botão para iniciar o quiz */}
      <button 
        className="px-6 py-3 bg-cyan-400 text-white font-semibold rounded-lg shadow-lg hover:bg-cyan-500 transition duration-300" 
        onClick={() => dispatch({ type: "CHANGE_STAGE" })} // Dispara a ação para mudar o estágio do quiz
      >
        Iniciar
      </button>
     
      {/* Exibe a imagem importada que ilustra o início do quiz */}
      <img src={Quiz} alt="Início do Quiz" className="mt-6 w-64 h-auto" />
    </div>
  );
}

export default Welcome;
