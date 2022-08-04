// import logo from "../logo.svg";
import "../App.css";
import {
  Button,
  Flex,
  Heading,
  Avatar,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';

function HomePage() {
  return (
    <div className="App">
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'blue.400',
                zIndex: -1,
              }}>
              TopToBottom
            </Text>
            <br />{' '}
            <Text color={'blue.400'} as={'span'}>
              Book your tour
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.600'}>
          Enjoy a tour visiting the most popular places in 
          New York City with the most professional tour guide🗽🍎🚕
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://wallpapercave.com/wp/wp4120945.jpg'
          }
        />
      </Flex>
    </Stack>
    </div>
  );
}

export default HomePage;
