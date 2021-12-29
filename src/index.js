import React from "react";
import ReactDOM from "react-dom";
import CommonDetail from "./CommonDetail";
import faker from "faker";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <ApprovalCard>
      <CommonDetail
        author={faker.name.firstName()}
        time={faker.time.recent()}
      />
    </ApprovalCard>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
