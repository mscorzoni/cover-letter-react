import React, { Component } from 'react';
import ReactToPrint from "react-to-print";

import Home from '../Home/home';

class Form extends Component {

  state = {
    receiver: 'Receiver',
    receiverCompany: 'Company',
    position: 'Fullstack developer',
    sender: 'Marcos Scorzoni',
    address: '11 Flat, Vancouver House, Surrey Quays Road, London, UK',
    phone: '+44 07225 147 237',
    email: 'mscorzoni@icloud.com',
    message: 'message'
  }

  // inputHandler = (item) => {
  //  return (
  //   <input
  //     placeholder="Receiver's Name"
  //     onChange={(element,item) => this.setState({
  //       item: 12
  //     })
  //   }
  //   />)
	// }
	
	submitButton = () => (
			<div>
				<ReactToPrint
					trigger={() => <a href="#">Print</a>}
					content={() => this.componentRef}
				/>
				<div className="home-hidden">
					<Home ref={el => (this.componentRef = el)} />
				</div>
			</div>
	)
    
  render() {
    console.log(this.state)
    return (
      <div className="logContainer">
        <form>
          <h2>Cover Letter Generator</h2>
          <p>Receiver</p>
          <input 
            placeholder="Receiver's Name"
            onBlur={(element) => this.setState({
              receiver: element.target.value
            })}
          />
          <p>Company</p>
          <input
            placeholder="Receiver's Company"
            onBlur={(element) => this.setState({
              receiverCompany: element.target.value
            })}
          />
          <p>Position</p>
          <input
            placeholder="Position applied for"
            onBlur={(element) => this.setState({
              position: element.target.value
            })}
          />
          <p>Sender</p>
          <input
            placeholder="Sender's Name"
            onBlur={(element) => this.setState({
              sender: element.target.value
            })}
          />
          <p>Address</p>
          <input
            placeholder="Sender's Address"
            onBlur={(element) => this.setState({
              address: element.target.value
            })}
          />
          <p>Phone</p>
          <input
            placeholder="Sender's Phone"
            onBlur={(element) => this.setState({
              phone: element.target.value
            })}
          />
					<p>Email</p>
					<input
						type="email"
						placeholder="Sender's Email"
						onBlur={(element) => this.setState({
							email: element.target.value
						})}
					/>
          <p>Message</p>
          <textarea
            onBlur={(element) => this.setState({
              message: element.target.value
            })}
          />
					<button>
						{this.submitButton()}
					</button>
        </form>
      </div>
    );
  }
}

export default Form;