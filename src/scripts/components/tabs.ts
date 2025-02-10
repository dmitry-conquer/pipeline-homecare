class Tab {
  private readonly selectors: Record<string, string> = {
    root: "[data-js-tab]",
    trigger: "[data-js-tab-trigger]",
    content: "[data-js-tab-content]",
  };
  private readonly states: Record<string, string> = {
    isActive: "is-active",
  };
  private readonly dataAttributes: Record<string, string> = {
    trigger: "jsTabTrigger",
  };
  private rootElement: HTMLElement | null;
  private tabTriggers: Element[] = [];
  private contentTriggers: Element[] = [];

  constructor() {
    this.rootElement = document.querySelector(this.selectors.root);
    if (this.rootElement) {
      this.tabTriggers = [...this.rootElement.querySelectorAll(this.selectors.trigger)];
      this.contentTriggers = [...this.rootElement.querySelectorAll(this.selectors.content)];
    }
  }
  
  public init() {
    if (this.tabTriggers.length <= 0) {
      return;
    }

    this.tabTriggers.forEach(el => {
      if (el.classList.contains(this.states.isActive)) {
        this.upadteTabs(el as HTMLElement);
      }
    });

    this.bindEvents();
  }

  private bindEvents() {
    this.tabTriggers.forEach(el => {
      el?.addEventListener("click", () => this.upadteTabs(el as HTMLElement));
    });
  }

  private upadteTabs(el: HTMLElement) {
    const id: string = (el as HTMLElement)?.dataset[this.dataAttributes.trigger] || "";
    const content: HTMLElement | null = document.getElementById(id);

    this.tabTriggers.forEach(element => {
      element.classList.remove(this.states.isActive);
    });
    this.contentTriggers.forEach(element => {
      element.classList.remove(this.states.isActive);
    });
    el.classList.add(this.states.isActive);
    content?.classList.add(this.states.isActive);
  }
}

export default Tab;
