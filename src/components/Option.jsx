import React, { useContext } from "react";
import { QuizContext } from "../context/Quiz"; // Importa o contexto do Quiz para acessar o estado global do quiz

const Option = ({ option, selectOption, answer }) => {
  // Extrai o estado do quiz e a função de dispatch do contexto
  const [quizState, dispatch] = useContext(QuizContext);

  // Define as classes CSS que serão aplicadas dinamicamente ao componente
  // Se a resposta já foi selecionada, verifica se a opção é a correta ou incorreta
  const optionClass = `border-2 border-blue-500 w-80 rounded-lg p-4 cursor-pointer hover:bg-blue-500 hover:text-white transition duration-300 ${
    quizState.answerSelected
      ? option === answer // Se a opção for igual à resposta correta
        ? "correct" // Adiciona a classe 'correct'
        : "wrong" // Se não for igual, adiciona a classe 'wrong'
      : ""
  }`;

  return (
    <div className={optionClass} onClick={() => selectOption()}>
      {/* Renderiza o texto da opção */}
      <p className="text-center text-lg font-semibold">{option}</p>
    </div>
  );
};

export default Option;
  