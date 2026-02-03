let books = ["Nha Gia Kim", "Dac Nhan Tam", "Tuan Lam Viec 4 Gio"];

while (true) {
  let choice = prompt(
`--- THƯ VIỆN KHOA HỌC ---
1. Xem danh sách
2. Nhập sách mới
3. Mượn sách (Xóa)
4. Sửa tên sách
5. Sắp xếp kệ
0. Thoát

Bạn chọn:`
  );

  if (choice === "0") {
    break;
  }

  if (choice === "1") {
    let result = `Danh sách hiện tại (${books.length} cuốn):\n`;
    for (let i = 0; i < books.length; i++) {
      result += `${i + 1}. ${books[i]}\n`;
    }
    alert(result);
  }

  else if (choice === "2") {
    let newBook = prompt("Nhập tên sách mới:");
    if (newBook !== "") {
      books.push(newBook);
      alert("Đã thêm thành công!");
    }
  }

  else if (choice === "3") {
    let borrowBook = prompt("Nhập tên sách muốn mượn:");
    let index = books.indexOf(borrowBook);

    if (index === -1) {
      alert(`Lỗi: Không tìm thấy sách ${borrowBook}!`);
    } else {
      books.splice(index, 1);
      alert(`Đã cho mượn cuốn '${borrowBook}'.`);
    }
  }

  else if (choice === "4") {
    let oldName = prompt("Nhập tên sách cũ cần sửa:");
    let index = books.indexOf(oldName);

    if (index === -1) {
      alert("Không tìm thấy sách cần sửa!");
    } else {
      let newName = prompt("Nhập tên sách mới:");
      books[index] = newName;
      alert("Đã cập nhật tên sách!");
    }
  }

  else if (choice === "5") {
    books.sort();
    let result = "Danh sách sau khi sắp xếp:\n";
    for (let i = 0; i < books.length; i++) {
      result += `${i + 1}. ${books[i]}\n`;
    }
    alert(result);
  }

  else {
    alert("Lựa chọn không hợp lệ!");
  }
}
