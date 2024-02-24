import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../components/movie-info";
import MovieVideos from "../../../components/movie-videos";

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params: { id } }: Props) {
  const movie = await getMovie(id); // 메타데이터를 얻기위해 데이터를 fetch 하면 이후에 같은 fetch 요청 시 캐시된 데이터를 주기 때문에 중복 API 호출이 일어나지 않음
  return {
    title: movie.title,
  };
}


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
