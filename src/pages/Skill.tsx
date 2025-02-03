import { Box, Grid, Text, Icon } from "@chakra-ui/react";
import { FaCuttlefish, FaJs, FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTypescript, SiJquery, SiTailwindcss, SiChakraui, SiRedux, SiMongodb, SiExpress, SiSupabase } from "react-icons/si";
import { GrMysql } from "react-icons/gr";

const skillsDataDesktop = [
  { name: "JavaScript", icon: FaJs, size: "large" },
  { name: "TypeScript", icon: SiTypescript, size: "small" },
  { name: "HTML", icon: FaHtml5, size: "small" },
  { name: "React", icon: FaReact, size: "medium"},
  { name: "Tailwind CSS", icon: SiTailwindcss, size: "medium" },
  { name: "CSS", icon: FaCss3Alt, size: "small" },
  { name: "jQuery", icon: SiJquery, size: "small" },
  { name: "React Native", icon: FaReact, size: "small"},
  { name: "Redux", icon: SiRedux, size: "small"},
  { name: "Chakra UI", icon: SiChakraui, size: "medium" },
  { name: "C++", icon: FaCuttlefish, size: "small" },
  { name: "Node.js", icon: FaNodeJs, size: "large" },
  { name: "MySQL", icon: GrMysql, size: "medium" },
  { name: "Supabase", icon: SiSupabase, size: "small" },
  { name: "", size: "medium" },
  { name: "", size: "small" },
  { name: "MongoDB", icon: SiMongodb, size: "small" },
  { name: "Express.js", icon: SiExpress, size: "small" }
];

const skillsDataMobile = [
  { name: "JavaScript", icon: FaJs, size: "large" },
  { name: "TypeScript", icon: SiTypescript, size: "small" },
  { name: "HTML", icon: FaHtml5, size: "small" },
  { name: "React", icon: FaReact, size: "medium"},
  { name: "React Native", icon: FaReact, size: "small"},
  { name: "jQuery", icon: SiJquery, size: "small" },
  { name: "Redux", icon: SiRedux, size: "small"},
  { name: "Tailwind CSS", icon: SiTailwindcss, size: "small" },
  { name: "CSS", icon: FaCss3Alt, size: "small" },
  { name: "Chakra UI", icon: SiChakraui, size: "medium" },
  { name: "C++", icon: FaCuttlefish, size: "medium" },
  { name: "Node.js", icon: FaNodeJs, size: "small" },
  { name: "MySQL", icon: GrMysql, size: "medium" },
  { name: "Supabase", icon: SiSupabase, size: "small" },
  { name: "MongoDB", icon: SiMongodb, size: "small" },
  { name: "Express.js", icon: SiExpress, size: "small" }
];

const getGridColumn = (size:string) => {
  switch (size) {
    case "large": return "span 2";  // Large spans 2 columns
    case "medium": return "span 2"; // Medium spans 2 columns
    case "small": return "span 1";  // Small spans 1 column
    default: return "span 1";
  }
};

const getGridRow = (size:string) => {
  switch (size) {
    case "large": return "span 2";  // Large spans 2 rows
    case "medium": return "span 1"; // Medium spans 1 row
    case "small": return "span 1";  // Small spans 1 row
    default: return "span 1";
  }
};

export default function SkillsPage() {
  return (
      <Grid 
        templateColumns={{base:"repeat(3, 1fr)", md: "repeat(6, 1fr)", lg:"repeat(8, 1fr)"}}
        gap={2}
        pt={8}
        pb={4}
      >
        {window.innerWidth>768 ? skillsDataDesktop.map((skill, i) => (
          <Box 
            key={i}
            gridColumn={getGridColumn(skill.size)} 
            gridRow={getGridRow(skill.size)}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            p={4}
            borderRadius="md"
            borderWidth={skill.name!= "" ? 1 : 0}
            borderColor={"black"}
          >
            {skill.icon && <Icon as={skill.icon} boxSize={10} mb={2} />}
            <Text fontSize="sm" fontWeight="medium">{skill.name}</Text>
          </Box>))
          :
          skillsDataMobile.map((skill, i) => (
            <Box 
              key={i}
              gridColumn={getGridColumn(skill.size)} 
              gridRow={getGridRow(skill.size)}
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              p={4}
              borderRadius="md"
              borderWidth={skill.name!= "" ? 1 : 0}
              borderColor={"black"}
            >
              {skill.icon && <Icon as={skill.icon} boxSize={10} mb={2} />}
              <Text fontSize="sm" fontWeight="medium">{skill.name}</Text>
            </Box>
        ))}
      </Grid>
  );
}