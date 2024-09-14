import { FieldType } from "./validate";
import { SET_FIELD, VALIDATE_FIELD, RESET_STATE } from "./actionTypes";

export const setField = (field: string, value: string | number | Array<number | string>) => ({
  type: SET_FIELD,
  payload: { field, value },
});

export const validateField = (type: FieldType, value: string) => ({
  type: VALIDATE_FIELD,
  payload: { type, value },
});

export const resetState = () => ({
  type: RESET_STATE,
});