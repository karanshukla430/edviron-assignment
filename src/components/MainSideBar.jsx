import React from 'react'
import { Avatar, Button, Typography } from 'antd';
import { BellOutlined } from '@ant-design/icons';

const {Text} = Typography
const MainSideBar = () => {
  return (
    <div style={{height : "100vh", width : "40%"}}>

<div style={{ marginTop : "60px" ,  marginLeft : "20%"}}>
<div style={{display : "flex"}}>
<div style={{marginLeft : "10px"}}>

<Avatar src={<img style={{width : "40px", height : "40px", borderRadius : "50%", marginTop : "5px"}} src="https://s3-alpha-sig.figma.com/img/ac9c/cb82/f14fc635a2482fffd49988fd26173375?Expires=1679270400&Signature=fxm5KI7BVDYUXgsvhGohoYWqlI7Zky6g6MoA7q1TtebKnd1kCalz~XRZPGk~6sF~bGOrTT-ZykQ8zwBqogotLKTr0~ew9s1uZ37Y5vQbhJJeFmw-dmfU83yBlWJR1rjAMCAaCFf76XIkyVRcVU3QKsLWmoLYlgtGKnm9ZEJTGEkJir7d3ajjc3aRl9zMegrkJv6xJ-ypFL90J1VkIKpIh54-rxlbd8lGJF1smxrDBo7ILkbukD8pmDynHwQ7Ko0ZkNnSOW7gi2DKvkVge9jUzGNbvao87F4FvwNZ-tR6flUpbFUbaCS0AfOTjwNXuHNLHz0MpYCvfkURIwDDuLF4Zg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="avatar" />} />
</div>
<div style={{marginLeft : "10px"}}>
<div>

    <Text>Aditya Singh</Text>
</div>
<div>
    <Text style={{color : "rgba(179, 179, 179, 1)" , fontSize: "15px"}}>Admin</Text>
</div>
</div>
<div style={{marginLeft : "10%", marginTop : "10px"}}>
<BellOutlined style={{fontSize : "26px"}}/>
</div>
</div>
</div>
<div style={{width : "70%", marginLeft : "10%"}}>
<div style={{marginTop : "40px" , display : "flex", justifyContent : "center", flexDirection : "column" }}>
    <div style={{display : "flex", justifyContent : "center"}}>
        <Text style={{fontSize : "20px", fontWeight : "500"}}>Recent Transaction</Text>
    </div>
    <div style={{marginTop : "25px", display : "flex", justifyContent : "space-between"}}>
    <div>
    <img
                    src='https://mdbootstrap.com/img/new/avatars/7.jpg'
                    alt=''
                    style={{ width: '20px', height: '20px', marginRight : "10px" }}
                    className='rounded-circle'
                  />
        <Text>Jasraj</Text>
    </div>
        <Text>40k+ Sales</Text>
        <Text>$1.4m Revenue</Text>
    </div>
    <div style={{marginTop : "25px", display : "flex", justifyContent : "space-between"}}>
    <div>
    <img
                    src='https://mdbootstrap.com/img/new/avatars/7.jpg'
                    alt=''
                    style={{ width: '20px', height: '20px', marginRight : "10px" }}
                    className='rounded-circle'
                  />
        <Text>Ojhan</Text>
    </div>
        <Text>20k+ Sales</Text>
        <Text>$1.8m Revenue</Text>
    </div>
    <div style={{marginTop : "25px", display : "flex", justifyContent : "space-between"}}>
    <div>
    <img
                    src='https://mdbootstrap.com/img/new/avatars/7.jpg'
                    alt=''
                    style={{ width: '20px', height: '20px', marginRight : "10px" }}
                    className='rounded-circle'
                  />
        <Text>Moley</Text>
    </div>
        <Text>400k+ Sales</Text>
        <Text>$1.4m Revenue</Text>
    </div>
    
</div>
<div style={{display : "flex", justifyContent : "center", marginTop : "25px"}}>
        <Button style={{backgroundColor : "#B4CD93", borderRadius : "5px", border : "none", padding : "8px"}}>View All Users</Button>
    </div>
</div>
<div style={{width : "70%", marginLeft : "10%"}}>
<div style={{marginTop : "40px" , display : "flex", justifyContent : "center", flexDirection : "column" }}>
    <div style={{display : "flex", justifyContent : "center"}}>
        <Text style={{fontSize : "20px", fontWeight : "500"}}>Highest Transaction</Text>
    </div>
    <div style={{marginTop : "25px", display : "flex", justifyContent : "space-between"}}>
    <div>
    <img
                    src='https://mdbootstrap.com/img/new/avatars/7.jpg'
                    alt=''
                    style={{ width: '20px', height: '20px', marginRight : "10px" }}
                    className='rounded-circle'
                  />
        <Text>Jasraj</Text>
    </div>
        <Text>40k+ Sales</Text>
        <Text>$1.4m Revenue</Text>
    </div>
    <div style={{marginTop : "25px", display : "flex", justifyContent : "space-between"}}>
    <div>
    <img
                    src='https://mdbootstrap.com/img/new/avatars/7.jpg'
                    alt=''
                    style={{ width: '20px', height: '20px', marginRight : "10px" }}
                    className='rounded-circle'
                  />
        <Text>Ojhan</Text>
    </div>
        <Text>400k+ Sales</Text>
        <Text>$1.8m Revenue</Text>
    </div>
    <div style={{marginTop : "25px", display : "flex", justifyContent : "space-between"}}>
    <div>
    <img
                    src='https://mdbootstrap.com/img/new/avatars/7.jpg'
                    alt=''
                    style={{ width: '20px', height: '20px', marginRight : "10px" }}
                    className='rounded-circle'
                  />
        <Text>Moley</Text>
    </div>
        <Text>20k+ Sales</Text>
        <Text>$2.4m Revenue</Text>
    </div>
    
</div>
<div style={{display : "flex", justifyContent : "center", marginTop : "25px"}}>
        <Button style={{backgroundColor : "#B4CD93", borderRadius : "5px", border : "none", padding : "8px"}}>View All Transaction</Button>
    </div>
</div>
    </div>
  )
}

export default MainSideBar
