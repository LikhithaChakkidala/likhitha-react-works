import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Button from 'react-bootstrap/Button';
import img3 from './assests/images/img f3.jpg';
import img4 from './assests/images/img f4.jpg';
import img5 from './assests/images/img f5.gif';
import img6 from './assests/images/img f6.gif';
import img7 from './assests/images/img f7.gif';
import img8 from './assests/images/img f8.jpg';
function ChatInteration(){
   return (
    <div>
      <h1 style={{color:'white'}}>Energy Dashboard</h1>
     <div className='two'>
      <p style={{marginLeft:'50px', marginRight:'50px'}}>Today</p>
      <p style={{marginRight:'50px'}}>Month</p>
      <p style={{marginRight:'50px'}}>Year</p>
     </div><br/><br/>
     <Container >
        <Row className='ego' style={{backgroundColor:'#2B7C85'}}>
          <Col>
          <h4 style={{marginTop:'20px'}}>Total Incom</h4><br/>
          <h1>$14,025</h1><br/>
          <h6>3.78 <ArrowDropDownIcon/>This year</h6><br/>
          </Col>
          <Col>
          <h4 style={{marginTop:'20px'}}>Seesion</h4><br/>
          <h1>$2025</h1><br/>
          <h6>3.78 <ArrowDropDownIcon/>This year</h6><br/>
          </Col>
          <Col>
          <h4 style={{marginTop:'20px'}}>Ethereum Wallet</h4><br/>
          <h1>$8025</h1><br/>
          <h6>3.78 <ArrowDropDownIcon/>This year</h6><br/>
          </Col>
          <Col>
          <h4 style={{marginTop:'20px'}}>Number of Clients</h4><br/>
          <h1>$5645</h1><br/>
          <h6>3.78 <ArrowDropDownIcon/>This year</h6><br/>
          </Col>
        </Row>
      </Container><br/><br/>
     <div>
      <Row>
        <Col>
       <img src={img3} alt='' height={200} width={350}/>
       </Col>
       <Col>
       <img src={img4} alt='' height={200} width={350}/>
       </Col>
       <Col>
       <img src={img5} alt='' height={200} width={350}/>
       </Col>
      </Row><br/>
      <Row>
        <Col>
        <img src={img6} alt='' height={200} width={350}/>
        </Col>
        <Col>
        <img src={img7} alt='' height={200} width={350}/>
        </Col>
        <Col>
        <img src={img8} alt='' height={200} width={350}/>
        </Col>
      </Row><br/>
      <Container>
        <Row className='eight'  style={{backgroundColor:'#4297A0'}}>
          <Col>
          <h1 style={{marginTop:'10px'}}>Reach Financial Goles Faster</h1>
          <p>Payment is the exchange of money, goods, or services for goods and services in an
             acceptable amount to both parties and has been agreed upon in advance.</p>
             <Button style={{marginTop:'10px',borderRadius:'10px',marginBottom:'10px',backgroundColor:'#C55FFC'}}>LearnMore</Button>
          </Col>
          <Col>
    <Card className='nine' style={{ width:'20rem',height:'170px',marginTop:'30px',marginLeft:'80px',borderRadius:'20px'}}>
      <Card.Body>
        <Card.Title>Universal Card</Card.Title><br/>
          <h3>5214 4321 5678 4345</h3><br/>
          <p>Money pament</p>
         </Card.Body>
    </Card>
          </Col>
        </Row>
      </Container>
     </div>
     </div>
  )
}
export default ChatInteration