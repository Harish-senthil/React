import './card.css';
import React from 'react';
import tickIcon from '../assets/check.png';
import crossIcon from '../assets/close.png';

const Card = () => {
  return (
    <div className="card">
      <div className="label">FREE</div>
      <div className="card-header">
        <h1>$0/month</h1>
      </div>
      <hr />
      <div className="card-body">
        <p><img src={tickIcon} className="icon" /> Single User</p>
        <p><img src={tickIcon} className="icon" /> 50 GB storage</p>
        <p><img src={tickIcon} className="icon" /> Unlimited Public Projects</p>
        <p><img src={tickIcon} className="icon" /> Community access</p>
        <p className='tra'><img src={crossIcon} className="icon cross" /> Unlimited Private Projects</p>
        <p className='tra'><img src={crossIcon} className="icon cross" /> Dedicated phone Support</p>
        <p className='tra'><img src={crossIcon} className="icon cross" /> Free subdomain</p>
        <p className='tra'><img src={crossIcon} className="icon cross" /> Monthly Status Reports</p>
        <button className="button1">BUTTON</button>
      </div>
    </div>
  );
};

const Card1 = () => {
  return (
    <div className="card">
      <div className="label">PLUS</div>
      <div className="card-header">
        <h1>$9/month</h1>
      </div>
      <hr />
      <div className="card-body">
        <p><img src={tickIcon} className="icon" /> Single User</p>
        <p><img src={tickIcon} className="icon" /> 50 GB storage</p>
        <p><img src={tickIcon} className="icon" /> Unlimited Public Projects</p>
        <p><img src={tickIcon} className="icon" /> Community access</p>
        <p><img src={tickIcon} className="icon" /> Unlimited Private Projects</p>
        <p><img src={tickIcon} className="icon" /> Dedicated phone Support</p>
        <p><img src={tickIcon} className="icon" /> Free subdomain</p>
        <p className='tra'><img src={crossIcon} className="icon cross" /> Monthly Status Reports</p>
        <button className="button1">BUTTON</button>
      </div>
    </div>
  );
};

const Card2 = () => {
  return (
    <div className="card">
      <div className="label">PRO</div>
      <div className="card-header">
        <h1>$49/month</h1>
      </div>
      <hr />
      <div className="card-body">
        <p><img src={tickIcon} className="icon" /> Single User</p>
        <p><img src={tickIcon} className="icon" /> 50 GB storage</p>
        <p><img src={tickIcon} className="icon" /> Unlimited Public Projects</p>
        <p><img src={tickIcon} className="icon" /> Community access</p>
        <p><img src={tickIcon} className="icon" /> Unlimited Private Projects</p>
        <p><img src={tickIcon} className="icon" /> Dedicated phone Support</p>
        <p><img src={tickIcon} className="icon" /> Free subdomain</p>
        <p><img src={tickIcon} className="icon" /> Monthly Status Reports</p>
        <button className="button">BUTTON</button>
      </div>
    </div>
  );
};

const colu = {
  Card,
  Card1,
  Card2
};

export default colu;
