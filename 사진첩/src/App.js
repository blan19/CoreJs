import Nodes from './components/Nodes';
import Breadcrumb from './components/Breadcrumb';
import api from './utils/api';
import ImageView from './components/ImageView';

class App {
  constructor({ $app }) {
    this.$app = $app;
    this.state = {
      isRoot: false,
      nodes: [],
      depth: [],
      selectedFilePath: null,
    };

    this.init();

    this.imageView = new ImageView({
      $app: this.$app,
      initialState: this.state.selectedFilePath,
    });

    this.breadcrumb = new Breadcrumb({
      $app: this.$app,
      initialState: this.state.depth,
    });

    this.nodes = new Nodes({
      $app,
      initialState: { isRoot: this.state.isRoot, nodes: this.state.nodes },
      onClick: async (node) => {
        try {
          if (node.type === 'DIRECTORY') {
            const nextNodes = await api.getById(node.id);
            this.setState({
              ...this.state,
              isRoot: false,
              depth: [...this.state.depth, node],
              nodes: [nextNodes],
            });
          } else if (node.type === 'FILE') {
            this.setState({
              ...this.state,
              selectedFilePath: node.filePath,
            });
          }
        } catch (e) {}
      },
      onBackClick: async () => {
        try {
          const nextState = { ...this.state };
          nextState.depth.pop();

          const prevNodeId =
            nextState.depth.length === 0
              ? null
              : nextState.depth[nextState.depth.length - 1].id;

          if (prevNodeId === null) {
            const rootNodes = await api.getByAll();
            this.setState({
              ...nextState,
              isRoot: true,
              nodes: rootNodes,
            });
          } else {
            const prevNodes = await api.getById(prevNodeId);
            this.setState({
              ...nextState,
              isRoot: false,
              nodes: prevNodes,
            });
          }
        } catch (e) {}
      },
    });
  }

  setState(nextState) {
    this.state = nextState;
    this.breadcrumb.setState(this.state.depth);
    this.nodes.setState({ isRoot: this.state.isRoot, nodes: this.state.nodes });
    this.imageView.setState(this.state.selectedFilePath);
  }

  async init() {
    try {
      const rootNodes = await api.getByAll();
      this.setState({ ...this.state, isRoot: true, nodes: rootNodes });
    } catch (e) {
      throw Error(`초기화에 실패했습니다 ${e.message}`);
    }
  }
}

export default App;
