import moment from "moment";
import * as S from "./style";
import { useState } from "react";

export const Comment = ({ text, createdAt}) => {
  const [like, setLike] = useState(false);
  const toggleLike = () => {
    setLike((oldValue) => !oldValue);
  };
  const timeSinceCreation = moment(createdAt).fromNow();

  return (
    <S.Comment>
      <img src="./default_avatar.png" alt="" />
      <div>
        <h3>
            Anônimo 
            <span>·</span>
            <S.Time>{timeSinceCreation}</S.Time>
        </h3>
       
        <p>{text}</p>
        <S.CommentButtons>
          {like ? (
            <>
            <i className="bx bxs-like" onClick={toggleLike}></i>
            </>
          ) : (
            <i className="bx bx-like" onClick={toggleLike}></i>
          )}

          <span>
            <i className="bx bxs-message-rounded-dots"></i>
            Responder
          </span>
        </S.CommentButtons>
      </div>
    </S.Comment>
  );
};
