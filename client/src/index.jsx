import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

const url = 'http://localhost:3000';

/*originally, i had misread the prompt on learn and was overly ambitious for the time alotted in this short sprint. The original plan was to
complete the app in the way where there's a login page where users can save their progress if they
leave early. The server would keep track of and make decisions as to what page react should render
on the front end. If the user logs in and the current cookie doesn't match what's on the database
but if the current password and email does, then rewrite the session in the database and sending
back the approporite page where the user left off
*/
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0
    }

    cookieChecker(this); // checks the cookie for a current session

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    // for page 0
    // console.log('FirstName', e.target[0].value);
    // console.log('lastName', e.target[1].value);
    // console.log('email', e.target[2].value);
    // console.log('password', e.target[3].value);
    // console.log('current page', this.state.page);

    // for page 1
    // console.log('Address line 1', e.target[0].value);
    // console.log('Address line 2', e.target[1].value);
    // console.log('city', e.target[2].value);
    // console.log('state', e.target[3].value);
    // console.log('zip', e.target[4].value);
    // console.log('phone number', e.target[5].value);
    // console.log('current page', this.state.page);

    // for page 2
    // console.log('Card number', e.target[0].value);
    // console.log('expiry date', e.target[1].value);
    // console.log('cvv', e.target[2].value);
    // console.log('zipcode', e.target[3].value);
    // console.log('current page', this.state.page);
    let userData = { currentPage: this.state.page }

    for (let i = 0; i < e.target.length - 1; i++) { // puts the  userdata into the object to send
      userData[i] = e.target[i].value;
    }

    axios.post(url + '/cart', userData)
      .then((data) => {
        console.log('RESPONSE DATA', data.data.page);
        this.setState({ page: data.data.page }); // server returns this value to select which page to display
      })
  }

  handleLogin(e) {
    this.setState({ page: 4 })
  }

  render() {
    return (
      <div>
        <PageSelector page={this.state.page} handleSubmit={this.handleSubmit} handleLogin={this.handleLogin} />
        <code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code>
      </div>
    )
  }
}

const cookieChecker = (instance) => {
  axios.get(url + '/checkSession')
      .then((data) => {
        console.log('RESPONSE DATA', data.data.page);
        instance.setState({ page: parseInt(data.data.page) }); // server returns this value to select which page to display
      })
}

const PageSelector = ({ page, handleSubmit, handleLogin }) => {

  // Collect name, email, and password for account creation
  const CreateAccount = (handleSubmit) => {
    return (
      <div>
        <button onClick={() => { handleLogin() }}>Login instead</button>
        <h1>TotallyNotForIdentityTheft.com</h1>
        <h2>Create your account</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <label>First Name</label>
          <input type='text' id='firstname' />
          <label>Last Name</label>
          <input type='text' id='lastname' />
          <label>Email</label>
          <input type='email' id='email' />
          <label>Password</label>
          <input type='password' id='password' />
          <input type='submit' value='Submit' />
        </form>
      </div>
    )
  }

  // collect ship to address. (line 1, line 2, city, state, zip code) and #
  const CollectAddress = (handleSubmit) => {
    return (
      <div>
        <button onClick={() => { handleLogin() }}>Login instead</button>
        <h1>TotallyNotForIdentityTheft.com</h1>
        <h2>Enter your shipping info</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <label>Address line 1</label>
          <input type='text' id='address1' />
          <label>Address line 2</label>
          <input type='text' id='address2' />
          <label>City</label>
          <input type='text' id='city' />
          <label>state</label>
          <input type='text' id='state' />
          <label>Zip</label>
          <input type='text' id='zip' />
          <label>Phone #</label>
          <input type='text' id='phone' />
          <input type='submit' value='Submit' />
        </form>
      </div>
    )
  }

  // collects credit card number, expiry date, cvv, and billing zip code

  const CollectPayment = (handleSubmit) => {
    return (
      <div>
        <button onClick={() => { handleLogin() }}>Login instead</button>
        <h1>TotallyNotForIdentityTheft.com</h1>
        <h2>Enter your payment info</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <label>Card Number</label>
          <input type='text' id='cardnumber' />
          <label>Expiry date</label>
          <input type='text' id='expirydate' />
          <label>cvv</label>
          <input type='text' id='cvv' />
          <label>billing zip code</label>
          <input type='text' id='billingzip' />
          <input type='submit' value='Submit' />
        </form>
      </div>
    )
  }

  const Login = (handleSubmit) => {
    return (
      <div>
        <h1>TotallyNotForIdentityTheft.com</h1>
        <h2>Log in</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <label>Email</label>
          <input type='email' id='email' />
          <label>Password</label>
          <input type='password' id='password' />
          <input type='submit' value='Submit' />
        </form>
      </div>
    )
  }

  const CheckoutComplete = () => {
    return (
      <div>
        <h1>Your Checkout is complete!</h1>
        <h2>Your awesome items will arrive in 1-4 decades</h2>
      </div>
    )
  }

  const notFound = () => {
    return (
      <div>
        <h1>The page you are looking for is not found :(</h1>
        <h2>Status code: 418 i'm a teapot</h2>
      </div>
    )
  }

  switch (page) {
    case 0:
      return CreateAccount(handleSubmit, handleLogin);
      break;

    case 1:
      return CollectAddress(handleSubmit);
      break;

    case 2:
      return CollectPayment(handleSubmit);
      break;

    case 3:
      return CheckoutComplete();
      break;

    case 4:
      return Login(handleSubmit);
    break;

    default:
      return notFound();
  }


}

ReactDOM.render(<App />, document.getElementById('root'));