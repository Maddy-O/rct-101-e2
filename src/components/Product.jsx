import React from "react";
import {
  Text,
  Image,
  Box,
  Stack,
  Heading,
  Tag,
  TagLabel,
} from "@chakra-ui/react";

const Product = ({ data }) => {
  return (
    <Stack
      data-cy="product"
      height="350px"
      border="solid red 2px"
      alignItems="center"
      direction="column"
      spacing="25px"
    >
      <Image
        data-cy="product-image"
        boxSize="200px"
        objectFit="cover"
        src={data.imageSrc}
      />
      <Text data-cy="product-category">{data.category}</Text>
      <Tag size="lg" colorScheme="red" borderRadius="full" variant="solid">
        <TagLabel data-cy="product-gender">{data.gender}</TagLabel>
      </Tag>
      <Heading data-cy="product-title" size="4xl" as="h3" noOfLines={1}>
        {data.title}
      </Heading>
      <Box bg="tomato" data-cy="product-price">
        {data.price}
      </Box>
    </Stack>
  );
};

export default Product;
