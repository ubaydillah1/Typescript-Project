import React from "react";
import Greet from "../Greet";

const CustomComponent = (props: React.ComponentProps<typeof Greet>) => {
  return <div>{props.isLogin ? "Is Logged in" : "is Logout"}</div>;
};

export default CustomComponent;
