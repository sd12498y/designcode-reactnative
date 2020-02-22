import React from "react";
import styled, { withTheme } from "styled-components";
import {
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Animated,
  Easing,
  StatusBar
} from "react-native";
import Card from "../components/Card";
import { Ionicons } from "@expo/vector-icons";
import { NotificationIcon } from "../components/Icons";
import Logo from "../components/Logo";
import Course from "../components/Course";
import Menu from "../components/Menu";
import { connect } from "react-redux";
import { render } from "react-dom";
import Avatar from "../components/Avatar";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { useNavigation } from "@react-navigation/native";

const GET_CARD_COLLECTIONS = gql`
  {
    cardsCollection {
      items {
        title
        subtitle
        image {
          title
          description
          contentType
          fileName
          size
          url
          width
          height
        }
        logo {
          title
          description
          contentType
          fileName
          size
          url
          width
          height
        }
        caption
        content
      }
    }
  }
`;

function mapStoreToProps(state) {
  return { action: state.action, name: state.name };
}
function mapDispatchToProps(dispatch) {
  return {
    openMenu: () =>
      dispatch({
        type: "OPEN_MENU"
      })
  };
}
function CardsQuery() {
  const { loading, error, data } = useQuery(GET_CARD_COLLECTIONS);

  if (loading) return <Message>Loading...</Message>;
  if (error) return <Message>Error! {error.message}</Message>;
  const navigation = useNavigation();
  return (
    <CardsContainer>
      {data.cardsCollection.items.map((card, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => {
            navigation.push("Section", {
              section: card
            });
          }}
        >
          <Card
            title={card.title}
            image={{ uri: card.image.url }}
            caption={card.caption}
            logo={{ uri: card.logo.url }}
            subtitle={card.subtitle}
          />
        </TouchableOpacity>
      ))}
    </CardsContainer>
  );
}
class HomeScreen extends React.Component {
  state = {
    scale: new Animated.Value(1),
    opacity: new Animated.Value(1)
  };

  componentDidMount() {
    StatusBar.setBarStyle("dark-content", true);
  }

  componentDidUpdate() {
    this.toggleMenu();
  }

  toggleMenu = () => {
    if (this.props.action == "openMenu") {
      Animated.timing(this.state.scale, {
        toValue: 0.9,
        duration: 300,
        easing: Easing.in()
      }).start();
      Animated.spring(this.state.opacity, {
        toValue: 0.5
      }).start();
      StatusBar.setBarStyle("light-content", true);
    }
    if (this.props.action == "closeMenu") {
      Animated.timing(this.state.scale, {
        toValue: 1,
        duration: 300,
        easing: Easing.in()
      }).start();
      Animated.spring(this.state.opacity, {
        toValue: 1
      }).start();
      StatusBar.setBarStyle("dark-content", true);
    }
  };

  render() {
    return (
      <RootView>
        <Menu />
        <AnimatedContainer
          style={{
            transform: [{ scale: this.state.scale }],
            opacity: this.state.opacity
          }}
        >
          <SafeAreaView>
            <ScrollView style={{ height: "100%" }}>
              <TitleBar>
                <TouchableOpacity
                  onPress={this.props.openMenu}
                  style={{ position: "absolute", top: 0, left: 20 }}
                >
                  <Avatar />
                </TouchableOpacity>
                <Title>Welcome back,</Title>
                <Name>{this.props.name} </Name>
                <NotificationIcon
                  color="#4775F2"
                  style={{ position: "absolute", right: 20, top: 5 }}
                />
              </TitleBar>
              <ScrollView
                horizontal={true}
                style={{ flexDirection: "row", padding: 30, paddingLeft: 12 }}
                showsHorizontalScrollIndicator={false}
              >
                {logos.map((logo, index) => (
                  <Logo key={index} image={logo.image} text={logo.text} />
                ))}
              </ScrollView>
              <Subtitle>Continue Learning</Subtitle>
              <ScrollView
                horizontal={true}
                style={{ paddingBottom: 30 }}
                showsHorizontalScrollIndicator={false}
              >
                <CardsQuery />
              </ScrollView>
              <Subtitle>Popular Course</Subtitle>

              {courses.map((course, index) => (
                <Course
                  key={index}
                  image={course.image}
                  title={course.title}
                  logo={course.logo}
                  subtitle={course.subtitle}
                  caption={course.caption}
                  avatar={course.avatar}
                  author={course.author}
                />
              ))}
            </ScrollView>
          </SafeAreaView>
        </AnimatedContainer>
      </RootView>
    );
  }
}

