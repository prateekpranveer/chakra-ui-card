import React from 'react';
import { Stack, Card, CardHeader, CardBody, Heading, Text, useColorModeValue, CardFooter } from '@chakra-ui/react';

const CardWithVariant = () => {
  const cardColors = {
    elevated: {
      bg: useColorModeValue("blue.400", "blue.600"),
      textColor: "white",
    },
    outline: {
      bg: "transparent",
      border: "1px solid",
      borderColor: useColorModeValue("blue.400", "blue.600"),
      textColor: useColorModeValue("blue.400", "blue.600"),
    },
    filled: {
      bg: useColorModeValue("green.400", "green.600"),
      textColor: "white",
    },
    unstyled: {
      bg: "transparent",
      border: '1px solid',
    },
  };

  return (
    <Stack spacing='4'>
      {['elevated', 'outline', 'filled', 'unstyled'].map((variant) => (
        <Card
          key={variant}
          variant={variant}
          bg={cardColors[variant].bg}
          border={cardColors[variant].border}
          color={cardColors[variant].textColor}
          borderWidth={cardColors[variant].borderWidth}
        >
          <CardHeader>
            <Heading fontFamily={'raleway'} fontWeight={'300'} size='md'>Card with Variant: {variant}</Heading>
          </CardHeader>
          <CardBody>
            <Text>variant = {variant}</Text>
          </CardBody>
          <CardFooter>
            @GeeksforGeeks
          </CardFooter>
        </Card>
      ))}
    </Stack>
  );
};

export default CardWithVariant;
