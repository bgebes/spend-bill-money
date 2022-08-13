import React from 'react';
import ImgBillGates from '../../assets/billgates.jpg';
import './Header.css';

function Header() {
  return (
    <div className="container">
      <div className="header d-flex flex-column justify-content-center align-items-center mt-5">
        <img className="rounded-pill" src={ImgBillGates} alt="Bill Gates" />
        <div className="h2 fw-bold mt-3">Spend Bill Gates' Money(Not Real)</div>
      </div>
    </div>
  );
}

export default Header;
