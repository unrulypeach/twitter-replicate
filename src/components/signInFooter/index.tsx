export default function SignInFooter(): JSX.Element {
  return (
    <div className="bg-blue text-white fixed bottom-0 w-full">
      <div className="flex flex-row justify-around my-[12px]">
        <div>
          <div>
            <span className="text-[23px] leading-[28px] font-bold">
              {"Don't miss what's happening"}
            </span>
          </div>

          <div>
            <span className="text-[15px] leading-[20px]">
              People on Twitter are the first to know
            </span>
          </div>
        </div>

        <div className="flex flex-row items-center">
          <div className="border-white border-[1px] border-opacity-50 rounded-full">
            <button className="min-w-[36px] min-h-[36px]">
              <span className="text-[15px] leading-[20px] font-bold px-[16px]">
                Log in
              </span>
            </button>
          </div>

          <div className="ml-[12px] bg-white rounded-full">
            <button className="min-w-[36px] min-h-[36px]">
              <span className="text-[15px] leading-[20px] font-bold text-black px-[16px]">
                Sign up
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
