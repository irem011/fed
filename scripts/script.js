// JavaScript Document
console.log("hi");



var menuButton = document.querySelector("header li:last-of-type button");
var deUl = document.querySelector("header > ul");
var deNav = document.querySelector("header nav");
var closeButton = document.querySelector("header nav button");


function toggleMenu() {
	deNav.classList.toggle("open");
	deUl.classList.toggle("open");
}

menuButton.onclick = toggleMenu;
closeButton.onclick = toggleMenu;

