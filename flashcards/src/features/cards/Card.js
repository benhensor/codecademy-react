import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectCardById } from "./cardsSlice";
import { FlipCard } from "../../styles";

export default function Card({ id }) {
  const card = useSelector(selectCardById(id))
  const [flipped, setFlipped] = useState(false);


  return (
    <FlipCard $showBack={flipped} onClick={() => setFlipped(!flipped)}>
      <div className="flip-card-inner">
        <div className="card front">{card.front}</div>
        <div className="card back">{card.back}</div>
      </div>
    </FlipCard>
  );
}
