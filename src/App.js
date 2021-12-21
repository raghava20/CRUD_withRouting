import './App.css';
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SideBar from './components/SideBar';
import Content from './components/Content';
import AddContent from './components/AddContent';
function App() {
  let [data, setData] = useState([
    {
      user: "Mike",
      productName: "Fan",
      noOfProduct: "2",
      Due: "Paid",
      status: "In-Progress",
    },
    {
      user: "Steve",
      productName: "Refrigerator",
      noOfProduct: "4",
      Due: "NotPaid",
      status: "Pending",
    },
    {
      user: "Michael",
      productName: "LED TV",
      noOfProduct: "2",
      Due: "NotPaid",
      status: "Pending",
    },
    {
      user: "Rob",
      productName: "Fruit Mixer",
      noOfProduct: "1",
      Due: "NotPaid",
      status: "Pending",
    },
    {
      user: "Rodges",
      productName: "MicroOven",
      noOfProduct: "1",
      Due: "Paid",
      status: "In-Progress",
    },
    {
      user: "Alex",
      productName: "Fan",
      noOfProduct: "4",
      Due: "NotPaid",
      status: "Pending",
    }
  ])
  return (
    <>
      <Router>
        <div style={{ display: "grid", gridTemplateColumns: "15% 85%" }}>
          <div>
            <SideBar />
          </div>
          <div>
            <Routes>
              <Route path="/ProductAndUsers" element={<Content data={data} setData={setData} />} />
              <Route exact path="/" element={<Content data={data} setData={setData} />} />
              <Route path="/add-user" element={<AddContent data={data} setData={setData} />} />

            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
