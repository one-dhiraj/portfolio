import { Box, Flex, Icon, Image, Text } from '@chakra-ui/react'
import me from "../assets/me.png"
import { Link } from 'react-router-dom'
import { FaEnvelope, FaGithub, FaGooglePlay, FaLinkedinIn } from "react-icons/fa6";
import { SiLeetcode } from 'react-icons/si';

export default function Home() {
  return (
    <Flex
      direction={{ base: 'column', md: 'row' }}  
      height={{base: "90dvh", md:"80vh"}}
      gap={{base: 0, md: 8}}
      align={"center"}
      justifyContent={"center"}
      >
      {/* Left Side - Image */}
      <Flex
        boxSize={{base: '100vw', md: '500px'}}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Flex
        boxSize={{base: '92vw', md: '475px'}}
        borderWidth={1}
        borderColor="black"
        borderRadius={"full"}
        position="absolute"
        align={"center"}
      justifyContent={"center"}
        >
        <Flex
        boxSize={{base: '250px', md: '350px'}}
        borderWidth={1}
        borderColor="black"
        borderRadius={"full"}
        position="absolute"
        align={"center"}
      justifyContent={"center"}
        >
        <Image
          src={me}
          alt="Dhiraj's Image"
          borderRadius="full"
          boxSize={{ base: '250px', md: '350px' }}
          objectFit="cover"
          position="absolute"
          top="5%"
        />
          <Link to="https://leetcode.com/dhirajksharma" target='_blank'>
            <Icon position={"absolute"} padding={1} top="11%" left={{base: "5%", md: "7%"}} as={SiLeetcode} boxSize={{base: 9, md: 10}} bg="white" />
          </Link>
          <Link to="https://play.google.com/store/apps/dev?id=5273581280074097918" target='_blank'>
            <Icon position={"absolute"} padding={1} bottom="25%" right={{base: "-4%", md: "-2%"}} as={FaGooglePlay} boxSize={{base: 9, md: 10}} bg="white" />
          </Link>
        </Flex>
          <Link to="mailto:dhirajksharma.official@gmail.com" target='_blank'>
            <Icon position={"absolute"} padding={1} top={{base: "10%", md: "11%"}} right="10%" as={FaEnvelope} boxSize={{base: 9, md: 10}} bg="white" />
          </Link>
          <Link to="https://linkedin.com/in/dhirajksharma29" target='_blank'>
            <Icon position={"absolute"} padding={1} top="50%" left="-3%" as={FaLinkedinIn} boxSize={{base: 9, md: 10}} bg="white" />
          </Link>
          <Link to="https://github.com/one-dhiraj" target='_blank'>
            <Icon position={"absolute"} padding={1} bottom="-1%" right="30%" as={FaGithub} boxSize={{base: 9, md: 10}} bg="white" />
          </Link>
        </Flex>
      </Flex>

      {/* Right Side - Text */}
      <Box textAlign={{ base: 'center', md: 'left' }} mt={4}>
        <Text fontFamily={'Julius Sans One'} fontSize={{ base: '6xl', md: '8xl' }} fontWeight="bold">
          I'm Dhiraj
        </Text>
        
        <Text fontSize={{ base: 'lg', md: 'xl' }} fontFamily={'Montserrat'} px={3}>
          I think and I make things<br></br>websites, apps, and stories.
        </Text>
      </Box>
    </Flex>
  )
}
