import React from "react";
import { useSelector } from "react-redux";
import { useParams, Navigate } from "react-router-dom";
import Card from "../cards/Card";
import ROUTES from "../../app/routes";
import { selectQuizzes } from './quizzesSlice'
import { 
  Section,
  List,
  CreateLink,
} from '../../styles'

export default function Quiz() {
  const quizzes = useSelector(selectQuizzes)
  const { quizId } = useParams();
  const quiz = quizzes[quizId];

  if(!quiz) {
    return <Navigate to={ROUTES.quizzesRoute()} replace/>
  }


  return (
    <Section>
      <h1>{quiz.name}</h1>
      <List className="cards-list">
        {quiz.cardIds.map((id) => (
          <Card key={id} id={id} />
        ))}
      </List>
      <CreateLink to={ROUTES.newQuizRoute()}>
        Create a New Quiz
      </CreateLink>
    </Section>
  );
}
