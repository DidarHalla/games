import { IGame } from "./interfaces/game";
import { Link } from "react-router-dom";
import { Routes } from "./Router";

type GameCardProps = {
  game: IGame;
};

export function GameCard(props: GameCardProps) {
  const { game: element } = props;

  return (
    <Link
      to={Routes.gameInfo.replace(":gameId", element.id)}
      className="wrapper-cards"
    >
      <div
        className="wrapper-images"
        style={{
          backgroundImage: `url(${element.background_image})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></div>
      <div id="wrapper-items">
        <div></div>
        <div className="game-name">{element.name}</div>
        <div>released {element.released}</div>
        <div>rating {element.ratings_count}</div>
      </div>
    </Link>
  );
}
