const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = Number(fs.readFileSync(filePath).toString().trim());

function solution(input) {
  const cardList = new Array();
  for (let i = 1; i <= input; i++) {
    cardList.push(i);
  }
  while (cardList.length !== 1) {
    cardList.shift(); // 맨 위 카드 제거
    let changeCard = cardList.shift();
    cardList.push(changeCard);
  }
  console.log(cardList.join(''));
}

solution(input);
