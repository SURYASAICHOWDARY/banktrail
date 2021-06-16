import React,{Fragment,useEffect} from "react";
import {Card} from "reactstrap";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from './spinner';
import { getCustomer } from "../Actions/customers.js";
import {Link} from 'react-router-dom'
// import {info,light} from 'bootstrap/dist/css/bootstrap.min.css';


const ViewCustomer = ({ getCustomer, customer:{ customer, loading}, match}) => {

    useEffect(()=>{
      getCustomer(match.params.id);
    }, [getCustomer, match.params.id]);
  
    return (
      <Fragment>
      {loading? (
        <Spinner />
      ):(

        <Fragment> 
        
        
            
            {customer==null ?(
                <h4> Cannot Get Profile </h4>
            ):(
              <div className=" container">
              <h1>{customer.name}</h1>
              <h2> {customer.email} </h2>
              <h3> {customer.Balance}</h3>
              <Link to ={`/viewCustomers/${customer._id}/transaction`} className="button"> Transfer Funds</Link>
              </div>
            )}
        </Fragment>
      )}
      {console.log(customer)}
      </Fragment>
    );
  };
  
  ViewCustomer.propTypes = {
    getCustomer: PropTypes.func.isRequired,
    customer:  PropTypes.object.isRequired
  };
  
  const mapStateToProps = state =>({
    customer: state.customer
  });
  
  export default connect (mapStateToProps, { getCustomer})(ViewCustomer);

          /* bg={info} text={light} style={{ width: '18rem' }} */