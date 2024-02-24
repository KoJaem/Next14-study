import { API_URL } from '../../../(home)/page';

async function getMovie(id:string) {
  console.log(`Fetching movies: ${Date.now()}`);
  await new Promise(resolve => setTimeout(resolve, 5000));
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

async function getVideos(id: string) {
  console.log(`Fetching  videos: ${Date.now()}`);
  await new Promise(resolve => setTimeout(resolve, 5000));
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}

type Props = {
  params: {
    id: string;
  };
};
export default async function MovieDetail({ params }: Props) {
  // const movie = await getMovie(params.id);
  // const videos = await getVideos();
  console.log('======start fetching========')
  const [movie, videos] = await Promise.all([getMovie(params.id), getVideos(params.id)]);
  console.log("======end fetching========");
  return <h1>{movie.title}</h1>;
}
