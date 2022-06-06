function intAndFloat(first,second,third){
let result=first+second+third;
let type;
if (result%1==0) type='Integer';
else type='Float';

console.log(result+" - "+type)

}
intAndFloat(9, 100, 1.1)
intAndFloat(100, 200, 303)