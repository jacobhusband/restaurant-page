import Builder from "../builder";

export default class Menu extends Builder {
  constructor() {
    super();
    this.content = this.pageCreation();
  }

  pageCreation() {
    return this.buildElement("div", { class: "menu p-2r" }, [
      this.buildElement(
        "div",
        {
          class: "flex flex-dir-col align-items-center",
        },
        [this.buildElement("h2", { class: "mb-1r", textContent: "Items" })]
      ),
    ]);
  }
}
