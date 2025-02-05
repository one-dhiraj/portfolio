import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Text, VStack } from "@chakra-ui/react";

export default function NotFound() {
  const navigate = useNavigate();
  const [time, setTime] = useState<number>(3);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((currTime) => {
        if (currTime === 1) {
          clearInterval(intervalId); // Clear interval when time reaches 0
          navigate('/'); // Redirect to homepage
        }
        return currTime - 1;
      });
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, [navigate]);

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      minH={"50vh"}
      textAlign="center"
      mt={16}
    >
      <VStack gap={6}>
        <Text fontSize="6xl" fontWeight="bold" fontFamily={"Montserrat"}>
          4O4
        </Text>
        <Text fontSize={{base: "xl", md: "2xl"}}>Oops! The page you're looking for doesn't exist</Text>
        <Text display={"flex"} gap={1} fontSize="lg">Redirecting to <Text onClick={() => navigate('/')} textDecoration={'underline'} color="teal" fontStyle={"italic"} cursor={"pointer"}> homepage </Text> in <strong>{time}</strong> seconds...</Text>
      </VStack>
    </Box>
  );
}