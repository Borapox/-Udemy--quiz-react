import { useContext } from "react";
import { QuizContext } from "../context/Quiz";

import Quiz from "../img/quiz.svg";
import React from 'react';

const Welcome = () => {

  const [ quizState, dispatch ] = useContext( QuizContext );
  
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-purple-600 mb-4">Quiz de Programação</h2>
        <p className="text-lg text-gray-700 mb-6">Clique no botão abaixo para iniciar</p>
        
        <button 
          className="px-6 py-3 bg-cyan-400 text-white font-semibold rounded-lg shadow-lg hover:bg-cyan-500 transition duration-300" 
          onClick={() => dispatch({ type: "CHANGE_STAGE" })}
        >
          Iniciar
        </button>
       
        <img src={Quiz} alt="Início do Quiz" className="mt-6 w-64 h-auto" />
    </div>
  );
}

export default Welcome;
