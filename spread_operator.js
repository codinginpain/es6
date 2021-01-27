//Spread Operator

let years = [2001, 2010, 2015, 2018];
let yearsCp = [2000, ...years, 2020, 2021];

console.log(yearsCp);


let koreanHistory = {
    liberate: 1945,
    625: 1950
};

let history = {
    worldWar1: 1924,
    worldWar2: 1945,
    ...koreanHistory
};

console.log(history);


//활용 예 
// 주소와 도시를 입력 받는곳에 누가 입력을 안했서 서버에 미입력 상태로 넘어가면 서버가 에러 나는것을 방지

let address1 = {
    country: 'south koreanHistory',
    city: 'Busan'
}

let address2 = {
    ...address1,
    country: 'United States'
}

console.log(address2);




