//Rest Operator



// function printYears(years) {
//     console.log(years);
// };

//위 방식은 parameter로 1개만 받아지지만
//아래 처럼하면 배열 전체를 출력 할 수 있음 이걸 Rest Operator라고 한다.
function printYears(...years) {
    console.log(years);   
}


printYears(2000, 2001, 2010, 2015, 2018);
