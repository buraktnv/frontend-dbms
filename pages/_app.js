import Header from "../components/header/Header";
import "../styles/globals.css";
import { BasketProvider } from "../helpers/contexts/BasketContext";
import { ToastContainer } from "react-toastify";
import { UserProvider, useUserContext } from "../helpers/contexts/UserContext";

import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }) {
  const user = useUserContext();

  return (
    <div className="container px-6 mx-auto">
      <UserProvider>
        <BasketProvider>
          <Header />
          <Component {...pageProps} />
          <ToastContainer
            autoClose={1000}
            position="bottom-right"
            newestOnTop
            limit={3}
            icon={false}
            closeOnClick={true}
            pauseOnFocusLoss={false}
            pauseOnHover={false}
          />
        </BasketProvider>
      </UserProvider>
    </div>
  );
}
