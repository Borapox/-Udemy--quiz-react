import { React, useContext } from 'react'; // Importa o React e o hook useContext para utilizar o contexto

import Welldone from '../img/welldone.svg'; // Importa uma imagem que será exibida no componente
import { QuizContext } from '../context/Quiz'; // Importa o contexto do Quiz para acessar o estado global

const GameOver = () => {
  // Acessa o estado do quiz e a função de dispatch para atualizar o estado
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 rounded-lg shadow-lg">
      {/* Exibe o título "Fim de Jogo" */}
      <h2 className="text-3xl font-bold text-purple-600 mb-4">Fim de Jogo</h2>
      
      {/* Exibe a pontuação do jogador */}
      <p className="text-lg text-gray-700 mb-2">Pontuação : {quizState.score}</p>
      
      {/* Exibe o número de respostas corretas em relação ao total de perguntas */}
      <p className="text-lg text-gray-700 mb-6">
        Você acertou {quizState.score} de {quizState.questions.length} perguntas
      </p>

      {/* Exibe a imagem importada anteriormente */}
      <img src={Welldone} alt="Fim do Quiz!" className="w-64 h-auto mb-6" />

      {/* Botão para reiniciar o jogo, que dispara uma ação para começar um novo jogo */}
      <button 
        className="px-6 py-3 bg-cyan-400 text-white font-semibold rounded-lg shadow-lg hover:bg-cyan-500 transition duration-300"
        onClick={() => dispatch({type: "NEW_GAME"})}
      >
        Reiniciar
      </button>
    </div>
  );
};

export default GameOver;
