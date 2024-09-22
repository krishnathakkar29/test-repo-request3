import React from "react";

const PlayerScoreCard = (props) => {
  return (
    <>
      <tr className={`player-score-card ${props.header && "table-head"}`}>
        <td
          className={`w-1/3 py-3 text-center tracking-wider ${
            props.header
              ? "text-5xl font-MarvelFont text-[#F4F6F595]"
              : "text-xl md:text-2xl font-KronaOne text-[#D9D9D9]"
          }`}
        >
          {props.player.name}
        </td>
        <td
          className={`w-1/3 py-3 text-center ${
            props.header
              ? "text-5xl font-MarvelFont text-[#F4F6F595] tracking-wider"
              : "text-xl md:text-2xl font-KronaOne text-[#D9D9D9]"
          }`}
        >
          {props.player.score}
        </td>
        <td
          className={`name w-1/3 py-3 text-center ${
            props.header
              ? "text-5xl font-MarvelFont text-[#F4F6F595] tracking-wider"
              : "text-xl md:text-2xl font-KronaOne text-[#D9D9D9]"
          }`}
        >
          {props.player.rank}
        </td>
      </tr>
    </>
  );
};

export default PlayerScoreCard;
