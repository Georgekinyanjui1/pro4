import React,{useState} from 'react'

function Quiz() {
	
  const questions = [
		{
			questionText: 'The Bible begins with figurative also called?',
			answerOptions: [
				{ answerText: 'Genesis', isCorrect: false },
				{ answerText: 'Father', isCorrect: false },
				{ answerText: 'Mythic', isCorrect: true },
				{ answerText: 'Not sure', isCorrect: false },
			],
		},
		{
			questionText: 'The Creation accounts reveal that God’s creation was ?',
			answerOptions: [
				{ answerText: 'Bad', isCorrect: false },
				{ answerText: 'Ordered', isCorrect: true },
				{ answerText: 'Sudden', isCorrect: false },
				{ answerText: 'Promising', isCorrect: false },
			],
		},
		{
			questionText: 'We believe that God has spoken in ?',
			answerOptions: [
				{ answerText: 'History', isCorrect: true },
				{ answerText: 'Fear', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'Genesis the a book in the Bible,which number shows its position within the arrangement in the Bible?',
			answerOptions: [
				{ answerText: '7', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '1', isCorrect: true },
			],
		},
	];

  const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	const buttonStyle={
		padding:"5px",
		marginRight:"20px",
		fontSize:"20px"
	}
  return (
    <div className='apple'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button style={buttonStyle} onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
  )
}

export default Quiz