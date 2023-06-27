import { Provider } from "react-redux";
import Screen from "./Screen";
import store from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <Screen />
    </Provider>
  );
}
