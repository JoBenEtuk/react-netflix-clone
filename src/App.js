// import custom components.
import Layout from "./components/layout/Layout";
// import global styling.
import "./index.css";
// import provicer.
import { Provider } from "react-redux";
// import store.
import store from "./store";
// create App components.
function App() {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  );
}
// export App component.
export default App;
