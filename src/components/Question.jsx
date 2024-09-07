import { useContext } from "react"; // Importa o hook useContext para utilizar o contexto
import { QuizContext } from "../context/Quiz"; // Importa o contexto do Quiz para acessar o estado global
import Option from "../components/Option"; // Importa o componente Option para exibir as opções de resposta

const Question = () => {
    // Acessa o estado do quiz e a função de dispatch para atualizar o estado
    const [quizState, dispatch] = useContext(QuizContext);

    // Obtém a pergunta atual com base no índice currentQuestion do estado global
    const currentQuestion = quizState.questions[quizState.currentQuestion];

    // Função que é chamada quando uma opção é selecionada
    const onSelectOption = (option) => {
        // Dispara a ação CHECK_ANSWER para verificar se a opção selecionada é a resposta correta
        dispatch({
            type: "CHECK_ANSWER",
            payload: { answer: currentQuestion.answer, option } // Envia a resposta correta e a opção selecionada como payload
        });
    };

    return (
        <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-lg w-[900px] mx-auto">
            {/* Exibe o número da pergunta atual e o total de perguntas */}
            <p className="text-sm text-gray-600 mb-4">
                Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}
            </p>

            {/* Exibe o texto da pergunta atual */}
            <h2 className="text-2xl font-bold text-blue-600 mb-6">
                {currentQuestion.question}
            </h2>

            {/* Mapeia as opções da pergunta atual e renderiza o componente Option para cada uma */}
            <div className="flex flex-col space-y-3 mb-6">
                {currentQuestion.options.map((option) => (
                    <Option 
                        option={option} // Passa a opção como prop
                        key={option} // Define uma chave única para cada opção (necessário ao mapear listas em React)
                        answer={currentQuestion.answer} // Passa a resposta correta como prop
                        selectOption={() => onSelectOption(option)} // Passa a função que será chamada ao selecionar uma opção
                    />
                ))}
            </div>

            {/* Se uma resposta foi selecionada, exibe o botão para continuar */}
            {quizState.answerSelected && (
                <button 
                    className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
                    onClick={() => dispatch({type: "CHANGE_QUESTION"})} // Dispara a ação para mudar para a próxima pergunta
                >
                    Continuar
                </button>
            )}
        </div>
    );
};

export default Question;
