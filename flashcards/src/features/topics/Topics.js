import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MdDelete } from 'react-icons/md'
import { RiAddLargeFill } from 'react-icons/ri'
import ROUTES from '../../app/routes'
import { selectTopics, deleteTopic } from './topicsSlice'
import {
	Section,
	CreateLink,
	List,
	Item,
	StyledLink,
	InnerContainer,
	Image,
	Text,
	Delete,
} from '../../styles'

export default function Topics() {
	const dispatch = useDispatch()
	const topics = useSelector(selectTopics)

	const handleDeleteTopic = (id) => {
		dispatch(deleteTopic({ id }))
	}

	return (
		<Section>
			<h1>Topics</h1>
			<CreateLink to={ROUTES.newTopicRoute()} style={{position: 'absolute', top: '1rem',	right: '2rem'}}>
				<RiAddLargeFill />
				New Topic
			</CreateLink>
			<List>
				{Object.values(topics).map((topic) => (
					<Item key={topic.id}>
						<StyledLink to={ROUTES.topicRoute(topic.id)}>
							<InnerContainer>
								<Image src={topic.icon} alt="" />
								<Text>
									<h2>{topic.name}</h2>
									<p>{topic.quizIds.length} Quizzes</p>
								</Text>
							</InnerContainer>
							<Delete onClick={() => handleDeleteTopic(topic.id)}>
								<MdDelete />
							</Delete>
						</StyledLink>
					</Item>
				))}
			</List>
		</Section>
	)
}
