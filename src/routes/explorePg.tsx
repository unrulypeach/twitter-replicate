import NewsItem from "../components/news/newsitem";
import Searchbar from "../components/searchbar";
import RightSideMenu from "../components/sidemenu/right";
import Tabbar from "../components/tabbar";

export default function ExplorePage(): JSX.Element {
  return (
    <div className="flex flex-row ">
      <div className="flex flex-col w-[600px]">
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
        <RightSideMenu path="explore" />
      </div>
    </div>
  );
}
