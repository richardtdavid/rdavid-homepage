import NextLink from 'next/link';
import {
  Link,
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Button
} from '@chakra-ui/react';
import Section from '../components/section';
import Paragraph from '../components/paragraph';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { BioInfo, BioSection } from '../components/bio';

const page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        mb={6}
        p={3}
        align="center"
      >
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
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          {' '}
          Work{' '}
        </Heading>
        <Paragraph>
          Richard is a full stack developer based out of Minneapolis, Minnesota
          with a passion fro building services that improve quality of life. He
          has experience in planning, designing, launching and solving real-life
          problems with code. When not infront of a computer, he can be found
          taking{' '}
          <NextLink href="https://500px.com/p/riichard?view=photos">
            <Link>photos</Link>
          </NextLink>
          .
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioInfo>2004</BioInfo>
          Moved to USA
        </BioSection>
        <BioSection>
          <BioInfo>2017</BioInfo>
          Completed Bachelor of Secience (B.S.) Aeronautics & Information
          Systems from University of North Dakota
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Photography, Learning, Design, Playing Videos Games
        </Paragraph>
      </Section>
    </Container>
  );
};

export default page;
