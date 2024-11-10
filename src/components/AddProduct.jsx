import { Formik, Form, Field, ErrorMessage } from "formik";

// eslint-disable-next-line react/prop-types
const AddProductForm = ({ onSubmit }) => {
  return (
    <div className="p-4 border rounded shadow-md bg-white max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Add Product</h2>

      <Formik
        initialValues={{ name: "", price: "", description: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.name) errors.name = "Product name is required";
          if (!values.price) errors.price = "Price is required";
          else if (isNaN(values.price) || values.price <= 0)
            errors.price = "Enter a valid price";
          return errors;
        }}
        onSubmit={(values, { resetForm }) => {
          onSubmit(values);
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
                type="number"
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
  );
};

export default AddProductForm;
