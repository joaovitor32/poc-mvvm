import { login as loginFetch } from "@/app/models/services";
import {
  resetState,
  setField,
  validateField,
} from "@/app/models/stores/authentication/action";

import { FieldType } from "@/app/models/stores/authentication/validate";
import { useDispatch, useSelector } from "react-redux";

export const useAuthentication = () => {
  const dispatch = useDispatch();
  const { fields, error } = useSelector((state: any) => state.auth);

  const handleChange = (
    field: string,
    value: string | number | Array<number | string>
  ) => {
    dispatch(setField(field, value));
  };

  const handleValidate = (type: FieldType, value: string) => {
    dispatch(validateField(type, value));
  };

  const handleReset = () => {
    dispatch(resetState());
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      await loginFetch().then(() => alert("Login efetuado com sucesso!"));
      handleReset();
    } catch (err) {
      const result = (err as Error).message;
    }
  };

  return { fields, error, handleSubmit, handleChange, handleValidate };
};
