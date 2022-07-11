import MainController from "./controllers/MainController.js";

class App {
  constructor() {
    this.setUp();
  }

  setUp() {
    new MainController();
  }
}

export default App;
