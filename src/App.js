import React from "react";
import "./styles.css";
import { MyRouter } from "./router/MyRouter";
import { UserProvider } from "./providers/UserProvider";

export default function App() {
  return (
    <UserProvider>
      <MyRouter />
    </UserProvider>
  );
}
