import React from 'react';
import Welldone from '../img/welldone.svg';

const GameOver = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-purple-600 mb-4">Fim de Jogo</h2>
      <p className="text-lg text-gray-700 mb-2">Pontuação</p>
      <p className="text-lg text-gray-700 mb-6">
        Você acertou y de z perguntas
      </p>

      <img src={Welldone} alt="Fim do Quiz!" className="w-64 h-auto mb-6" />

      <button className="px-6 py-3 bg-cyan-400 text-white font-semibold rounded-lg shadow-lg hover:bg-cyan-500 transition duration-300">
        Reiniciar
      </button>
    </div>
  );
};

export default GameOver;
