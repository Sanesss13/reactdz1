import "./styleMessageList.scss";

export function MessageList({ messageList }) {
  return (
    <ul className="message_list">
      {messageList.map(({ id, author, text }) => (
        <li key={id}>
          <div className="message_list__block">
            <span className="message_list__author">{author}</span>
            <p className="message_list__text">{text}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
