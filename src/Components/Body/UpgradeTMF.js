import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import StoreIcon from '@mui/icons-material/Store';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import TwitterIcon from '@mui/icons-material/Twitter';
import Card from 'react-bootstrap/Card';
import img20 from './assests/images/img f20.png';
import img19 from './assests/images/img f19.png';
import img21 from './assests/images/img f21.png';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import img22 from './assests/images/img f22.png';
import img23 from './assests/images/img f23.png';
import img24 from './assests/images/img f24.png';

import { Container } from 'react-bootstrap';
function UpgradeTMF() {
  return (
    <div>
        <Row style={{color:'white',marginTop:'20px'}}>
        <h1>Material Dashboard</h1>
      </Row><br/>
      <Row>
        <Col>
    <Card style={{ width: '16rem' }}>
        <Row>
            <Col>
        <p>Used Space</p>
        <h4>49/50 GB</h4>
        </Col>
        <Col>
        <div style={{ border:'1px solid orange',height:'70px',width:'80px',backgroundColor:'orange'}}><ContentCopyIcon style={{marginTop:'15px',marginLeft:'25px',color:'white'}}/></div>
        </Col>
        </Row>
        <hr></hr>
        <p>Get More Space</p>
    </Card>
    </Col>
    <Col>
    <Card style={{ width: '16rem' }}>
        <Row>
            <Col>
            <p>Revenue</p>
            <h4>$34,245</h4>
            </Col>
            <Col>
        <div style={{ border:'1px solid lightgreen',height:'70px',width:'80px',backgroundColor:'lightgreen'}}><StoreIcon style={{marginTop:'15px',marginLeft:'25px',fontSize:'35px',color:'white'}}/></div>
        </Col>
        </Row>
        <hr></hr>
        <p>Last 24 Hours</p>
    </Card>
    </Col>
    <Col>
    <Card style={{ width: '16rem' }}>
        <Row>
            <Col>
            <p>Fixed Issues</p>
            <h4>75</h4>
            </Col>
            <Col>
        <div style={{ border:'1px solid red',height:'70px',width:'80px',backgroundColor:'red'}}><ErrorOutlineIcon style={{marginTop:'15px',marginLeft:'25px',fontSize:'35px',color:'white'}}/></div>
        </Col>
        </Row>
        <hr></hr>
        <p>Tracked From Github</p>
    </Card>
    </Col>
    <Col>
    <Card style={{ width: '16rem' }}>
        <Row>
            <Col>
            <p>Followers</p>
        <h4>+245</h4>
            </Col>
            <Col>
        <div style={{ border:'1px solid skyblue',height:'70px',width:'80px',backgroundColor:'skyblue'}}><TwitterIcon style={{marginTop:'15px',marginLeft:'25px',fontSize:'35px',color:'white'}}/></div>
        </Col>
        </Row>
        <hr></hr>
        <p>Just Update</p>
    </Card>
    </Col>
    </Row><br/><br/>
    <Row>
        <Col>
    <Card style={{ width: '19rem' }}>
    <img src={img21} alt='' height={200} width={300} style={{backgroundColor:'lightgreen'}}/>
      <Card.Body>
        <h3>Daily Sales</h3>
        <Card.Text>
        <h4 style={{color:'green'}}><TrendingUpIcon />17% </h4>
        <p>Since Last Week</p><hr></hr>
        </Card.Text>
        <h6>@gmail.com....</h6>
      </Card.Body>
    </Card>
        </Col>
        <Col>
    <Card style={{ width: '18rem' }}>
    <img src={img19} alt='' height={200} width={280} style={{backgroundColor:'orange'}}/>
      <Card.Body>
        <h3>Email Subscriptions</h3>
        <Card.Text>
        <h4 style={{color:'green'}}><TrendingUpIcon />17% </h4>
        <p>Since Last Week</p><hr></hr>
        </Card.Text>
        <h6>@gmail.com....</h6>
      </Card.Body>
    </Card>
        </Col>
        <Col>
    <Card style={{ width: '19rem' }}>
    <img src={img20} alt='' height={200} width={300} style={{backgroundColor:'lightgreen'}}/>
      <Card.Body>
        <h3>Complited Tasks</h3>
        <Card.Text>
        <h4 style={{color:'green'}}><TrendingUpIcon />17% </h4>
        <p>Since Last Week</p><hr></hr>
        </Card.Text>
        <h6>@gmail.com....</h6>
      </Card.Body>
    </Card>
        </Col>

    </Row><br/><br/>
    <Container>
    <Row >
        <Col sm={2}>
            <div style={{backgroundColor:'#274472',color:'white',height:'225px',width:'200px'}}><h1 style={{fontSize:'140px',marginLeft:'5px'}}><center>74</center></h1></div>
        </Col>
        <Col sm={10} >
      <Row style={{backgroundColor:'white',marginLeft:'10px'}}>
      <Col ><img src={img22} alt=''height={200} width={250}/><center><b>Marketing</b></center></Col>
           <Col ><img src={img23} alt=''height={200} width={250}/><center><b>Accounting</b></center></Col>
           <Col ><img src={img24} alt=''height={200} width={250}/><center><b>Sales</b></center></Col>
          
           </Row>
        </Col>
    </Row>
    </Container>
    </div>
  )
}

export default UpgradeTMF
