import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ tiles }) => {
  if (!Array.isArray(tiles)) {
    console.error('TileList expected items to be an array but got:', tiles);
    return null;
  }
  return (
    <div>
      {tiles.map((tile, index) => {
        const { name, ...description } = tile;
        return <Tile key={index} name={name} description={description} />
      })}
    </div>
  );
};
