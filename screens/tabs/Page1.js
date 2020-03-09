import React, { Component } from "react";
import { Container, Header, Content, List, ListItem, Text, Left, Right, Icon } from 'native-base';

export default class ListExample extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Text>Warnings HEADER</Text>
        </Header>
        <Content>
          {/* Add a loop to go through each device's variables */}
          <List>
            <ListItem>
              <Left>
                <Text>
                  ID: 12346 {"\n"}
                  Status: Idle{"\n"}
                  Performance: 15%{"\n"}
                  ADD THE INFO BELOW TO A POPUP SCREEN{"\n"}
                  Battery: 70% {"\n"}
                  Duplicate Data: 433 {"\n"}
                  Missing Data: 343 {"\n"}
                  GPS Error: 193
                </Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>
                  ID: 1237 {"\n"}
                  Status: Idle{"\n"}
                  Performance: 26%{"\n"}
                  ADD THE INFO BELOW TO A POPUP SCREEN{"\n"}
                  Battery: 70% {"\n"}
                  Duplicate Data: 433 {"\n"}
                  Missing Data: 343 {"\n"}
                  GPS Error: 193
                </Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>
                  ID: 1239 {"\n"}
                  Status: Idle{"\n"}
                  Performance: 10%{"\n"}
                  ADD THE INFO BELOW TO A POPUP SCREEN{"\n"}
                  Battery: 70% {"\n"}
                  Duplicate Data: 433 {"\n"}
                  Missing Data: 343 {"\n"}
                  GPS Error: 193
                </Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}