var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var main = document.getElementById("main");
var myList = document.getElementById("list");
var ul = document.getElementsByTagName("ul");
var story = myList.getElementsByClassName("item");
var popup = document.getElementsByClassName("popup")[0];
var close = document.querySelector(".close");
/* записали пременные чтобы находит нужные элеенты*/
console.log (btn1);
console.log (btn2);
/*console.log (ul[0]); если мы хотим найти первый элемент 
этого тэга в данном случае списка, ставим ноль, 
тк в js начало отсчета с ноля*/
console.log (ul); 
/* если мы хоти всю коллекцию элементов с этим тэгом*/
console.log (story);

/*main.style.background = "green"; 
так можно менять стили, в данном случае для main*/

function addItem () {
    var newLi = document.createElement("li")
    newLi.innerHTML = "Новая задача";
    newLi.className = "item";
    myList.appendChild(newLi);
    popup.style.display = "none";

} /* ввели функцию , которая будет создавать элемент li
 списка и добавлять его в качестве дочернего в список ul
 с классом list. прислвоили элементу класс item как и у других таких же
 добавили свойство для popup становиться невиимым
  при создании нового элемента*/

function delItem () {
    myList.removeChild(story[0]);

    if(story.length == 0) {
        popup.style.display = "block";
    }

} /* создали функцию для удаления элемента списка
 и указали для popup  появляться если в списке нолль элеиентов*/

function closePopup () {
    popup.style.display = "none";
}
/* создали функцию для popup 
для закрывания при действии - нажатие на крестик*/

btn1.addEventListener("click", addItem);
btn2.addEventListener("click", delItem);
close.addEventListener("click", closePopup);
/* прописали сценарии когда какой функции включаться*/