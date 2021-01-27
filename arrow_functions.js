//Arrow Functions

const years = [
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


//past
// const result = years.filter(function(data) {
//     return data.year > 2008;
// });

const result = years.filter((data) => data.year > 2008);
console.log(result);


