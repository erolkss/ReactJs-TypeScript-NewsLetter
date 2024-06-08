import { User } from "../types/user";

type Error = {
  [key: string]: string;
};

export const validate = (data: User) => {
  const errors: Error = {};

  if (!data.name) {
    errors["name"] = "O nome é obrigatório";
  }
  if (!data.name) {
    errors["email"] = "O email é obrigatório";
  }
  if (!data.name) {
    errors["agree"] = "Você precisa concordar com os termos.";
  }

  return errors;
};
