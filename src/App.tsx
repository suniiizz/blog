import { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState([
    "남자 코트 추천",
    "서울 맛집 추천",
    "봄 나들이 코스 소개",
  ]);
  const [thumbsUp, setThumbsUp] = useState(0);

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

  return (
    <>
      <div className="App">
        <div className="black-nav">
          <h4>React Blog</h4>
        </div>

        <button onClick={() => modifyTitle()}>글수정</button>
        <button onClick={() => 글정렬()}>정렬</button>

        <div className="list">
          <h4>
            {title[0]}{" "}
            <span
              onClick={() => setThumbsUp(thumbsUp + 1)}
              className="list-thumbsup"
            >
              👍
            </span>
            {thumbsUp}
          </h4>
          <p>12월 29일 발행</p>
        </div>
        <div className="list">
          <h4>{title[1]}</h4>
          <p>1월 13일 발행</p>
        </div>
        <div className="list">
          <h4>{title[2]}</h4>
          <p>2월 3일 발행</p>
        </div>
        {/* {blogList.map((list) => {
          return (
            <div className="list" key={list.id}>
              <h4>{list.title}</h4>
              <p>{list.date}</p>
            </div>
          );
        })} */}
      </div>
    </>
  );
}

export default App;
