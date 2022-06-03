import { useState } from "react";
import { User } from "../types/api/user";
import { useMessage } from "./useMessage";

export const useAllUsers = () => {
  const { showMessage } = useMessage();

  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<User[]>([]);

  const getUsers = async () => {
    setLoading(true);
    const users = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await users.json();
    setUsers(data);
    setLoading(false);
  };
  return { loading, users, getUsers };
};
