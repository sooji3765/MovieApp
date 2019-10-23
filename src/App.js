import React from 'react';
import Test from './Test';

const actorILike = [
  {
    id :1,
    name :"yangyang",
    image : "https://file.mk.co.kr/chinafocus/2018/01/201801220332181900666.jpg"
   },{
     id:2,
    name :"suhyun",
    image :"https://img.sbs.co.kr/newsnet/etv/upload/2017/06/27/30000573168_1280.jpg"
  },
  {
    id:3,
    name :"sojisub",
    image :"http://img.hani.co.kr/imgdb/resize/2019/0517/00501906_20190517.JPG"
  }
];

function App() {
  return (
    <div className="App">
    {actorILike.map(item =><Test key={item.id} actor={item}/>)}
    </div>
  );
}

export default App;
