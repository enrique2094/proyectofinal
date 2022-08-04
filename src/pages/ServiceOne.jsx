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
    const [description, setDescription] = useState ("")
    const [people, setPeople] = useState ("")
    const [price, setPrice] = useState ("")
    const [duration, setDuration] = useState ("")
    const [date, setDate] = useState ("")
    const [ allPlaces, setAllPlaces ] = useState([])

    function handleSubmit (event) { 
        event.preventDefault()
        axios.post(`${process.env.REACT_APP_SERVER_URL}/new`, {place, people, duration, date} )
        .then(newService => {
            setAllPlaces([...allPlaces, newService.data])
            setPlace("")
            setDescription("")
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
              {place.duration}
            </ListItem>
          </List>
          <Link to={`/tourdetails/${place._id}`}>
          <Button 
            mt={10}
            w={'full'}
            bg={'blue.400'}
            color={'white'}
            rounded={'xl'}
            boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
            _hover={{
              bg: 'blue.500',
            }}
            _focus={{
              bg: 'blue.500',
            }}>
            Edit Tour
          </Button>
          </Link>
          <Button
            mt={10}
            w={'full'}
            bg={'red.400'}
            color={'white'}
            rounded={'xl'}
            boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
            _hover={{
              bg: 'red.500',
            }}
            _focus={{
              bg: 'red.500',
            }}>
            Delete Tour
          </Button>
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
          Reserve your tour to your favorite attraction🗽
        </Heading>
        <Text color={'gray.500'} fontSize={{ base: 'sm', sm: 'md' }}>
          We are looking for to provide you the best experience around The Big Apple🍎. Our options include: 
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
        <option>Rockefeller Center</option>
        <option>Empire State Building</option>
        <option>World Trade Center</option>
        </Select>
          <Input
            placeholder="People"
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
          <Input 
            placeholder="Date"
            bg={'gray.100'}
            border={0}
            color={'gray.500'} 
            type="datetime-local"
            value={date}
            name="date"
            onChange={(event) => setDate(event.target.value)}
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