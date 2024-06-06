// ini JavaScript

function replacename() {
    let name = prompt("Sebutkan Nama Anda?", "");
    document.getElementById("your-name").innerHTML = name;
}
    replacename();
    document.getElementById("your-name").addEventListener("click", function(){replacename()})
 
function validateform() {
    const name = document.forms["massage-form"]["name-input"].value;
    const birthDate = document.forms["massage-form"]["birth-date"].value;
    const gender = document.forms["massage-form"]["gender"].value;
    const massage = document.forms["massage-form"]["massage"].value;

    if (name == "" || birthDate == "" || gender == "" || massage == ""){
        allert ("tidak boleh Kosong");
        return false
    }

    setSenderUI(name, birthDate, gender, massage);

    return false
}

function setSenderUI(name, birthDate, gender, massage) {
    document.getElementById("user-full-name").innerHTML = name;
    document.getElementById("user-birth-date").innerHTML = birthDate;
    document.getElementById("user-gender").innerHTML = gender;
    document.getElementById("user-massage").innerHTML = massage;
} 

var slideindex = 1;
showDivs(slideindex);

function plusDivs(n) {
    showDivs((slideindex += n));
}

function showDivs(n) {
   var i;
   var imglist = document.getElementsByClassName("banner-image");
   if (n > imglist.length) slideindex = 1;
   else if  (n < 1) slideindex = imglist.length

   for (i = 0; i < imglist.length; i++) {
    imglist[i].style.display = "none";
   }

   imglist[slideindex - 1].style.display = "block";
}