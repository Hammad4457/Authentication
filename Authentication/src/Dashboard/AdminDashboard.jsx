import React, { useState, useEffect } from "react";

import MenuComponent from "../General Components/MenuComponent";
import AnalyticsUser from "../General Components/Analytics_User";
import Header from "../General Components/Header";

function AdminDashboard() {
  return (
    <div>
      <Header pageName="Dashboard"></Header>
      <div className="flex w-full h-full ">
        <div className="w-[16.7%] h-auto">
          <MenuComponent color1="blue-800"></MenuComponent>
        </div>
        <div className="w-[84.4%] ">
          <AnalyticsUser></AnalyticsUser>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
