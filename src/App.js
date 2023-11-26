import Movie from "./Component/Movie/Movie";
import { movies } from "./movieDummy";
import * as MVS from "./Component/Movie/Movie.style";

function App() {
  return (
    <MVS.appContainer>
      {movies.results.map((item) => {
        return <Movie {...item} />;
      })}
    </MVS.appContainer>
  );
}

export default App;