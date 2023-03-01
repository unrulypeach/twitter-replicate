import WhoToFollow from "../components/followrec";
import NewsItem from "../components/news/newsitem";
import Searchbar from "../components/searchbar";
import Tabbar from "../components/tabbar";
import Tos from "../components/tos";

export default function ExplorePage(): JSX.Element {
  return (
    <div className="flex flex-row">
      <div>
        <div>
          <Searchbar />
        </div>

        <div>
          <Tabbar path="Explore" />
        </div>

        <div>
          {/* Map an array of <NewsItem /> to be displayed here */}
          <NewsItem
            title="Big News"
            reasonForSuggest="LIVE"
            category="Sports"
            numberOfTweets={1000}
          />
          <NewsItem
            title="Such Smol News"
            reasonForSuggest="Trending"
            category="Cars"
            numberOfTweets={2}
          />
        </div>
      </div>

      <div>
        <div>
          <WhoToFollow />
        </div>
        <div>
          <Tos />
        </div>
      </div>
    </div>
  );
}
