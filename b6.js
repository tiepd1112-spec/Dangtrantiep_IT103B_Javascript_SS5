let readerCardIds = [];
let readerNames = [];
let borrowedBookCodes = [];
let overdueDays = [];

let n = +prompt(`Hôm nay có bao nhiêu bạn đọc bị ghi nhận quá hạn?`);

for (let i = 0; i < n; i++) {
  let cardId;
  let isDuplicate;

  do {
    isDuplicate = false;
    cardId = prompt(`Nhập mã thẻ bạn đọc thứ ${i + 1}:`);

    if (cardId === "") continue;

    for (let j = 0; j < readerCardIds.length; j++) {
      if (readerCardIds[j] === cardId) {
        isDuplicate = true;
        break;
      }
    }
  } while (cardId === "" || isDuplicate);

  let name;
  do {
    name = prompt(`Nhập tên bạn đọc thứ ${i + 1}:`);
  } while (name === "");

  let bookCodes = prompt(
    `Nhập các mã sách đang mượn (cách nhau bởi dấu phẩy):`
  );

  let days;
  do {
    days = +prompt(`Nhập số ngày quá hạn:`);
  } while (days < 0);

  readerCardIds.push(cardId);
  readerNames.push(name);
  borrowedBookCodes.push(bookCodes);
  overdueDays.push(days);
}

let countOver10 = 0;

for (let i = 0; i < overdueDays.length; i++) {
  if (overdueDays[i] >= 10) {
    countOver10++;
  }
}

console.log(`Tổng số bạn đọc quá hạn từ 10 ngày trở lên: ${countOver10}`);

console.log(`Danh sách mã thẻ bạn đọc mượn cả sách JS và PYT:`);

for (let i = 0; i < borrowedBookCodes.length; i++) {
  let codes = borrowedBookCodes[i].toUpperCase();

  if (codes.includes("JS") && codes.includes("PYT")) {
    console.log(readerCardIds[i]);
  }
}

let maxIndex = 0;

for (let i = 1; i < overdueDays.length; i++) {
  if (overdueDays[i] > overdueDays[maxIndex]) {
    maxIndex = i;
  }
}

console.log(`Bạn đọc quá hạn nhiều ngày nhất: ${readerNames[maxIndex]}`);

let countOver7 = 0;

for (let i = 0; i < overdueDays.length; i++) {
  if (overdueDays[i] >= 7) {
    countOver7++;
  }
}

if (countOver7 === 0) {
  console.log(`Tình hình trả sách hôm nay khá tốt!`);
} else if (countOver7 >= 1 && countOver7 <= 4) {
  console.log(`Cần gửi nhắc nhở cho một số bạn đọc!`);
} else {
  console.log(`Tình trạng quá hạn nghiêm trọng! Cần liên hệ ngay!`);
}
