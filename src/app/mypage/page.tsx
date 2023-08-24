"use client";
import { useEffect, useState } from "react";

export default function MyPage() {
  const [user, setUser] = useState("");

  useEffect(() => {
    fetch("/.auth/me")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUser(data.clientPrincipal.userDetails);
      });
  }, []);

  return (
    <main>
      <h1>こんにちは、{user} さん!</h1>
      <a href="/.auth/logout?post_logout_redirect_uri=/">ログアウト</a>
    </main>
  );
}
