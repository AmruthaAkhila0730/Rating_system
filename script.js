function change1() {
    document.getElementById("one").src = "./Images/rating1.jpg";
    document.getElementById("two").src = "./Images/disply2.jpg";
    document.getElementById("three").src = "./Images/disply3.jpg";
    document.getElementById("four").src = "./Images/disply4.jpg";
    document.getElementById("five").src = "./Images/disply5.jpg";
    document.getElementById("resultDiv").innerText = "Very Bad!";
}
function change2() {
    document.getElementById("one").src = "./Images/disply1.jpg";
    document.getElementById("two").src = "./Images/rating2.jpg";
    document.getElementById("three").src = "./Images/disply3.jpg";
    document.getElementById("four").src = "./Images/disply4.jpg";
    document.getElementById("five").src = "./Images/disply5.jpg";
    document.getElementById("resultDiv").innerText = "Not Bad!";
}
function change3() {
    document.getElementById("one").src = "./Images/disply1.jpg";
    document.getElementById("two").src = "./Images/disply2.jpg";
    document.getElementById("three").src = "./Images/rating3.jpg";
    document.getElementById("four").src = "./Images/disply4.jpg";
    document.getElementById("five").src = "./Images/disply5.jpg";
    document.getElementById("resultDiv").innerText = "Good!";
}
function change4() {
    document.getElementById("one").src = "./Images/disply1.jpg";
    document.getElementById("two").src = "./Images/disply2.jpg";
    document.getElementById("three").src = "./Images/disply3.jpg";
    document.getElementById("four").src = "./Images/rating4.jpg";
    document.getElementById("five").src = "./Images/disply5.jpg";
    document.getElementById("resultDiv").innerText = "Intresting!";
}

function change5() {
    document.getElementById("one").src = "./Images/disply1.jpg";
    document.getElementById("two").src = "./Images/disply2.jpg";
    document.getElementById("three").src = "./Images/disply3.jpg";
    document.getElementById("four").src = "./Images/disply4.jpg";
    document.getElementById("five").src = "./Images/rating5.jpg";
    document.getElementById("resultDiv").innerText = "Wonderfull!";
}
function submitForm() {
    document.cookie = (document.getElementById("resultDiv").innerText);
}