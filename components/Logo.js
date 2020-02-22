import React from "react";
import styled from "styled-components";

const Logo = props => (
  <Container>
    <Image source={props.image} />
    <Text>{props.text}</Text>
  </Container>
);

export default Logo;
const Container = styled.View`
  margin: 0 8px;
  height: 60px;
  padding: 12px 16px 12px;
  display: flex;
  flex-direction: row;
  background: white;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  align-items: center;
`;

const Image = styled.Image`
  width: 36px;
  height: 36px;
`;

const Text = styled.Text`
  font-weight: 600;
  font-size: 17px;
  margin-left: 8px;
  color: #3c4560;
`;
