import { Box, Icon, Image, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import React from "react";
import { ProjectsInterface } from "../components/util";

interface ProjectListProps {
  projects: ProjectsInterface;
}

const Projects:React.FC<ProjectListProps> = ({projects}) => {
  
  return (
    <Box mx="auto" width={{md: "80%"}} pt="14">
      <Slider
        dots={true}
        infinite={true}
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
        centerMode={true}
        arrows={window.innerWidth > 768}
        centerPadding={window.innerWidth >768 ? "150px" : "0px"}
        prevArrow={<Icon as={MdChevronLeft} boxSize={10} color="black" _hover={{color:"black"}} left={-50}/>}
        nextArrow={<Icon as={MdChevronRight} boxSize={10} color="black" _hover={{color:"black"}} right={-50}/>}
        >
        {Object.entries(projects).map(([key, project]) => (
          <Link to={`/projects/${key}`} key={key}>
            <VStack
              px={4}
              py={4}
              borderRadius="lg"
              borderWidth={2}
              borderColor="black"
              height={window.innerWidth > 768 ? "60vh" : "70vh"}      
              textAlign="center"
              flexDirection={"column"}
              justifyContent={"flex-end"}
              alignItems={"flex-start"}
              position="relative"
              _hover={{ transform: "scale(1.02)", transition: "0.3s" }}
              mx={4}
              mt={1}
            >
              <Box
                bgImg={`url(${project.cover})`}
                bgSize="cover"
                bgPos="center"
                bgRepeat="no-repeat"
                borderTopRadius={"md"}
                width="full"
                height={window.innerWidth > 768 ? "60%" : "50%"}
                position="absolute"
                top="0"
                left="0"
                zIndex={-1}
              />
              <Image src={project.icon} borderRadius="md" width="50px"/>
              <Text fontSize="xl" fontWeight="bold">{project.title}</Text>
              <Text textAlign={"left"} fontSize="medium" letterSpacing={"wide"}>{project.intro}</Text>
            </VStack>
          </Link>
        ))}
      </Slider>
    </Box>
  );
};

export default Projects;