import { Container, VStack, Heading, Text, Box, Image, IconButton, HStack, Link } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.lg" p={4}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <Heading as="h1" size="2xl">
            Naples Republican News
          </Heading>
          <Text fontSize="lg" color="gray.600">
            Your trusted source for conservative news in Naples, Florida
          </Text>
        </Box>

        <Box>
          <Image src="https://images.unsplash.com/photo-1605723517503-3cadb5818a0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxOYXBsZXMlMjBGbG9yaWRhJTIwc2t5bGluZXxlbnwwfHx8fDE3MTY0NjI4NzR8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Naples Florida Skyline" borderRadius="md" />
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Latest News
          </Heading>
          <VStack spacing={4} align="stretch">
            <Box p={4} borderWidth="1px" borderRadius="md">
              <Heading as="h3" size="md">
                Local Economy Booming
              </Heading>
              <Text mt={2}>Naples, FL - The local economy is experiencing unprecedented growth, with new businesses opening every week...</Text>
            </Box>
            <Box p={4} borderWidth="1px" borderRadius="md">
              <Heading as="h3" size="md">
                Community Events
              </Heading>
              <Text mt={2}>Naples, FL - This weekend, join us for the annual Naples Freedom Festival, featuring live music, food trucks, and more...</Text>
            </Box>
            <Box p={4} borderWidth="1px" borderRadius="md">
              <Heading as="h3" size="md">
                Political Updates
              </Heading>
              <Text mt={2}>Naples, FL - Local Republican leaders are gearing up for the upcoming elections, focusing on key issues such as...</Text>
            </Box>
          </VStack>
        </Box>

        <Box textAlign="center">
          <Heading as="h2" size="lg" mb={4}>
            Follow Us
          </Heading>
          <HStack spacing={4} justify="center">
            <Link href="https://facebook.com" isExternal>
              <IconButton aria-label="Facebook" icon={<FaFacebook />} size="lg" />
            </Link>
            <Link href="https://twitter.com" isExternal>
              <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" />
            </Link>
            <Link href="https://instagram.com" isExternal>
              <IconButton aria-label="Instagram" icon={<FaInstagram />} size="lg" />
            </Link>
          </HStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
