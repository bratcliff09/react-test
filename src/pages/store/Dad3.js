import React from "react";
import GameData from "./GameData";
import GameCard from "./GameCard";
import PageNumbers from "./PageNumbers";
import "./Dad3.css";

function Dad3() {
  const [pageNum, setPageNum] = React.useState({
    number: 1,
  });
  const gamesPerPage = 6;

  //passed to the PageNumbers component
  function changePage(e) {
    //console.log(e);
    //console.log(e.target.offsetWidth);

    const value = parseInt(e.target.innerHTML);
    setPageNum((prevState) => ({
      ...prevState,
      number: value,
    }));
    window.scrollTo({
      top: 60,
      left: 0,
      behavior: "smooth",
    });
  }

  function changePageVariantA(num) {
    const value = parseInt(num);
    setPageNum((prevState) => ({
      ...prevState,
      number: value,
    }));
  }

  //-------------
  const [filterF, setFilterF] = React.useState({
    filterType: "none",
    sortType: "none",
  });

  let filteredGameList;
  mainFilter();

  function filterOnClick(e) {
    const a = e.target.innerHTML;
    setFilterF((prevState) => ({
      ...prevState,
      filterType: a.toLowerCase(),
    }));
    changePageVariantA(1);
  }

  function sortOnClick(e) {
    const a = e.target.innerHTML;
    setFilterF((prevState) => ({
      ...prevState,
      sortType: a.toLowerCase(),
    }));
    changePageVariantA(1);
  }

  function mainFilter() {
    let ar = GameData;
    //'Filter' filter
    if (filterF.filterType === "on sale") {
      ar = ar.filter((item) => item.hasDiscount);
    }
    //'Sort' filter
    if (filterF.sortType === "alphabetical") {
      ar.sort((a, b) => a.title.localeCompare(b.title));
    } else {
      ar.sort(function (a, b) {
        return a.id - b.id;
      });
    }
    filteredGameList = ar;
  }

  function capitalize(word) {
    let a = word.charAt(0).toUpperCase();
    let b = word.slice(1);
    return a.concat(b);
  }
  //-------------------------

  //Repositions the filter buttons on each render
  //React.useEffect(() => {});

  function getItems() {
    let itemArray = [];
    const startingPoint = gamesPerPage * (pageNum.number - 1);
    for (let index = 0; index < gamesPerPage; index++) {
      itemArray.push(startingPoint + index);
    }
    const cards = itemArray.map((item) => {
      return createWa(item);
    });
    return cards;
  }

  function createWa(num) {
    const wow = filteredGameList.at(num);
    if (wow !== undefined) {
      return <GameCard {...wow} />;
    }
  }

  const charles = (e) => {
    if (e.target.className === "fil-opt-b") {
      const el = e.target.lastChild;
      el.classList.add("open");
    }
  };

  const darla = (e) => {
    let el;
    if (e.target.className === "fil-opt-b") {
      el = e.target.lastChild;
      el.classList.toggle("open");
    } else if (e.target.parentElement.className === "fil-opt-c open") {
      el = e.target.parentElement;
      el.classList.toggle("open");
    }
  };

  return (
    <div className="gogo" id="top">
      <div className="filter-options">
        <div className="fil-opt-a">
          <p>Filter:&nbsp;</p>
          <p
            className="fil-opt-b"
            onMouseOverCapture={charles}
            onMouseLeave={darla}
          >
            {capitalize(filterF.filterType)}
            <span className="fil-opt-c">
              <button onClick={filterOnClick}>None</button>
              <button onClick={filterOnClick}>On Sale</button>
            </span>
          </p>
        </div>
        <div className="fil-opt-a">
          <p>Sort:&nbsp;</p>
          <p
            className="fil-opt-b"
            onMouseOverCapture={charles}
            onMouseLeave={darla}
          >
            {capitalize(filterF.sortType)}
            <span className="fil-opt-c">
              <button onClick={sortOnClick}>None</button>
              <button onClick={sortOnClick}>Alphabetical</button>
            </span>
          </p>
        </div>
      </div>
      <div className="games">{getItems()}</div>
      <PageNumbers
        numOfGames={filteredGameList.length}
        gamesPerPage={gamesPerPage}
        stateChange={changePage}
        stateChange2={changePageVariantA}
        currPageNum={pageNum.number}
      />
    </div>
  );
}

export default Dad3;
