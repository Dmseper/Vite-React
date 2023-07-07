import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import { Provider } from "react-redux"
import store from "./store/store.ts"
import { BrowserRouter } from "react-router-dom"
import { persistor } from "./store/store.ts"
import { PersistGate } from "redux-persist/integration/react"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate
        loading={null}
        persistor={persistor}
      >
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
