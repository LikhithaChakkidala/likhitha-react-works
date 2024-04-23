import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import EmailIcon from '@mui/icons-material/Email';
import DehazeIcon from '@mui/icons-material/Dehaze';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone'; 
import NotificationsIcon from '@mui/icons-material/Notifications';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import img1 from './assests/images/img f1.jpg';
import img2 from './assests/images/img f2.jpg';
function Home() {
  return (
      <div><br/>
        <div className='zero'>
            <h1>Overview<DehazeIcon style={{marginLeft:'10px'}}/></h1>
            <div className='demo'>
            <NotificationsIcon />
            <h4>Administrator</h4>
            </div>
        </div><br/><br/>
      <Row>
        <Col>
        <Card style={{ width: '20rem' }} className='four'>
      <Card.Body>
        <Card.Title>Document</Card.Title>
        <div className='three'><FileCopyIcon/></div>
        <Card.Subtitle><h1>146.000</h1></Card.Subtitle>
        <Card.Text>
          <TrendingUpIcon/>17% <p>Since Last Week</p>
          </Card.Text>
        </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card style={{ width: '20rem' }} className='four'>
      <Card.Body>
        <Card.Title>Contact</Card.Title>
        <div className='three'><ContactPhoneIcon/></div>
        <Card.Subtitle><h1>1400</h1></Card.Subtitle>
        <Card.Text>
        <TrendingUpIcon/>17% <p>Since Last Week</p>
          </Card.Text>
        </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card style={{ width: '20rem' }} className='four'>
      <Card.Body>
        <Card.Title>Email</Card.Title>
        <div className='three'><EmailIcon/></div>
        <Card.Subtitle><h1>150.700</h1></Card.Subtitle>
        <Card.Text>
        <TrendingUpIcon/>17% <p>Since Last Week</p>
          </Card.Text>
        </Card.Body>
    </Card>
        </Col>
      </Row><br/>
      <Container>
      <Row className='five'>
        <Col sm={6}>
          <h5>Recent Workflow <TrendingUpIcon/>17% </h5>
          <img src={img1} alt='' height={300} width={500}/>
        </Col>
        <Col sm={6}>
          <h5>Recent Marketing <TrendingUpIcon/>17% </h5>
         <img src={img2} alt='' height={300} width={500}/>
        </Col>
      </Row><br/>
      </Container>
      <Container>
      <Row className='six'>
        <Col sm={10}>
          <h1>DOCUMENT</h1>
          <p>Document Tracking Information</p>
          </Col>
          <Col sm={2}>
          <Button style={{marginTop:'20px'}}>Weekly</Button>
          </Col>
        <Row>
          <Col sm={2}>
            <h3>NAME</h3><br/>
            <p>Annual Report</p><br/>
            <p>Business Plane</p><br/>
            <p>Marketing Tools </p>
          </Col>
          <Col sm={2}>
          <h3>FILE</h3><br/>
          <p>PDF</p><br/>
          <p>WORD</p><br/>
          <p>PDF</p>
          </Col>
          <Col sm={3}>
          <h3>CATEGORY</h3><br/>
          <p>Property</p><br/>
          <p>Crypto Currency</p><br/>
          <p>Conten Creator</p>
          </Col>
          <Col sm={3}>
          <h3>AUTHOR</h3><br/>
          <p>Diana Matthews</p><br/>
          <p>Philip James</p><br/>
          <p>Amanda Ross</p>
          </Col>
          <Col sm={2}>
          <h3>STATUS</h3><br/>
          <Button className='btn btn-success'>Send</Button><br/><br/>
          <Button className='btn btn-warning'>Send</Button><br/><br/>
          <Button className='btn btn-danger'>Pending</Button>
          </Col>
        </Row>
      </Row>
      </Container>
      </div>
    
  )
}

export default Home
