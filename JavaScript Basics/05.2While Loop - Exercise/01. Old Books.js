function books(input){
let isfound=0;
let bookName=input[0];
let i=1;
let booksChecked=0;
while((input[i]!=bookName)&&(input[i]!="No More Books")){
i++;
booksChecked++;

}
if (input[i]===bookName)
console.log(`You checked ${booksChecked} books and found it.`)
else {console.log(`The book you search is not here!`);
console.log(`You checked ${booksChecked} books.`);
}
}

books(["Troy",
"Stronger",
"Life Style",
"Troy"])

// 