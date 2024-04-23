import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import img12 from './assests/images/img f12.png';
import img17 from './assests/images/img f17.png';
import img11 from './assests/images/img f11.png';
import img15 from './assests/images/img f15.png';
import img14 from './assests/images/img f14.png';
import img13 from './assests/images/img f13.png';
import img18 from './assests/images/img f18.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import PersonPinCircleIcon from '@mui/icons-material/PersonPinCircle';
function DataReading() {
  return (
    <div>
        <Container>
      <Row style={{marginTop:'50px'}}>
        <Col>
        <div className='A'>
          <h1 style={{marginLeft:'40px'}}>Diagrams</h1>
          </div>
        </Col>
        <Col>
        <div className='B'>
          <h1 style={{marginLeft:'80px'}}>Charts</h1>
          </div>
        </Col>
        <Col>
            <div className='C'>
          <h1 style={{marginLeft:'80px'}}>Lines</h1>
          </div>
        </Col>
        <Col>
            <div className='D'>
          <h1 style={{marginLeft:'80px'}}>Other</h1>
          </div>
        </Col>
      </Row>
      </Container><br/>
      <Container>
      <Row>
        <Col sm='3' className='E'>
          <div>
            <PersonPinCircleIcon style={{height:'200px',width:'170px',marginTop:'50px',marginLeft:'50px'}}/>
          <h2 style={{color:'white'}}>Company Name</h2>
          </div>
        </Col>
        <Col sm='6'>
        <div className='F'>
          <Row>
            <Col sm='6'>
          <h2 style={{marginLeft:'30px',marginTop:'10px'}}>Edit Title Here</h2>
          <img src={img12} alt='' height={200} width={300} style={{marginTop:'20px',marginLeft:'10px'}}/>
          </Col>
          <Col sm='6'>
          <Card className='nin' style={{ width:'10rem',height:'130px',marginLeft:'50px',marginTop:'110px',}}>
      <Card.Body>
        <h1>2,568</h1>
        <Card.Title>Simple Text</Card.Title><br/>
         </Card.Body>
    </Card><br/>
    <Col className='ni'><p>You Can Edit This Text</p></Col>
    </Col>
        </Row>
        </div>
        </Col>  
        <Col sm={3} style={{backgroundColor:'#171810',height:'400px'}}>
        <img src={img15} alt='' height={150} width={150} style={{marginTop:'40px'}}/><br/><br/>
        <img src={img18} alt='' height={150} width={150} style={{marginLeft:'100px'}}/>
        </Col>
        </Row>
        <Row>
         <Col sm='3'className='git'>
          <div>
          <h1 style={{marginLeft:'50px',marginTop:'30px'}}>45%</h1>
          <h6 style={{marginLeft:'50px'}}>Sample Text</h6>
          <img src={img17} alt='' height={200} width={270}/>
          <h6 style={{marginLeft:'50px'}}>WWW.Slidemodel.Com</h6>
          </div>
         </Col>
         <Col sm='6'>
          <div  className='plant'>
            <h1 style={{marginLeft:'50px'}}>Scales Chart</h1>
            <h6 style={{marginLeft:'50px'}}>Company Grouth</h6>
         <img src={img11} alt='' height={300} width={500} style={{marginLeft:'20px'}}/>
         </div>
         </Col>
         <Col sm={3} style={{backgroundColor:'#171810',height:'420px'}}>
         <img src={img13} alt='' height={150} width={150} style={{marginTop:'40px'}}/><br/><br/>
        <img src={img14} alt='' height={150} width={150} style={{marginLeft:'100px'}}/>
         </Col>
        </Row>
        <Row style={{marginTop:'20px'}}>
        <Col>
        <div className='A'>
          <p><FacebookIcon style={{marginLeft:'20px',height:'50px',fontSize:'50px'}}/>WWW.Facebook.Com</p>
          </div>
        </Col>
        <Col>
        <div className='B'>
        <p><InstagramIcon style={{marginLeft:'20px',height:'50px',fontSize:'50px'}}/>WWW.Instagram.Com</p>
          </div>
        </Col>
        <Col>
            <div className='C'>
            <p><YouTubeIcon style={{marginLeft:'20px',height:'50px',fontSize:'50px'}}/>WWW.YouTube.Com</p>
          </div>
        </Col>
        <Col>
            <div className='D'>
            <p><TwitterIcon style={{marginLeft:'20px',height:'50px',fontSize:'50px'}}/>WWW.Twitter.Com</p>
            </div>
        </Col>
      </Row>
     
      </Container>
    </div>
  )
}

export default DataReading
