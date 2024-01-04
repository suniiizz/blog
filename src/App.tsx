import { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState([
    "남자 코트 추천",
    "서울 맛집 추천",
    "봄 나들이 코스 소개",
  ]);
  const [thumbsUp, setThumbsUp] = useState(0);
  const [modal, setModal] = useState(false);

  const modifyTitle = () => {
    const modify = [...title];
    modify[0] = "여자 코트 추천";
    setTitle(modify);
  };

  const 글정렬 = () => {
    const copy = [...title];
    copy.sort();
    setTitle(copy);
  };

  // const blogList = [
  //   { id: 1, title: "이번 겨울 베스트 코트 추천", date: "12월 29일 발행" },
  //   { id: 2, title: "찐 맛집 소개", date: "1월 13일 발행" },
  // ];

  console.log("modal", modal);

  return (
    <>
      <div className="App">
        <div className="black-nav">
          <h4>React Blog</h4>
        </div>

        <button onClick={() => modifyTitle()}>글수정</button>
        <button onClick={() => 글정렬()}>정렬</button>

        <div className="list">
          <div className="title">
            <h4 onClick={() => setModal((prev) => !prev)}>{title[0]}</h4>
            <span
              onClick={() => setThumbsUp(thumbsUp + 1)}
              className="list-thumbsup"
            >
              👍
              {thumbsUp}
            </span>
          </div>
          <p>12월 29일 발행</p>
        </div>

        {/* <div className="list">
          <h4>{title[1]}</h4>
          <p>1월 13일 발행</p>
        </div>
        <div className="list">
          <h4>{title[2]}</h4>
          <p>2월 3일 발행</p>
        </div> */}

        {/* {blogList.map((list) => {
          return (
            <div className="list" key={list.id}>
              <h4>{list.title}</h4>
              <p>{list.date}</p>
            </div>
          );
        })} */}
      </div>

      {modal ? <Modal /> : null}
    </>
  );
}

const Modal = () => {
  return (
    <>
      <div className="modal">
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    </>
  );
};

export default App;
