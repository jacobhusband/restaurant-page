import Builder from "../builder";

export default class Menu extends Builder {
  constructor() {
    super();
    this.content = this.pageCreation();
  }

  pageCreation() {
    return this.buildElement("div", {}, [
      this.buildElement("div", { class: "menu m-auto w-80 p-05r" }, [
        this.buildElement("h2", { textContent: "Menu" }),
      ]),
    ]);
  }
}
