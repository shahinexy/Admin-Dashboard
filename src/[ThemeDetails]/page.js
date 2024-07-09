import React from 'react';
import { useParams } from 'react-router-dom';

import ShopListing from '../components/apps/ecommerce/ShopListing';
import BrowserStats from '../components/dashboard/analyticalDashboard/BrowserStats';
import CpuLoad from '../components/dashboard/analyticalDashboard/CpuLoad';
import DashCard from '../components/dashboard/dashboardCards/DashCard';
import BounceSales from '../components/dashboard/demographicalDashboard/BounceSales';
import ClientReview from '../components/dashboard/demographicalDashboard/ClientReview';
import CounterCard from '../components/dashboard/demographicalDashboard/CounterCard';
import VisitCard from '../components/dashboard/demographicalDashboard/VisitCard';
import VisitStatistics from '../components/dashboard/minimalDashboard/VisitStatistics';
import Blog from '../components/dashboard/extraDashboard/Blog';
import Feeds from '../components/dashboard/extraDashboard/Feeds';
import SalesChart from '../components/dashboard/extraDashboard/SalesChart';
import Sales from '../components/dashboard/minimalDashboard/Sales';
import TopCards from '../components/dashboard/extraDashboard/TopCards';
import RevenueCards from '../components/dashboard/minimalDashboard/RevenueCards';
import ReviewCard from '../components/dashboard/minimalDashboard/ReviewCard';
import SalesDifference from '../components/dashboard/minimalDashboard/SalesDifference';
import SalesOverview from '../components/dashboard/minimalDashboard/SalesOverview';
import TodoList from '../components/dashboard/minimalDashboard/TodoList';
import YearlySales from '../components/dashboard/minimalDashboard/YearlySales';
import WeatherCard from '../components/dashboard/minimalDashboard/WeatherCard';
import MonthlyTarget from '../components/dashboard/modernDashboard/MonthlyTarget';
import UserActivity from '../components/dashboard/modernDashboard/UserActivity';
import ThreeColumn from '../components/threeColumn/ThreeColumn';

const tableData = [
    {
      id:1,
      avatar: "user1",
      name: 'Hanna Gover',
      email: 'hgover@gmail.com',
      project: 'Flexy React',
      status: 'pending',
      weeks: '35',
      budget: '95K',
    },
    {
      id:2,
      avatar: "user2",
      name: 'Jonathan Gover',
      email: 'hgover@gmail.com',
      project: 'Lading pro React',
      status: 'done',
      weeks: '35',
      budget: '95K',
    },
    {
      id:3,
      avatar: "user3",
      name: 'Steave',
      email: 'hgover@gmail.com',
      project: 'Elite React',
      status: 'holt',
      weeks: '35',
      budget: '95K',
    },
    {
      id:4,
      avatar: "user4",
      name: 'Mukesh chava',
      email: 'hgover@gmail.com',
      project: 'Flexy React',
      status: 'pending',
      weeks: '35',
      budget: '95K',
    },
    {
      id:5,
      avatar: "user5",
      name: 'Thuklk luu',
      email: 'hgover@gmail.com',
      project: 'Ample React',
      status: 'done',
      weeks: '35',
      budget: '95K',
    },
  ];




const ThemeDetails = () => {
    const {id} = useParams();
    console.log(id);
    return (
        <div>
           {/* <ShopListing></ShopListing> */}

           
        </div>
    );
};

export default ThemeDetails;