/*
Mục Tiêu:
 -  Chỉ hiển thị một số mục cụ thể trên mỗi trang
 -  Hiển thị số trang dựa trên số lần tổng số mục được chia nhỏ
 -  Khi một số trang được nhấp vào, hãy thay đổi hiển thị thành trang đó
 -  Cho phép điều hướng đến trang trước và trang tiếp theo
*/

// Bước 1: Gọi tất cả các thẻ cần thiết
const paginationNumbers = document.getElementById("pagination-numbers"); //Lấy id paginationNumbers
const paginatedList = document.getElementById("paginated-list"); // Lấy id List
const listItems = paginatedList.querySelectorAll("li"); // Lấy được tất cả các thẻ li
const nextButton = document.getElementById("next-button"); // Lấy được id next-button
const prevButton = document.getElementById("prev-button"); // lấy được id prev-button

// Khai báo giá trị
const paginationLimit = 10; //Gioi hạn số lượng sản phẩm hiển thị trên 1 trang
const pageCount = Math.ceil(listItems.length / paginationLimit); //Tổng số trang sản phẩm <=> listItems.length: Tổng số lượng sản phẩm <=> Math.ceil: Hàm làm tròn
let currentPage = 1; //Lưu trữ giá trị của trang hiện tại

/*có 50 mục và chỉ muốn hiển thị 10 mục trên mỗi trang, số trang sẽ là 50/10 = 5 trang. Tương tự như vậy, nếu chúng ta có 55 mục và muốn hiển thị 10 mục trên mỗi trang, số trang sẽ là 55/10 = 5,5, làm tròn lên đến 6 trang.*/


//Tắt các nút điều hướng trang
const disableButton = (button) => {
  button.classList.add("disabled");
  button.setAttribute("disabled", true);
};

const enableButton = (button) => {
  button.classList.remove("disabled");
  button.removeAttribute("disabled");
};

const handlePageButtonsStatus = () => {
  if (currentPage === 1) {
    disableButton(prevButton);
  } else {
    enableButton(prevButton);
  }

  if (pageCount === currentPage) {
    disableButton(nextButton);
  } else {
    enableButton(nextButton);
  }
};

//Đặt số trang đang hoạt động
const handleActivePageNumber = () => {
  document.querySelectorAll(".pagination-number").forEach((button) => {
    button.classList.remove("active");
    const pageIndex = Number(button.getAttribute("page-index"));
    if (pageIndex == currentPage) {
      button.classList.add("active");
    }
  });
};

// một hàm để tạo một nút mới cho số trang và sau đó thêm các nút vào vùng paginationNumbers
const appendPageNumber = (index) => {
  const pageNumber = document.createElement("button");
  pageNumber.className = "pagination-number";
  pageNumber.innerHTML = index;
  pageNumber.setAttribute("page-index", index);
  pageNumber.setAttribute("aria-label", "Page " + index);

  paginationNumbers.appendChild(pageNumber);
};

const getPaginationNumbers = () => {
  for (let i = 1; i <= pageCount; i++) {
    appendPageNumber(i);
  }
};
// Hiển thị trang hoạt động
const setCurrentPage = (pageNum) => {
  currentPage = pageNum;

  handleActivePageNumber();
  handlePageButtonsStatus();
  
  const prevRange = (pageNum - 1) * paginationLimit;
  const currRange = pageNum * paginationLimit;

  listItems.forEach((item, index) => {
    item.classList.add("hidden");
    if (index >= prevRange && index < currRange) {
      item.classList.remove("hidden");
    }
  });
};
//Next and Previous Buttons
window.addEventListener("load", () => {
  getPaginationNumbers();
  setCurrentPage(1);

  prevButton.addEventListener("click", () => {
    setCurrentPage(currentPage - 1);
  });

  nextButton.addEventListener("click", () => {
    setCurrentPage(currentPage + 1);
  });

  document.querySelectorAll(".pagination-number").forEach((button) => {
    const pageIndex = Number(button.getAttribute("page-index"));
    //Thêm các nút số trang Trình xử lý sự kiện
    if (pageIndex) {
      button.addEventListener("click", () => {
        setCurrentPage(pageIndex);
      });
    }
  });
});
