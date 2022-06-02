function shop(input){
    let day=input[1];
    let fruit=input[0];
    let qty=input[2];
    let price;


//    плод	banana	apple	orange	grapefruit	kiwi	pineapple	grapes
//цена	    2.50	1.20	0.85	1.45	    2.70	5.50    	3.85
//Събота и неделя магазинът работи на по-високи цени:
//плод	    banana	apple	orange	grapefruit	kiwi	pineapple	grapes
//цена	    2.70	1.25	0.90	1.60	    3.00	5.60	    4.20
if(day==='Monday'||day==='Tuesday'||day==='Wednesday'||day==='Thursday'||day==='Friday')
switch(fruit){
case 'banana': price = 2.5; break;
case 'apple': price = 1.2; break;
case 'orange': price = 0.85;break;
case 'grapefruit': price = 1.45;break;
case 'kiwi': price = 2.7;break;
case 'pineapple': price = 5.5;break;
case 'grapes': price = 3.85;break;
default: console.log('error'); break; 
}
else if(day==='Saturday'||day==='Sunday')
switch(fruit){
    case 'banana': price = 2.7;break;
    case 'apple': price = 1.25;break;
    case 'orange': price = 0.9;break;
    case 'grapefruit': price = 1.6;break;
    case 'kiwi': price = 3;break;
    case 'pineapple': price = 5.6;break;
    case 'grapes': price = 4.2;break;
    default: console.log('error'); break; 

    
}
else console.log('error');
if (price>0) console.log((price*qty).toFixed(2));

}
shop(["tomato",
"Tuesday",
"0.5"])
