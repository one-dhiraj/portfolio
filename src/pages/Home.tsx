import { Box, Flex, Icon, Image, Text } from '@chakra-ui/react'
import me from "../assets/me.jpg"
import { Link } from 'react-router-dom'
import { FaLinkedinIn } from "react-icons/fa6";
import { GrGithub } from "react-icons/gr";
import { IoMdMail } from "react-icons/io";


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
      <Box flexShrink={0}>
        <Image
          src={me}
          alt="Dhiraj's Image"
          borderRadius="full"
          boxSize={{ base: '250px', md: '450px' }}
          objectFit="cover"
        />
      </Box>

      {/* Right Side - Text */}
      <Box textAlign={{ base: 'center', md: 'left' }} mt={4}>
        <Text fontFamily={'Julius Sans One'} fontSize={{ base: '6xl', md: '8xl' }} fontWeight="bold">
          I'm Dhiraj
        </Text>
        
        <Text fontSize={{ base: 'lg', md: 'xl' }} fontFamily={'Montserrat'} px={3}>
          I think and I make things<br></br>websites, apps, and stories.
        </Text>
        <Flex mt={4} gap={3} px={3} justifyContent={{base: "center", md: "flex-start"}} alignItems={"center"}>
          <Link to="mailto:dhirajksharma.official@gmail.com" target='_blank'>
            <Icon as={IoMdMail} boxSize={9} />
          </Link>
          <Link to="https://linkedin.com/in/dhirajksharma29" target='_blank'>
            <Icon as={FaLinkedinIn} boxSize={8} />
          </Link>
          <Link to="https://github.com/dhirajksharma" target='_blank'>
            <Icon as={GrGithub} boxSize={8} mb={0.5} />
          </Link>
        </Flex>
      </Box>
    </Flex>
  )
}
