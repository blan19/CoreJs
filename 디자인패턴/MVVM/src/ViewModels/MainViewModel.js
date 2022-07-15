import ViewModel from "../core/ViewModel.js";

const mainViewModel = ViewModel.get({
  wrapper: ViewModel.get({
    styles: {
      width: "50%",
    },
  }),
});

export default mainViewModel;
