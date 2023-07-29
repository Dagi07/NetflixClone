import "./App.css";
import Banner from "./Banner";
import Nav from "./Nav";
import Row from "./Row";
import requests from "./requests";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
    </div>
  );
}

export default App;
