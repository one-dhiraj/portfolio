import { Box, Image, Text, Heading, Badge, Flex, Icon } from "@chakra-ui/react";
import { ProjectsInterface } from "../components/util";
import React from "react";
import { Link, useParams } from "react-router-dom";
import NotFound from "./NotFound";
import { FaExternalLinkAlt } from "react-icons/fa";

interface ProjectDetailsProps {
  projectsData: ProjectsInterface;
}
const ProjectDetails:React.FC<ProjectDetailsProps> = ({projectsData}) => {
  const { projectid } = useParams<{ projectid: string }>();

  return (
    (projectid!=undefined && projectsData[projectid]!=undefined) ?
      <Box mx="auto" py={{base: 10, md: 6}} px={{md: 4}}>
      <Flex gap={4} flexDirection={{base: "column-reverse", md: "row"}}>
      {window.innerWidth >768 &&
        <Image
        src={projectsData[projectid].cover}
        width={{md: "55%"}}
        aspectRatio={{md: "1.9"}}
        borderRadius={"lg"}
      />}
      <Box width={{md: "45%"}} textAlign={"left"}>
        {projectsData[projectid].link == "" ? 
        <Heading letterSpacing="wide" fontFamily={"Outfit"} size={{base: "2xl", md: "3xl"}}>{projectsData[projectid].title}
        </Heading>
        :
        <Link to={projectsData[projectid].link} target="_blank">
          <Heading letterSpacing="wide" fontFamily={"Outfit"} size={{base: "2xl", md: "3xl"}}>{projectsData[projectid].title}
          <Icon as={FaExternalLinkAlt} ml={2} mb={2} boxSize={5}></Icon>
          </Heading>
        </Link>}
        <Flex gap={2} my={2}>
        {
          projectsData[projectid].tag.map((skill, index)=>
            <Badge color="black" key={index} size={"lg"} bg={"white"} borderWidth={2} borderColor={"black"} borderRadius={"lg"}>{skill}</Badge>
          )
        }
        </Flex>
          
        <Text letterSpacing="wide" fontFamily={"Outfit"} fontWeight={"200"} textAlign="justify" fontSize={{base: "lg", md: "xl"}}>
          {projectsData[projectid].intro}
        </Text>
        <Text mt={3} letterSpacing="wide" fontFamily={"Outfit"} fontWeight={"200"} textAlign="justify" fontSize={{base: "lg", md: "xl"}}>
          {projectsData[projectid].insp}
        </Text>
      </Box>
      </Flex>
      <Box mt={{base: 4, md: 6}} letterSpacing={"wide"} textAlign={"left"}>
        <Heading fontFamily={"Outfit"} size={{base: "xl", md: "2xl"}}>My Journey</Heading>
        { window.innerWidth <= 768 &&
            <Image
            src={projectsData[projectid].cover}
            borderRadius={"lg"}
            my={4}
          />
          }
        {projectsData[projectid].jrny.map((paragraph, index) => (
          <Text fontFamily={"Outfit"} fontWeight={"200"} textAlign="justify" key={index} mt={3} fontSize={{base: "lg", md: "xl"}}>{paragraph}</Text>
        ))}
      </Box>
      </Box>
    :
      <NotFound />
  );
};

export default ProjectDetails;