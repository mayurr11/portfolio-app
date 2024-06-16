import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import './styles.css'

const greeting = "Hello, I am Mayur Chauhan!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";


const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack>
      <Avatar size='xl' src='https://cdn2.iconfinder.com/data/icons/business-man-8/512/7-1024.png' />
      <Heading as='h6' size='1em' className='greeting' >{greeting}</Heading>
      <Heading  >
        {bio1}
      </Heading>
      <Heading>
        {bio2}
      </Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
