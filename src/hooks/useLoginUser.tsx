import { useContext } from "react";
import {
  LoginUserContext,
  LoginUserContextProps,
} from "../providers/LoginUserProvider";

export const useLoginUser = (): LoginUserContextProps =>
  useContext(LoginUserContext);
