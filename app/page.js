
import Header from "@/components/Header";
import TopCard from '@/components/TopCards';
import Linechart from '@/components/LineChart';
import SideBar from "@/components/Sidebar";

// import { useState, useEffect } from "react";


// const Home = async () => {
  // const [userData, setuserData] = useState(null);
   

  //   const fetchUserData = async () => {
  //     try {
  //       const res = await fetch('http://localhost:3000/api/users');

  //       //console.log('res ' + res);
  //       const data = await res.json();
  //       //console.log('data ' + data);
  //       //return JSON.stringify(data);
  //       return data;
  //     } catch (error) {
  //       console.log(error);
  //     } 
  //   }
  //   //console.log('yoooo')
  //   const Data = await fetchUserData();

  
  // console.log("user data: " + Data);

const Home = () => {
  return (
    <>
      <SideBar/>
      <div className="ml-20">
        <Header/>
        <TopCard />
        <Linechart />
      </div>
    </>
  )
}

export default Home