var rows = 3;
var columns = 3;

var currTile; //tile your trying to switch - clicked on
var otherTile; //title your swapping spaces with - the blank tile

//variable for turns
var turns = 0;

//variable for the order of the tiles
//var imgOrder = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
//dont create random enerator code because you run the risk of creating a puzzle thats not solvable
var imgOrder = ["5", "9", "8", "1", "4", "2", "7", "6", "3"];

//to populate our images on the board
window.onload = function(){
    for (let r=0; r < rows; r++){
        for (let c=0; c < columns; c++) {
            //image tag location = img id=0-0; use id to check and save the coordinates
            //<img id="0-0" src="img_01.jpg">
            let tile = document.createElement("img");
            tile.id = r.toString() + "-" + c.toString();
            tile.src = imgOrder.shift() + ".jpg";


            //the images aren't loading! What am I doing wrong?

            //to drag the tiles
            tile.addEventListener("dragstart", dragStart);  //click an image to drag
            tile.addEventListener("dragover", dragOver);    //to move an image over while clicked
            tile.addEventListener("dragenter", dragEnter);  //to drag an image onto another one
            tile.addEventListener("dragleave", dragLeave);  //to drag image moving to another spot - leaving that  image
            tile.addEventListener("drop", dragDrop);        //to drag and drop the image
            tile.addEventListener("dragend", dragEnd);      //swap the two tiles

            document.getElementById("board").append(tile);
        }
    }
};

function dragStart() {
    currTile = this; //this is the tile being dragged
}

function dragOver(event) {
    event.preventDefault();
}

function dragEnter(event) {
    event.preventDefault();
}

function dragLeave() {
    
}

function dragDrop() {
    otherTile = this; //the tile being dropped
}

function dragEnd() {
    let currImg = currTile.src;
    let otherImg = otherTile.src;

    currTile.src = otherImg;
    otherTile.src = currImg 
}