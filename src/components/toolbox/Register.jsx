import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Button, Form, FormGroup, Label } from "reactstrap";

const validationSchema = Yup.object({
  email: Yup.string().email("Geçersiz e-mail adresi").required("Zorunlu alan"),
  password: Yup.string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "En az 8 karakter, en az 1 büyük ve 1 küçük harf ve özel karakter zorunluluğu var"
    )
    .required("Zorunlu alan"),
});

const Register = () => {
  return (
    <Formik
      initialValues={{ email: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ handleSubmit, handleChange, values, errors }) => (
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="email">Email/Kullanıcı Adı </Label>
            <input
              type="text"
              name="email"
              placeholder="E-mail"
              onChange={handleChange}
              values={values.email}
            />
          </FormGroup>
          <FormGroup>
            <Label for="email">Parola </Label>
            <input
              type="password"
              name="password"
              placeholder="password"
              onChange={handleChange}
              values={values.password}
            />
            {errors.password ? errors.password : null}
            {/* {errors.password (
              <div className="error">{Formik.errors.password} </div>
            )} */}
            {/* <Span className="validation-error">{Formik.errors.password}</Span> */}
          </FormGroup>

          <Button type="submit">Giris Yap</Button>
        </Form>
      )}
    </Formik>
  );
};

export default Register;
