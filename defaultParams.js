//default params

const defaultValue = [
    {
        year: 2000,
        data: 'christmas'
    },{
        year: 2001,
        data: '롤리팝'
    },{
        year: 2010,
        data: '안드로이드'
    },{
        year: 2015,
        data: '리액트네이티브'
    },{
        year: 2020,
        data: '곧 2021'
    }
];

function printYears(years = defaultValue) {
    console.log(years);
};

//parameter가 없을시 default 파라미터 값을 설정해 놓을 수있음
printYears();
