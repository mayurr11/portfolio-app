import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";
import './styles.css';

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const sections = [
  {
    link: 'projects',
    title: 'Projects'
  },
  {
    link: 'contactme',
    title: 'Contact Me'
  }
];

const Header = () => {
  const headerComponent = useRef();
  const lastScrollPosition = useRef(0);
  const [headerTranslation, setHeaderTranslation] = useState('0px');

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const newScrollPosition = window.scrollY;
      if (lastScrollPosition.current > newScrollPosition) {
        setHeaderTranslation('0px');
      } else {
        setHeaderTranslation('-200px');
      }
      lastScrollPosition.current = newScrollPosition;
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box
      position='fixed'
      ref={headerComponent}
      top={0}
      left={0}
      right={0}
      zIndex={1}
      style={{transform: `translateY(${headerTranslation})`}}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav className='nav'>
            {
              socials.map((social, index) => (
                <a key={index} href={social.url}>
                  <FontAwesomeIcon icon={social.icon} size="2x" />
                </a>
              ))
            }
          </nav>
          <nav>
            <HStack spacing={8}>
              {
                sections.map((section, index) => (
                  <a key={index} onClick={handleClick(section.link)}>
                    <span>{section.title}</span>
                  </a>
                ))
              }
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;
