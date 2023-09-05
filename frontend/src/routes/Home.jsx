import { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState([]);
  useEffect(() => {
    fetch("/api/GetAllMessage")
      .then((res) => res.json())
      .then((data) => {
        setMessage(data);
        console.log("GetAllMessage:", data);
      });
  }, []);

  return (
    <main>
      <header>
        <div>
          <a href="/login?post_login_redirect_uri=/">Login</a>
        </div>
        <div>
          <a href="/mypage">mypage</a>
        </div>
      </header>
      <div>
        {message?.map((t) => (
          <div key={t.RowKey} className="message" >
            <div>
              <b>@{t.PartitionKey}</b>
            </div>
            <div>{t.Message}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
