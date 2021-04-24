import React, { Component } from 'react'
import styled from 'styled-components'

const LeftSide = styled.section`
  background: white;
  width: 30%;
  height: 80%;
  float: left;
  border: 2px solid red;
  margin: 30px;
`;

const RightSide = styled.section`
  background: white;
  width: 50%;
  height: 80%;
  float: left;
  margin: 30px;
  border: 2px solid red;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  background: papayawhip;
  margin: 50px;
  width: 700px;
  height: 300px;
  border: 3px solid blue;
`;

class Viewer extends Component {
  constructor() {
    super();
    this.state = {
      videos: [
        { id: 1, url: 'url1'},
        { id: 2, url: 'url2'}

      ]
    }
  }

  render() {
    return (
      <Wrapper>
        <LeftSide></LeftSide>
        <RightSide></RightSide>
      </Wrapper>
    )
  }
}

export default Viewer

