import { Card, CardBody, CardHeader, StackDivider, Box, Divider, Stack, Text, CardFooter, Button, ButtonGroup, Image } from '@chakra-ui/react';

const CardWithImage = () => {
    return (
        <Card maxWidth='300px' borderRadius="lg" overflow="hidden" boxShadow="lg" margin="auto">
            <Image height={'100px'} src="https://via.placeholder.com/100" alt="Placeholder Image" />

            <CardBody>
                <Stack>
                    <Text fontWeight="bold" fontSize="md">
                        Card With Image
                    </Text>
                    <Text fontSize={'xs'}>
                        This is a Chakra UI card with Image
                    </Text>
                </Stack>
            </CardBody>

            <CardFooter>
                <ButtonGroup>
                    <Button size={'sm'} fontWeight={300} colorScheme="blue">Blue Button</Button>
                    <Button size={'sm'} fontWeight={300} colorScheme="green">Green Button</Button>
                </ButtonGroup>
            </CardFooter>
        </Card>
    );
};

export default CardWithImage;
