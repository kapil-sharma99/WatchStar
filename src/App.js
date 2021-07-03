import "./App.css";
import Row from "./Row";
import Banner from "./Banner";
import requests from "./requests";
import Navbar from "./Nav";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <Row
        title="WATCHSTAR ORIGINAL"
        fetchUrl={requests.fetchNetflixOriginals}
        ifLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
