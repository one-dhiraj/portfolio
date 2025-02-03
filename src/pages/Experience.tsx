import { Box, Flex, Text, VStack, Circle } from "@chakra-ui/react";

const experiences = [
  // {
  //   company: "System Engineer - Tata Consultancy Services",
  //   start: "2025",
  //   end: "Present",
  //   description: ""
  // },
  {
    company: "Adobe UX Foundation",
    start: "2022",
    end: "2022",
    description: "Having completed the Adobe UX Journey, I've gained valuable insights into User Experience Design. The course covered essential topics such as user-centric design, research techniques like interviews and usability testing, principles of visual design like color theory and typography, creating user personas and sitemaps, and finally, crafting interactive mock-ups. This comprehensive learning experience has equipped me with the skills needed to create intuitive and engaging digital experiences that cater to user needs and preferences. I'm now confident in my ability to approach UX projects with a structured and informed approach, ensuring a smooth and enjoyable user experience."
  },
  {
    company: "B. Tech - Techno Main Saltlake",
    start: "2020",
    end: "2024",
    description: "During my undergrad, I acquired a diverse range of skills. From programming languages and algorithms to collaboration and teamwork, I developed a strong technical foundation. Courses in relational databases, operating systems, and networking expanded my knowledge, while frontend development taught me web technologies and UI/UX principles. Additionally, I cultivated critical thinking, problem-solving, and time management abilities. This comprehensive skill set has prepared me to tackle real-world challenges with confidence and creativity as I enter the next phase of my career."
  }
];

export default function Experience() {
  return (
    <Flex direction="column" py={10}>
      <VStack gap={0} pl={{base: 2, md: 12}} align="start" w="full">
        {experiences.map((exp, index) => (
          <Box w="full" pl={{base: 8, md: 16}} py={5} borderLeftWidth={2} borderColor="black" position={"relative"}>
          <Box key={index} p={6} borderWidth={1} borderColor="black" borderRadius="lg" w={{md: "90%"}} boxShadow={{md: "sm"}}>
            <Circle size={4} bg="black" key={index} position="absolute" left="-0.55rem" top="30%"/>
            <Text textAlign={"left"} fontSize="xl" fontWeight="bold">{exp.company}</Text>
            <Text textAlign={"left"} fontSize="md" color="gray.600">{exp.start} - {exp.end}</Text>
            <Text textAlign={"left"} mt={2}>{exp.description}</Text>
          </Box>
          </Box>
        ))}
      </VStack>
    </Flex>
  );
}