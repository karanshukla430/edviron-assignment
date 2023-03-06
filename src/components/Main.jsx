import React from 'react'
import {Typography, Card} from 'antd'
import { SearchOutlined, FilterOutlined } from '@ant-design/icons';
import MainTable from './MainTable';
import MainSideBar from './MainSideBar'
const {Text} = Typography

const Main = () => {
  return (
    <div style={{ height : "100vh"}}>
     <div style = {{display : "flex", justifyContent : "space-between"}}>
     <div style={{ marginTop : "60px" , width : '55%',  marginLeft : "20px"}}>
     <div style={{border : "1px solid #E6E6E6"}}>
     <SearchOutlined style={{color : "rgba(76, 76, 76, 1)", marginLeft : "10px", marginTop : "15px"}}/>
     <input
     type='text'
    placeholder="Search by Test or Patient Name"
    style={{ width: "400px", height: "34px", border : "none", marginLeft : "10px"}}
    prefix={<SearchOutlined />}
    />
     </div>
     <div style={{marginTop : "60px"}}>
        <Text >In the last 30 Days</Text>
     </div>
     <div style={{marginTop : "32px"}}>
        <div style={{display : "flex", justifyContent : "space-between"}}>
        <Card
    
      style={{
        width: 210,
        background : "#b37700"
      }}
    >
    <div style={{marginTop : "15px"}}>

    <Text style={{color : "white", marginLeft : "15px", fontSize : "24px"}}>30000</Text>
    </div>
    <div  style={{marginTop : "10px", marginBottom : "10px"}}>

      <Text style={{color : "white",  marginLeft : "15px"}}>Payment</Text>
    </div>
    </Card>
        <Card
    
      style={{
        width: 210,
        background : "#b37700"
      }}
    >
    <div style={{marginTop : "15px"}}>

    <Text style={{color : "white", marginLeft : "15px", fontSize : "24px"}}>30000</Text>
    </div>
    <div  style={{marginTop : "10px", marginBottom : "10px"}}>

      <Text style={{color : "white",  marginLeft : "15px"}}>Payment</Text>
    </div>
    </Card>
        <Card
    
      style={{
        width: 210,
        background : "#b37700"
      }}
    >
    <div style={{marginTop : "15px"}}>

    <Text style={{color : "white", marginLeft : "15px", fontSize : "24px"}}>30000</Text>
    </div>
    <div  style={{marginTop : "10px", marginBottom : "10px"}}>

      <Text style={{color : "white",  marginLeft : "15px"}}>Payment</Text>
    </div>
    </Card>
        </div>
     </div>
     <div style = {{marginTop : "50px"}}>
     <div style = {{display : "flex", justifyContent : "space-between"}}>
      <div style = {{width : "30%"}}>
      <div>
        <Text strong style = {{fontSize : "18px"}}>All User</Text>
      </div>
        <div>
        <Text style = {{fontSize : "12px"}}>Monitor, Sales, Transiction, etc</Text>
        </div>

      </div>
      <div style = {{width : "50%"}}>
      <div style = {{display : 'flex', justifyContent : "space-between"}}>
      <div style={{border : "1px solid #E6E6E6"}}>
     <SearchOutlined style={{color : "rgba(76, 76, 76, 1)", marginLeft : "10px", marginTop : "15px"}}/>
     <input
     type='text'
    placeholder="Search By transaction"
    style={{ width: "200px", height: "34px", border : "none", marginLeft : "10px"}}
    
    />
     </div>
      <div style={{border : "1px solid #E6E6E6"}}>
     
     <FilterOutlined style={{color : "rgba(76, 76, 76, 1)", marginLeft : "10px", marginTop : "15px"}}/>
     <input
     type='text'
    placeholder="Filter"
    style={{ width: "60px", height: "34px", border : "none", marginLeft : "10px"}}
  
    />
     </div>
      </div>
      </div>
     </div>
     <MainTable/>
     </div>
     </div>
     <MainSideBar/>
     </div>
     </div>
  )
}

export default Main
