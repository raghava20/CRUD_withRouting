import './App.css';
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SideBar from './components/SideBar';
import Content from './components/Content';
import AddContent from './components/AddContent';
import EditContent from './components/EditContent';
import EditProfilePic from './components/EditProfilePic';
function App() {
  let [data, setData] = useState([
    {
      user: "Mike",
      productName: "Fan",
      noOfProduct: "2",
      Due: "Paid",
      status: "In-Progress",
      profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBkL83mkJ5ZSzQ0j5qansV83VJ2EgYmqHpCw&usqp=CAU"
    },
    {
      user: "Steve",
      productName: "Refrigerator",
      noOfProduct: "4",
      Due: "Not Paid",
      status: "Pending",
      profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYH_VDaGfxQ_cPhkgDPyoxXJgnnKHzEw7kdg&usqp=CAU"
    },
    {
      user: "Michael",
      productName: "LED TV",
      noOfProduct: "2",
      Due: "Not Paid",
      status: "Pending",
      profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1h6DPxI_QiEVN9xNst-Z8hn1Yq-eF6ydo-g&usqp=CAU"
    },
    {
      user: "Rob",
      productName: "Fruit Mixer",
      noOfProduct: "1",
      Due: "Not Paid",
      status: "Pending",
      profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh-J04gXCOsTHzwjH5Ay2IWfnWBzFfBlP0sg&usqp=CAU"
    },
    {
      user: "Rodges",
      productName: "MicroOven",
      noOfProduct: "1",
      Due: "Paid",
      status: "In-Progress",
      profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe4jUpwXdtBRHDOqYCdCHVTBRv2TAB58cKyA&usqp=CAU"
    },
    {
      user: "Alex",
      productName: "Fan",
      noOfProduct: "4",
      Due: "Not Paid",
      status: "Pending",
      profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ05djZ0bIb21dCat3HSbJAarYnt9dEPGoEqg&usqp=CAU"
    }
  ])
  return (
    <>
      <Router>
        <div style={{ display: "grid", gridTemplateColumns: "18% 78%" }}>
          <div>
            <SideBar />
          </div>
          <div>
            <Routes>
              <Route path="/ProductAndUsers" element={<Content data={data} setData={setData} />} />
              <Route exact path="/" element={<Content data={data} setData={setData} />} />
              <Route path="/add-user" element={<AddContent data={data} setData={setData} />} />
              <Route path="/edit-user/:id" element={<EditContent data={data} setData={setData} />} />
              <Route path="/edit-profile/:id" element={<EditProfilePic data={data} setData={setData} />} />
              {/* Added route for editing the existing user */}
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
