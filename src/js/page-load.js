import Builder from "./builder";

export default class PageLoad extends Builder {
  constructor() {
    super();
    this.content = this.headerCreation();
  }

  headerCreation() {
    return this.buildElement("div", { class: "container m-auto pos-rel" }, [
      this.buildElement(
        "h1",
        {
          class: "w-100 text-center m-0 headline",
          textContent: "Veggie Kabob & Grill",
        },
        []
      ),
      this.buildElement(
        "p",
        {
          class: "pos-abs text-center w-100 sub-headline",
          textContent:
            "Healthy and delicious vegetable kabobs along with grain bowls",
        },
        []
      ),
      this.buildElement("nav", { class: "p-05r text-center" }, [
        this.buildElement("div", { class: "wrapper inline-block" }, [
          this.buildElement("a", {
            class: "p-05r fs-1pt25r underline",
            textContent: "Home",
          }),
        ]),
        this.buildElement("div", { class: "wrapper inline-block" }, [
          this.buildElement("a", {
            class: "p-05r fs-1pt25r",
            textContent: "Menu",
          }),
        ]),
        this.buildElement("div", { class: "wrapper inline-block" }, [
          this.buildElement("a", {
            class: "p-05r fs-1pt25r",
            textContent: "Contact",
          }),
        ]),
      ]),
    ]);
  }
}
