import Head from "next/head";
import styles from "../../styles/home.module.css";
import Image from "next/image";

import heroImg from '../../public/assets/hero.png';
import { GetStaticProps } from "next";

import { db } from "../services/firebaseConnection";

import {
  collection,
  getDocs,
} from 'firebase/firestore'


interface HomeProps{
  posts: number;
  comments: number;
}
export default function Home({posts, comments}: HomeProps) {
  return (
    <div className={styles.container} >
      <Head>
        <title>Tarefas+ - organize suas tarefas de formas faceis</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.logoContent}>
          <Image
            className={styles.hero}
            alt="Logo Tarefas+"
            src={heroImg}
            priority
          />
        </div>
        <h1 className={styles.title}>
          Sistema feito para você organizar <br/>
          seus estudos e terefas
        </h1>

        <div className={styles.infoContent}>
            <section className={styles.box}>
              <span>+{posts} Posts</span>
            </section>

            <section className={styles.box}>
              <span>+{comments} Comentários</span>
            </section>
        </div>


      </main>
    </div>

  );
}

export const getStaticProps: GetStaticProps = async () => {
  //Buscar os numeros e mandar para o componente

  //número de comentarios
  const commentRef = collection(db, 'comments')

  //número de posts
  const postRef = collection(db, 'tarefas')

  const commentSnapshot = await getDocs(commentRef)

  const postSnapshot = await getDocs(postRef)

  return{
    props: {
      posts: postSnapshot.size || 0,
      comments: commentSnapshot.size || 0
    },
    revalidate: 60 //página revalidada a cada 60 segundos
  }
}
