import React from 'react'
import {
    Box,
    Flex,
    Stack,
    Heading,
    Text,
    Container,
    Input,
    Button,
    SimpleGrid,
    Avatar,
    AvatarGroup,
    useBreakpointValue,
    IconProps,
    Icon,
  } from '@chakra-ui/react';

const ServiceOne = () => {
  return (<Box position={'relative'}>
  <Container
    as={SimpleGrid}
    maxW={'7xl'}
    columns={{ base: 1, md: 2 }}
    spacing={{ base: 10, lg: 32 }}
    py={{ base: 10, sm: 20, lg: 32 }}>
    <Stack spacing={{ base: 10, md: 20 }}>
      <Heading
        lineHeight={1.1}
        fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}>
        Senior web designers{' '}
        <Text
          as={'span'}
          bgGradient="linear(to-r, red.400,pink.400)"
          bgClip="text">
          &
        </Text>{' '}
        Full-Stack Developers
      </Heading>
      <Stack direction={'row'} spacing={4} align={'center'}>
        <Text fontFamily={'heading'} fontSize={{ base: '4xl', md: '6xl' }}>
          +
        </Text>
        <Flex
          align={'center'}
          justify={'center'}
          fontFamily={'heading'}
          fontSize={{ base: 'sm', md: 'lg' }}
          bg={'gray.800'}
          color={'white'}
          rounded={'full'}
          width={useBreakpointValue({ base: '44px', md: '60px' })}
          height={useBreakpointValue({ base: '44px', md: '60px' })}
          position={'relative'}
          _before={{
            content: '""',
            width: 'full',
            height: 'full',
            rounded: 'full',
            transform: 'scale(1.125)',
            bgGradient: 'linear(to-bl, orange.400,yellow.400)',
            position: 'absolute',
            zIndex: -1,
            top: 0,
            left: 0,
          }}>
          YOU
        </Flex>
      </Stack>
    </Stack>
    <Stack
      bg={'gray.50'}
      rounded={'xl'}
      p={{ base: 4, sm: 6, md: 8 }}
      spacing={{ base: 8 }}
      maxW={{ lg: 'lg' }}>
      <Stack spacing={4}>
        <Heading
          color={'gray.800'}
          lineHeight={1.1}
          fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}>
          Join our team
          <Text
            as={'span'}
            bgGradient="linear(to-r, red.400,pink.400)"
            bgClip="text">
            !
          </Text>
        </Heading>
        <Text color={'gray.500'} fontSize={{ base: 'sm', sm: 'md' }}>
          We’re looking for amazing engineers just like you! Become a part
          of our rockstar engineering team and skyrocket your career!
        </Text>
      </Stack>
      <Box as={'form'} mt={10}>
        <Stack spacing={4}>
          <Input
            placeholder="Firstname"
            bg={'gray.100'}
            border={0}
            color={'gray.500'}
            _placeholder={{
              color: 'gray.500',
            }}
          />
          <Input
            placeholder="firstname@lastname.io"
            bg={'gray.100'}
            border={0}
            color={'gray.500'}
            _placeholder={{
              color: 'gray.500',
            }}
          />
          <Input
            placeholder="+1 (___) __-___-___"
            bg={'gray.100'}
            border={0}
            color={'gray.500'}
            _placeholder={{
              color: 'gray.500',
            }}
          />
          <Button fontFamily={'heading'} bg={'gray.200'} color={'gray.800'}>
            Upload CV
          </Button>
        </Stack>
        <Button
          fontFamily={'heading'}
          mt={8}
          w={'full'}
          bgGradient="linear(to-r, red.400,pink.400)"
          color={'white'}
          _hover={{
            bgGradient: 'linear(to-r, red.400,pink.400)',
            boxShadow: 'xl',
          }}>
          Submit
        </Button>
      </Box>
      form
    </Stack>
  </Container>
</Box>
  )
}

export default ServiceOne