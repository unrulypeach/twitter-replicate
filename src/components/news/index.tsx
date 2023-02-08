import NewsItem from "./newsitem";

export default function News(): JSX.Element {
  return (
    <>
      <h1 className="font-bold">What{`'`}s Happening</h1>
      <NewsItem
        title="Big News"
        reasonForSuggest="LIVE"
        category="sports"
        numberOfTweets={1000}
      />
      <NewsItem
        title="Such Smol News"
        reasonForSuggest="Trending"
        category="cars"
        numberOfTweets={2}
      />
      <a>Show more</a>
    </>
  );
}