export default class Main {
  constructor({ $app, initialState, onClick }) {
    this.$target = document.createElement("div");
    this.$target.className = "ProductListPage";
    $app.appendChild(this.$target);

    // * State
    this.state = initialState;

    // * event
    this.onClick = onClick;

    // * render
    this.render();
  }

  setState(nextState) {
    this.state = nextState;
    this.render();
  }

  render() {
    const template = `<h1>상품목록</h1><ul>${
      this.state.length
        ? this.state
            .map(
              (product) =>
                `<li class="Product" data-product-id="${product.id}"><img src="${product.imageUrl}"/><div class="Product__info"><div>${product.name}</div><div>${product.price}</div></div></li>`
            )
            .join("")
        : ""
    }</ul>`;

    this.$target.innerHTML = template;

    this.$target.addEventListener("click", (e) => {
      const $li = e.target.closest("li");

      if ($li) {
        const { productId } = $li.dataset;
        const id = Number(productId);
        this.onClick(id);
      }
    });
  }
}
