import React from 'react'
import {
  Container,
  Divider,
  Grid,
  Header,
  List,
  Segment,
} from 'semantic-ui-react'

const FixedMenuLayout = () => (
  <div>
    <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
      <Container textAlign='center'>
        <Grid divided inverted stackable>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='SHOP' />
            <List link inverted>
              <List.Item as='a'>Home</List.Item>
              <List.Item as='a'>Collections</List.Item>
              <List.Item as='a'>Shop</List.Item>
              <List.Item as='a'>Accessories</List.Item>
              <List.Item as='a'>LookBook</List.Item>
              <List.Item as='a'>#Trend</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='ABOUT' />
            <List link inverted>
              <List.Item as='a'>Our Story</List.Item>
              <List.Item as='a'>Press</List.Item>
              <List.Item as='a'>Blog</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='FURTHER INFO' />
            <List link inverted>
              <List.Item as='a'>Site Map</List.Item>
              <List.Item as='a'>Shipping</List.Item>
              <List.Item as='a'>Affiliates</List.Item>
              <List.Item as='a'>Our Stores</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={7}>
            <Header inverted as='h4' content='@2021 Gurpreet Singh' />
            <p>
              All right reserved
            </p>
          </Grid.Column>
        </Grid>

        <Divider inverted section />
        <List horizontal inverted divided link size='small'>
          <List.Item as='a'>
            Site Map
          </List.Item>
          <List.Item as='a'>
            Contact Us
          </List.Item>
          <List.Item as='a'>
            Terms and Conditions
          </List.Item>
          <List.Item as='a'>
            Privacy Policy
          </List.Item>
        </List>
      </Container>
    </Segment>
  </div>
)

export default FixedMenuLayout