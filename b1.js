let bookList = [];
let numberOfBooks = +prompt("Bạn muốn trả bao nhiêu cuốn sách ");

for(let i = 0; i < numberOfBooks; i++) {
    let bookName = prompt(`Nhập tên cuốn sách thứ ${i + 1} :` );
    bookList.push(bookName);
}

console.log(`Tổng số sách đã được trả: ${bookList.length}`);
console.log(`Danh sách đã trả `);

for(let i = 0; i < bookList.length; i++) {
    console.log(`${i + 1}. ${bookList[i]}`);
}
