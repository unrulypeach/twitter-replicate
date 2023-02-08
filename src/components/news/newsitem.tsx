import type NewsProps from "../../types/newsProps";

export default function NewsItem({
  title,
  reasonForSuggest,
  category,
  numberOfTweets,
}: NewsProps): JSX.Element {
  return (
    <div className="border-t-[1px]">
      <div className="flex flex-col">
        <div className="text-xs">
          <span>{category}</span>
          <span>-</span>
          <span>{reasonForSuggest}</span>
        </div>
        <div className="flex">
          <h2 className="font-bold">{title}</h2>
        </div>
      </div>

      <div>
        <span className="text-xs">{numberOfTweets} Tweets</span>
      </div>
    </div>
  );
}