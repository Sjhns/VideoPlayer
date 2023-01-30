import * as S from "./style";
import { useEffect, useState } from "react";
import {TypeComments, TypeResponse }from "./types"

const bannedWords = ["lixo", "merda", "idiota"];

export const BoxComments = () => {
  const baseUrl = process.env.URL_API;

  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState<TypeComments[]>([]);
  const [update, setUpdate] = useState(false);
  const [error, setError] = useState("");


  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
    setError("");
  };

  const handleSubmit = async () => {

    const regex = new RegExp(bannedWords.join("|"), "i");
    if (regex.test(inputValue)) {
      setError("Palavra imprópria encontrada. Por favor, revise o texto.");
      return;
    }

    await fetch(`${baseUrl}/video/comment`, {
      method: "POST",
      body: JSON.stringify({
        videoId: 1,
        text: inputValue,
      }),
      headers: { "Content-Type": "application/json" },
    });

    setInputValue("");
    setUpdate((oldValue) => !oldValue);
  };

  const getComments = async () => {
    const response = await fetch(`${baseUrl}/video`);
    const json: TypeResponse[] = await response.json();
    setData(json[0].comments);
  };

  useEffect(() => {
    getComments();
  }, []);
  useEffect(() => {
    getComments();
  }, [update]);

  return (
    <S.Container>
      <S.BoxTitle>
        <h3>Comentários</h3>

        <S.GroupButtons>
          <span>Best</span>
          <span>Recent</span>
        </S.GroupButtons>
      </S.BoxTitle>

      <S.BoxInput>
        <img src="./default_avatar.png" alt="" />
        <S.Input>
          <textarea
            value={inputValue}
            onChange={handleChange}
            placeholder="Adicione um comentário..."
          ></textarea>
          <button onClick={handleSubmit}>
            Send <i className="bx bxs-send"></i>
          </button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </S.Input>
      </S.BoxInput>

      <S.BoxComments>
        {data &&
          data.map((item) => <Comment key={item.createdAt} text={item.text} />)}
      </S.BoxComments>
    </S.Container>
  );
};

const Comment = ({ text }) => {
  const [like, setLike] = useState(false)
  const toggleLike = () =>{
    setLike(oldValue => !oldValue)
  }

  return (
    <S.Comment>
      <img src="./default_avatar.png" alt="" />
      <div>
        <h3>Anônimo</h3>

        <p>{text}</p>
        <S.CommentButtons>
          {
            like? <i className='bx bxs-like' onClick={toggleLike}></i> : <i className="bx bx-like" onClick={toggleLike}></i>
          }
          

          <span>
            <i className="bx bxs-message-rounded-dots"></i>
            Responder
          </span>
        </S.CommentButtons>
      </div>
    </S.Comment>
  );
};
