import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  // let post = '강남 훠궈 맛집';
  let [제목, title] = useState(['강남훠궈맛집', '불맛 짬뽕 리뷰', '역삼 삼겹살 추천']);
  // 그냥 위에처럼 한줄만 해놓고 제목 한다음에 인덱스번호 쓰고 출력해도 됌!
  // let [a, b, c] = ['강남 훠궈 맛집', '불맛 짬뽕 리뷰', '역삼 삼겹살 추천'];
  let [like, likeup] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>Blog</h4>
      </div>
      <div className='list'>
        <h4>{ 제목[0] }<span onClick={()=>{ likeup(like + 1)} }>😀</span> { like } </h4>
        <p>11월 7일 발행</p>
      </div>
      <div className='list'>
        <h4>{ 제목[1] }</h4>
        <p>11월 7일 발행</p>
      </div>
      <div className='list'>
        <h4>{ 제목[2] }</h4>
        <p>11월 7일 발행</p>
      </div>

      <button onClick={()=>{ 
        let copy = [...제목];
        copy[0] = '하이디라오 가고싶어';
        title(copy);
      }}>수정</button>

    </div>
  );
}

export default App;
