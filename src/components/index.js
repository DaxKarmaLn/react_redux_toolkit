import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  clearData,
  addData,
  removeData,
  dynamicAdd,
  dynamicRemove,
  dynamicClear,
} from "../redux/slice/slice";

export default function Index() {
  const counter = useSelector((store) => store.count.total);
  const dynamicCounter = useSelector((store) => store.count.dynamicTotal);
  const dispatch = useDispatch();
  const [state, setState] = useState(0);

  function handleClear() {
    setState(0);
    dispatch(dynamicClear());
  }

  return (
    <>
      <div
        style={{
          textAlign: "center",
          backgroundColor: "#eef7fa",
          width: "40%",
          margin: "50px auto",
          padding: "50px",
        }}
      >
        <h1>
          <i>
            <u>Counter Webapp Using Redux-Reducer</u>
          </i>
        </h1>
        <br />
        <h2>
          <i>
            <u>Update By 1: </u>
          </i>
        </h2>
        <div style={{ fontSize: "30px" }}>
          <b>Counter: {counter}</b>
        </div>
        <br />
        <button
          style={{
            margin: "20px",
            height: "40px",
            fontSize: "20px",
            backgroundColor: "#16d3f1",
          }}
          onClick={() => dispatch(addData())}
        >
          Increment
        </button>
        <button
          style={{
            margin: "20px",
            height: "40px",
            fontSize: "20px",
            backgroundColor: "#16d3f1",
          }}
          onClick={() => dispatch(removeData())}
        >
          Decrement
        </button>
        <button
          style={{
            margin: "20px",
            height: "40px",
            fontSize: "20px",
            backgroundColor: "#16d3f1",
          }}
          onClick={() => dispatch(clearData())}
        >
          Clear
        </button>
        <br />
        <br />

        <h2>
          <i>
            <u>Dynamic Update: </u>
          </i>
        </h2>
        <div style={{ fontSize: "30px" }}>
          <b>Counter: {dynamicCounter}</b>
        </div>
        <br />
        <label style={{ fontSize: "30px" }}>Enter Number: </label>
        <input
          type="number"
          value={state}
          style={{ width: "200px", height: "30px", fontSize: "20px" }}
          onChange={(e) => setState(parseInt(e.target.value))}
        />
        <br />
        <br />
        <button
          style={{
            margin: "20px",
            height: "40px",
            fontSize: "20px",
            backgroundColor: "#16d3f1",
          }}
          onClick={() => dispatch(dynamicAdd(state))}
        >
          Increment
        </button>
        <button
          style={{
            margin: "20px",
            height: "40px",
            fontSize: "20px",
            backgroundColor: "#16d3f1",
          }}
          onClick={() => dispatch(dynamicRemove(state))}
        >
          Decrement
        </button>
        <button
          style={{
            margin: "20px",
            height: "40px",
            fontSize: "20px",
            backgroundColor: "#16d3f1",
          }}
          onClick={() => handleClear()}
        >
          Clear
        </button>
      </div>
    </>
  );
}
