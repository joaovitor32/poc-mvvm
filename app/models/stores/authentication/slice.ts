/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
"use client";
import { SetState, GetState, StateCreator } from "zustand";

import { FieldType, useForm } from "./validate";

export interface Fields {
  login: string;
  password: string;
}

export interface AuthenticationFieldsSlice {
  handleChangeField: (
    field: string,
    value: string | number | Array<number | string>
  ) => void;
  validate: (type: FieldType, value: string) => void;
  handleResetState: () => void;
  fields: Fields;
  error: {
    [field: string]: {
      message: string;
    };
  };
}

const initialStates = {
  fields: {
    login: "",
    password: "",
  },
  error: {},
};

//Problema do SetState e GetState estarem depreciados
export const authenticationFieldsSlice: StateCreator<AuthenticationFieldsSlice> = (
  setState: SetState<AuthenticationFieldsSlice>,
  getState: GetState<AuthenticationFieldsSlice>
) => {
  const { validate } = useForm();

  return {
    ...initialStates,
    validate: (type: FieldType, value: string) => {
      const prevErrors = getState().error;

      if (!validate(type, value).isValid) {
        setState({
          error: {
            ...prevErrors,
            [type]: {
              message: validate(type, value).message,
            },
          },
        });
      } else {
        setState({
          error: {
            ...prevErrors,
            [type]: {
              message: "",
            },
          },
        });
      }
    },
    handleResetState: () => {
      setState({
        fields: {
          login: "",
          password: "",
        },
      });
    },
    handleChangeField: (
      field: string,
      value: string | number | Array<number | string>
    ) => {
      const prev = getState().fields;

      setState({
        fields: {
          ...prev,
          [field]: value,
        },
      });
    },
  };
};
