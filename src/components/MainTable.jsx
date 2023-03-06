import React from 'react';
import { MDBBadge, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import {Typography, Divider} from 'antd'
import { ArrowUpOutlined } from '@ant-design/icons';

import "../static/style.css"
const {Text} = Typography
const MainTable = () => {
    return (
        <MDBTable align='middle'>
          <MDBTableHead>
            <tr>
              <th scope='col'>Name</th>
              <th scope='col'>Status</th>
              <th scope='col' style={{width : "30%"}}>Rating</th>
              <th scope='col'>Quantity</th>
              <th scope='col'>Amount</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            <tr>
              <td>
                <div className='d-flex align-items-center'>
                  <img
                    src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                    alt=''
                    style={{ width: '45px', height: '45px' }}
                    className='rounded-circle'
                  />
                  <div className='ms-3'>
                    <p className='fw-bold mb-1'>Jasraj</p>
                  </div>
                </div>
              </td>
              <td>
                <MDBBadge  active>
                  Verified
                </MDBBadge>
              </td>
              <td>
                <div style={{display : "flex", justifyContent : "space-between"}}>
                <div style={{backgroundColor : "rgba(76, 76, 76, 1)", marginTop : "10px", paddingLeft : "20px", paddingRight : "20px", height : "3px"}}>
                    <Divider/>
                </div>
                <div>

                <Text style={{marginRight : "10px"}}>40%</Text>
                <MDBBadge  active>
                <ArrowUpOutlined style={{marginRight : "4px"}} />
                  4%
                </MDBBadge>
                </div>
                </div>
              </td>
              <td>
                <p className='fw-normal mb-1'>400</p>
              </td>
              <td>$400,000</td>
            </tr>
            <tr>
              <td>
                <div className='d-flex align-items-center'>
                  <img
                    src='https://mdbootstrap.com/img/new/avatars/6.jpg'
                    alt=''
                    style={{ width: '45px', height: '45px' }}
                    className='rounded-circle'
                  />
                  <div className='ms-3'>
                    <p className='fw-bold mb-1'>Ojhan</p>

                  </div>
                </div>
              </td>
              <td>
                <MDBBadge color='primary' >
                  Onboarding
                </MDBBadge>
              </td>
              <td>
                <div style={{display : "flex", justifyContent : "space-between"}}>
                <div style={{backgroundColor : "rgba(76, 76, 76, 1)", marginTop : "10px", paddingLeft : "25px", paddingRight : "25px", height : "3px"}}>
                    <Divider/>
                </div>
                <div>

                <Text style={{marginRight : "10px"}}>57%</Text>
                <MDBBadge  active>
                <ArrowUpOutlined style={{marginRight : "4px"}} />
                  8%
                </MDBBadge>
                </div>
                </div>
              </td>
              <td>300</td>
              <td>
                <p>$500,000</p>
              </td>
            </tr>
            <tr>
              <td>
                <div className='d-flex align-items-center'>
                  <img
                    src='https://mdbootstrap.com/img/new/avatars/7.jpg'
                    alt=''
                    style={{ width: '45px', height: '45px' }}
                    className='rounded-circle'
                  />
                  <div className='ms-3'>
                    <p className='fw-bold mb-1'>Mulay</p>
                  </div>
                </div>
              </td>
              <td>
                <MDBBadge color='warning' >
                  Awaiting
                </MDBBadge>
              </td>
              <td>
                <div style={{display : "flex", justifyContent : "space-between"}}>
                <div style={{backgroundColor : "rgba(76, 76, 76, 1)", marginTop : "10px", paddingLeft : "30px", paddingRight : "30px", height : "3px"}}>
                    <Divider/>
                </div>
                <div>

                <Text style={{marginRight : "10px"}}>40%</Text>
                <MDBBadge  active>
                <ArrowUpOutlined style={{marginRight : "4px"}} />
                  14%
                </MDBBadge>
                </div>
                </div>
              </td>
              <td>800</td>
              <td>
                <p>$800,000</p>
              </td>
            </tr>
           
          </MDBTableBody>
        </MDBTable>
      );
}

export default MainTable
