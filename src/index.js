import PageLoad from "./js/page-load";

const pageLoadHeader = new PageLoad();

const $content = document.querySelector("#content");
$content.appendChild(pageLoadHeader.content);
