class LoremIpsum {
  constructor(element) {
    this.element = element;
    this.controller = new AbortController();
  }
  getLoremIpsum() {
    return new Promise((resolve, reject) => {
      fetch("https://baconipsum.com/api/?callback=?", {
        method: "GET",
        signal: this.controller.signal,
      })
        .then((response) => {
          resolve(response.json());
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  async render() {
    const loremIpsum = await this.getLoremIpsum();
    this.element.innerHTML = `${loremIpsum} ${loremIpsum} ${loremIpsum} ${loremIpsum} ${loremIpsum} ${loremIpsum} ${loremIpsum} ${loremIpsum} ${loremIpsum} ${loremIpsum}`;
  }

  cancelLoad() {
    this.controller.abort();
  }
}

export default LoremIpsum;
