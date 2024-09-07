import React, { useContext } from "react";
import { QuizContext } from "../context/Quiz";

const Option = ({ option, selectOption, answer }) => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className="border-2 border-blue-500 w-80 rounded-lg p-4 cursor-pointer hover:bg-blue-500 hover:text-white transition duration-300"
    onClick={() => selectOption()}>
      <p className="text-center text-lg font-semibold">{option}</p>
    </div>
  );
};

export default Option;
