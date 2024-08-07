import React from 'react';
import { Box, FormControl, FormLabel, Input, Select, Button, VStack } from '@chakra-ui/react';

const TripForm = () => {
  return (
    <Box w="300px" p="4" bg="gray.100" borderRadius="md" boxShadow="md">
      <VStack spacing="4">
        <FormControl id="destination">
          <FormLabel>Destination</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl id="members">
          <FormLabel>Number of Members</FormLabel>
          <Input type="number" />
        </FormControl>
        <FormControl id="start-date">
          <FormLabel>Start Date</FormLabel>
          <Input type="date" />
        </FormControl>
        <FormControl id="end-date">
          <FormLabel>End Date</FormLabel>
          <Input type="date" />
        </FormControl>
        <FormControl id="age-group">
          <FormLabel>Age Group</FormLabel>
          <Select>
            <option value="18-22">18-22</option>
            <option value="22-30">22-30</option>
            <option value="30-40">30-40</option>
            <option value="40+">40+</option>
          </Select>
        </FormControl>
        <Button colorScheme="teal" type="submit">Submit</Button>
      </VStack>
    </Box>
  );
};

export default TripForm;
