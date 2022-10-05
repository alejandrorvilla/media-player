interface Observer {
  update: (data: any) => void;
}

interface Subject {
  subscribe: (observer: Observer) => void;
  unsubscribe: (observer: Observer) => void;
}

class BitCoinPrice implements Subject {
  private observers: Array<Observer> = [];

  constructor() {
    const input: HTMLInputElement = document.querySelector(
      "#value"
    ) as HTMLInputElement;
    input?.addEventListener("input", () => {
      this.notify(input.value);
    });
  }

  subscribe(observer: Observer) {
    this.observers.push(observer);
  }
  unsubscribe(observer: Observer) {
    const index = this.observers.findIndex((obs) => {
      return obs === observer;
    });
    this.observers = this.observers.splice(index, 1);
  }

  notify(data: any) {
    this.observers.forEach((observer) => observer.update(data));
  }
}

class PriceDisplay implements Observer {
  private label: HTMLElement;
  constructor() {
    this.label = document.querySelector("#price") as HTMLElement;
  }
  update(data: any) {
    this.label.innerHTML = data;
  }
}

const value = new BitCoinPrice()
const display = new PriceDisplay()

value.subscribe(display)