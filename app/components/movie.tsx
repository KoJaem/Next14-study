"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "../styles/movie.module.css";
import { useRouter } from "next/navigation";
type Props = {
  title: string;
  id: string;
  poster_path: string;
};
export default function Movie({ title, id, poster_path }: Props) {
  const router = useRouter();

  const onClick = () => {
    router.push(`/movies/${id}`);
  };

  return (
    <div key={id} className={styles.movie}>
      <Image
        className={styles.img}
        src={poster_path}
        alt={title}
        width={240}
        height={240}
        onClick={onClick}
      />
      <Link href={`/movies/${id}`}>{title}</Link>
    </div>
  );
}
