import React, { useEffect, useState } from "react";
import AddProduct from "./AddProduct";
import Product from "./Product";
import { Flex, Grid, Spacer, useDisclosure } from "@chakra-ui/react";
import axios from "axios";
import Pagination from "./Pagination";
import style from "./Products.module.css";

const Products = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(3);
  const totalCount = page.length;
  const [data, setData] = useState([]);
  const [form, setForm] = useState({
    title: "",
    category: "",
    gender: "",
    price: 0,
  });

  const handlePagesForward = () => {
    if (page > 1) {
      setPage(page + 1);
    }
  };

  const handleOnChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const saveData = (e) => {
    e.preventDefault();
    const { title, category, gender, price } = form;
    axios
      .post("http://localhost:8080/products", {
        title,
        category,
        gender,
        price,
      })
      .then((d) => console.log(d));
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8080/products?_page=${page}&_limit=${3}`)
      .then((res) => setData([...res.data]));
  }, [form]);

  return (
    <Flex className={style.flex}>
      <br />
      <AddProduct
        handleOnChange={handleOnChange}
        form={form}
        saveData={saveData}
      />
      <Spacer />
      <br />
      <Grid className={style.grid}>
        {data.map((data) => (
          <Product key={data.id} data={data} />
        ))}
      </Grid>
      <br />
      <Pagination
        page={page}
        setPage={setPage}
        totalCount={totalCount}
        limit={limit}
        setLimit={setLimit}
        handlePagesForward={handlePagesForward}
      />
    </Flex>
  );
};

export default Products;
