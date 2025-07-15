import { useReducer, useMemo } from 'react'
import { gaudiQuiz } from '../../data/quizData'
import './Quiz.css'
import Button from '../../components/Button/Button'
import { getResultComment } from '../../utils/quizComments'

const shuffle = (array) => {
  const copy = [...array]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

const initialState = {
  currentQuestion: 0,
  answers: [],
  score: 0,
  showResults: false
}

function quizReducer(state, action) {
  switch (action.type) {
    case 'ANSWER':
      const isCorrect =
        action.questions[state.currentQuestion].correctAnswer === action.payload
      return {
        ...state,
        answers: [...state.answers, action.payload],
        score: isCorrect ? state.score + 1 : state.score,
        currentQuestion: state.currentQuestion + 1,
        showResults: state.currentQuestion + 1 === action.questions.length
      }
    case 'RESTART':
      return initialState
    default:
      return state
  }
}

export default function GaudiQuiz() {
  const questions = useMemo(() => shuffle(gaudiQuiz).slice(0, 6), [])
  const [state, dispatch] = useReducer(quizReducer, initialState)
  const { currentQuestion, showResults, score } = state

  if (showResults) {
    return (
      <div className='quiz'>
        <div className='quiz-container'>
          <h2>Quiz Complete!</h2>
          <p>
            You scored {score} out of {questions.length}
          </p>
          <p className='quiz-comment'>{getResultComment(score)}</p>
          <Button
            className='restart-btn'
            onClick={() => window.location.reload()}
          >
            Restart Quiz
          </Button>
        </div>
      </div>
    )
  }

  const question = questions[currentQuestion]

  return (
    <div className='quiz'>
      <div className='quiz-container'>
        <div key={currentQuestion} className='question-content'>
          <h2>Antoni Gaudí Quiz</h2>
          <h3>
            Question {currentQuestion + 1} of {questions.length}
          </h3>
          <p>{question.question}</p>
          <ul>
            {question.options.map((option) => (
              <li key={option}>
                <Button
                  onClick={() =>
                    dispatch({
                      type: 'ANSWER',
                      payload: option,
                      questions
                    })
                  }
                >
                  {option}
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
