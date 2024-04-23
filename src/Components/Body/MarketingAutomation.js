import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import {AreaChart} from 'recharts';
import {XAxis} from 'recharts';
import {YAxis} from 'recharts';
import {CartesianGrid} from 'recharts';
import {Tooltip} from 'recharts';
import {Area} from 'recharts';
import img10 from './assests/images/img f10.gif';
import Container from 'react-bootstrap/Container';
import { BarChart, Bar, Cell} from 'recharts';
import { Rectangle,Legend, ResponsiveContainer } from 'recharts';
const data = [
    {
      "name": "Page A",
      "uv": 4000,
      "pv": 2400,
      "amt": 2400
    },
    {
      "name": "Page B",
      "uv": 3000,
      "pv": 1398,
      "amt": 2210
    },
    {
      "name": "Page C",
      "uv": 2000,
      "pv": 9800,
      "amt": 2290
    },
    {
      "name": "Page D",
      "uv": 2780,
      "pv": 3908,
      "amt": 2000
    },
    {
      "name": "Page E",
      "uv": 1890,
      "pv": 4800,
      "amt": 2181
    },
    {
      "name": "Page F",
      "uv": 2390,
      "pv": 3800,
      "amt": 2500
    },
    {
      "name": "Page G",
      "uv": 3490,
      "pv": 4300,
      "amt": 2100
    }
  ]
  const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

  const dataitem = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

function MarketingAutomation() {
  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
  };
  
  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
  
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };
   return (
    <div>
        <Row style={{color:'white'}}>
            <h1>Dashboard</h1>
        </Row>
    <Row>
    <Col>
    <Card style={{ width:'30rem',backgroundColor:'#4CD7D0',color:'white'}}>
      <Card.Body>
        <Card.Title>Total Income</Card.Title>
        <h1>$579,000</h1>
        <p>Saved 35%</p>
      </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card style={{ width: '30rem',backgroundColor:'#EF7C8E',color:'white' }}>
      <Card.Body>
        <Card.Title>Total Income</Card.Title>
        <h1>$479,000</h1>
        <p>Saved 25%</p>
      </Card.Body>
    </Card>
    </Col>
    </Row><br/>
    <Row>
    <Col>
    <Card style={{ width: '30rem',backgroundColor:'#A16AE8',color:'white' }}>
      <Card.Body>
        <Card.Title>Total Income</Card.Title>
        <h1>$879,000</h1>
        <p>Saved 65%</p>
      </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card style={{ width: '30rem',backgroundColor:'#B4FEE7',color:'white' }}>
      <Card.Body>
        <Card.Title>Total Income</Card.Title>
        <h1>$569,000</h1>
        <p>Saved 45%</p>
      </Card.Body>
    </Card>
    </Col>
    </Row><br/>
    <Container >
    <Row>
        <Col sm='8' className='new'>
        <AreaChart width={730} height={250} data={data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="name" />
  <YAxis />
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
  <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
</AreaChart>
        </Col>
        <Col sm='4'>
        <img src={img10} alt='' height={300} width={350}/>
        </Col>
    </Row><br/>
   
    <Row >
      <Col sm='6'  >
      <ResponsiveContainer width="100%" height="100%" className='new'>
        <BarChart
          width={500}
          height={300}
          data={dataitem}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
          <Bar dataKey="uv" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
        </BarChart>
      </ResponsiveContainer>
      </Col>
    <Col sm='6' >
      <div className='new'>
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
      >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>
    </div>
    </Col>
    </Row>
    </Container>
    </div>
  )
}

export default MarketingAutomation
