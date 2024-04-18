import React from "react";
import MenuComponent from "../General Components/MenuComponent";
import Analytics_User from "../General Components/Analytics_User";
function AdminDashboard() {
  return (
    <div className="flex h-auto">
        <div className="w-[16.6%]">
        <MenuComponent></MenuComponent>
        </div>
        <div className="w-[84.4%]">
        <Analytics_User></Analytics_User>
        </div>
    </div>
    
  );
}

export default AdminDashboard;
