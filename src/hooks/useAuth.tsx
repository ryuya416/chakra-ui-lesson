import { useRouter } from "next/router";
import { useCallback, useState } from "react";

export const useAuth = () => {
  const router = useRouter();

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
          router.push("/home");
        } else {
          console.log("ログイン失敗");
        }
      } catch (error) {
        alert("ユーザーが見つかりません");
      }
      return data;
    },
    [router]
  );
  return { login, loading };
};
