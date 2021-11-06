import { Container, Box, Heading, Image } from '@chakra-ui/react';

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
      <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} align="center">
        <Image
          borderColor="whiteAlpha.800"
          borderWidth={2}
          borderStyle="solid"
          maxWidth="100px"
          display="inline-block"
          borderRadius="full"
          src="/images/richard.jpg"
          alt="profile-image"
        />
      </Box>
    </Container>
  );
};

export default page;
