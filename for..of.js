let years = [2001, 2010, 2015, 2018];


// command + shift + C
for(let year of years) { //forEach 안에서 break 할 수 없는 것을 보완
    console.log(year);
    //year ++;  내부의 값을 변경 하는건 불가능함 이 코드 주석을 풀어도 year의 값은 그대로임
    if(year == 2001) {
        break;
    }
}


const string = ` I'm coding in pain.`;

for(let char of string) {
    console.log(char);
}