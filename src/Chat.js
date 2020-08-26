import React, { useEffect, useState } from "react";
import "./Chat.css";
import { Avatar, IconButton, Icon } from "@material-ui/core";

import { SearchOutlined, MoreVert, AttachFile } from "@material-ui/icons";

function Chat() {
  const [seed, setSeed] = useState("");
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="chat__headerInfo">
          <h3>Room name</h3>
          <p> last Seen at..</p>
        </div>

        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

      <div className="chat__body">
        <p
          className={`chat__message chat__receiver ${true && "chat__reciever"}`}
        >
          <span className="chat__name">Igor Ribeiro</span>
          Olá Tudo bem?
          <span className="chat__timestamp">3:52pm</span>
        </p>
      </div>
      <div className="chat__footer"></div>
    </div>
  );
}

export default Chat;
