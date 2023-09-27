// JavaScript Document
console.log("hi");



var menuButton = document.querySelector("header li:last-of-type button");
var deUl = document.querySelector("header > ul");
var deNav = document.querySelector("header nav");


menuButton.onclick = toggleMenu;

function toggleMenu() {
	deNav.classList.toggle("open");
	deUl.classList.toggle("open");
}
