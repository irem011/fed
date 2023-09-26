// JavaScript Document
console.log("hi");



var menuButton = document.querySelector("header li:last-of-type button");
var deNav = document.querySelector("header nav");


menuButton.onclick = toggleMenu;

function toggleMenu() {
	deNav.classList.toggle("open");
}