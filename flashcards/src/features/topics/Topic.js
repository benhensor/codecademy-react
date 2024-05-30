import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams, Navigate } from 'react-router-dom'
import ROUTES from '../../app/routes'
import { selectTopics } from '../topics/topicsSlice'
import { selectQuizzes } from '../quizzes/quizzesSlice'
import { Section, Image, CreateLink } from '../../styles'

export default function Topic() {
	const topics = useSelector(selectTopics)
	const quizzes = useSelector(selectQuizzes)
	const { topicId } = useParams()
	const topic = topics[topicId]

	if (!topic) {
		return <Navigate to={ROUTES.topicsRoute()} replace />
	}

	const quizzesForTopic = topic.quizIds.map((quizId) => quizzes[quizId])

	return (
		<Section>
			<Image src={topic.icon} alt="" />
			<h1>{topic.name}</h1>
			<ul className="quizzes-list">
				{quizzesForTopic.map((quiz) => (
					<li className="quiz" key={quiz.id}>
						<Link to={ROUTES.quizRoute(quiz.id)}>{quiz.name}</Link>
					</li>
				))}
			</ul>
			<CreateLink to="/quizzes/new">
				Create a New Quiz
			</CreateLink>
		</Section>
	)
}
