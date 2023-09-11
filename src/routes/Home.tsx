import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
//css
import '../assets/css/main.scss';
//auth
import Login from "../pages/authentication/login/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import "../assets/css/main.scss";
//route
import {LOGIN,DASHBOARD,ANALYTICS, CREATE_PLANS, HISTORY} from "../helper/PageRoute";
import AnalyticsFinance from "../pages/analytics-finance/AnalyticsFinance";
import CreatePlan from "../pages/plans/create-plans/CreatePlan";
import PlanHistory from "../pages/plans/plan-history/PlanHistory";



const Home = () => {
  return (
    <div className="main">   
        <BrowserRouter>       
      <Routes>
      <Route path={LOGIN} element={<Login/>}/>
        <Route path={DASHBOARD} element={ <Dashboard/>}>
          <Route index element={<Dashboard/>} />      
          <Route path={ANALYTICS} element={<AnalyticsFinance/>} />
          <Route path={CREATE_PLANS} element={<CreatePlan />}>              
              <Route index element={<CreatePlan />} />
              <Route path={HISTORY} element={<PlanHistory />} />            
            </Route>
            {/* <Route path={All_SCHOOL} element={<School />}>              
              <Route index element={<School />} />
              <Route path={ADD_SCHOOL} element={<AddSchool />} />
              <Route path={VIEW_SCHOOL} element={<View_School />} />
            </Route> */}      
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default Home;