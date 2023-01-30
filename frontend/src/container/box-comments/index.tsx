import * as S from "./style";
import { useEffect, useState } from "react";
import { TypeComments, TypeResponse } from "./types";
import { Comment } from "./Comment";

export const BoxComments = () => {
  const bannedWords = ["lixo", "merda", "idiota"];
  const baseUrl = process.env.NEXT_PUBLIC_URL_API;

  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState<TypeComments[]>([]);
  const [update, setUpdate] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
    setError("");
  };

  const handleSubmit = async () => {
    if (inputValue === "") {
      setError("Digite um comentário antes de compartilhá-lo");
      return;
    }

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
    setLoading(false);
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
        <h3>Comentários · {data && data.length}</h3>

        <S.GroupButtons>
          <span>melhores</span>
          <span>recentes</span>
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
            enviar <i className="bx bxs-send"></i>
          </button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </S.Input>
      </S.BoxInput>

      <S.BoxComments>
        {loading ? (
          <S.Loading>Carregando...</S.Loading>
        ) : (
          data &&
          data.map((item) => <Comment key={item.createdAt} text={item.text} createdAt={item.createdAt} />)
        )}
      </S.BoxComments>
    </S.Container>
  );
};
