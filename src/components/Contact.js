import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";

export const Contact = () => {
  const re =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = data => console.log(data);

  return (
    <div>
      <h1>Contacto</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Email
          type="text"
          placeholder="Email"
          name="email"
          {...register("email", {
            required: true,
            pattern: re,
          })}
          autoComplete="off"
        />
        <Fields>
          <FieldRequired>* Required</FieldRequired>
          {errors.email?.type === "pattern" && (
            <Error>- Por favor ingrese email correctamente.</Error>
          )}
          {errors.email?.type === "required" && (
            <Error>- El campo es requerido.</Error>
          )}
        </Fields>
        <Message
          placeholder="Mensaje"
          name="message"
          {...register("message", {
            required: true,
            max: 100,
            min: 5,
            maxLength: 100,
            minLength: 5,
          })}
          autoComplete="off"
        />
        <Fields>
          <FieldRequired>* Required</FieldRequired>
          {errors.message?.type === "maxLength" && (
            <Error>- Máximo 100 caracteres.</Error>
          )}
          {errors.message?.type === "minLength" && (
            <Error>- Mínimo 5 caracteres.</Error>
          )}
          {errors.message?.type === "required" && (
            <Error>- El campo es requerido.</Error>
          )}
        </Fields>
        <Submit type="submit">Enviar</Submit>
      </Form>
    </div>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  width: 500px;
  height: 100%;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
    width: 100%;
  }
`;

const Email = styled.input`
  width: 100%;
  height: 40px;
  border: none;
  padding: 0 10px;
  outline: none;
  margin-bottom: 10px;
  background-color: #2b2d41;
  color: #fff;
`;

const Message = styled.textarea`
  width: 100%;
  height: 100px;
  border: none;
  padding: 0 10px;
  margin-bottom: 10px;
  outline: none;
  overflow: hidden;
  resize: none;
  background-color: #2b2d41;
  font-family: "Open Sans", sans-serif;
  color: #fff;
`;

const Submit = styled.button`
  height: 40px;
  padding: 0 10px;
  width: 200px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Error = styled.p`
  color: #ff4a57;
  font-size: 12px;
  padding: 0;
`;

const FieldRequired = styled.p`
  font-size: 12px;
  padding: 0;
`;

const Fields = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 5px;
`;
