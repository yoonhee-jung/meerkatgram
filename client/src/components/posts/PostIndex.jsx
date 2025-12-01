import { useDispatch, useSelector } from 'react-redux';
import './PostIndex.css';
import { useEffect } from 'react';
import { postIndexThunk } from '../../store/thunk/postIndexThunk';

export default function PostIndex() {
  
  const dispatch = useDispatch();
  const {list, page} = useSelector(state => state.postIndex);
  useEffect(() => {
    dispatch(postIndexThunk(page + 1));
  }, []);

//1. response body에 data 속성이 기존에는 []를 보내왔지만, data.page와 data.posts 형식으로 보내주세요.
//2. 콘텐츠 타입이 json인데, 이거 get은 불가능하다. query parameter로 수정해주세요.
//3. 가능하다면 전체 게시글 수와 리미트가 몇인지도 보내주세요.

  return (
    <>
      {
        list && list.map(item => {
          return <div className="post-index-card" style={{backgroundImage: `url("${item.image}")`}} key={item.id}></div>
        })
    }
      <div className="post-index-container">
        <div className="post-index-card-box">
          <div className="post-index-card" style={{backgroundImage: `url("http://localhost:5173/dev/osoi.jpg")`}}></div>
          <div className="post-index-card" style={{backgroundImage: `url("http://localhost:5173/dev/choco.jpg")`}}></div>
          <div className="post-index-card" style={{backgroundImage: `url("http://localhost:5173/dev/koitsu.png")`}}></div>
          <div className="post-index-card" style={{backgroundImage: `url("http://localhost:5173/dev/ok.png")`}}></div>
          <div className="post-index-card" style={{backgroundImage: `url("http://localhost:5173/dev/zayeung.jpg")`}}></div>
          <div className="post-index-card" style={{backgroundImage: `url("http://localhost:5173/dev/zzazan.jpg")`}}></div>
          <div className="post-index-card" style={{backgroundImage: `url("http://localhost:5173/dev/cat.jpg")`}}></div>
          <div className="post-index-card" style={{backgroundImage: `url("http://localhost:5173/dev/osoi.jpg")`}}></div>
          <div className="post-index-card" style={{backgroundImage: `url("http://localhost:5173/dev/choco.jpg")`}}></div>
          <div className="post-index-card" style={{backgroundImage: `url("http://localhost:5173/dev/koitsu.png")`}}></div>
          <div className="post-index-card" style={{backgroundImage: `url("http://localhost:5173/dev/ok.png")`}}></div>
          <div className="post-index-card" style={{backgroundImage: `url("http://localhost:5173/dev/zayeung.jpg")`}}></div>
          <div className="post-index-card" style={{backgroundImage: `url("http://localhost:5173/dev/zzazan.jpg")`}}></div>
          <div className="post-index-card" style={{backgroundImage: `url("http://localhost:5173/dev/cat.jpg")`}}></div>
        </div>
        <button type="button" className='btn-full-width bg-gray'>Show more posts from Kanna_Kamui</button>
      </div>
    </>
  )
}