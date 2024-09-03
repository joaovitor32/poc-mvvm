"use client";
import { authenticationStore } from "@/app/models/stores/authentication";
import { login as loginFetch } from "@/app/models/services";

export const useAuthentication = () => {
  const { fields, error, handleChangeField, validate, handleResetState } =
    authenticationStore((state) => state);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      await loginFetch().then(() => alert("Login efetuado com sucesso!"));
      handleResetState();
    } catch (err) {
      const result = (err as Error).message;
    }
  };

  return { fields, error, validate, handleSubmit, handleChangeField };
};
