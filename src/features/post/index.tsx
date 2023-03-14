import Avatar from "../../components/user/avatar";
import {
  dropdown,
  emoji,
  gif,
  globe,
  location,
  media,
  poll,
  schedule,
} from "../../styles/assets/icons/iconData";

export default function Post(): JSX.Element {
  return (
    <div className="flex flex-row w-[598px] border-b-[1px] border-searchbar py-1 px-[15px]">
      <div className="pt-1 mr-[11px]">
        <Avatar />
      </div>
      <div className="grow">
        <div className="flex flex-col">
          <div className="flex flex-row pb-[11px]">
            <div className="flex flex-row items-center border-[1px] border-dark-650 rounded-full text-[13px] leading-[15px] px-[11px] min-w-[23px] min-h-[23px]">
              <span className="text-blue font-bold"> Everyone</span>
              <span>{dropdown}</span>
            </div>
          </div>
          <div className="py-[11px]">
            <input
              type="text"
              className="border-0 outline-none"
              placeholder="What's happening?"
            />
          </div>
        </div>

        <div className="flex flex-row text-[13px] font-bold leading-[15px] pb-[11px]">
          <div>{globe}</div>
          <span className="text-blue"> Everyone can reply</span>
        </div>

        <div className="flex flex-row justify-between">
          <div className="flex flex-row">
            <div className="blue-icon-positioning">
              <div className="">{media}</div>
            </div>
            <div className="blue-icon-positioning">
              <div>{gif}</div>
            </div>
            <div className="blue-icon-positioning">
              <div>{poll}</div>
            </div>
            <div className="blue-icon-positioning">
              <div>{emoji}</div>
            </div>
            <div className="blue-icon-positioning">
              <div>{schedule}</div>
            </div>
            <div className="blue-icon-positioning">
              <div>{location}</div>
            </div>
          </div>
          <div>
            <div className="bg-blue min-w-[34px] min-h-[34px] opacity-50 flex px-[15px] ml-11px rounded-full">
              <div className="btn-tweet">
                <span className="select-none">Tweet</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
