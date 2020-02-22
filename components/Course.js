import React from "react";
import styled from "styled-components";

const Course = props => (
  <Container>
    <Cover>
      <Image source={props.image} />
      <Logo source={props.logo} />
      <Title>{props.title}</Title>
      <Subtitle>{props.subtitle}</Subtitle>
    </Cover>
    <Content>
      <Avatar source={props.avatar} />
      <Wrapper>
        <Comment>{props.caption}</Comment>
        <Teacher>{props.author}</Teacher>
      </Wrapper>
    </Content>
  </Container>
);

export default Course;

const Container = styled.View`
  width: 335px;
  height: 335px;
  margin-top: 20px;
  margin-left: 20px;
  border-radius: 14px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  background: white;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
`;

const Cover = styled.View`
  width: 100%;
  height: 260px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  overflow: hidden;
  flex-direction: column-reverse;
`;

const Logo = styled.Image`
  width: 48px;
  height: 48px;
  position: absolute;
  top: 30px;
  right: 50%;
  margin-right: -24px;
`;

const Title = styled.Text`
  color: white;
  font-weight: 400;
  font-size: 24px;
  width: 180px;
  margin-bottom: 20px;
  margin-left: 20px;
`;

const Subtitle = styled.Text`
  font-size: 15px;
  color: #b8bece;
  font-weight: 500;
  margin-left: 20px;
  text-transform: uppercase;
`;

const Content = styled.View`
  width: 100%;
  height: 75px;
  flex-direction: row;
  padding-left: 20px;
  align-items: center;
  max-width: 260px;
`;

const Avatar = styled.Image`
  width: 32px;
  height: 32px;
  border-radius: 22px;
`;

const Comment = styled.Text`
  font-size: 13px;
  color: #3c4560;
`;

const Teacher = styled.Text`
  font-size: 13px;
  color: #b8bece;
`;

const Wrapper = styled.View`
  flex-direction: column;
  margin-left: 8px;
`;
