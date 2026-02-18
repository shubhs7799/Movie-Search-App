const MovieCard = ({Title, Year, Type, Poster}) => {
  return (
    <>
      <img src={Poster} />
      <div>{Title}</div>
      <div>Released in : {Year}</div>
      <div>Type :{Type}</div>
    </>
  );
};

export default MovieCard;
