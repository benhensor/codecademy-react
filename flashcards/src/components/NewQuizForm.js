import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import ROUTES from "../app/routes";
import { selectTopics } from '../features/topics/topicsSlice'
import { addQuiz } from '../features/quizzes/quizzesSlice'
import { addCard } from '../features/cards/cardsSlice'
import { 
  Section,
  Button,
  CardInputs,
  ActionsContainer
} from '../styles'

export default function NewQuizForm() {
  const [name, setName] = useState("");
  const [cards, setCards] = useState([]);
  const [topicId, setTopicId] = useState("");
  const navigate = useNavigate();
  const topics = useSelector(selectTopics);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length === 0) {
      return;
    }
    console.log('clicked')
    const cardIds = []

    cards.forEach((card) => {
      let cardId = uuidv4();
      cardIds.push(cardId)
      dispatch(addCard({...card, id: cardId}))
    })

    const quizId = uuidv4();
    dispatch(
      addQuiz({
        name: name,
        topicId: topicId,
        cardIds: cardIds,
        id: quizId,
      })
    );
    navigate(ROUTES.quizzesRoute())
  };

  const addCardInputs = (e) => {
    e.preventDefault();
    setCards(cards.concat({ front: "", back: "" }));
  };

  const removeCard = (e, index) => {
    e.preventDefault();
    setCards(cards.filter((card, i) => index !== i));
  };

  const updateCardState = (index, side, value) => {
    const newCards = cards.slice();
    newCards[index][side] = value;
    setCards(newCards);
  };

  return (
    <Section>
      <h1>Create a new quiz</h1>
      <form onSubmit={handleSubmit}>
        <input
          id="quiz-name"
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
          placeholder="Quiz Title"
        />
        <select
          id="quiz-topic"
          onChange={(e) => setTopicId(e.currentTarget.value)}
          placeholder="Topic"
        >
          <option value="">Topic</option>
          {Object.values(topics).map((topic) => (
            <option key={topic.id} value={topic.id}>
              {topic.name}
            </option>
          ))}
        </select>
        {cards.map((card, index) => (
          <CardInputs key={index}>
            <input
              id={`card-front-${index}`}
              value={cards[index].front}
              onChange={(e) =>
                updateCardState(index, "front", e.currentTarget.value)
              }
              placeholder="Front"
            />

            <input
              id={`card-back-${index}`}
              value={cards[index].back}
              onChange={(e) =>
                updateCardState(index, "back", e.currentTarget.value)
              }
              placeholder="Back"
            />

              <Button
                onClick={(e) => removeCard(e, index)}
              >
                Remove Card
              </Button>
          </CardInputs>
        ))}
        <ActionsContainer>
          <Button onClick={addCardInputs}>Add a Card</Button>
          <Button type="submit">Create Quiz</Button>
        </ActionsContainer>
      </form>
    </Section>
  );
}
