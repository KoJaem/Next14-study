import { Suspense } from "react";
import MovieInfo from "../../../components/movie-info";
import MovieVideos from "../../../components/movie-videos";

type Props = {
  params: {
    id: string;
  };
};
export default async function MovieDetail({ params: { id } }: Props) {
  // const movie = await getMovie(params.id);
  // const videos = await getVideos();
  // const [movie, videos] = await Promise.all([getMovie(params.id), getVideos(params.id)]);

  return (
    <div>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie videos</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
