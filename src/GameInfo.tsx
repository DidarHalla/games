import { useState, useEffect } from "react";
import { IGame } from "./interfaces/game";
import { useNavigate, useParams } from "react-router-dom";
import "./GameInfo.css";

interface IGameDetails extends IGame {
  background_image_additional: string;
  short_screenshots: Array<{
    image: string;
    id: number;
  }>;
}

export function GameInfo() {
  const nav = useNavigate();
  const params = useParams();
  const [obj, setObj] = useState<IGameDetails>();
  console.log(params);

  useEffect(() => {
    fetch(
      `https://api.rawg.io/api/games/${params.gameId}?key=afce07a77615492191297e9d59036b7c`,
      { method: "GET" }
    )
      .then((response) => response.json())
      .then((data) => {
        setObj(data);
      });
  }, [params]);

  return (
    <div className="wrapper-game-info">
      <div className="game-info">
        
        <img src={obj ? obj.background_image_additional : "false"} alt="" />
        <div>{obj?.name}</div>
        <div>Released {obj?.released}</div>
        <div>Rating {obj?.rating}</div>
      </div>
      <button
        onClick={() => {
          nav(-1);
        }}
      >
        CamBack
      </button>
    </div>
  );
}
