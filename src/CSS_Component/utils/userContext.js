import { createContext } from "react";

export const UserContext = createContext({
  user: {
    name: "Dummy",
    email: "abc@gmail.com",
  },
});
