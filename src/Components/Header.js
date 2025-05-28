import { useState, useContext } from "react";
import "../CSS_Component/Header.css";
import { Link } from "react-router-dom";
import useOnline from "../CSS_Component/utils/useOnline";
import { UserContext } from "../CSS_Component/utils/userContext";

const LogoHead = () => {
  return (
    <>
      <div className="head-logo">
        <a href="/">
          <img
            className="head-logo-img"
            src="https://logopond.com/logos/1228631e8ff0e12a70d55f30d089c701.png"
            alt="Image not found"
          ></img>
        </a>
      </div>
    </>
  );
};

const SearchBar = ({
  text,
  setText,
  allRestaurantList,
  setRestaurantList,
  setEmptyData,
}) => {
  const filterData = (text, allRestaurantList) => {
    return allRestaurantList.filter((x) => {
      return x.info.name.toLowerCase().includes(text.toLowerCase());
    });
  };
  return (
    <>
      <div className="search-bar">
        <div className="search-input">
          <input
            type="text"
            placeholder="Search"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          ></input>
        </div>
        <div className="search-button">
          <button
            className="search-btn"
            onClick={() => {
              const data = filterData(text, allRestaurantList);
              if (data.length === 0 || !data) {
                setRestaurantList([]); // clear list
                setEmptyData(`No match found for ${"'" + text + "'"}`);
              } else {
                setRestaurantList(data);
                setEmptyData(""); // clear message when valid results
              }
            }}
          >
            🔍
          </button>
        </div>
      </div>
    </>
  );
};

const NavBarHead = () => {
  return (
    <>
      <div className="nav-bar">
        <ul className="nav-bar-ul">
          <Link to={"/Home"}>
            <li className="nav-bar-li">Home</li>
          </Link>
          <Link to={"/About"}>
            <li className="nav-bar-li">About Us</li>
          </Link>
          <Link to={"/Contact"}>
            <li className="nav-bar-li">Contact</li>
          </Link>
          <li className="nav-bar-li">Cart</li>
          <Link to={"/Instamart"}>
            <li className="nav-bar-li">Instamart</li>
          </Link>
        </ul>
      </div>
    </>
  );
};

const LogInOut = () => {
  const [logInOutToggle, setLogInOutToggle] = useState(true);
  const logBtn = logInOutToggle ? "Login" : "Logout";
  return (
    <>
      <div className="log-btn">
        <button
          type="button"
          onClick={() => {
            const data = logInOutToggle ? false : true;
            setLogInOutToggle(data);
          }}
        >
          {logBtn}
        </button>
      </div>
    </>
  );
};

export const Header = ({
  text,
  setText,
  allRestaurantList,
  setRestaurantList,
  setEmptyData,
}) => {
  const isOnline = useOnline();
  const { user } = useContext(UserContext);
  return (
    <>
      <div className="head-section">
        <LogoHead />
        <SearchBar
          text={text}
          setText={setText}
          allRestaurantList={allRestaurantList}
          setRestaurantList={setRestaurantList}
          setEmptyData={setEmptyData}
        />
        <NavBarHead />
        <h1>{isOnline ? "🟢 Online" : "🔴 Offline"}</h1>
        <h3>{user.name}</h3>
        <LogInOut />
      </div>
    </>
  );
};
