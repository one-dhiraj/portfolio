import { Box, Image, Text, Heading, Badge, Flex } from "@chakra-ui/react";
import { ProjectInterface } from "../components/util";
import React from "react";

interface ProjectDetailsProps {
  project: ProjectInterface;
}
const ProjectDetails:React.FC<ProjectDetailsProps> = ({project}) => {
  return (
    <Box mx="auto" py={{base: 10, md: 6}} px={{md: 4}}>
      <Flex gap={4} flexDirection={{base: "column-reverse", md: "row"}}>
      {window.innerWidth >768 &&
        <Image
        src={project.cover}
        width={{md: "55%"}}
        aspectRatio={{md: "1.9"}}
        borderRadius={"lg"}
      />}
      <Box width={{md: "45%"}} textAlign={"left"}>
        <Heading letterSpacing="wide" fontFamily={"Outfit"} size={{base: "2xl", md: "3xl"}}>{project.title}</Heading>
        <Flex gap={2} my={2}>
        {
          project.tag.map((skill, index)=>
            <Badge color="black" key={index} size={"lg"} bg={"white"} borderWidth={2} borderColor={"black"} borderRadius={"lg"}>{skill}</Badge>
          )
        }
        </Flex>
          
        <Text letterSpacing="wide" fontFamily={"Outfit"} fontWeight={"200"} textAlign="justify" fontSize={{base: "lg", md: "xl"}}>
          {project.intro}
        </Text>
        <Text mt={3} letterSpacing="wide" fontFamily={"Outfit"} fontWeight={"200"} textAlign="justify" fontSize={{base: "lg", md: "xl"}}>
          {project.insp}
        </Text>
      </Box>
      </Flex>
      <Box mt={{base: 4, md: 6}} letterSpacing={"wide"} textAlign={"left"}>
        <Heading fontFamily={"Outfit"} size={{base: "xl", md: "2xl"}}>My Journey</Heading>
        { window.innerWidth <= 768 &&
            <Image
            src={project.cover}
            borderRadius={"lg"}
            my={4}
          />
          }
        {project.jrny.map((paragraph, index) => (
          <Text fontFamily={"Outfit"} fontWeight={"200"} textAlign="justify" key={index} mt={3} fontSize={{base: "lg", md: "xl"}}>{paragraph}</Text>
        ))}
      </Box>
    </Box>
  );
};

export default ProjectDetails;