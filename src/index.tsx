import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/store";
import "bootstrap/dist/css/bootstrap.min.css";


const root: ReactDOM.Root = ReactDOM.createRoot(
  document.getElementById("root")!
);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
