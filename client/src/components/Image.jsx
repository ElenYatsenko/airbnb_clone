import React from "react";

const Image = ({ src, ...rest }) => {
  console.log(src);
  src =
    src && src.includes("https://")
      ? src
      : "http://localhost:4000/uploads/" + src;

  return <img {...rest} src={src} alt="" />;
};

export default Image;
