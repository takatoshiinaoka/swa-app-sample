import {  useEffect, useState } from "react";


export default function MyPage() {
  const [user, setUser] = useState("");
  const [message, setMessage] = useState("");
  const [myMessage, setMyMessage] = useState([]);

  useEffect(() => {
    fetch("/.auth/me")
      .then((res) => res.json())
      .then((data) => {
        console.log("auth/me:", data);
        setUser(data?.clientPrincipal?.userDetails);
      });
  }, []);

  useEffect(() => {
    getMyMessage();
  }, [user]);

  const getMyMessage = () => {
    fetch(`/api/GetUserMessage?user=${user}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("GetUserMessage:", data);
        setMyMessage(data);
      });
  };

  const handleMessageChange = (event) => {
    setMessage(event.currentTarget.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("/api/PostMessage", {
      method: "POST",
      body: JSON.stringify({ user: user, message: message }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("PostMessage:", data);
        setMessage("");
        getMyMessage();
      });
  };

  return (
    <>
      <main>
        <header>
          <div>
            <a href="/">Home</a>
          </div>
          <div>
            <a href="/logout?post_logout_redirect_uri=/">logout</a>
          </div>
        </header>
        <form onSubmit={handleSubmit}>
          <label>
            message:
            <input type="text" value={message} onChange={handleMessageChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <div className="header">
          <h2>{user}さんの投稿</h2>
        </div>
        <div>
          {myMessage?.map((t) => (
            <div key={t.RowKey} className="message">
              <div>@{t.PartitionKey}</div>
              <div>{t.Message}</div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
