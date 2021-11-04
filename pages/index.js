import { Container, Box, Heading } from '@chakra-ui/react';

const page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" mb={6} p={3} align="center">
        Hello, I&apos;m a full-stack developer based in minneapolis!
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Richard David
          </Heading>
          <p> Digital Maker ( Artist / Developer / Engineer ) </p>
        </Box>
      </Box>
    </Container>
  );
};

export default page;
