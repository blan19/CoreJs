import View from "../core/View.js";

class ResultView extends View {
  constructor(el, options) {
    super(el, options);
    this.sectionEl = el;
  }

  render(data) {
    const template = data.length
      ? this.getSearchResultHtml(data)
      : `<ul><li>검색 결과가 없습니다</li></ul>`;
    this.sectionEl.innerHTML = template;
  }

  getSearchResultHtml(data) {
    return (
      data.reduce((html, item) => {
        html += this.getSearchResultItem(item);
        return html;
      }, "<ul>") + "</ul>"
    );
  }

  getSearchResultItem(item) {
    return `<li><div><img src=${item.image} /></div><div><p>${item.name}</p></div></li>`;
  }

  addEvent() {}
}

export default ResultView;
