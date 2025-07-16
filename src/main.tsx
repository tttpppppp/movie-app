import { createRoot } from "react-dom/client";
import "./index.css";
import RouterElement from "../useRouterElement.tsx";
import { BrowserRouter } from "react-router-dom";
import ModalProvider from "./context/ModalProvider.tsx";
import { Suspense } from "react";
import Loading from "./components/Loading.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ModalProvider>
      <Suspense fallback={<Loading />}>
        <RouterElement />
      </Suspense>
    </ModalProvider>
  </BrowserRouter>
);
