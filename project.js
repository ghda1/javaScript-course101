let Bookstore = [
    [1,"Start with why", "simon", 80, 13],
    [2,"But how do it know", "clarck",59.9, 22],
    [3, "Clean code", "robert",50, 5]
];

let bookID = 2;
let bookTitle = "But how do it know" ;

for(let i = 0; i < Bookstore.length ; i++){
    if (Bookstore[i][0] == bookID || Bookstore[i][1] == bookTitle ){
        console.log("you are searching for: " + Bookstore[i]);
    }
};

let title = "Start with why";
let quantity = 10;
let price = 100;

for(let i = 0; i < Bookstore.length ; i++){
    if(Bookstore[i].includes(title) && quantity<Bookstore[i][4] && price >= Bookstore[i][3] ){
        console.log(`YOUR INVOICE:
        Price: ` + Bookstore[i][3] );
        Bookstore[i][4] = Bookstore[i][4] - 1;
        console.log(Bookstore[i][4]);


}
};