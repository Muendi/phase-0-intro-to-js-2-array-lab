// Defined cats
const cats = ["Milo","Otis","Garfield"];
cats;

// added Ralph to the end of the array
function destructivelyAppendCat(Ralph){
    cats.push("Ralph");
}
cats;

// added Bob to beginning of the array
function destructivelyPrependCat(Bob){
    cats.unshift("Bob");
}
cats;
// remove last cat from the array

function destructivelyRemoveLastCat(Garfield){
    cats.pop("Garfield");
}
cats;

//remove first cat from the array
function destructivelyRemoveFirstCat(Milo){
    cats.shift("Milo");
}
cats;

// appends cat and returns a new array leaving the array unchanged
function appendCat(Broom){
    return [...cats, "Broom"] ;
}

//prepends a cat and returns new array leaving cats array unchanged
function prependCat(Arnold){
    return ["Arnold",...cats];
}
cats;

// removes last cat in array & returns a new array leaving the cats array unchanged
function removeLastCat() {
    return cats.slice(0, cats.length - 1);
  }
cats;
  
// removes last cat in array & returns a new array leaving the cats array unchanged
function removeFirstCat(){
    return cats.slice(1);
}
cats;









