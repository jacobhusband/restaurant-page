import Builder from "../builder";

export default class Home extends Builder {
  constructor() {
    super();
    this.content = this.pageCreation();
  }

  pageCreation() {
    return this.buildElement("div", { class: "home p-2r" }, [
      this.buildElement(
        "div",
        {
          class:
            "hours ph-2r pv-1r br-05r flex flex-dir-col align-items-center",
        },
        [
          this.buildElement("h2", { class: "mb-1r", textContent: "Hours" }),
          this.buildElement("div", { class: "row gap-1r" }, [
            this.buildElement("div", { class: "col" }, [
              this.buildElement("p", {
                textContent: "Sunday:",
                class: "text-right",
              }),
            ]),
            this.buildElement("div", { class: "col" }, [
              this.buildElement("p", { textContent: "10am - 9pm" }),
            ]),
          ]),
          this.buildElement("div", { class: "row gap-1r" }, [
            this.buildElement("div", { class: "col" }, [
              this.buildElement("p", {
                textContent: "Monday:",
                class: "text-right",
              }),
            ]),
            this.buildElement("div", { class: "col" }, [
              this.buildElement("p", { textContent: "10am - 9pm" }),
            ]),
          ]),
          this.buildElement("div", { class: "row gap-1r" }, [
            this.buildElement("div", { class: "col" }, [
              this.buildElement("p", {
                textContent: "Tuesday:",
                class: "text-right",
              }),
            ]),
            this.buildElement("div", { class: "col" }, [
              this.buildElement("p", { textContent: "10am - 9pm" }),
            ]),
          ]),
          this.buildElement("div", { class: "row gap-1r" }, [
            this.buildElement("div", { class: "col" }, [
              this.buildElement("p", {
                textContent: "Wednesday:",
                class: "text-right",
              }),
            ]),
            this.buildElement("div", { class: "col" }, [
              this.buildElement("p", { textContent: "10am - 9pm" }),
            ]),
          ]),
          this.buildElement("div", { class: "row gap-1r" }, [
            this.buildElement("div", { class: "col" }, [
              this.buildElement("p", {
                textContent: "Thursday:",
                class: "text-right",
              }),
            ]),
            this.buildElement("div", { class: "col" }, [
              this.buildElement("p", { textContent: "10am - 9pm" }),
            ]),
          ]),
          this.buildElement("div", { class: "row gap-1r" }, [
            this.buildElement("div", { class: "col" }, [
              this.buildElement("p", {
                textContent: "Friday:",
                class: "text-right",
              }),
            ]),
            this.buildElement("div", { class: "col" }, [
              this.buildElement("p", { textContent: "10am - 9pm" }),
            ]),
          ]),
          this.buildElement("div", { class: "row gap-1r" }, [
            this.buildElement("div", { class: "col" }, [
              this.buildElement("p", {
                textContent: "Saturday:",
                class: "text-right",
              }),
            ]),
            this.buildElement("div", { class: "col" }, [
              this.buildElement("p", { textContent: "10am - 9pm" }),
            ]),
          ]),
        ]
      ),
    ]);
  }
}
