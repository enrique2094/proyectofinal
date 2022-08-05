import React from 'react'
import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import { useNavigate, useParams } from "react-router-dom"
import axios from 'axios'
import { Select, 
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
    import { CheckIcon } from "@chakra-ui/icons" 
    import TourDetails from './TourDetails'

    const ServiceOne = (props) => {

    const navigate = useNavigate()
    const [place, setPlace] = useState ("")
    const [people, setPeople] = useState ("")
    const [time, setTime] = useState ("")
    const [ allPlaces, setAllPlaces ] = useState([])

    function handleSubmit (event) { 
        event.preventDefault()
        console.log( {place, people, time})
        axios.post(`${process.env.REACT_APP_SERVER_URL}/new`, {place, people, time} )
        .then(newService => {
            setAllPlaces([...allPlaces, newService.data])
            setPlace("")
            setTime("")
            setPeople("")
        }).catch(console.log())
        
    }

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/all`)
        .then(places => {
            setAllPlaces(places.data)
            console.log(places.data)
        }).catch(console.log())
    },[])

  return (
  
    <Box position={'relative'}>
    <Container
      as={SimpleGrid}
      maxW={'7xl'}
      columns={{ base: 1, md: 2 }}
      spacing={{ base: 10, lg: 32 }}
      py={{ base: 10, sm: 20, lg: 32 }}>
      <Stack spacing={{ base: 10, md: 20 }}>
        <Stack  spacing={4} align={'center'} style={{ display: "flex", flexDirection: "column"}}>
        <Heading
            color={'gray.800'}
            lineHeight={1.1}
            fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}>
            Details of your tour here:
          </Heading>
{
            allPlaces.map((place, index) => {
              return <Box key={place._id} px={6} py={10}>

        <List spacing={3}>
          <ListItem>
            <ListIcon as={CheckIcon} color="blue.400" />
            {place.place}
          </ListItem>
          <ListItem>
            <ListIcon as={CheckIcon} color="blue.400" />
            {place.people}
          </ListItem>
          <ListItem>
            <ListIcon as={CheckIcon} color="blue.400" />
            {place.time}
          </ListItem>
        </List>
      </Box>
})
}
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
          Creat your tour to your favorite attraction🗽
        </Heading>
        <Text color={'gray.500'} fontSize={{ base: 'sm', sm: 'md' }}>
          Looking for to provide you the best experience around The Big Apple🍎. Our options include: 
          parks, neighborhoods, buildings, streets, avenues and much more!
        </Text>
      </Stack>
      <Box as={'form'} mt={10}>
        <Stack spacing={4}>
        <Select value={place}
            name="place"
            onChange={(event) => setPlace(event.target.value)}
            required
            placeholder='Select Place'>
        <option>Central Park</option>
        <option>Empire State Building</option>
        <option>Times Square</option>
        <option>Statue of Liberty</option>
        </Select>
        <Select value={time}
            name="time"
            onChange={(event) => setTime(event.target.value)}
            required
            placeholder='Select Time'>
        <option value="Night time">Night time</option>
        <option value="Day time">Day time</option>
        </Select>
          <Input
            placeholder="Number of People"
            bg={'gray.100'}
            border={0}
            color={'gray.500'}
            _placeholder={{
              color: 'gray.500'
            }}
            value={people}
              name="people"
              onChange={(event) => setPeople(event.target.value)}
          />
        </Stack>
        <Link to={`/tourdetails/${place._id}`}>
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
          type="submit"
          onClick={handleSubmit}
          >
          Create Tour
        </Button>
        </Link>
      </Box>
      form
    </Stack>
  </Container>
</Box>
  )
}


export default ServiceOne