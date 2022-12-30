export default class Builder {
  buildElement(tag, attr, children) {
    const el = document.createElement(tag);
    for (var key in attr)
      key === "textContent"
        ? (el.textContent = attr[key])
        : key.includes("dataset")
        ? (el.dataset[key.split("-")[1]] = attr[key])
        : el.setAttribute(key, attr[key]);
    if (children) children.forEach((child) => child && el.appendChild(child));
    return el;
  }
}
