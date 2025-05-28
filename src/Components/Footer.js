import { useContext } from "react";
import { UserContext } from "../CSS_Component/utils/userContext";
import "../index.css";

export const Footer = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      <div className="footer-body">
        <h1>Footer</h1>
        <p className="context-kingcafe">Sponsered by : {user.name}</p>
      </div>
    </>
  );
};
