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
          class: "hours p-1r br-05r flex flex-dir-col",
        },
        [
          this.buildElement("h1", { class: "m-0", textContent: "Hours" }),
          this.buildElement("table", { class: "fs-1pt25r" }, [
            this.buildElement("tbody", {}, [
              this.buildElement("tr", {}, [
                this.buildElement(
                  "td",
                  { textContent: "Sunday:", class: "w-200px" },
                  []
                ),
                this.buildElement("td", { textContent: "10am - 9pm" }, []),
              ]),
              this.buildElement("tr", {}, [
                this.buildElement("td", { textContent: "Monday:" }, []),
                this.buildElement("td", { textContent: "10am - 9pm" }, []),
              ]),
              this.buildElement("tr", {}, [
                this.buildElement("td", { textContent: "Tuesday:" }, []),
                this.buildElement("td", { textContent: "10am - 9pm" }, []),
              ]),
              this.buildElement("tr", {}, [
                this.buildElement("td", { textContent: "Wednesday:" }, []),
                this.buildElement("td", { textContent: "10am - 9pm" }, []),
              ]),
              this.buildElement("tr", {}, [
                this.buildElement("td", { textContent: "Thursday:" }, []),
                this.buildElement("td", { textContent: "10am - 9pm" }, []),
              ]),
              this.buildElement("tr", {}, [
                this.buildElement("td", { textContent: "Friday:" }, []),
                this.buildElement("td", { textContent: "10am - 9pm" }, []),
              ]),
              this.buildElement("tr", {}, [
                this.buildElement("td", { textContent: "Saturday:" }, []),
                this.buildElement("td", { textContent: "10am - 9pm" }, []),
              ]),
            ]),
          ]),
        ]
      ),
    ]);
  }
}
