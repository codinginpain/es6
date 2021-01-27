
// Map

let map = new Map([['id', 'codinginpain']]);
map.set('testId', 'test');
map.get('testId'); //test

console.log(map);
console.log(map.size);
console.log(map.has('testId'));
console.log(map.entries());
console.log(map.keys());
console.log(map.values());
console.log(map.delete('testId'));
console.log(map.size);
map.clear();
console.log(map.size);


//Set -> 중복값을 허용하지않고 고유값만 들어갈 수 있음
const set = new Set([1,1,1,1,2,2,1,2,3,3,1,23,123,]);
set.add(4);
set.add(5).add(6);
console.log(set);
console.log(set.size);
set.delete(5);
console.log(set.size);
set.clear();
console.log(set.size);