import { Card, CardHeader, CardBody, CardFooter, Text, Divider } from '@chakra-ui/react';

const CardWithDividers = () => {
  return (
    <Card bg='gray.900' color='white'>
      <CardHeader fontSize='2xl' mb='1'>Card With Dividers</CardHeader>
      <CardBody>
        <Text>Card Content 1</Text>
        <Divider />
        <Text>Card Content 2</Text>
        <Divider />
        <Text>Card Content 3</Text>
        <Divider/>
      </CardBody>
      <CardFooter>@GeeksForGeeks</CardFooter>
    </Card>
  );
};

export default CardWithDividers;
