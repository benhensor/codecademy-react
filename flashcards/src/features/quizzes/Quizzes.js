import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ROUTES from '../../app/routes'
import { selectQuizzes, deleteQuiz } from './quizzesSlice'
import { RiAddLargeFill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { Section, CreateLink, List, Item, StyledLink, Delete } from '../../styles'

export default function Quizzes() {
  const dispatch = useDispatch()
	const quizzes = useSelector(selectQuizzes)

  const handleDeleteQuiz = (id) => {
    dispatch(deleteQuiz({id}))
  }

	return (
		<Section>
			<h1>Quizzes</h1>
			<CreateLink to={ROUTES.newQuizRoute()} style={{position: 'absolute', top: '1rem',	right: '2rem'}}>
				<RiAddLargeFill />
				New Quiz
			</CreateLink>
			<List>
				{Object.values(quizzes).map((quiz) => (
					<StyledLink key={quiz.id} to={ROUTES.quizRoute(quiz.id)}>
						<Item>
              {quiz.name}
              <Delete onClick={() => handleDeleteQuiz(quiz.id)}><MdDelete /></Delete>
						</Item>
					</StyledLink>
				))}
			</List>
		</Section>
	)
}