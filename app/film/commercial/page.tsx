import React from 'react'
import CardItem from '../card-item';
const page = () => {
  const filmList = new Array(20).fill({
    id: '464867687',
    filmName: "完美物质",
    poster:
      "https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp",
    onScreenTime: "2024-10-11",
    IMDBId: "45468423477424",
    length: 118,
    director: '导演'
  });
  return (
    <div className="flex gap-x-8 gap-y-7 flex-wrap ">
      {filmList.map((film) => (
        <CardItem film={film} />
      ))}
    </div>
  );
}

export default page