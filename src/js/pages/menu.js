import Builder from "../builder";

export default class Menu extends Builder {
  constructor() {
    super();
    this.content = this.pageCreation();
  }

  pageCreation() {
    return this.buildElement("div", { class: "menu p-2r" }, [
      this.buildElement("div", {}, [
        this.buildElement("h2", { class: "mb-1r", textContent: "Items" }),
        this.buildElement("div", { class: "menu-cards flex flex-wrap" }, [
          this.createMenuItem(
            "Balsamic Kabob",
            "/src/images/kabobs/balsamic.jpg"
          ),
          this.createMenuItem(
            "Grilled Kabob",
            "/src/images/kabobs/grilled.jpg"
          ),
          this.createMenuItem(
            "Mediterranean Kabob",
            "/src/images/kabobs/mediterranean.jpg"
          ),
          this.createMenuItem(
            "Seasoned Kabob",
            "/src/images/kabobs/seasoned.jpg"
          ),
        ]),
        this.buildElement("div", { class: "mb-3r" }),
      ]),
    ]);
  }

  createMenuItem(title, url) {
    return this.buildElement("div", { class: "col-half card-container" }, [
      this.buildElement("div", { class: "card" }, [
        this.buildElement("h4", { textContent: title, class: "p-05r pb-0" }),
        this.buildElement("div", { class: "img-container p-05r" }, [
          this.buildElement("img", { src: url }),
        ]),
      ]),
    ]);
  }
}
