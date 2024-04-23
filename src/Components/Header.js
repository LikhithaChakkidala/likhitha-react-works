import React from 'react';
import {Button} from 'react-bootstrap';
import DashboardIcon from '@mui/icons-material/Dashboard';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import EmailIcon from '@mui/icons-material/Email';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import WifiTetheringIcon from '@mui/icons-material/WifiTethering';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div style={{marginLeft:'20px'}}>
    <Button><DashboardIcon/>Dashboard</Button><br/><br/>
           <h3>Management</h3><br/>
           <Link to='/' style={{textDecoration:'none', color:'white'}}><HomeIcon style={{marginRight:'10px'}}/>Home</Link><br/><br/>
          <p><FileCopyIcon style={{marginRight:'10px'}}/>Document</p><br/>
          <p><RecentActorsIcon style={{marginRight:'10px'}}/>Contact</p><br/>
          <p><EmailIcon style={{marginRight:'10px'}}/>Email</p><br/><br/>
          <h3>Connection</h3><br/>
          <Link to='/chatinteration' style={{textDecoration:'none', color:'white'}}><SearchIcon style={{marginRight:'10px'}}/>ChatInteration</Link><br/><br/>
          <Link to='/MarketingAutomation' style={{textDecoration:'none', color:'white'}}><AddBusinessIcon />MarketingAutomation</Link><br/><br/>
          <Link to='/DataReading' style={{textDecoration:'none', color:'white'}}><WifiTetheringIcon />DataReading</Link><br/><br/>
          <p><AllInclusiveIcon style={{marginRight:'10px'}}/>Other</p><br/><br/>
          <h3>Coustomer</h3><br/>
          <Link to='/UpgradeTMF' style={{textDecoration:'none',color:'white'}}><FileUploadIcon/>UpgradeTMF</Link><br/><br/>
          <Link to='/DailySales' style={{textDecoration:'none',color:'white'}}><MonetizationOnIcon/>DailySales</Link><br/><br/>
          <p><ArrowUpwardIcon style={{marginRight:'10px'}}/>Development</p><br/>
          <p><ProductionQuantityLimitsIcon style={{marginRight:'10px'}}/>Production</p>
    </div>
  )
}

export default Header
