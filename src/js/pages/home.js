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
          class: "hours flex flex-dir-col align-items-center",
        },
        [
          this.buildElement("h2", { class: "mb-1r", textContent: "Hours" }),
          this.createHoursForDay("Sunday", "10am - 9pm"),
          this.createHoursForDay("Monday", "11am - 8pm"),
          this.createHoursForDay("Tuesday", "11am - 8pm"),
          this.createHoursForDay("Wednesday", "11am - 8pm"),
          this.createHoursForDay("Thursday", "11am - 8pm"),
          this.createHoursForDay("Friday", "11am - 8pm"),
          this.createHoursForDay("Saturday", "10am - 9pm"),
        ]
      ),
      this.buildElement(
        "div",
        { class: "location flex flex-dir-col align-items-center" },
        [
          this.buildElement("h2", {
            class: "mt-2r mb-1r",
            textContent: "Location",
          }),
          this.buildElement("p", {
            textContent: "123 Veggie Street, Vegetable Land, CA",
          }),
        ]
      ),
    ]);
  }

  createHoursForDay(day, time) {
    return this.buildElement("div", { class: "row gap-1r" }, [
      this.buildElement("div", { class: "col" }, [
        this.buildElement("p", {
          textContent: day + ":",
          class: "text-right",
        }),
      ]),
      this.buildElement("div", { class: "col" }, [
        this.buildElement("p", { textContent: time }),
      ]),
    ]);
  }
}
