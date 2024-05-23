import React from "react";

function PageNumbers({
  numOfGames,
  gamesPerPage,
  stateChange,
  stateChange2,
  currPageNum,
}) {
  const numOfPages = Math.ceil(numOfGames / gamesPerPage);
  //const numOfPages = 15;

  const twoMinus = () => {
    //Executed if there are 2 or less pages

    //const numOfPages = Math.ceil(numOfGames / gamesPerPage);

    const pageButtons = [];
    for (let index = 0; index < numOfPages; index++) {
      pageButtons.push(index);
    }

    const cards = pageButtons.map((item) => {
      return createButton(item + 1);
    });
    return cards;
  };

  const twoPlus = () => {
    //Executed if there are more than 2 pages
    //Displays only 3 pages: The current, former, and next page
    let point = 0;
    let a = clamp(currPageNum, 1, numOfPages);

    if (a === 1) {
      point = 1;
    } else if (a === numOfPages) {
      point = numOfPages - 2;
    } else {
      point = currPageNum - 1;
    }

    const pageButtons = [];
    for (let index = point; index < point + 3; index++) {
      pageButtons.push(index);
    }

    const cards = pageButtons.map((item) => {
      return createButton(item);
    });
    return cards;
  };

  function pathChoose() {
    //console.log(numOfPages);
    if (numOfPages > 2) {
      return twoPlus();
    } else {
      return twoMinus();
    }
  }

  function clamp(num, min, max) {
    let a = 0;
    a = num > max ? max : num;
    a = num < min ? min : a;
    return a;
  }

  function createButton(number) {
    if (number === currPageNum) {
      return (
        <button className="curr-page-btn" key={number}>
          {number}
        </button>
      );
    } else {
      return (
        <button className="other-page-btn" key={number} onClick={stateChange}>
          {number}
        </button>
      );
    }
  }

  return (
    <div className="page-numbers">
      <button className="other-page-btn" onClick={() => stateChange2(1)}>
        &laquo;
      </button>
      {pathChoose()}
      <button
        className="other-page-btn"
        onClick={() => stateChange2(numOfPages)}
      >
        &raquo;
      </button>
    </div>
  );
}

export default PageNumbers;
