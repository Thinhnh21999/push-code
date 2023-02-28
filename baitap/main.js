
// bài 1 in ra các số từ 1 -> 100
/* for(i = 1; i <= 100; i++){
  document.write(i + "-")
} */

//bài 2
/* for(i = 100; i >= 1; i--) {
  document.write(i + "-")
} */

//bài 3 
/* for(i = 1; i <= 100; i++) {
  if(i % 3 === 0){
    document.write(i + "-")
  }
} */

//bài 4 
/* for(i = 99; i >= 1; i-- ) {
  if(i % 7 === 0) {
    document.write(i + "-")
  }
} */

// bài 5
/* var tong = 0;

for(i = 1; i <= 50; i++) {
   tong += i
}
alert(tong) */

//bài 6
 /* var tong = 0;

for(i = 50; i >= 1; i--) {
   tong += i
}
alert(tong) */

//bài 7
/* var tong = 0;

for(i = 2; i <= 100; i++){
  if(i % 2 === 0){
    tong += i
  }

}
alert("tổng là: " + tong) */

//bài 8
/* var tong = 0;

for(i = 5; i <= 100; i++){
  if(i % 5 === 0){
    console.log(i)
    tong += i
  }
}
alert("tổng là: " + tong) */

//bài 9
/* var n = prompt("nhập số bất kỳ"); // n! là tông tích của các số nhỏ hơn nó

var giaithua = 1; // 

for(i = 1; i <= n; i++){
  giaithua *= i
}
alert("tổng là: " + giaithua) */

//bài 10 
/* var n = parseInt(prompt("nhập số bất kỳ"))

var laSoNguyenTo = true;

if(n <= 1) {
  laSoNguyenTo = false;
} else {
  for(i = 2; i < n; i++) {
    if(n % i === 0){
      laSoNguyenTo = false;
    }
  }
}

if(laSoNguyenTo){
  alert(n + ": là số nguyên tố")
} else {
  alert(n + ": không phải là số nguyên tố")
} */

//bài 11 
/* var n = parseInt(prompt("nhập số bất kỳ"))

var uocSo = 0;

for(i = 1; i < n; i++) {
  if(n % i === 0) {
    uocSo += i
  }
}
// cho uocSo = 0 để tính tổng, lặp qua uoc số nhỏ hơn n để cộng tổng lại nếu tổng = n thì là số hoàn hảo
// số hoàn hảo là tổng của những số nhỏ hơn nó chia hết ko dư, trừ chính nó
if(uocSo === n){
  alert(n + " là số hoàn hảo")
}else {
  alert(n + " không phải là số hoàn hảo")
} */

// bài 12
/* var a = 0, b = 1, c;

for(i = 0; i < 10; i++){
  document.write(b + "-")
  c = a + b;
  a = b;
  b = c;
} */

// bài 13

