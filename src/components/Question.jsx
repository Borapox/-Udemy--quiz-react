import { useContext } from "react";
import { QuizContext } from "../context/Quiz";
import Option from "./Option";

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestion];

  const onSelectOption = (option) => {
    // Despacha ação para verificar a resposta selecionada
    dispatch({
      type: "CHECK_ANSWER",
      payload: { answer: currentQuestion.answer, option },
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-xl mx-auto text-center">
      {/* Indicador de pergunta atual */}
      <p className="text-gray-700 mb-4">
        Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}
      </p>
      {/* Pergunta com estilo */}
      <h2 className="text-2xl font-bold text-teal-800 mb-6">
        {currentQuestion.question}
      </h2>
      {/* Opções de resposta */}
      <div className="flex flex-col gap-4 mb-6">
        {currentQuestion.options.map((option) => (
          <Option
            option={option}
            key={option}
            answer={currentQuestion.answer}
            selectOption={() => onSelectOption(option)}
            hide={quizState.optionToHide === option}
          />
        ))}
      </div>
      {/* Botões de ajuda */}
      {!quizState.answerSelected && !quizState.help && (
        <div className="flex flex-col gap-4 mb-6">
          {currentQuestion.tip && (
            <button
              onClick={() => dispatch({ type: "SHOW_TIP" })}
              className="bg-teal-600 text-white py-2 px-4 rounded-lg shadow hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              Dica
            </button>
          )}
          <button
            onClick={() => dispatch({ type: "REMOVE_OPTION" })}
            className="bg-red-600 text-white py-2 px-4 rounded-lg shadow hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Excluir uma
          </button>
        </div>
      )}
      {/* Dica */}
      {!quizState.answerSelected && quizState.help === "tip" && (
        <p className="text-gray-700 mb-6">{currentQuestion.tip}</p>
      )}
      {/* Botão de continuar */}
      {quizState.answerSelected && (
        <button
          onClick={() => dispatch({ type: "CHANGE_QUESTION" })}
          className="bg-teal-600 text-white py-2 px-4 rounded-lg shadow hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
        >
          Continuar
        </button>
      )}
    </div>
  );
};

export default Question;
