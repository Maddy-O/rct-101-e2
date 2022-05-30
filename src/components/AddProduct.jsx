import React from "react";
import {
  Button,
  Modal,
  ModalBody,
  Input,
  Select,
  RadioGroup,
  Radio,
} from "@chakra-ui/react";

const AddProduct = ({ isOpen, onOpen, onClose }) => {
  return (
    <>
      <Button
        data-cy="add-product-button"
        // my={4}
        // bg="teal"
        // color="whitesmoke"
        // border="1px solid teal"
        // padding="7px 10px"
        // borderRadius="15px"
        // cursor="pointer"
        // boxShadow="1px 1px 1px 2px gray"
        onClick={onOpen}
      >
        Add Product
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalBody pb={6}>
          <Input data-cy="add-product-title" />
          <Select data-cy="add-product-category">
            <option data-cy="add-product-category-shirt"></option>
            <option data-cy="add-product-category-pant"></option>
            <option data-cy="add-product-category-jeans"></option>
          </Select>
          <RadioGroup data-cy="add-product-gender">
            <Radio data-cy="add-product-gender-male"></Radio>
            <Radio data-cy="add-product-gender-female"></Radio>
            <Radio data-cy="add-product-gender-unisex"></Radio>
          </RadioGroup>
          <Input data-cy="add-product-price" />
          <Button
            data-cy="add-product-submit-button"
            onClick={onClose}
          ></Button>
        </ModalBody>
      </Modal>
    </>
  );
};

export default AddProduct;
