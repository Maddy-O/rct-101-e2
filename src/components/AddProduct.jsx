import React from "react";
import {
  Button,
  Modal,
  ModalBody,
  Input,
  Select,
  RadioGroup,
  Radio,
  useDisclosure,
  ModalOverlay,
  ModalCloseButton,
  ModalHeader,
  ModalContent,
  ModalFooter,
} from "@chakra-ui/react";

const AddProduct = ({ form, handleOnChange, saveData }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef();
  return (
    <>
      <Button data-cy="add-product-button" my={4} onClick={onOpen}>
        Add Product
      </Button>
      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Fill</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Input
              data-cy="add-product-title"
              ref={initialRef}
              type="text"
              placeholder="Product Name"
              name="title"
              value={form.title}
              onChange={handleOnChange}
            />
            <Select
              data-cy="add-product-category"
              name="category"
              value={form.category}
              onChange={handleOnChange}
            >
              <option data-cy="add-product-category-shirt" value="shirt">
                Shirt
              </option>
              <option data-cy="add-product-category-pant" value="Pant">
                Pant
              </option>
              <option data-cy="add-product-category-jeans" value="Jeans">
                Jeans
              </option>
            </Select>
            <RadioGroup
              data-cy="add-product-gender"
              name="gender"
              value={form.gender}
              onChange={handleOnChange}
            >
              <Radio
                data-cy="add-product-gender-male"
                type="radio"
                value="male"
              >
                Male
              </Radio>
              <Radio
                data-cy="add-product-gender-female"
                type="radio"
                value="female"
              >
                Female
              </Radio>
              <Radio
                data-cy="add-product-gender-unisex"
                type="radio"
                value="unisex"
              >
                Unisex
              </Radio>
            </RadioGroup>
            <Input
              data-cy="add-product-price"
              type="number"
              name="price"
              value={form.price}
              onChange={handleOnChange}
            />
            <Button data-cy="add-product-submit-button" onClick={saveData}>
              Save
            </Button>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddProduct;
