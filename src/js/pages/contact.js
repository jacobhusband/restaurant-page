import Builder from "../builder";

export default class Contact extends Builder {
  constructor() {
    super();
    this.content = this.pageCreation();
  }

  pageCreation() {
    return this.buildElement("div", {}, [
      this.buildElement("div", { class: "contact m-auto w-80 p-05r" }, [
        this.buildElement("h2", { textContent: "Contact" }),
      ]),
    ]);
  }
}
