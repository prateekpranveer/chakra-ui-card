import { Stack, Card, CardHeader, CardBody, CardFooter, Heading, Text, Flex } from '@chakra-ui/react';

const CardWithSize = () => {
  return (
    <Flex bg={'#ece3ff'} p='12px' borderRadius={'12px'} maxW='md' direction={'column'}>
      <Heading fontFamily={'raleway'} mb='4'>Card with Different Sizes</Heading>
      <Flex direction={'column'} p='12px' borderRadius={'12px'} maxW={''} gap={6}>
        {[{size: 'sm', color: '#a0d91c'}, {size: 'md', color: '#d91c81'}, {size:'lg', color: '#581cd9'}].map((props) => (
          <Card color={'white'} w='400px' bg={props.color} key={props.size} size={props.size} maxH="full"> {/* Set minimum height here */}
            <CardHeader>
              <Heading size={'xs'}>Card of Size {props.size}</Heading>
            </CardHeader>
            <CardBody>
              <Text>size = {props.size}</Text>
            </CardBody>
            <CardFooter>
              @GeeksForGeeks
            </CardFooter>
          </Card>
        ))}
      </Flex>
    </Flex>
  );
};

export default CardWithSize;
