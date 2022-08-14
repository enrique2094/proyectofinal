import {
  Container,
  Flex,
  Box,
  Heading,
  Button,
  VStack,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
} from 'react-icons/md';

export default function contact() {
  return (
    <Container 
    backgroundImage="url(https://www.worldatlas.com/r/w960-q80/upload/ea/d1/c8/shutterstock-569566918.jpg)" 
    backgroundPosition="center"
    backgroundRepeat="no-repeat"
    backgroundSize="cover"
    maxW="full" 
    mt={0} 
    centerContent 
    overflow="hidden">
      <Flex>
        <Box
          bg="#1256b5" style= {{opacity: "0.9"}}
          color="white"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}>
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box>
                  <Heading>Contact</Heading>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} alignItems="flex-start">
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="#DCE2FF" 
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<MdPhone color="#white" size="20px" />}>
                        <b>+1-347969577</b>
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<MdEmail color="#white" size="20px" />}>
                        <b>nyctour@gmail.com</b>
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<MdLocationOn color="#white" size="20px" />}>
                        <b>New York, USA</b>
                      </Button>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}