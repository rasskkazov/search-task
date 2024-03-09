import { createContext } from "react";
import { User } from "../../types";

export const SearchContext = createContext<{ users: User[] }>({ users: [] });
