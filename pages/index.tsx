import React from "react";
import Head from "next/head";
import ArticleCard from "../components/articles/ArticleCard";

const article: Article = { title: "Lambda and final variables", slug: "article-slug",
  excerpt: "This is first blog post", image: "/images/1.jpg", createdAt: "2022-10-13 12:33:00"}

const articles = fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json())


export default function Home() {
  return (
    <>
      <Head>
        <title>React NextJS REST API application</title>
      </Head>
      <ArticleCard article={ article } />
    </>
  )
}