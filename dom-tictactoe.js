//       ***********************
//            INSTRUCTIONS
//       ***********************

// 1. Read the code below and figure out the data flow
// 2. Add in your code from the terminal app (check for win logic)
// 3. Look for the @TODO, to fix
// next to each @TODO you will find tasks that need to be finished
// 4. GET THIS GAME WORKING!!

let currentMarker = "X";
let board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

const handleClick = (element) => {
  // check to see if the square clicked has anything in it, if not continue
  if (!document.getElementById(element.id).innerHTML) {
    addMarker(element.id);
    updateBoard(element.id);
    checkForWin();

    let cell = document.getElementById(element.id);
    cell.innerHTML === "X"
      ? (cell.style.color = "springgreen")
      : (cell.style.color = "orange");
  }
};

const addMarker = (id) => {
  document.getElementById(id).innerHTML = currentMarker;
};

const changeMarker = () => {
  currentMarker = currentMarker === "X" ? "O" : "X";
};

// passes the element's id attribute from HTML to be used
const updateBoard = (id) => {
  const row = parseInt(id.charAt(0));
  const column = parseInt(id.charAt(2));
  board[row][column] = currentMarker;
};

const checkForWin = () => {
  // calls each checkForWin possibility and if any are true gives a page alert,
  if (horizontalWin() || verticalWin() || diagonalWin()) {
    // **BONUS** you could make the dismissal of this alert window reset the board...
    window.alert(`Player ${currentMarker} won!`);
  } else {
    // if no win, change the marker from X to O, or O to X for the next player.
    changeMarker();
  }
};

const horizontalWin = () => {
  if (
    (board[0][0] == "X" && board[0][1] == "X" && board[0][2] == "X") ||
    (board[0][0] == "O" && board[0][1] == "O" && board[0][2] == "O")
  ) {
    return true;
  } else if (
    (board[1][0] == "X" && board[1][1] == "X" && board[1][2] == "X") ||
    (board[1][0] == "O" && board[1][1] == "O" && board[1][2] == "O")
  ) {
    return true;
  } else if (
    (board[2][0] == "X" && board[2][1] == "X" && board[2][2] == "X") ||
    (board[2][0] == "O" && board[2][1] == "O" && board[2][2] == "O")
  ) {
    return true;
  } else {
    return false;
  }
};

const verticalWin = () => {
  if (
    (board[0][0] == "X" && board[1][0] == "X" && board[2][0] == "X") ||
    (board[0][0] == "O" && board[1][0] == "O" && board[2][0] == "O")
  ) {
    return true;
  } else if (
    (board[0][1] == "X" && board[1][1] == "X" && board[2][1] == "X") ||
    (board[0][1] == "O" && board[1][1] == "O" && board[2][1] == "O")
  ) {
    return true;
  } else if (
    (board[0][2] == "X" && board[1][2] == "X" && board[2][2] == "X") ||
    (board[0][2] == "O" && board[1][2] == "O" && board[2][2] == "O")
  ) {
    return true;
  } else {
    return false;
  }
};

const diagonalWin = () => {
  if (
    (board[0][0] == "X" && board[1][1] == "X" && board[2][2] == "X") ||
    (board[0][0] == "O" && board[1][1] == "O" && board[2][2] == "O")
  ) {
    return true;
  } else if (
    (board[2][0] == "X" && board[1][1] == "X" && board[2][0] == "X") ||
    (board[2][0] == "O" && board[1][1] == "O" && board[2][0] == "O")
  ) {
    return true;
  } else {
    return false;
  }
};

const resetBoard = () => {
  const squares = document.getElementsByTagName("TD");
  for (i = 0; i < squares.length; i++) {
    console.log(squares[i]);
    squares[i].innerHTML = null;
  }

  board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
};

// **BONUSES**

// 1. Display the current player's turn
// 2. Count number of wins for each player and display them
// 3. Reset the number of wins
// 4. Clear the board on alert window dismissal
// 5. Add players names and display who wins, i.e. "Congrats Emily, you won with 0s!"
