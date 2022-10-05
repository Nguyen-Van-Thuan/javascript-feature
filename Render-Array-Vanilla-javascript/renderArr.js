document.getElementById('test1').innerHTML = userDetail.map(user => 
    `<div>
      <div>Name: ${user.name}</div>
      <div>Age: ${user.age}</div>
      <div>Place: ${user.place}</div>
      <div>Country: ${user.country}</div>
      <div>Avatar: ${user.avatar}</div>
    </div>`
).join('')

/* array.join(separator) => chuyển mảng thành chuỗi
  - separator là kí tự sẽ ngăn cách các phần tử với nhau, mặc định mang giá trị là dấu ",".
  - Hàm sẽ trả về một chuỗi, và mảng cũ không ảnh hưởng gì cả.
*/