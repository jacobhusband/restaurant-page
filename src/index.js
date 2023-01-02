import PageLoad from "./js/page-load";
import Home from "./js/pages/home";
import Menu from "./js/pages/menu";
import Contact from "./js/pages/contact";
import Footer from "./js/footer";

const header = new PageLoad();
const home = new Home();
const menu = new Menu();
const contact = new Contact();
const footer = new Footer();

const $content = document.querySelector("#content");

$content.appendChild(header.content);
$content.querySelector(".container").appendChild(home.content);
$content.appendChild(footer.content);

const $nav = document.querySelector("nav");

$nav.addEventListener("click", handleNavClicks);

function handleNavClicks(event) {
  if (
    event.target.className.includes("wrapper") ||
    event.target.tagName === "NAV"
  )
    return;
  removeContent();
  removeAnchorUnderlines();
  if (event.target.textContent === "Home") {
    event.target.classList.add("underline");
    $content.querySelector(".container").appendChild(home.content);
  } else if (event.target.textContent === "Menu") {
    event.target.classList.add("underline");
    $content.querySelector(".container").appendChild(menu.content);
  } else if (event.target.textContent === "Contact") {
    event.target.classList.add("underline");
    $content.querySelector(".container").appendChild(contact.content);
  }
}

function removeContent() {
  $nav.nextElementSibling?.remove();
}

function removeAnchorUnderlines() {
  for (let i = 0; i < $nav.children.length; i++)
    $nav.children[i].firstElementChild.classList.remove("underline");
}
