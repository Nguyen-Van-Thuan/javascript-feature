var Usrdata = document.querySelector('.box');

var userDetail = [
    {name:"sunil",age:"24",place:"delhi",avatar:"./image/abc.jpg",country:"India"},
    {name:"sujan",age:"22",place:"assam,",avatar:"./image/abc.jpg",country:"India"},
    {name:"abishek",age:"26",place:"kolkata",avatar:"./image/abc.jpg",country:"India"},
    {name:"chiranjeev",age:"20",place:"bangalore",avatar:"./image/abc.jpg",country:"India"},
]

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