import { useRouteError } from "react-router-dom";
import "../CSS_Component/Error.css";

export const Error = () => {
  const error = useRouteError();
  console.log({ error });
  return (
    <>
      <div className="error">
        <h1>Oops!</h1>
        <h2>Something went wrong!!!</h2>
        <h3>{error.status + " : " + error.statusText}</h3>
      </div>
    </>
  );
};
