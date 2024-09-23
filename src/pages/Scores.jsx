// import React, { useContext, useEffect, useState, useRef } from "react";
// import { useParams } from "react-router-dom";
// import AllScoresContext from "../context/AllScoresContext";
// // import bgVideo from "../../assets/leaderboard-bg.mp4";
// import jarvisImg from "../assets/jarvis.png";
// import PlayerScoreCard from "@/components/PlayerScoreCard";
// // import bgLoad from "../../assets/leaderboard-bg-load.png";
// // import { all } from 'axios';
// import Load from "../components/Load";

// const Scores = () => {
//   const videoRef = useRef(null);
//   // useEffect(() => {
//   //   const video = videoRef.current;
//   //   if (video) {
//   //     video.muted = true; // Ensure the video is muted
//   //     video.play().catch((error) => {
//   //       console.error('Autoplay was prevented:', error);
//   //     });
//   //   }
//   // }, []);

//   const { team } = useParams();
//   const [loading, setLoading] = useState(true);
//   const [teamName, setTeamName] = useState(team);
//   const { allScores, setAllScores } = useContext(AllScoresContext);

//   const toogleLoading = () => {
//     setLoading(!loading);
//   }

//   useEffect(() => {
//     if (allScores[team]) {
//       const players = [...allScores[team]];

//       const isSorted = players.every((player, index, array) => {
//         if (index === 0) return true;
//         return array[index - 1].score >= player.score;
//       });

//       if (!isSorted) {
//         players.sort((a, b) => b.score - a.score);
//         let rank = 1;
//         for (let i = 0; i < players.length; i++) {
//           if (i > 0 && players[i].score === players[i - 1].score) {
//             players[i].rank = players[i - 1].rank;
//           } else {
//             players[i].rank = rank;
//             rank++;
//           }
//         }

//         setAllScores((prevScores) => ({
//           ...prevScores,
//           [team]: players,
//         }));
//       }
//     }
//   }, [team, setAllScores, allScores]);

//   useEffect(() => {
//     setTimeout(toogleLoading, 3000);
//   }, [teamName]);

//   // <div className="opaque-bg w-full h-full bg-black opacity-10 absolute"></div>
//   //       <div className={bg-container bg-opacity-90 w-full h-full}></div>
//   return (
//     <>
//       {!allScores[team] || loading ? (
//         <>
//           <Load />
//         </>
//       ) : (
//         <>
//           {/* ${!allScores[team] && "hidden"} */}
//           <div className="opaque-bg h-full w-full bg-black opacity-40 fixed z-20"></div>
//           <div
//             className={bg-container bg-opacity-90 w-full h-full min-h-screen overflow-auto bg-fixed bg-cover bg-no-repeat object-cover m-0 scrollbar-hide md:pl-32 flex flex-col justify-center items-center}
//           >
//             <div
//               className={`team-header flex md:flex-row justify-center sm:justify-between mx-auto w-11/12 md:w-4/5 border-b-4 border-b-[#F4F6F595] ${
//                 !allScores[team] && "hidden"
//               }`}
//             >
//               <h1 className="team-name max-w-96 text-4xl md:text-5xl font-bold text-center py-4 tracking-widest self-center flex flex-wrap justify-center gap-2">
//                 <span className="team-fname sm:h-8 lg:h-12 sm:text-2xl lg:text-5xl bg-red-700 inline-flex justify-center font-MarvelFont text-white">
//                   {team.split("_")[0].toUpperCase()}
//                 </span>
//                 {/* &nbsp; */}
//                 <span className="team-lname sm:h-8 lg:h-12 sm:text-2xl lg:text-5xl inline-flex justify-center font-MarvelFont text-[#838383] border-t-4 border-b-4 border-[#838383]">
//                   {team.split("_")[1].toUpperCase()}
//                 </span>
//               </h1>
//               <div className="jarvis hidden sm:flex justify-center items-center gap-2">
//                 <img
//                   src={jarvisImg}
//                   alt="jarvis"
//                   className="h-16 md:h-20 lg:h-28"
//                 />
//                 <span className="jarvis-text text-sm md:text-xl text-white text-center">
//                   Updating Leaderboard...
//                   <br />
//                   <b>JARVIS is</b> <br />
//                   watching closely!
//                 </span>
//               </div>
//             </div>
//             <div
//               className={`flex justify-center mt-6 w-full ${
//                 !allScores[team] && "hidden"
//               }`}
//             >
//               <table className="player-scores w-full md:w-4/5">
//                 <thead>
//                   <PlayerScoreCard
//                     header={true}
//                     player={{ name: "TEAM NAME", score: "SCORE", rank: "RANK" }}
//                   />
//                 </thead>
//                 <tbody>
//                   {allScores[team].map((player, index) => (
//                     <PlayerScoreCard key={index} player={player} />
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </>
//       )}
//     </>
//   );
// };

