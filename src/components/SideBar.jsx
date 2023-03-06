import React from 'react'
import {Typography, Space, Divider} from 'antd'
import { AppstoreOutlined, UserOutlined, LineChartOutlined, DatabaseOutlined, SettingOutlined, LogoutOutlined} from '@ant-design/icons';
const {Text} = Typography
const SideBar = () => {
  return (
    <div style={{backgroundColor : "#E5E5E5" , height : "100vh"}}>
     <div>
     <div style={{display : "flex", justifyContent : "center", alignItems : "center"}}>
        <Text style={{marginTop : "60px" , padding : "10px", backgroundColor : "white", color : "blue", fontSize : "20px", fontWeight : "700"}}> Edviron</Text>
     </div>
     <div style={{marginTop : "100px"}}>
        <Space split={<Divider type="vertical" />} style = {{display : "flex", justifyContent : 'center', flexDirection : "column"}}>
       
        <div style={{backgroundColor : "#B4CD93", width : "60%", margin : "auto", padding :"10px"}}>

        <AppstoreOutlined />
        <Text style={{marginLeft : "5px"}}>DashBoard</Text>
        </div>
        <div style={{ width : "60%", margin : "auto", padding :"10px"}}>

        <UserOutlined style={{color :"rgba(128, 128, 128, 1)"}}/>
        <Text style={{marginLeft : "5px", color :"rgba(128, 128, 128, 1)"}}>User</Text>
        </div>
        <div style={{ width : "60%", margin : "auto", padding :"10px"}}>

        <LineChartOutlined style={{color :"rgba(128, 128, 128, 1)"}}/>
        <Text style={{marginLeft : "5px", color :"rgba(128, 128, 128, 1)"}}>Project</Text>
        </div>
        <div style={{ width : "60%", margin : "auto", padding :"10px"}}>

        <DatabaseOutlined style={{color :"rgba(128, 128, 128, 1)"}}/>
        <Text style={{marginLeft : "5px", color :"rgba(128, 128, 128, 1)"}}>Sales</Text>
        </div>
        
        
        </Space>
     </div>
     <div style={{marginTop : "100px"}}>
        <Space split={<Divider type="vertical" />} style = {{display : "flex", justifyContent : 'center', flexDirection : "column"}}>
       
        <div style={{ width : "60%", margin : "auto", padding :"10px"}}>

        <SettingOutlined style={{color :"rgba(128, 128, 128, 1)"}}/>
        <Text style={{marginLeft : "5px", color :"rgba(128, 128, 128, 1)"}}>Settings</Text>
        </div>
        <div style={{ width : "60%", margin : "auto", padding :"10px"}}>

        <LogoutOutlined style={{color :"rgba(166, 89, 89, 1)"}}/>
        <Text style={{marginLeft : "5px", color :"rgba(166, 89, 89, 1)"}}>Logout</Text>
        </div>
        
        
        
        </Space>
     </div>
     </div>
    </div>
  )
}

export default SideBar
