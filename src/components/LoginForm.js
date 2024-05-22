import { Formik, Form, Field, ErrorMessage } from "formik";
import styled from "styled-components";
import * as yup from "yup";

const shema = yup
  .object({
    login: yup.string().required(),
    password: yup.string().min(7).required(),
  })
  .shape();

const initialValues = {
  login: "",
  password: "",
};

const Button = styled("button")`
  background-color: blue;
  color: #ffff;
`;

const Input = styled(Field)`
  color: #2a8a2a;
`;

export const LoginForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={shema}>
      <Form autoComplete="off" style={{ margin: 100, color: "red" }}>
        <label htmlFor="password">
          Password
          <Field type="password" name="password" placeholder="pass" style={{ marginRight: 23 }}></Field>
          <ErrorMessage name="password" component="div" />
        </label>
        <label htmlFor="login">
          Login
          <Input type="text" name="login" placeholder="login" style={{ marginRight: 23 }}></Input>
          <ErrorMessage name="login" component="p" />
        </label>

        <Button type="submit">ok</Button>
      </Form>
    </Formik>
  );
};
