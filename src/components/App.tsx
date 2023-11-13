import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";

import AppView from "./AppView";
import { persistor, store } from "../stores/store";

const App = () => {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <ToastContainer />
                <AppView />
            </PersistGate>
        </Provider>
    );
};

export default App;
