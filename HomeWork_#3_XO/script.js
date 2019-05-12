let count = 0;
const newShop = (function () {
  getId = x => document.getElementById(x);
  getQS = y => document.querySelector(y);
  let check = true;
  return {
    changePlayer: function (zelen = 'none', poroh = '') {
      getQS('.zelen').style.display = zelen;
      getQS('.poroh').style.display = poroh;
    },
    win: function () {
      let winXO = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ];
      for (let i = 0; i < winXO.length; i++) {
        let w = winXO[i];
        if (getQS('.game').children[w[0]].value == 'X' && getQS('.game').children[w[1]].value == 'X' &&
          getQS('.game').children[w[2]].value == 'X') {
          check = false;
          getQS('.poroh').style.display = 'none';
          getQS('.zelen2').style.display = 'block';
          setTimeout(() => {
            getQS('.game').style.display = 'none'
          }, 500);
        }
        if (getQS('.game').children[w[0]].value == 'O' && getQS('.game').children[w[1]].value == 'O' &&
          getQS('.game').children[w[2]].value == 'O') {
          check = false;
          getQS('.zelen').style.display = 'none';
          getQS('.poroh2').style.display = 'block';
          setTimeout(() => {
            getQS('.game').style.display = 'none'
          }, 500);
        }
      }
      if (count == 9 && check == true) {
        getQS('.zelen').style.display = 'none';
        // getQS('.zelen2').style.display = 'none';
        getQS('.poroh').style.display = 'none';
        setTimeout(() => {
          // alert('Nobody Win')
          //--------------------------------
          getQS('.game').style.display = 'none'
          getQS('.timo').style.display = 'block'
        }, 300);
      }
    },
  }

}());

(function (shop) {
  let player = "X";
  let images = ['url(images/X.png)', 'url(images/O.png)'];
  getQS('.zelen').style.display = "";
  for (let i = 0; i < getQS('.game').children.length; i++) {
    getQS('.game').children[i].addEventListener('click', function () {
      if (player == 'X' && getQS('.game').children[i].style.background == "") {
        getQS('.game').children[i].style.background = images[0];
        getQS('.game').children[i].value = 'X';
        newShop.changePlayer();
        player = "O";
      } else if (player == "O" && getQS('.game').children[i].style.background == "") {
        getQS('.game').children[i].style.background = images[1];
        getQS('.game').children[i].value = 'O';
        newShop.changePlayer('', 'none');
        player = 'X';
      }
      count++;
      newShop.win();
    });
  }
}(newShop))