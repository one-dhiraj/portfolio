import { 
  Box, 
  Flex, 
  HStack, 
  IconButton, 
  Button, 
  useDisclosure, 
  Icon 
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { MdClose, MdMenu } from "react-icons/md";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { open, onToggle } = useDisclosure();
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if ((window.innerWidth > 768 && window.scrollY > 30) || (window.innerWidth <= 768 && window.scrollY > 10)) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      px={4}
      mx="auto"
      borderRadius={isSticky? 0 : 6}
      bg="black"
      color="white"
      width={{base:  isSticky ? "100vw" : "95vw", md: isSticky ? "100vw" : "auto"}}
      position={{base: "fixed", md: isSticky ? "fixed" : "relative"}}
      top={{base: isSticky ? 0 : 2, md: 0}}
      left={0}
      right={0}
      boxShadow="md"
      zIndex={1000}
      transition="all 0.3s ease-in-out"
    >
      <Flex h={14} alignItems="center" justifyContent="space-between">
        <Box fontSize={{base: "xl", md: "2xl"}} fontWeight="bold" fontFamily={"Montserrat"}>
          <Link to="/">{window.innerWidth<=768 ? "one dhiraj" : "One Dhiraj"}</Link>
        </Box>

        {/* Desktop Navigation */}
        <HStack gap={8} display={{ base: "none", md: "flex" }}>
          <Link to="/skills">
            <Button fontSize="md" bg="black" _hover={{ bg: "white", color: "black" }} letterSpacing={'wide'}>
              Skills
            </Button>
          </Link>
          <Link to="/projects">
            <Button fontSize="md" bg="black" _hover={{ bg: "white", color: "black" }} letterSpacing={'wide'}>
              Projects
            </Button>
          </Link>
          <Link to="/experience">
            <Button fontSize="md" bg="black" _hover={{ bg: "white", color: "black" }} letterSpacing={'wide'}>
              Experience
            </Button>
          </Link>
        </HStack>

        {/* Mobile Menu Button */}
        <IconButton
          display={{ base: "flex", md: "none" }}
          aria-label="Open Menu"
          onClick={onToggle}
        >
          {open ? <Icon as={MdClose} /> : <Icon as={MdMenu} />}
        </IconButton>
      </Flex>

      {/* Mobile Navigation */}
      {open && (
        <HStack justifyContent={"space-evenly"} pb={1} display={{ base: "flex", md: "none" }}>
        <Link onClick={onToggle} to="/skills">
          <Button color="white" fontSize="md" bg="black" _hover={{ bg: "white", color: "black" }} letterSpacing={'wide'}>
            Skills
          </Button>
        </Link>
        <Link onClick={onToggle} to="/projects">
          <Button color="white" fontSize="md" bg="black" _hover={{ bg: "white", color: "black" }} letterSpacing={'wide'}>
            Projects
          </Button>
        </Link>
        <Link onClick={onToggle} to="/experience">
          <Button color="white" fontSize="md" bg="black" _hover={{ bg: "white", color: "black" }} letterSpacing={'wide'}>
            Experience
          </Button>
        </Link>
      </HStack>
      )}
    </Box>
  );
};

export default Navbar;
