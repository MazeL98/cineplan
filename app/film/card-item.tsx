import React from 'react'
interface Props {
  film: {
    id: string;
    filmName: string;
    poster: string;
    onScreenTime: string;
    IMDBId: string;
    length: number;
    director: string;
  };
}
const CardItem = ({ film }: Props) => {
  return (
    <div className="card w-[31%] lg:card-side bg-base-100 shadow-md">
      <figure className="w-1/3">
        <img src={film.poster} alt="Album" />
      </figure>
      <div className="card-body pl-4 pr-3 py-2 pb-3">
        <h2 className="card-title ">{film.filmName}</h2>
        <p>上映时间</p>
        <div className="card-actions justify-end">
          <button className="btn btn-sm btn-circle text-lg">＋</button>
        </div>
      </div>
    </div>
  );
};

export default CardItem;