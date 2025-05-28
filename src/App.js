import { Header } from "./Components/Header.js";
import { Body } from "./Components/Body.js";
import { Footer } from "./Components/Footer.js";
import { Suspense, useEffect, useState } from "react";
import Instamart from "./Components/Instamart.js";
//import { About } from "./Components/About.js";
//import { Contact } from "./Components/Contact.js";
import { Error } from "./Components/Error.js";
import {
  createBrowserRouter,
  Outlet,
  useOutletContext,
} from "react-router-dom";
import { RestaurantMenu } from "./Components/RestaurantMenu.js";
import useRestaurant from "./CSS_Component/utils/useRestaurant.js";
import { React, lazy, Suspense } from "react";
import { UserContext } from "./CSS_Component/utils/userContext.js";

const About = lazy(() => import("./Components/About"));
const Contact = lazy(() => import("./Components/Contact.js"));

//app
const App = () => {
  const [text, setText] = useState("");
  const [emptyData, setEmptyData] = useState("");
  const { restaurantList, setRestaurantList, allRestaurantList, loading } =
    useRestaurant();
  const [user, setUser] = useState({
    name: "Kingcafe",
  });

  return (
    <>
      <UserContext.Provider value={{ user: user }}>
        <Header
          text={text}
          setText={setText}
          allRestaurantList={allRestaurantList}
          setRestaurantList={setRestaurantList}
          setEmptyData={setEmptyData}
        />
        <Outlet context={{ restaurantList, loading, emptyData }} />
        <Footer />
      </UserContext.Provider>
    </>
  );
};

const BodyWrapper = () => {
  const { restaurantList, loading, emptyData } = useOutletContext();
  console.log({ restaurantList, loading, emptyData });
  return (
    <Body
      restaurantList={restaurantList}
      loading={loading}
      emptyData={emptyData}
    />
  );
};

//Router
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true, // ✅ Render BodyWrapper when path is "/"
        element: <BodyWrapper />,
      },
      {
        path: "/Home",
        element: <BodyWrapper />,
      },
      {
        path: "/About",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/Contact",
        element: (
          <Suspense fallback={<h1>Loading.....!</h1>}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/Instamart",
        element: (
          <Suspense fallback={<h1>Loading.....!</h1>}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:params",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

export default App;