// export default Scores;


import React, { useContext, useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import AllScoresContext from "../context/AllScoresContext";
import jarvisImg from "../assets/jarvis.png";
import PlayerScoreCard from "@/components/PlayerScoreCard";
import Load from "../components/Load";

const Scores = () => {
  const videoRef = useRef(null);

  const { team } = useParams();
  const [loading, setLoading] = useState(true);
  const [teamName, setTeamName] = useState(team);
  const { allScores, setAllScores } = useContext(AllScoresContext);

  const toggleLoading = () => {
    setLoading((prevLoading) => !prevLoading);
  };

  useEffect(() => {
    // When the team or teamName changes, reset loading to true and trigger a 3-second delay.
    setLoading(true);
    setTeamName(team);
    
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Cleanup the timeout when the component unmounts or when team changes.
    return () => clearTimeout(timeout);
  }, [team]);

  useEffect(() => {
    if (allScores[team]) {
      const players = [...allScores[team]];

      const isSorted = players.every((player, index, array) => {
        if (index === 0) return true;
        return array[index - 1].score >= player.score;
      });

      if (!isSorted) {
        players.sort((a, b) => b.score - a.score);
        let rank = 1;
        for (let i = 0; i < players.length; i++) {
          if (i > 0 && players[i].score === players[i - 1].score) {
            players[i].rank = players[i - 1].rank;
          } else {
            players[i].rank = rank;
            rank++;
          }
        }

        setAllScores((prevScores) => ({
          ...prevScores,
          [team]: players,
        }));
      }
    }
  }, [team, setAllScores, allScores]);

  return (
    <>
      {!allScores[team] || loading ? (
        <>
          <Load />
        </>
      ) : (
        <>
          <div className="opaque-bg h-full w-full bg-black opacity-60 fixed z-10"></div>
          <div
            className={`bg-container bg-opacity-90 w-full h-full min-h-screen overflow-auto bg-fixed bg-cover bg-no-repeat object-cover m-0 scrollbar-hide md:pl-32 flex flex-col justify-center items-center`}
          >
            <div
              className={`team-header flex md:flex-row justify-center sm:justify-between mx-auto w-11/12 md:w-4/5 border-b-4 z-30 border-b-[#F4F6F595] ${
                !allScores[team] && "hidden"
              }`}
            >
              <h1 className="team-name z-30 max-w-96 text-4xl md:text-5xl font-bold text-center py-4 tracking-widest self-center flex flex-wrap justify-center gap-2">
                <span className="team-fname z-30 sm:h-8 lg:h-12 sm:text-2xl lg:text-5xl bg-red-700 inline-flex justify-center font-MarvelFont text-white">
                  {team.split("_")[0]?.toUpperCase()}
                </span>
                <span className="team-lname sm:h-8 lg:h-12 sm:text-2xl lg:text-5xl inline-flex justify-center font-MarvelFont text-[#838383] border-t-4 border-b-4 border-[#838383]">
                  {team.split("_")[1]?.toUpperCase()}
                </span>
              </h1>
              <div className="jarvis z-30 hidden sm:flex justify-center items-center gap-2">
                <img
                  src={jarvisImg}
                  alt="jarvis"
                  className="h-16 md:h-20 lg:h-28"
                />
                <span className="jarvis-text text-sm md:text-xl text-white text-center z-30">
                  Updating Leaderboard...
                  <br />
                  <b>JARVIS is</b> <br />
                  watching closely!
                </span>
              </div>
            </div>
            <div
              className={`flex justify-center mt-6 w-full ${
                !allScores[team] && "hidden"
              }`}
            >
              <table className="player-scores w-full md:w-4/5 z-30">
                <thead>
                  <PlayerScoreCard
                    header={true}
                    player={{ name: "TEAM NAME", score: "SCORE", rank: "RANK" }}
                  />
                </thead>
                <tbody>
                  {allScores[team].map((player, index) => (
                    <PlayerScoreCard key={index} player={player} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Scores;