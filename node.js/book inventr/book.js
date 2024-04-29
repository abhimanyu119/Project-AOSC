document.addEventListener("click", function(event) {
if (event.target.classList.contains("book-img")) {
if (event.target.style.border === "10px solid rgb(200, 90, 180)") {
    event.target.style.border = "1px solid black";
} else {
    event.target.style.border = "10px solid rgb(200, 90, 180)";
}
}
});

const elements = document.querySelectorAll('.sub-container');
elements.forEach(element => {
element.addEventListener('click', function () {
this.classList.contains('active') ? this.classList.remove('active') : this.classList.add('active');
});
});

var arr = [
{
Python_For_Beginners: 419,
'The_C++_programing_Language': 400,
Introduction_To_java_Programing: 799,
Ruby_Programing_For_beginners: 379,
// The_Adventures_Of_Sherlock_Holmes : 340,
// The_Return_Of_Sherlock_Holmes : 400,
// Rich_Dad_Poor_Dad : 200
}
];
var i = 0;
document.getElementById('calculate-btn').addEventListener('click', calculate)
var table = document.querySelector('.Table-items');
function calculate() {
while (table.rows.length > 1) {
table.deleteRow(1);
}
var total_price = 0;
for (var i = 0; i < arr.length; i++) {
for (var j in elements) {
    if (elements[j].classList.contains('active')) {
        var names = Object.keys(arr[i])[j];
        var price = arr[i][names];
        var total_price = total_price + parseInt(price);
        var row = table.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        cell1.innerHTML = names;
        cell2.innerHTML = price;
        cell3.innerHTML = total_price;
         
    }

        
}
}

}