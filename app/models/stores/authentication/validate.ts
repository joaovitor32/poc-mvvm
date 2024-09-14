/* eslint-disable no-unused-vars */
export const fieldsTypes = {
  login: (login: string) => ({
    isValid: !!login,
    message: "Login incorreto",
  }),
  password: (password: string) => ({
    isValid: !!password,
    message: "Senha incorreto",
  }),
};

export type FieldType = keyof typeof fieldsTypes;

export const validate = (type: FieldType, value: any) =>
  fieldsTypes[type](value);
