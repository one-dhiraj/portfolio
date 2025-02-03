import { Box, Heading, Text, ListItem, Link, VStack, ListRoot, Flex } from '@chakra-ui/react';

const AutowallPrivacy = () => {
  return (
    <Box p={6} textAlign={"left"} maxW={1000}>
      <Flex gap={4} alignItems={"center"}>

      <Heading as="h1" size="2xl">
        Privacy Policy
      </Heading>
      <Text fontSize="md" color="gray.500" fontWeight="normal" pt={2}>
        Last Updated: 1st January, 2025
      </Text>
      </Flex>

      <VStack align="start" gap={6}>
        <Text>
          Thank you for choosing <strong>Auto Wall</strong>. Your privacy is important to us. This Privacy Policy explains how <strong>Auto Wall</strong> ("we," "our," or "us") handles your information.
        </Text>

        <Box>
          <Heading as="h2" size="xl" mb={2} textDecorationLine={"underline"}>1. Information We Collect</Heading>
          <Text>
            As of now, <strong>Auto Wall</strong> does not collect any personal information from users.
          </Text>
        </Box>

        <Box>
          <Heading as="h2" size="xl" mb={2} textDecorationLine={"underline"}>2. Permissions Used</Heading>
          <Text>Our app requires the following permissions to function properly:</Text>
          <ListRoot pl={4} mt={2} gap={1} alignItems={"flex-start"}>
            <ListItem><strong>INTERNET</strong>: To enable potential future features and updates.</ListItem>
            <ListItem><strong>WAKE_LOCK</strong>: To ensure wallpaper changes occur without interruptions.</ListItem>
            <ListItem><strong>FOREGROUND_SERVICE</strong>: To manage services running in the background for wallpaper updates.</ListItem>
            <ListItem><strong>RECEIVE_BOOT_COMPLETED</strong>: To resume functionality after the device is restarted.</ListItem>
            <ListItem><strong>REQUEST_IGNORE_BATTERY_OPTIMIZATIONS</strong>: To ensure the app works seamlessly without interruptions from battery optimization settings.</ListItem>
          </ListRoot>
          <Text mt={2}>These permissions are solely used to enhance app functionality and not for collecting or sharing user data.</Text>
        </Box>

        <Box>
          <Heading as="h2" size="xl" mb={2} textDecorationLine={"underline"}>3. Data Storage</Heading>
          <Text>
            The app allows users to pick images from their device. A copy of these images is saved locally in the app's storage to manage wallpaper changes. <strong>No data is uploaded or stored on external servers.</strong>
          </Text>
        </Box>

        <Box>
          <Heading as="h2" size="xl" mb={2} textDecorationLine={"underline"}>4. Third-Party Services</Heading>
          <Text>
            Currently, <strong>Auto Wall</strong> does not integrate with any third-party services. However, we may add Google Ads in future updates, and this Privacy Policy will be updated accordingly.
          </Text>
        </Box>

        <Box>
          <Heading as="h2" size="xl" mb={2} textDecorationLine={"underline"}>5. Automatic Wallpaper Changes</Heading>
          <Text>
            The app accesses copies of images provided by the user that are stored locally on the device. These images are processed solely for managing wallpaper changes and are not shared or used beyond this purpose.
          </Text>
        </Box>

        <Box>
          <Heading as="h2" size="xl" mb={2} textDecorationLine={"underline"}>6. Data Sharing</Heading>
          <Text>
            <strong>Auto Wall</strong> does not collect or share any user data with third parties.
          </Text>
        </Box>

        <Box>
          <Heading as="h2" size="xl" mb={2} textDecorationLine={"underline"}>7. Children’s Privacy</Heading>
          <Text>
            Our app is suitable for users aged 6 and above. Since we do not collect personal information, there are no specific privacy risks for children.
          </Text>
        </Box>

        <Box>
          <Heading as="h2" size="xl" mb={2} textDecorationLine={"underline"}>8. User Control and Options</Heading>
          <Text>
            Since no data is collected, there are no configurable privacy settings or opt-out options required at this time.
          </Text>
        </Box>

        <Box>
          <Heading as="h2" size="xl" mb={2} textDecorationLine={"underline"}>9. Changes to this Privacy Policy</Heading>
          <Text>
            We reserve the right to update this Privacy Policy as needed to reflect changes in our app or legal requirements. Users are encouraged to review this page periodically for any updates. Major changes will be communicated through in-app notifications or updates.
          </Text>
        </Box>

        <Box>
          <Heading as="h2" size="xl" mb={2} textDecorationLine={"underline"}>10. Contact Us</Heading>
          <Text>
            If you have any questions or concerns about this Privacy Policy, please contact us at:
          </Text>
          <Text mt={2}><strong>Email:</strong> <Link href="mailto:dhirajksharma.social@gmail.com" color="teal.500">dhirajksharma.social@gmail.com</Link></Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default AutowallPrivacy;