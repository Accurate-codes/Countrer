// let count = 0;

// document.getElementById("decreasebtn").onclick = function(){
//     count -=0;
//     document.getElementById("counterlabel").innerHTML = count
// }

// document.getElementsById("resetbtn").onclick = function(){
//     count =0;
//     document.getElementById("counterlabel").innerHTML = count
// }

// document.getElementById("increasebtn").onclick = function(){
//     count +=1;
//     document.getElementById("counterlabel").innerHTML = count
// }

const decreasebtn = document.getElementById("decreasebtn");
const resetbtn = document.getElementById("resetbtn");
const increasebtn = document.getElementById("increasebtn");
const countlabel = document.getElementById("countlabel");
let count = 0;

increasebtn.onclick = function(){
    count ++;
    countlabel.textContent = count;
}

decreasebtn.onclick = function(){
    if (count > 0) {
       count --; 
    }
    countlabel.textContent = count;
}

resetbtn.onclick = function(){
    count = 0;
    countlabel.textContent = count;
}

