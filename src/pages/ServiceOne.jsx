import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  Select,
  Box,
  Stack,
  Heading,
  Text,
  Container,
  Input,
  Button,
  SimpleGrid,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";

const ServiceOne = (props) => {
  const [place, setPlace] = useState("");
  const [people, setPeople] = useState("");
  const [placeId, setPlaceId] = useState(0);
  const [allPlaces, setAllPlaces] = useState([]);
  const [textButton, setTextButton] = useState("Create Tour");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [titleModal, setTitleModal] = useState('');
  const [descriptionModal, setDescriptionModal] = useState('');
  const [day, setDay] = useState('');

  const handleSubmit = () => {
    if (placeId) {
      axios
        .put(`${process.env.REACT_APP_SERVER_URL}/editour/${placeId}`, {
          place,
          people,
          day,
        })
        .then(() => {
          //setAllPlaces([...allPlaces, newService.data]);
          setAllPlaces(
            allPlaces.map((item) => {
              if (item._id === placeId) {
                item.place = place;
                item.day = day;
                item.people = people;
              }
              return item;
            })
          );
          setPlaceId(0);
          setPlace("");
          setDay("");
          setPeople("");
          setTextButton("Create Tour");

          setTitleModal('Record edit');
          setDescriptionModal('The record has been updated');
          onOpen();
        })
        .catch((e) => console.log(e));
    } else {
      axios
        .post(`${process.env.REACT_APP_SERVER_URL}/new`, {
          place,
          people,
          day,
        })
        .then((newService) => {
          setAllPlaces([...allPlaces, newService.data]);
          setPlace("");
          setDay("");
          setPeople("");
          setTextButton("Create Tour");

          setTitleModal('Record created');
          setDescriptionModal('The record has been created');
          onOpen();
        })
        .catch(console.log());
    }
  };

  const updateData = (data) => {
    setTextButton("Update Tour");
    setPlaceId(data._id);
    setPlace(data.place);
    setDay(data.day);
    setPeople(data.people);
  };

  const deleteData = (id) => {
    axios
      .delete(`${process.env.REACT_APP_SERVER_URL}/deletetour/${id}`)
      .then((res) => {
        setAllPlaces(allPlaces.filter((item) => item._id !== id));
        setTitleModal('Record Deletion');
        setDescriptionModal('The record has been deleted');
        onOpen();
      });
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/all`)
      .then((places) => {
        setAllPlaces(places.data);
      })
      .catch(console.log());
  }, []);

  return (
    <Box position={"relative"}>
      <Container
        as={SimpleGrid}
        maxW={"7xl"}
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 10, lg: 32 }}
        py={{ base: 10, sm: 20, lg: 32 }}
      >
        <Stack spacing={{ base: 10, md: 20 }}>
          <Stack
            spacing={4}
            align={"center"}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <Heading
              color={"gray.800"}
              lineHeight={1.1}
              fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
            >
              Details of your tour here:
            </Heading>
            <Box px={6} py={10}>
              <TableContainer>
                <Table variant="striped" colorScheme="blue">
                  <Thead>
                    <Tr>
                      <Th>Place</Th>
                      <Th>Day</Th>
                      <Th isNumeric>People</Th>
                      <Th>Options</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {allPlaces.map((item, index) => {
                      return (
                        <Tr key={index}>
                          <Td>{item.place}</Td>
                          <Td>{item.day}</Td>
                          <Td isNumeric>{item.people}</Td>
                          <Td>
                            <Stack spacing={4} direction="row" align="center">
                              <Button
                                leftIcon={<EditIcon />}
                                onClick={() => updateData(item)}
                                colorScheme="teal"
                                size="xs"
                                variant="outline"
                              >
                                Edit
                              </Button>
                              <Button
                                leftIcon={<DeleteIcon />}
                                onClick={() => deleteData(item._id)}
                                colorScheme="red"
                                size="xs"
                                variant="outline"
                              >
                                Delete
                              </Button>
                            </Stack>
                          </Td>
                        </Tr>
                      );
                    })}
                  </Tbody>
                </Table>
              </TableContainer>
            </Box>
          </Stack>
        </Stack>
        <Stack
          bg={"gray.50"}
          rounded={"xl"}
          p={{ base: 4, sm: 6, md: 8 }}
          spacing={{ base: 8 }}
          maxW={{ lg: "lg" }}
        >
          <Stack spacing={4}>
            <Heading
              color={"gray.800"}
              lineHeight={1.1}
              fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
            >
              Creat your tour to your favorite attraction🗽
            </Heading>
            <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
              Looking for to provide you the best experience around The Big
              Apple🍎. Our options include: parks, neighborhoods, buildings,
              streets, avenues and much more!
            </Text>
          </Stack>
          <Box as={"form"} mt={10}>
            <Stack spacing={4}>
              <Select
                value={place}
                name="place"
                onChange={(event) => setPlace(event.target.value)}
                required
                placeholder="Select Place"
              >
                <option>Central Park</option>
                <option>Empire State Building</option>
                <option>Times Square</option>
                <option>Statue of Liberty</option>
              </Select>


              <Select
                value={day}
                name="day"
                onChange={(event) => setDay(event.target.value)}
                required
                placeholder="Select Day"
              >
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
                <option value="Saturday">Saturday</option>
              </Select>


              
              <Input
                placeholder="Number of People"
                bg={"gray.100"}
                border={0}
                color={"gray.500"}
                _placeholder={{
                  color: "gray.500",
                }}
                value={people}
                name="people"
                onChange={(event) => setPeople(event.target.value)}
                type="number"
              />
            </Stack>
          
            <Button
              fontFamily={"heading"}
              mt={8}
              w={"full"}
              bgGradient="linear(to-r, blue.400,blue.400)"
              color={"white"}
              _hover={{
                bgGradient: "linear(to-r, blue.400,blue.400)",
                boxShadow: "xl",
              }}
              onClick={() => handleSubmit()}
              disabled={!place || !people || !day }
            >
              {textButton}
            </Button>
          </Box>
          form
        </Stack>
      </Container>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{titleModal}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{descriptionModal}</ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Ok
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default ServiceOne;
