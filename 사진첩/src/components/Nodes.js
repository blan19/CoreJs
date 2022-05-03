export default class Nodes {
  constructor({ $app, initialState, onClick, onBackClick }) {
    this.state = initialState;
    this.$target = document.createElement('ul');
    $app.appendChild(this.$target);

    this.onClick = onClick;
    this.onBackClick = onBackClick;

    this.render();
  }
  setState(nextState) {
    this.state = nextState;
    this.render();
  }
  render() {
    if (this.state.nodes) {
      const nodesTemplate = this.state.nodes
        .map((node) => {
          const iconPath =
            node.type === 'FILE' ? '/images/file.png' : '/images/directory.png';

          return `
        <div class="Node" data-node-id="${node.id}">
          <img src="${iconPath}" />
          <div>${node.name}</div>
        </div>
        `;
        })
        .join('');

      this.$target.innerHTML = !this.state.isRoot
        ? `<div class="Node">
            <img src="/images/prev.png" />
           </div>`
        : nodesTemplate;
    }

    this.$target.querySelectorAll('.Node').forEach(($node) => {
      $node.addEventListener('click', (e) => {
        const { nodeId } = e.target.dataset;

        if (!nodeId) {
          this.onBackClick();
          return;
        }

        const selectedNode = this.state.nodes.find(
          (node) => node.id.toString() === nodeId,
        );

        if (selectedNode) {
          this.onClick(selectedNode);
        }
      });
    });
  }
}
