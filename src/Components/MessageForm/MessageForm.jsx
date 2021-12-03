import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./styleMessageForm.scss";
import { TextField } from "@material-ui/core";

export function MessageForm({ messageList, setMessageList }) {
  const [messageAuthor, setMessageAuthor] = useState("");
  const [messageText, setMessageText] = useState("");

  const handleAuthorChange = (e) => setMessageAuthor(e.target.value);
  const handleTextChange = (e) => setMessageText(e.target.value);

  const handleAdd = (e) => {
    if (messageAuthor === "" || messageText === "")
      return alert("Отсуствует имя или текст");
    if (messageAuthor === "Поддержка")
      return alert("Вы не можете иметь имя *Поддержка*");
    const newMessage = {
      id: uuidv4(),
      author: messageAuthor,
      text: messageText,
    };
    setMessageAuthor("");
    setMessageText("");
    return setMessageList([...messageList, newMessage]);
  };

  return (
    <form
      className="message-form"
      action="#"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <TextField
        className="message-form__author"
        value={messageAuthor}
        onChange={handleAuthorChange}
        placeholder="Имя"
      />
      <TextField
        id="tatext"
        className="message-form__text"
        value={messageText}
        onChange={handleTextChange}
        placeholder="Сообщение"
        autofocus
      ></TextField>
      <input
        className="message-form__submit"
        type="submit"
        onClick={handleAdd}
        value="Отправить"
      ></input>
    </form>
  );
}
