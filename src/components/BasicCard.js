import { Card, CardHeader, CardBody, CardFooter, Box } from '@chakra-ui/react';

const CustomCard = () => {
  return (
    <Card size='lg' bg="#ed3238" borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="lg" color='white'>
      <CardHeader>
        <Box
          color="gray.200"
          fontWeight="semibold"
          letterSpacing="wide"
          fontSize="xs"
          textTransform="uppercase"
          ml="2"
        >
          Category
        </Box>
      </CardHeader>
      <CardBody>
        <Box fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
          Basic Card
        </Box>
        <Box>
          This is a Chakra UI basic card.
        </Box>
      </CardBody>
      <CardFooter>
        @GeeksforGeeks
      </CardFooter>
    </Card>
  );
};

export default CustomCard;
