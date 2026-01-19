import React, { useEffect, useState } from 'react';
import DashboardCard from './DashboardCard';
import MapSection from './MapSection';

export default function Dashboard() {
    const [kpiData, setKpiData] = useState([]);
    useEffect(() => {
        const fetchKpiData = async () => {
            try {
                const res = await fetch("http://127.0.0.1:5000/dashboard/stats");
                const data = await res.json();
                setKpiData(data);
            } catch (error) {
                console.error("Failed to fetch KPI data:", error);
            }
        };

        fetchKpiData();
    }, []);
  

  return (
    <div className="container-fluid p-4 animate-fadeIn" style={{ background: 'linear-gradient(135deg, #f5f7fa 0%, #e9ecef 100%)', minHeight: 'calc(100vh - 60px)' }}>
      {/* Page Header */}
      <div className="page-header">
        <h1 className="page-title">
          <i className="bi bi-pie-chart-fill me-3" style={{ fontSize: '2.5rem' }}></i>
          Live Dashboard
        </h1>
        <p className="page-subtitle">Real-time overview of your healthcare operations</p>
      </div>

      {/* KPI Cards Grid */}
      <div className="row g-3 mb-4">
        {kpiData.map((item, index) => (
          <div
            key={index}
            className="col-12 col-sm-6 col-md-4 col-lg-3 animate-slideUp"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <DashboardCard {...item} />
          </div>
        ))}
      </div>

      {/* Map Section */}
      <div className="content-card animate-slideUp" style={{ animationDelay: '200ms' }}>
        <h3 className="mb-4 d-flex align-items-center gap-2" style={{ color: 'var(--gray-800)' }}>
          <i className="bi bi-geo-alt-fill" style={{ color: 'var(--primary-purple)' }}></i>
          Live Employee Locations
        </h3>
        <MapSection />
      </div>
    </div>
  );
}
