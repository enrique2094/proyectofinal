import React from 'react';
import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
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
    const [people, setPeople] = useState ("")
    const [date, setDate] = useState ("")
    const [ allPlaces, setAllPlaces ] = useState([])
    const navi = useNavigate()

    function deletePublication(){
      fetch(`${process.env.REACT_APP_SERVER_URL}/ddelete/${id}`, {method:"delete"})
      .then(data => data.json() )
      .then( publicaciones => {
       navi("/")
      })
      .catch(console.log)
  
    }

    useEffect(() =>{
        fetch(`${process.env.REACT_APP_SERVER_URL}/all/${id}`)
        .then((datos) => datos.json())
        .then((allData) => {
        })
        .catch(console.log());
    }, [])

    const handleSubmit = (event) =>{
        event.prevent.default()
        fetch(`${process.env.REACT_APP_SERVER_URL}/all/${id}`, {
        method: "PUT",     
    }) .then((datos) => datos.json())
        .then((allData) => {
            console.log(allData)
    }) 
        .catch(console.log)
}

  return (
      <Stack spacing={4}>
        <Heading
          color={'gray.800'}
          lineHeight={1.1}
          fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}>
          Modify your tour🗽
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
  )
}

export default TourEdit