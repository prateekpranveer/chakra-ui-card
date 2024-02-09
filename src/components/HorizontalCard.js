import React from 'react';
import { Card, Stack, Image, Heading, Text, Button, useColorModeValue } from '@chakra-ui/react';

const HorizontalCard = () => {
  const cardBorderColor = useColorModeValue("blue.400", "blue.600");
  const cardBackgroundColor = useColorModeValue("white", "gray.800");

  return (
    <>
    <div style={{background:'#f3f0fa', padding: '24px', margin: '10px', borderRadius: '16px'}}>
      <Heading fontFamily={'raleway'}>Horizontal Card</Heading>
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow='hidden'
      variant='outline'
      borderWidth='1px'
      borderColor={cardBorderColor}
      borderRadius='lg'
      bg={cardBackgroundColor}
      boxShadow='lg'
      marginY='4'
    >
      <Image
        objectFit='cover'
        maxW={{ base: '100%', sm: '200px' }}
        src='https://via.placeholder.com/300'
        alt='Caffe Latte'
      />

      <Stack p='4' spacing='4' align='flex-start' justify='center'>
        <Heading fontFamily={'raleway'} size='md' color={useColorModeValue("gray.800", "white")}>Horizontal Card</Heading>

        <Text color={useColorModeValue("gray.600", "gray.400")}>
          This is a horizontal card made with Chakra UI, card component with an image.
        </Text>

        <Button fontWeight={300} variant='solid' colorScheme='red'>
          @GeeksforGeeks
        </Button>
      </Stack>
    </Card>
    </div>
    </>
  );
};

export default HorizontalCard;
