import Builder from "./builder";

export default class Footer extends Builder {
  constructor() {
    super();
    this.content = this.footerCreation();
  }

  footerCreation() {
    return this.buildElement(
      "div",
      { class: "footer pos-fixed text-center p-05r b-1px-top w-100" },
      [
        this.buildElement(
          "a",
          {
            class: "pos-rel",
            textContent: "jacobhusband",
          },
          [
            this.buildElement("img", {
              src: "/src/images/github.png",
              class: "pos-rel",
            }),
          ]
        ),
      ]
    );
  }
}
