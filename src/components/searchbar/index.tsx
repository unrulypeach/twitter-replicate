import { search } from "../../styles/assets/icons/iconData";

export default function Searchbar(): JSX.Element {
  return (
    <div className="flex rounded-full bg-searchbar">
      <div className="flex items-stretch rounded-full">
        <div className="flex flex-col items-stretch justify-center basis-auto min-w-[30px] z-0">
          {search}
        </div>
        <div className="flex grow shrink text-[14px] leading-5">
          <input
            className="p-[11px] bg-clear focus:outline-none"
            type="text"
            placeholder="Search Twitter"
            autoComplete="off"
          />
        </div>
        <div />
      </div>
    </div>
  );
}
