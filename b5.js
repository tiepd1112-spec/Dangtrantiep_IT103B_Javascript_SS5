let booksId = [];
let booksName = [];
let booksCategory = [];
let inventoryQuantity = [];

let n = Number(prompt("Có bao nhiêu loại sách cần nhập thông tin hôm nay?"));

for (let i = 0; i < n; i++) {
  let id;
  let isDuplicate;

  do {
    isDuplicate = false;
    id = prompt(`Nhập mã sách thứ ${i + 1}:`);

    if (id === "") continue;

    for (let j = 0; j < booksId.length; j++) {
      if (booksId[j] === id) {
        isDuplicate = true;
        break;
      }
    }
  } while (id === "" || isDuplicate);

  let name;
  do {
    name = prompt(`Nhập tên sách thứ ${i + 1}:`);
  } while (name === "");

  let category = prompt(
    `Nhập các thể loại của sách thứ ${i + 1} (các thể loại cách nhau bởi dấu phẩy):`
  );

  let quantity;
  do {
    quantity = Number(
      prompt(`Nhập số lượng tồn kho của sách thứ ${i + 1}:`)
    );
  } while (quantity < 0);

  booksId.push(id);
  booksName.push(name);
  booksCategory.push(category);
  inventoryQuantity.push(quantity);
}

let programmingCount = 0;

for (let i = 0; i < booksCategory.length; i++) {
  let categoryLower = booksCategory[i].toLowerCase();
  if (categoryLower.includes("lập trình")) {
    programmingCount++;
  }
}

console.log(
  `Tổng số sách thuộc thể loại 'Lập trình': ${programmingCount}`
);

console.log(
  "Danh sách mã sách thuộc cả hai thể loại 'JavaScript' và 'Web':"
);

for (let i = 0; i < booksCategory.length; i++) {
  let categoryLower = booksCategory[i].toLowerCase();

  if (
    categoryLower.includes("javascript") &&
    categoryLower.includes("web")
  ) {
    console.log(booksId[i]);
  }
}

let minIndex = 0;

for (let i = 1; i < inventoryQuantity.length; i++) {
  if (inventoryQuantity[i] < inventoryQuantity[minIndex]) {
    minIndex = i;
  }
}

console.log("Loại sách có số lượng tồn kho thấp nhất:");
console.log(
  `Mã sách: ${booksId[minIndex]}, Tên sách: ${booksName[minIndex]}, Tồn kho: ${inventoryQuantity[minIndex]}`
);
