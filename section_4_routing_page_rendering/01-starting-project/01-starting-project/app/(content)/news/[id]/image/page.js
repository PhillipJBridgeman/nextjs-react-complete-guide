import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";

export default function ImagePage({ params }) {
    const newsSlug = params.id;
    const newsItem = DUMMY_NEWS.find(newsItem => newsItem.slug === newsSlug);

    console.log("params:", params);
    console.log("newsSlug:", newsSlug);
    console.log("DUMMY_NEWS:", DUMMY_NEWS);

    if (!newsItem) {
        return notFound();
    }

    return (
        <div className="fullscreen-image">
            <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
    );
}