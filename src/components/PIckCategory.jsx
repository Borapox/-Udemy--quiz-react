import { useContext } from "react";
import { QuizContext } from "../context/Quiz";
import Category from "../img/category.svg";

const PickCategory = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  function chooseCategoryAndReorderQuestions(category) {
    // Dispara ações para iniciar o jogo e reordenar as perguntas
    dispatch({ type: "START_GAME", payload: category });
    dispatch({ type: "REORDER_QUESTIONS" });
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto text-center">
      {/* Título da seleção de categoria com estilo */}
      <h2 className="text-2xl font-bold text-teal-800 mb-4">
        Escolha uma categoria
      </h2>
      {/* Descrição das categorias com estilo */}
      <p className="text-lg text-gray-700 mb-6">
        As perguntas serão referentes a uma das linguagens abaixo:
      </p>
      {/* Botões para selecionar categorias */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {quizState.questions.map((question) => (
          <button
            onClick={() => chooseCategoryAndReorderQuestions(question.category)}
            key={question.category}
            className="bg-teal-600 text-white py-2 px-4 rounded-lg shadow hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            {question.category}
          </button>
        ))}
      </div>
      {/* Imagem de categoria */}
      <img
        src={Category}
        alt="Categoria do Quiz"
        className="w-24 h-24 mx-auto"
      />
    </div>
  );
};

export default PickCategory;
