import { useContext } from "react";
import { QuizContext } from "../context/Quiz";

const Option = ({ option, selectOption, answer, hide }) => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div
      onClick={() => selectOption()}
      className={`
        cursor-pointer
        p-4
        border-2
        rounded-lg
        text-lg
        text-center
        transition-colors
        duration-300
        // Aplica estilos diferentes dependendo da seleção da resposta e se a opção é a correta ou não
        ${quizState.answerSelected && option === answer ? "bg-teal-500 text-white border-teal-600" : ""}
        ${quizState.answerSelected && option !== answer ? "bg-red-500 text-white border-red-600" : ""}
        // Controla a visibilidade da opção
        ${hide ? "opacity-0" : "opacity-100"}
        // Estilos de hover e foco
        hover:bg-teal-600 hover:text-white
        focus:outline-none
      `}
    >
      <p>{option}</p>
    </div>
  );
};

export default Option;
