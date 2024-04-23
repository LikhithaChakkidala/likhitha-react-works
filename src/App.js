import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Body/Home';
import Header from './Components/Header';
import ChatInteration from './Components/Body/ChatInteration';
import DataReading from './Components/Body/DataReading';
import UpgradeTMF from './Components/Body/UpgradeTMF';
import DailySales from './Components/Body/DailySales';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import MarketingAutomation from './Components/Body/MarketingAutomation';
function App() {
  return (
    <div>
      <Router>
        <Row>
        <Col sm={2} className='one'><br/>
         <Header/>
        </Col>
        <Col sm={10} style={{backgroundColor:'#0074B7'}}>
          <Routes>
          <Route path='/' exact Component={Home}/>
          <Route path='/chatinteration' exact Component={ChatInteration}/>
          <Route path='/MarketingAutomation' exact Component={MarketingAutomation}/>
          <Route path='/DataReading' exact Component={DataReading}/>
          <Route path='/UpgradeTMF' exact Component={UpgradeTMF}/>
          <Route path='/DailySales' exact Component={DailySales}/>
         </Routes>
         </Col>
         </Row>
          </Router>
  
    </div>
  )
}

export default App
