import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Checkout extends React.Component {

  render(){
  const total = this.props.location.state.total;
  if(!this.props.auth.isSignedIn)
  return <h1 className="text-center">Please sign in with Google to proceed to Checkout</h1>
  
  return (
    <div className="ui container" style={{marginTop : "20px"}}>
    <h2>Hi, {this.props.auth.username}</h2>
    <h3>You will be paying a total of ${total}</h3>
    <form className="ui form">
    <h4 className="ui dividing header">Billing Information</h4>
  <div className="field">
    <label>Card Type</label>
    <div className="ui selection dropdown">
      <input type="hidden" name="card[type]"/>
      <div className="default text">Type</div>
      <i className="dropdown icon"></i>
      <div className="menu">
        <div className="item" data-value="visa">
          <i className="visa icon"></i>
          Visa
        </div>
        <div className="item" data-value="amex">
          <i className="amex icon"></i>
          American Express
        </div>
        <div className="item" data-value="discover">
          <i className="discover icon"></i>
          Discover
        </div>
      </div>
    </div>
  </div>
  <div className="fields">
    <div className="seven wide field">
      <label>Card Number</label>
      <input type="text" name="card[number]" maxLength="16" placeholder="Card No."/>
    </div>
    <div className="three wide field">
      <label>CVC</label>
      <input type="text" name="card[cvc]" maxLength="3" placeholder="CVV"/>
    </div>
    <div className="six wide field">
      <label>Expiration</label>
      <div className="two fields">
        <div className="field">
          <select className="ui fluid search dropdown" name="card[expire-month]">
            <option value="">Month</option>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
        <div className="field">
          <input type="text" name="card[expire-year]" maxLength="4" placeholder="Year"/>
        </div>
      </div>
    </div>
  </div>
  <Link className="ui button" to="/hire">Submit Order</Link>
    </form>
    </div>
  );
}}

const matchStateToProps = (state) =>{
  return {
    auth : state.auth
  }
}

export default connect(matchStateToProps, {})(Checkout);