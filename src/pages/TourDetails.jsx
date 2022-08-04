import React from 'react';
import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom';
import {
    Box,
    Stack,
    Heading,
    Text,
    Container,
    Input,
    Button,
    SimpleGrid,
    List,
    ListItem,
    ListIcon,
    useColorModeValue,
  } from '@chakra-ui/react';

const TourEdit = () => {
    const { id } = useParams();
    const [place, setPlace] = useState ("")
    const [description, setDescription] = useState ("")
    const [people, setPeople] = useState ("")
    const [price, setPrice] = useState ("")
    const [duration, setDuration] = useState ("")
    const [date, setDate] = useState ("")
    const [ allPlaces, setAllPlaces ] = useState([])

    useEffect(() =>{
        fetch(`http://localhost:5005/api/all/${id}`)
        .then((datos) => datos.json())
        .then((allData) => {
        })
        .catch(console.log());
    }, [])

    const handleSubmit = (event) =>{
        event.prevent.default()
        fetch(`http://localhost:5005/api/all/${id}`, {
        method: "PUT",     
    }) .then((datos) => datos.json())
        .then((allData) => {
            console.log(allData)
    }) 
        .catch(console.log)
}

  return (
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
          Modify your tour to your favorite attraction🗽
        </Heading>
    <Box as={'form'} mt={10}>
        <Stack spacing={4}>
          <Input
            placeholder="Place"
            bg={'gray.100'}
            border={0}
            color={'gray.500'}
            _placeholder={{
              color: 'gray.500'
        }} 
            value= {place}
            onChange={(event) => setPlace(event.target.value)}
          />
          <Input
            placeholder="Description"
            bg={'gray.100'}
            border={0}
            color={'gray.500'}
            _placeholder={{
              color: 'gray.500'
            }}
            value= {description}
            onChange={(event) => setDescription(event.target.value)}
          />
          <Input
            placeholder="People"
            bg={'gray.100'}
            border={0}
            color={'gray.500'}
            _placeholder={{
              color: 'gray.500'
            }}

            value= {people}
            onChange={(event) => setPeople(event.target.value)}
          />
          <Input 
            placeholder="Date"
            bg={'gray.100'}
            border={0}
            color={'gray.500'} 
            type="datetime-local"
            value= {date}
            onChange={(event) => setDate(event.target.value)}
          />
        </Stack>
        <Button
          fontFamily={'heading'}
          mt={8}
          w={'full'}
          bgGradient="linear(to-r, blue.400,blue.400)"
          color={'white'}
          _hover={{
            bgGradient: 'linear(to-r, blue.400,blue.400)',
            boxShadow: 'xl',
          }}
          onClick={handleSubmit}
          type="submit"
          >
          Edit Tour
        </Button>
      </Box>
      </Stack>
    </Stack>
  )
}

export default TourEdit