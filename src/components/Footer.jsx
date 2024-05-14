import React from "react";

function Footer() {
  let year = new Date().getFullYear();
  return <footer>Copyright@{year}</footer>;
}

export { Footer };
