import { createContext, useReducer } from "react"; // Importa createContext para criar um contexto e useReducer para gerenciar o estado com um reducer
import questions from '../data/questions'; // Importa as perguntas do quiz

// Define os estágios possíveis do jogo
const STAGES = ["Start", "Playing", "End"];

// Estado inicial do quiz
const initialState = {
    gameStage: STAGES[0], // Estágio inicial é "Start"
    questions, // Lista de perguntas importadas
    currentQuestion: 0, // Índice da pergunta atual
    score: 0, // Pontuação inicial
    answerSelected: false // Indica se uma resposta foi selecionada
};

// Função reducer para gerenciar as ações e atualizar o estado
const quizReducer = (state, action) => {
    switch(action.type) {
        case "CHANGE_STAGE":
            // Muda o estágio do jogo para "Playing"
            return {
                ...state,
                gameStage: STAGES[1],
            };

        case "REORDER_QUESTIONS":
            // Reordena as perguntas aleatoriamente
            const reorderedQuestions = questions.sort(() => Math.random() - 0.5);
            return {
                ...state,
                questions: reorderedQuestions,
            };

        case "CHANGE_QUESTION":
            // Avança para a próxima pergunta
            const nextQuestion = state.currentQuestion + 1;
            let endGame = false; 

            // Verifica se há mais perguntas; se não, termina o jogo
            if (!questions[nextQuestion]) {
                endGame = true;
            }
            return {
                ...state,
                currentQuestion: nextQuestion,
                gameStage: endGame ? STAGES[2] : state.gameStage, // Altera o estágio para "End" se o jogo acabou
            };

        case "NEW_GAME":
            // Reinicia o estado para o estado inicial
            return initialState;

        case "CHECK_ANSWER":
            // Verifica se uma resposta foi selecionada; se sim, não faz nada
            if (state.answerSelected) return state;
            
            const answer = action.payload.answer;
            const option = action.payload.option;

            let correctAnswer = 0;

            // Incrementa a pontuação se a resposta estiver correta
            if (answer === option) correctAnswer = 1;
            return {
                ...state,
                score: state.score + correctAnswer,
                answerSelected: option,
            };

        default:
            // Retorna o estado atual se a ação não for reconhecida
            return state;
    }
};

// Cria o contexto do quiz
export const QuizContext = createContext();

// Provedor do contexto do quiz
export const QuizProvider = ({ children }) => {
    const value = useReducer(quizReducer, initialState); // Usa useReducer para gerenciar o estado com o reducer e o estado inicial
    return (
        <QuizContext.Provider value={value}>
            {children} {/* Fornece o contexto para os componentes filhos */}
        </QuizContext.Provider>
    );
};
