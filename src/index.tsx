import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/main.css";
import App from "./App";
import { Provider } from "react-redux";
import store, { persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "react-hot-toast";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Toaster
          position={"top-right"}
          toastOptions={{
            style: {
              margin: "15px",
              background: "#828282",
              color: "#fff",
              width: "340px",
            },
            className: "text-base",
            duration: 3000,
          }}
        />
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
