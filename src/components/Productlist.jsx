import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as z from "zod";
import productData from "../Productdata";
import ProductCard from "./Productcard";

const ProductList = () => {
  const [products, setProducts] = useState(productData);
  const [visibleCount, setVisibleCount] = useState(9);
  const [showAddForm, setShowAddForm] = useState(false); // Controls form visibility
  const [editProduct, setEditProduct] = useState(null);

  const productSchema = z.object({
    name: z.string().nonempty("Product name is required"),
    price: z
      .string()
      .refine((val) => !isNaN(parseFloat(val)), "Price must be a number"),
    description: z.string().optional(),
  });

  console.log("file updated");

  const handleAddProduct = (newProduct) => {
    setProducts((prevProducts) => [
      ...prevProducts,
      { id: prevProducts.length + 1, ...newProduct },
    ]);
    setShowAddForm(false);
  };

  const handleDeleteProduct = (id) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );
  };

  const handleUpdateProduct = (updatedProduct) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
    setEditProduct(null);
  };

  const loadMoreProducts = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  return (
    <div className="w-full pl-56 pr-56 pt-4  bg-gray-100 ">
      <div className="flex bg-white justify-between items-center pr-4 mb-2">
        <h1 className="text-lg font-normal py-2 pl-4">JUST FOR YOU</h1>
        <button
          onClick={() => setShowAddForm((prev) => !prev)}
          className="text-red-500 border border-solid border-red-400 px-2 hover:text-red-300"
        >
          {showAddForm ? "CANCEL" : "ADD PRODUCTS"}
        </button>
      </div>

      {showAddForm && !editProduct && (
        <div className="p-4 border rounded shadow-md bg-white max-w-md mx-auto mb-6">
          <h2 className="text-2xl font-bold mb-4">Add New Product</h2>
          <Formik
            initialValues={{ name: "", price: "", description: "" }}
            validate={(values) => {
              const errors = {};
              try {
                productSchema.parse(values);
              } catch (err) {
                err.errors.forEach(({ path, message }) => {
                  errors[path[0]] = message;
                });
              }
              return errors;
            }}
            onSubmit={(values, { resetForm }) => {
              handleAddProduct(values);
              resetForm();
            }}
          >
            {() => (
              <Form>
                <div className="mb-4">
                  <label className="block text-gray-700">Product Name</label>
                  <Field
                    name="name"
                    type="text"
                    className="border px-3 py-2 w-full rounded"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700">Price</label>
                  <Field
                    name="price"
                    type="text"
                    className="border px-3 py-2 w-full rounded"
                  />
                  <ErrorMessage
                    name="price"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700">Description</label>
                  <Field
                    name="description"
                    as="textarea"
                    className="border px-3 py-2 w-full rounded"
                  />
                  <ErrorMessage
                    name="description"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Add Product
                </button>
              </Form>
            )}
          </Formik>
        </div>
      )}

      {editProduct && (
        <div className="p-4 border rounded shadow-md bg-white max-w-md mx-auto mb-6">
          <h2 className="text-2xl font-bold mb-4">Update Product</h2>
          <Formik
            initialValues={editProduct}
            validate={(values) => {
              const errors = {};
              try {
                productSchema.parse(values);
              } catch (err) {
                err.errors.forEach(({ path, message }) => {
                  errors[path[0]] = message;
                });
              }
              return errors;
            }}
            onSubmit={(values, { resetForm }) => {
              handleUpdateProduct(values);
              resetForm();
            }}
          >
            {() => (
              <Form>
                <div className="mb-4">
                  <label className="block text-gray-700">Product Name</label>
                  <Field
                    name="name"
                    type="text"
                    className="border px-3 py-2 w-full rounded"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700">Price</label>
                  <Field
                    name="price"
                    type="text"
                    className="border px-3 py-2 w-full rounded"
                  />
                  <ErrorMessage
                    name="price"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700">Description</label>
                  <Field
                    name="description"
                    as="textarea"
                    className="border px-3 py-2 w-full rounded"
                  />
                  <ErrorMessage
                    name="description"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Update Product
                </button>
              </Form>
            )}
          </Formik>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mt-2">
        {products.slice(0, visibleCount).map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onDelete={handleDeleteProduct}
            onUpdate={setEditProduct}
          />
        ))}
      </div>

      {visibleCount < products.length && (
        <div className="flex justify-center mt-2">
          <button
            onClick={loadMoreProducts}
            className="mt-8 px-40 py-3 bg-gray-300 text-blue-400 border border-solid border-blue-400 hover:bg-gray-400 hover:text-white transition duration-300"
          >
            LOAD MORE
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductList;
