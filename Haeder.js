import React, { Component } from 'react';
import Context from './Context';
import styled from 'styled-Components';


let Add = styled.button`


background-color:#009FB4;
border:none;
border-radius:60px;





`


let Container = styled.header `

background-color: #132E41;
height: 120px;
width: 100%;
box-shadow: 2px 4px 15px #707070;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0px;
margin: 0px;


`

class Header extends Component {
    render() {
      return (
        <Context.Consumer>
          {
            ()=>{
              return (
                <Container>
                  <img width="140px" src={require('./assets/logo.jpg')}></img>
                   <Add>Add Prescription</Add>
                </Container>
              )
            }
          }
        </Context.Consumer>
      )
    }
  }
  
  export default Header