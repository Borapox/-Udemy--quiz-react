import { useContext } from "react";
import { QuizContext } from "../context/Quiz";

const Question = () => {
    const [quizState, dispatch] = useContext(QuizContext);
    const currentQuestion = quizState.questions[quizState.currentQuestion];

    return (
        <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-lg max-w-xl mx-auto">
            <p className="text-sm text-gray-600 mb-4">
                Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}
            </p>
            <h2 className="text-2xl font-bold text-blue-600 mb-6">
                {currentQuestion.question}
            </h2>

            <div className="flex flex-col space-y-3 mb-6">
                <p className="text-lg font-semibold">Opções:</p>
            </div>

            <button 
                className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
            >
                Continuar
            </button>
        </div>
    );
};

export default Question;
