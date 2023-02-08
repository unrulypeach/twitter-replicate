import { search } from "../../styles/assets/icons/iconData";

export default function Searchbar(): JSX.Element {
  return (
    <div className="flex">
      <div className="flex flex-1 items-stretch rounded-full border">
        <div className="flex flex-col items-stretch justify-center basis-auto w-4 z-0">
          {search}
        </div>
        <div className="flex grow shrink text-[14px] leading-5">
          <input
            className="p-[11px]"
            type="text"
            placeholder="Search Twitter"
            autoComplete="off"
          />
        </div>
      </div>
    </div>
  );
}
