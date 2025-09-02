import './styledashboard.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import "../../node_modules/bootstrap-icons/font/bootstrap-icons.css";
export default function Navbar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const date = currentDate;
  const showTime = date.getHours() 
      + ':' + date.getMinutes() ;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='navbar sticky-top navbar-expand-lg bg-purple-200 text-centre vw-100 py-0 shadow'>
    <div className='container-fluid px-0'>
      <div className="justify-between navalign">
        <div className="navbar-brand text-white text-xl font-bold mx-3">Geri-Assist</div>
        <div className="navbar-nav me-auto mb-lg-0 mt-1">
          <input type="text" placeholder="Search" className="nav-item border rounded" />
        </div>
        <div className='navbar-nav big-sc-login text-white'><Link to="/login" class="nav-link text-white">Login</Link> <Link to="/register" class="nav-link text-white">Register</Link></div>
        <div className='navbar-nav small-sc-login text-white d-none'><Link to="/login" class="nav-link px-sm-0 px-2">
                                    <i class="fs-5 bi-person text-white"></i></Link>|
                                    <Link to="/register" class="nav-link px-sm-0 px-2">
                                    <i class="fs-5 bi-person text-white"></i></Link></div>
        <div className="right-element d-flex text-sm">
          <div className='row-md-12 ps-1'>Guelph Independent Living</div>
          <div className="text-xs text-gray">{showTime}</div>
        </div>
      </div>
      </div>
    </div>
  );
}
