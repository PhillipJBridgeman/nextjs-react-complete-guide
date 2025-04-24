import { notFound } from "next/navigation";
import Link from "next/link";
import { getNewsItem } from "@/lib/news";

export default async function NewsDetailPage( {params} ) {
    const newsSlug = params.id;
    const newsItem = await getNewsItem(newsSlug);

    if (!newsItem) {
        notFound();
    }

    return(
        <>
            <article className="news-article">
                <header>
                    <Link href={`/news/${newsItem.slug}/image`}>
                        <img src={`/images/news/${newsItem.image}`} alt={newsItem.title}/>
                    </Link>
                    <h1>{newsItem.title}</h1>
                    <time dateTime={newsItem.date}>{newsItem.date}</time>
                </header>
                <main>
                    <p>{newsItem.content}</p>
                </main>
            </article>
        </>
    );
}