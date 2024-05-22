import { Formik, Form, Field } from "formik";
import styled from "styled-components";

const initialValues = {
  login: "",
  password: "",
};

const Input = styled(Field)`
  color: #2a8a2a;
`;

export const LoginForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form autoComplete="off" style={{ margin: 100, color: "red" }}>
        <label htmlFor="password">
          Password
          <Field type="password" name="password" placeholder="pass" style={{ marginRight: 23 }}></Field>
        </label>
        <label htmlFor="login">
          Login
          <Input type="text" name="login" placeholder="login" style={{ marginRight: 23 }}></Input>
        </label>

        <button type="submit">ok</button>
      </Form>
    </Formik>
  );
};
