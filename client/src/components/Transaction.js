import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
//import { setAlert } from '../../actions/alert';
import { postTransaction } from '../Actions/transaction';
import PropTypes from 'prop-types';

const Transaction = ({ postTransaction}) => {
  const [formData, setFormData] = useState({
    sender:'',
    receiver:'',
    amount:null
  });

  const { sender, receiver, amount} = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    postTransaction(formData);
    console.log(formData)
  };

  return (
    <Fragment>
      <h1 className="large text-primary"> Transaction </h1>
      <p className="lead">
         Create Your Account
      </p>
      <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="From"
            name="sender"
            value={sender}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
        <input
            type="text"
            placeholder="receiver"
            name="receiver"
            value={receiver}
            onChange={onChange}
          />
      {/* <div class="form-floating">
      <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
      <option selected>Open this select menu</option>
      <option name="M.Nageswara Rao" value={receiver}  onChange={onChange}>M.Nageswara Rao</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
    <label for="floatingSelect">Works with selects</label>
</div> */}
          
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Amount"
            name="amount"
            value={amount}
            onChange={onChange}
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Transfer" />
      </form>
      <p className="my-1">
         <Link to="/viewCustomers">Back to customers</Link>
      </p>
    </Fragment>
  );
};

Transaction.propTypes = {
  // setAlert: PropTypes.func.isRequired,
  postTransaction: PropTypes.func.isRequired,
  
};

export default connect(null,{ postTransaction })(Transaction);