export default connect(mapStoreToProps, mapDispatchToProps)(HomeScreen);

const Message = styled.Text`
  margin: 20px;
  color: #b8bece;
  font-size: 15px;
  font-weight: 500;
`;
const CardsContainer = styled.View`
  flex-direction: row;
`;
const RootView = styled.View`
  background: black;
  flex: 1;
`;
const Subtitle = styled.Text`
  color: #b8bece;
  margin-left: 20px;
  font-size: 15px;
  font-weight: 600;
  margin-top: 20px;
  text-transform: uppercase;
`;
const Container = styled.View`
  flex: 1;
  background-color: #f0f3f5;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;
const AnimatedContainer = Animated.createAnimatedComponent(Container);

const Title = styled.Text`
  font-size: 16px;
  color: #b8bece;
  font-weight: 500;
`;

const Name = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`;

const TitleBar = styled.View`
  width: 100%;
  margin-top: 50px;
  padding-left: 80px;
`;

const logos = [
  {
    image: require("../assets/logo-framerx.png"),
    text: "Framer X"
  },
  {
    image: require("../assets/logo-figma.png"),
    text: "Figma"
  },
  {
    image: require("../assets/logo-studio.png"),
    text: "Studio"
  },
  {
    image: require("../assets/logo-react.png"),
    text: "React"
  },
  {
    image: require("../assets/logo-swift.png"),
    text: "Swift"
  },
  {
    image: require("../assets/logo-sketch.png"),
    text: "Sketch"
  }
];

const cards = [
  {
    title: "React Native for Designers",
    image: require("../assets/background11.jpg"),
    subtitle: "React Native",
    caption: "1 of 12 sections",
    logo: require("../assets/logo-react.png")
  },
  {
    title: "Styled Components",
    image: require("../assets/background12.jpg"),
    subtitle: "React Native",
    caption: "2 of 12 sections",
    logo: require("../assets/logo-react.png")
  },
  {
    title: "Contentful",
    image: require("../assets/background13.jpg"),
    subtitle: "React Native",
    caption: "3 of 12 sections",
    logo: require("../assets/logo-react.png")
  },
  {
    title: "States and Props",
    image: require("../assets/background14.jpg"),
    subtitle: "React Native",
    caption: "4 of 12 sections",
    logo: require("../assets/logo-react.png")
  }
];
const courses = [
  {
    title: "Prototype in InVision Studio",
    subtitle: "10 sections",
    image: require("../assets/background13.jpg"),
    logo: require("../assets/logo-studio.png"),
    author: "Meng To",
    avatar: require("../assets/avatar.jpg"),
    caption: "Design an interactive prototype"
  },
  {
    title: "React for Designers",
    subtitle: "12 sections",
    image: require("../assets/background11.jpg"),
    logo: require("../assets/logo-react.png"),
    author: "Meng To",
    avatar: require("../assets/avatar.jpg"),
    caption: "Learn to design and code a React site"
  },
  {
    title: "Design and Code with Framer X",
    subtitle: "10 sections",
    image: require("../assets/background14.jpg"),
    logo: require("../assets/logo-framerx.png"),
    author: "Meng To",
    avatar: require("../assets/avatar.jpg"),
    caption: "Create powerful design and code components for your app"
  },
  {
    title: "Design System in Figma",
    subtitle: "10 sections",
    image: require("../assets/background6.jpg"),
    logo: require("../assets/logo-figma.png"),
    author: "Meng To",
    avatar: require("../assets/avatar.jpg"),
    caption:
      "Complete guide to designing a site using a collaborative design tool"
  }
];
