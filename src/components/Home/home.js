import React, { Component } from 'react';
import { Document, Page } from "@react-pdf/renderer";

class Home extends Component {

  render() {
		const props = this.props;
		const today = new Date();
    return <Document>
				<Page size="A4">
					<header>
						<h1>{props.sender}</h1>
						<h3>{props.position}</h3>
					</header>
					<div className="core">
						<div className="left">
							<div className="date">
							<p>{today.getDate()}</p>
							</div>
							<div className="receiver">
								<p><strong>To</strong></p>
								<p className="line">{props.receiver}</p>
								<p className="line">{props.receiverCompany}</p>
							</div>
							<div className="sender">
								<p><strong>From</strong></p>
								<p>
									<span>{props.sender}</span>
								</p>
								<p><strong>Address</strong></p>
								<p>{props.address}</p>
								<p><strong>Phone</strong></p>
								<p style={{fontSize: '14px'}}>{props.phone}</p>
								<p><strong>E-mail</strong></p>
								<p>{props.email}</p>
							</div>
						</div>
						<div className="right" >
							<p style={{marginBottom: '50px'}}>Dear <strong>{props.receiver}</strong>,</p>
							<p style={{fontSize: '14px'}}>{props.message}</p>
							<p style={{ marginTop: '50px' }}>Sincerely,</p>
							<p>{props.sender}</p>
						</div>
					</div>
				</Page>
      </Document >
  }
}

export default Home;