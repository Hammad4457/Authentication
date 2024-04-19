import React from "react";
import MenuComponent from "../General Components/MenuComponent";
import Header from "../General Components/Header";
function AdminDashboard() {

  const data=[
    {CustomerName:"John Wick",ProjectName:"Lorem ipsum",TaskStartDate:"Ross Gellar",TaskEndDate:"01-03-2024",OverdueDay:"3"},
    {CustomerName:"Adam Smith",ProjectName:"Lorem ipsum",TaskStartDate:"Ross Gellar",TaskEndDate:"01-03-2024",OverdueDay:"2"},
    {CustomerName:"Hamza Khalid",ProjectName:"Lorem ipsum",TaskStartDate:"Ross Gellar",TaskEndDate:"04-03-2024",OverdueDay:"2"},
    {CustomerName:"Azaan Noor",ProjectName:"Lorem ipsum",TaskStartDate:"Ross Gellar",TaskEndDate:"07-03-2024",OverdueDay:"5"},
    {CustomerName:"Ibrahim Pasha",ProjectName:"Lorem ipsum",TaskStartDate:"Ross Gellar",TaskEndDate:"08-03-2024",OverdueDay:"3"},
    {CustomerName:"Haider Ali",ProjectName:"Lorem ipsum",TaskStartDate:"Ross Gellar",TaskEndDate:"11-03-2024",OverdueDay:"7"},
    {CustomerName:"Nasar Haroon",ProjectName:"Lorem ipsum",TaskStartDate:"Ross Gellar",TaskEndDate:"09-03-2024",OverdueDay:"3"}
]
  return (
    <div>
      <Header></Header>
        <div className="flex h-auto">
             <div className="flex h-screen w-[16.6%] "> 
            
             <MenuComponent></MenuComponent>
            </div>
            <div className="w-[84.4%]  border-1   bg-[gray]">
              <div className=" h-screen w-[82%] mx-auto mt-12 mb-12 bg-white">
                <h1 className="font-bold mx-2">Online User</h1>
                <div className="grid grid-cols-5 space-x-4 mt-5 px-8 ">
                  <div >
                    <h1 className="font-bold">Customer Name</h1>
                        <ul>
                        {data.map((users,index)=>(
                            <li key={index}>
                            <p className="mt-8 text-blue-700 underline decoration-blue-900">{users.CustomerName}</p>
                            </li>
                        
                          ))}
                          </ul>
                  </div>
                  <div >
                    <h1 className="font-bold">Project Name</h1>
                    <ul>
                        {data.map((users,index)=>(
                            <li key={index}>
                            <p className="mt-8">{users.ProjectName}</p>
                            </li>
                        
                          ))}
                          </ul>
                  </div>
                  <div >
                    <h1 className="font-bold">Task Start Date</h1>
                    <ul>
                        {data.map((users,index)=>(
                            <li key={index}>
                            <p className="mt-8">{users.TaskStartDate}</p>
                            </li>
                        
                          ))}
                          </ul>
                  </div>
                  <div >
                    <h1 className="font-bold">Task End Date</h1>
                    <ul>
                        {data.map((users,index)=>(
                            <li key={index}>
                            <p className="mt-8 ">{users.TaskEndDate}</p>
                            </li>
                        
                          ))}
                          </ul>
                  </div>
                  <div >
                    <h1 className="font-bold">OverDue Day</h1>
                    <ul>
                        {data.map((users,index)=>(
                            <li key={index}>
                            <p className="mt-8">{users.OverdueDay}</p>
                            </li>
                        
                          ))}
                          </ul>
                  </div>
                
                  </div>

              </div>
            
            </div>
        </div>
      </div> 
    
  );
}

export default AdminDashboard;
