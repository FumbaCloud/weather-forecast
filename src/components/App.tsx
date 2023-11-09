import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

import AppView from "./AppView";
import { store } from "../stores/store";

const App = () => {
    return (
        <Provider store={store}>
            <ToastContainer />
            <AppView />
        </Provider>
    );
};

export default App;
