import { useEffect, useState } from "react";

export default function Home() {
  const [article, getArticles] = useState();
  useEffect(() => {
    async function getArticle() {
      const res = await fetch("http://localhost:4000/api/blog");
      const data = await res.json();
      console.log(data);
      getArticles(data);
    }
    getArticle();
  }, []);

  return (
    <main>
      <p>{article?.title}</p>
    </main>
  );
}
