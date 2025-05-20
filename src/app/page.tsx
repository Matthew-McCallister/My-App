'use client';

import { useState } from 'react';
import { FaGlobe, FaHeadset, FaSlidersH } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function HomePage() {
  const [domain, setDomain] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Searching for: ${domain}`);
  };

  return (
    <>
      {/* Hero Section - full viewport height, centered content */}
      <div className="bg-primary text-white d-flex flex-column justify-content-center align-items-center"
        style={{ minHeight: '70vh', padding: '2rem 1rem' }}>
        <div className="text-center" style={{ maxWidth: '600px', width: '100%' }}>
          <h1 className="display-4 fw-bold mb-4">Find your domain name</h1>
          <form className="d-flex mb-3" onSubmit={handleSearch}>
            <input
              type="text"
              className="form-control form-control-lg me-2"
              placeholder="Enter your domain name"
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
              aria-label="Domain name"
            />
            <button type="submit" className="btn btn-light btn-lg px-4">
              Search
            </button>
          </form>
          <div>
            <span className="badge bg-light text-dark me-2">.com</span>
            <span className="badge bg-light text-dark me-2">.net</span>
            <span className="badge bg-light text-dark me-2">.org</span>
            <span className="badge bg-light text-dark">.co</span>
          </div>
        </div>
      </div>
      {/* Features Section */}
      <div className="container py-5">
        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <FaGlobe size={40} className="text-primary mb-3" />
            <h4>Free Domain for 1st Year</h4>
            <p className="text-muted">Get started with a free domain name for your first year of hosting.</p>
          </div>
          <div className="col-md-4 mb-4">
            <FaHeadset size={40} className="text-primary mb-3" />
            <h4>24/7 Support</h4>
            <p className="text-muted">Our team is here to help you anytime, day or night.</p>
          </div>
          <div className="col-md-4 mb-4">
            <FaSlidersH size={40} className="text-primary mb-3" />
            <h4>Easy Domain Management</h4>
            <p className="text-muted">Manage your domains effortlessly with our intuitive control panel.</p>
          </div>
        </div>
      </div>
    </>
  );
}
