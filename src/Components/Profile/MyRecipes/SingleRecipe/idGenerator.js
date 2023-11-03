import React from "react";

let id = 2;
const idGenerator = () => {
  id += 1;
  return id;
};

export default idGenerator;
