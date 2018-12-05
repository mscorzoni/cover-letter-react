import React, { Component } from 'react';
import { Document, Page } from "@react-pdf/renderer";

class Home extends Component {

  render() {
		const today = new Date();
    return <Document>
				<Page size="A4">
					<header>
						<h1>Marcos Scorzoni Lessa</h1>
						<h3>Junior Developer</h3>
					</header>
					<div className="core">
						<div className="left">
							<div className="date">
							<p>{today.getDate()}</p>
							</div>
							<div className="receiver">
								<p><strong>To</strong></p>
								<p className="line">Lizzy Tam</p>
								<p className="line">Company</p>
							</div>
							<div className="sender">
								<p><strong>From</strong></p>
								<p>
									<span>Marcos Scorzoni Lessa</span>
								</p>
								<p><strong>Address</strong></p>
								<p>11 Flat Vancouver, London, United Kingdom</p>
								<p><strong>Phone</strong></p>
								<p style={{fontSize: '14px'}}>+44 07725 147 237</p>
								<p><strong>E-mail</strong></p>
								<p>mscorzoni@icloud.com</p>
							</div>
						</div>
						<div className="right" >
							<p style={{marginBottom: '50px'}}>Dear <strong>Lizzy Tam</strong>,</p>
							<p style={{fontSize: '14px'}}>Mussum Ipsum, cacilds vidis litro abertis. 
							Diuretics paradis num copo é motivis de denguis. 
							Atirei o pau no gatis, per gatis num morreus. Copo 
							furadis é disculpa de bebadis, arcu quam euismod magna. 
							Viva Forevis aptent taciti sociosqu ad litora torquent.
							Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis 
							que eu levo! Sapien in monti palavris qui num significa nadis 
							i pareci latim. Interagi no mé, cursus quis, vehicula ac nisi.  
							Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie
							leo, vitae iaculis nisl.</p>
							<p style={{ marginTop: '50px' }}>Sincerely,</p>
							<p>Marcos Scorzoni Lessa</p>
						</div>
					</div>
				</Page>
      </Document >
  }
}

export default Home;