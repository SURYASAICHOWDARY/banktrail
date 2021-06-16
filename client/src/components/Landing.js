import React from 'react';
import {Link} from 'react-router-dom';

 const Landing = () => {
    return (
        <section className="landing">
            <div className="dark-overlay">
                <div className="landing-text">
                    <h1 > Crypto Bank </h1>
                    <p className="lead">
                       Leading Bank with World Class  Banking.
                    </p>
            <div className="buttons">
            <Link to="/viewCustomers" className="btn btn-primary"> View Customers</Link>
            <Link to="/history" className="btn btn-light"> History</Link>
          </div>
        </div>
      </div>
    </section>
    )
}

export default Landing;
