
let booksId = [];
let booksName = [];
let bookStatus = [];
let n = +prompt("Có bao nhiêu cuốn sách cần kiểm tra tình trạng hôm nay?");

for (let i = 0; i < n; i++) {
  let id;
  do {
    id = prompt(`Nhập mã sách thứ ${i +1}: `);
  } while (id === "");

  let name;
  do {
    name = prompt(`Nhập tên sách thứ " ${i + 1}:`);
  } while (name === "");

  let statusChoice;
  let status;
  do {
    statusChoice = +prompt(
      "Chọn tình trạng sách (1-Hỏng nhẹ, 2-Hỏng nặng, 3-Cần sửa gấp):"
    );
  } while (statusChoice < 1 || statusChoice > 3);

  if (statusChoice === 1) status = "Hỏng nhẹ";
  if (statusChoice === 2) status = "Hỏng nặng";
  if (statusChoice === 3) status = "Cần sửa gấp";

  booksId.push(id);
  booksName.push(name);
  bookStatus.push(status);
}

console.log("Danh sách sách ban đầu :");
for (let i = 0; i < booksId.length; i++) {
    console.log(`
        ${i + 1}
        .
        ${booksId[i]}
        |
        ${booksName[i]}
        |
        ${bookStatus[i]}
        
        `);
    }
    
    while (true) {
  let choice = +prompt(
    "Chọn thao tác:\n1. Sửa tình trạng sách\n2. Loại bỏ sách\n0. Kết thúc"
  );

  if (choice === 0) break;

   if (choice === 1) {
    let editId = prompt("Nhập mã sách cần sửa:");
    let found = -1;

    for (let i = 0; i < booksId.length; i++) {
      if (booksId[i] === editId) {
        found = i;
        break;
      }
    }

    if (found !== -1) {
      let newChoice;
      do {
        newChoice = +prompt(
          "Chọn tình trạng mới:\n1-Hỏng nhẹ\n2-Hỏng nặng\n3-Cần sửa gấp\n4-Đã sửa xong\n5-Loại bỏ"
        );
      
      } while (newChoice < 1 || newChoice > 5);

      if (newChoice === 1) bookStatus[found] = "Hỏng nhẹ";
      if (newChoice === 2) bookStatus[found] = "Hỏng nặng";
      if (newChoice === 3) bookStatus[found] = "Cần sửa gấp";
      if (newChoice === 4) bookStatus[found] = "Đã sửa xong";
      if (newChoice === 5) bookStatus[found] = "Loại bỏ";
    } else {
      console.log("Không tìm thấy mã sách.");
    }
  }

   if (choice === 2) {
    let deleteId = prompt("Nhập mã sách cần xóa:");
    let position = -1;

    for (let i = 0; i < booksId.length; i++) {
      if (booksId[i] === deleteId) {
        position = i;
        break;
      }
    }

    if (position !== -1) {
      booksId.splice(position, 1);
      booksName.splice(position, 1);
      bookStatus.splice(position, 1);
    } else {
      console.log("Không tìm thấy mã sách.");
    }
  }

  console.log("Danh sách hiện tại:");
  for (let i = 0; i < booksId.length; i++) {
    console.log(`
        ${i + 1}
        .
        ${booksId[i]}
        |
        ${booksName[i]}
        |
        ${bookStatus[i]}
        
        `);
    }
}
let fixedCount = 0;
let removedCount = 0;

for (let i = 0; i < bookStatus.length; i++) {
  if (bookStatus[i] === "Đã sửa xong") fixedCount++;
  if (bookStatus[i] === "Loại bỏ") removedCount++;
}

console.log("===== BÁO CÁO CUỐI =====");
console.log("Tổng số sách còn lại: " + booksId.length);
console.log("Số sách đã sửa xong: " + fixedCount);
console.log("Số sách loại bỏ: " + removedCount);

console.log("Danh sách sách còn lại:");
for (let i = 0; i < booksId.length; i++) {
    console.log(`
        ${i + 1}
        .
        ${booksId[i]}
        |
        ${booksName[i]}
        |
        ${bookStatus[i]}
        
        `);
    }
