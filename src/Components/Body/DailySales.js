import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import img26 from './assests/images/img f26.gif';
import img27 from './assests/images/img f27.jpg';
import img28 from './assests/images/img f28.jpg';
import AllInboxIcon from '@mui/icons-material/AllInbox';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import ReplayIcon from '@mui/icons-material/Replay';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import StarIcon from '@mui/icons-material/Star';
import AltRouteIcon from '@mui/icons-material/AltRoute';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import Container from 'react-bootstrap/Container';
function DailySales() {
  return (
      <div>
        <Row style={{color:'white'}}>
            <h1>Dashboard</h1>
        </Row>
       <Row>
        <Col sm='6'>
            <Row>
            <Col sm='6'>
            <Card className='X' style={{ width:'15rem',color:'white'}}>
      <Card.Body>
        <Card.Title><AllInboxIcon style={{fontSize:'50px'}}/></Card.Title>
        <h1>169</h1>
        <p>Saved 35%</p>
      </Card.Body>
    </Card>
            </Col>
            <Col sm='6'>
            <Card className='Y' style={{ width: '15rem',color:'white' }}>
      <Card.Body>
        <Card.Title><ShoppingBagIcon style={{fontSize:'50px'}}/></Card.Title>
        <h1>28</h1>
        <p>Saved 25%</p>
      </Card.Body>
    </Card>
            </Col>
            </Row><br/>
            <Row>
            <Col sm='6'>
            <Card className='Z' style={{ width: '15rem',color:'white' }}>
      <Card.Body>
        <Card.Title><PeopleAltIcon style={{fontSize:'50px'}}/></Card.Title>
        <h1>3486</h1>
        <p>Saved 25%</p>
      </Card.Body>
    </Card>
            </Col>
            <Col sm='6'>
            <Card className='W' style={{ width: '15rem',color:'white' }}>
      <Card.Body>
        <Card.Title><PointOfSaleIcon style={{fontSize:'50px'}}/></Card.Title>
        <h1>288</h1>
        <p>Saved 25%</p>
      </Card.Body>
    </Card>
            </Col>
            </Row>
        </Col>
        <Col sm='6'>
        <Col ><img src={img26} alt=''height={400} width={500}/></Col>
        </Col>
       </Row><br/>
       <Container>
       <Row style={{backgroundColor:'red',borderRadius:'10px'}}>
        <Col sm='3'>
            <h4 style={{color:'white' }}><AltRouteIcon/>Development</h4>
        </Col>
        <Col sm='3'>
        <h4 style={{color:'white' }}><AllInclusiveIcon/>#2ec7747</h4>
        </Col>
        <Col sm='3'>
        <h4 style={{color:'white' }}>a minute ago</h4>
        </Col>
        <Col sm='3'>
        <h4 style={{color:'white' }}><ReplayIcon/> <PlayCircleIcon/> <StarIcon/></h4>
        </Col>
       </Row>
       </Container><br/>
       <Container>
       <Row style={{backgroundColor:'#81B622',borderRadius:'10px'}}>
        <Col sm='3'>
            <h4 style={{color:'white' }}><AltRouteIcon/>Master</h4>
        </Col>
        <Col sm='3'>
        <h4 style={{color:'white' }}><AllInclusiveIcon/>#be4ffd6</h4>
        </Col>
        <Col sm='3'>
        <h4 style={{color:'white' }}>a minute ago</h4>
        </Col>
        <Col sm='3'>
        <h4 style={{color:'white' }}><ReplayIcon/> <PlayCircleIcon/> <StarIcon/></h4>
        </Col>
       </Row>
       </Container><br/>
       <Container>
       <Row style={{backgroundColor:'#FD7F20',borderRadius:'10px'}}>
        <Col sm='3'>
            <h4 style={{color:'white' }}><AltRouteIcon/>Development</h4>
        </Col>
        <Col sm='3'>
        <h4 style={{color:'white' }}><AllInclusiveIcon/>#e51db83</h4>
        </Col>
        <Col sm='3'>
        <h4 style={{color:'white' }}>a minute ago</h4>
        </Col>
        <Col sm='3'>
        <h4 style={{color:'white' }}><ReplayIcon/> <PlayCircleIcon/> <StarIcon/></h4>
        </Col>
       </Row>
       </Container><br/>
       <Container>
       <Row style={{backgroundColor:'#747474',borderRadius:'10px'}}>
        <Col sm='3'>
            <h4 style={{color:'white' }}><AltRouteIcon/>Master</h4>
        </Col>
        <Col sm='3'>
        <h4 style={{color:'white' }}><AllInclusiveIcon/>#87393ab</h4>
        </Col>
        <Col sm='3'>
        <h4 style={{color:'white' }}>a minute ago</h4>
        </Col>
        <Col sm='3'>
        <h4 style={{color:'white' }}><ReplayIcon/> <PlayCircleIcon/> <StarIcon/></h4>
        </Col>
       </Row>
       </Container><br/>
       <Container>
       <Row style={{backgroundColor:'#EF7C8E',borderRadius:'10px'}}>
        <Col sm='3'>
            <h4 style={{color:'white' }}><AltRouteIcon/>Production</h4>
        </Col>
        <Col sm='3'>
        <h4 style={{color:'white' }}><AllInclusiveIcon/>#e85d115</h4>
        </Col>
        <Col sm='3'>
        <h4 style={{color:'white' }}>a minute ago</h4>
        </Col>
        <Col sm='3'>
        <h4 style={{color:'white' }}><ReplayIcon/> <PlayCircleIcon/> <StarIcon/></h4>
        </Col>
       </Row>
       </Container><br/>
       <Row>
        <Col>
        <img src={img27} alt=''height={260} width={500}/>
        </Col>
        <Col>
        <img src={img28} alt=''height={260} width={500}/>
        </Col>
       </Row>
    </div>
  )
}

export default DailySales
