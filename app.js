let i, n;
let btn = document.getElementById("btn");
let st = document.getElementById("st");
let fl = document.getElementById("fl");
let arr = [];
let container = document.getElementById("ctn");
let img = document.getElementById("img");

function startit() {
    n = prompt("How many friends you have ");

    //to take values from user
    for (i = 0; i < n; i++) {
        arr[i] = prompt("write their names : ");
    }
    for (i = 0; i < arr.length; i++) {
        var para = document.createElement("p"); // Create a <p> element
        para.innerText = arr[i] // Insert text
        container.appendChild(para);
        para.style.color = "white";
        para.style.textAlign = "center";

    }


    st.style.visibility = "hidden";
    btn.style.visibility = "visible";
}

function show() {
    fl.style.fontSize = "40px";
    fl.innerHTML = "Your Best friend is :  " + arr[Math.floor(Math.random() * arr.length)];
    btn.style.visibility = "hidden";
    img.style.visibility = "visible";



}