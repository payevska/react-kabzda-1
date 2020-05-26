import React from 'react';
import s from './Post.module.css';

function Post(props) {
  return (        
    <div className={s.item}>
      <img src="https://lh3.googleusercontent.com/proxy/-_lcq1dfC7xoTwwNGa1UnJDeFZjIz03zTpb2ZusBtFmEkaicxxTsqrar7JtAhycU9AsJwEKT7ug3cbcziS_GN8kLpZaVGu8PX_HnmjeoShNBaqDjvj0" alt=""/>
      {props.message}
      <div>
        <span>like</span> {props.likesCount}
        </div>
    </div>
  );
}
  
export default Post;