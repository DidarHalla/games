import { useState, useEffect } from "react";
import "./Body.css";
import "./SearchInput.css";
import { GameCard } from "./GameCard";
import { Pagination } from "./Pagination";
import { IGame } from "./interfaces/game";
import { Genres } from "./Genres";
// import { GameScreenShots } from "./GameScreenShots";

export function Body() {
  const [data, setData] = useState<IGame[]>([]);
  const [search, setSearch] = useState("");
  const [pageNum, setPageNum] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [selectedValue, setSelectedValue] = useState("action");

  useEffect(() => {
    const getData = () => {
      fetch(
        `https://api.rawg.io/api/games?key=afce07a77615492191297e9d59036b7c&page=${pageNum}&search=${search.trim()}&page_size=20&genres=${selectedValue}`
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.results) {
            setData(data.results);
            setTotalCount(data.count);

          }
        });
    };

    getData();
  }, [search, pageNum, selectedValue]);

  console.log(data);

  return (
    <div className="wrapper-input-gameCards">
      <div className="wrapper-input">
        <input
          className="search-input"
          type="text"
          value={search}
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
        <select
          className="search-genres"
          value={selectedValue}
          onChange={(event) => {
            setSelectedValue(event.target.value);
          }}
          id="select_"
        >
          <Genres />
        </select>
      </div>
      {data.map((element) => {
        return <GameCard game={element} key={element.id} />;
      })}
      <Pagination
        totalCount={totalCount}
        currentPage={pageNum}
        onChangePage={(newPage: number) => {
          setPageNum(newPage);
        }}
      />
    </div>
  );
}

// const platforms: Array<T> = element.platforms.map((v: string) => {
//   return v.platform.name.toLowerCase().split(" ")[0];
// });
// const platformsSorting: Array<T> = platforms.sort();

// platforms.map((v) => {
//   switch (v) {
//     case "ios":
//       return (
//         <img className="icons" src="./platform-icons/iOS.svg" alt="" />
//       );

//     case "android":
//       return (
//         <img className="icons" src="./platform-icons/Android.svg" alt="" />
//       );

//     case "pc":
//       return <img className="icons" src="./platform-icons/pc.svg" alt="" />;

//     case "linux":
//       return (
//         <img className="icons" src="./platform-icons/linux.svg" alt="" />
//       );

//     case "nintendo":
//       return (
//         <img className="icons" src="./platform-icons/nintendo.svg" alt="" />
//       );

//     case "xbox":
//       return (
//         <img className="icons" src="./platform-icons/xbox.svg" alt="" />
//       );

//     case "macos":
//       return (
//         <img className="icons" src="./platform-icons/macOS.svg" alt="" />
//       );

//     case "playstation":
//       return (
//         <img
//           className="icons"
//           src="./platform-icons/playStation.svg"
//           alt=""
//         />
//       );
//   }
// });
