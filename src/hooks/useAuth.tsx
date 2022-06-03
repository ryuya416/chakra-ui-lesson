import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import { useLoginUser } from "./useLoginUser";
import { useMessage } from "./useMessage";

export const useAuth = () => {
  const router = useRouter();
  const { showMessage } = useMessage();
  const { setLoginUser } = useLoginUser();

  const [loading, setLoading] = useState(false);

  const login = useCallback(
    async (id: string) => {
      setLoading(true);
      const user = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      const data = await user.json();
      console.log(data);
      try {
        if (data) {
          const isAdmin = data.id === 10 ? true : false;
          setLoginUser({ ...data, isAdmin });
          showMessage({ title: "ログインしました", status: "success" });
          router.push("/home");
        }
      } catch (error) {
        showMessage({ title: "ログインに失敗しました", status: "error" });
      }
      return data;
    },
    [router, setLoginUser, showMessage]
  );
  return { login, loading };
};
