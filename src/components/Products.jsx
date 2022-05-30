import React, { useEffect, useState } from "react";
import AddProduct from "./AddProduct";
import Product from "./Product";
import { Flex, Grid, Spacer, useDisclosure } from "@chakra-ui/react";
import axios from "axios";

const Products = () => {
  const [data, setData] = useState([]);
  const [toggle, setToggle] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    axios
      .get("http://localhost:8080/products")
      .then((res) => setData([...res.data]));
  }, []);
  return (
    <Flex flexDirection="column" alignItems="center">
      <br />
      <AddProduct isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      <Spacer />
      <br />
      <Grid templateColumns="repeat(3,.1fr)" gap={6}>
        {data.map((data) => (
          <Product key={data.id} data={data} />
        ))}
      </Grid>
      <br />
      {/* Pagination */}
    </Flex>
  );
};

export default Products;
