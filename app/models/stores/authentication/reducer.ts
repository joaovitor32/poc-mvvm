import { SET_FIELD, VALIDATE_FIELD, RESET_STATE } from "./actionTypes";
import { validate } from "./validate";

export interface Fields {
  login: string;
  password: string;
}

const initialState = {
  fields: {
    login: "",
    password: "",
  },
  error: {},
};

export const authenticationReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_FIELD:
      return {
        ...state,
        fields: {
          ...state.fields,
          [action.payload.field]: action.payload.value,
        },
      };

    case VALIDATE_FIELD:
      const { type, value } = action.payload;
      const validation = validate(type, value);
      return {
        ...state,
        error: {
          ...state.error,
          [type]: {
            message: validation.isValid ? "" : validation.message,
          },
        },
      };

    case RESET_STATE:
      return {
        ...state,
        fields: initialState.fields,
        error: {},
      };

    default:
      return state;
  }
};
