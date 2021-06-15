import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import Nav from "../nav/Nav";
import Header from "../header/Header";
import Row from "../row/Row";
import Loading from "../loading/Loading";
import Detail from "../detail/Detail";

function Home() {
  const [selectedMovie, setSelectedMovie] = useState();
  const username = useSelector((state) => state.user);
  const loading = useSelector((state) => state.loading);
  const history = useHistory();
  const selectMovie = (movie) => {
    setSelectedMovie(() => movie);
  };
  const closeDetail = () => {
    setSelectedMovie(null);
  };

  useEffect(() => {
    !username.user && history.push("/login");
  }, [username.user, history]);

  return (
    <>
      <div className="app">
        <Nav />
        <Header />
        {/* Row */}
        <Row
          title="Netflix Originals"
          movieType="netflix-originals"
          onMovieSelected={selectMovie}
        />
        <Row
          title="Trending Now"
          movieType="trending-now"
          onMovieSelected={selectMovie}
        />
        <Row
          title="Top Rated"
          movieType="top-rated"
          onMovieSelected={selectMovie}
        />
        <Row
          title="Action Movies"
          movieType="action-movies"
          onMovieSelected={selectMovie}
        />
        <Row
          title="Horror Movies"
          movieType="horror-movies"
          onMovieSelected={selectMovie}
        />
        <Row title="Romance Movies" movieType="romance-movies" />
        <Row
          title="Documentaries Movies"
          movieType="documentaries-movies"
          onMovieSelected={selectMovie}
        />
        {/* End Row */}
      </div>
      {selectedMovie && (
        <Detail movie={selectedMovie} onDetailClosed={closeDetail} />
      )}
      {loading.isLoadingShown && <Loading />}
    </>
  );
}

export default Home;
