import { logoApple, logoGoogle } from "../../styles/assets/icons/iconData";

export default function SignUp(): JSX.Element {
  return (
    <div className="mb-[16px] border-[1px] border-searchbar rounded-[16px]">
      <div className="flex flex-col">
        <div className="px-[16px] py-[12px]">
          <span className="text-[20px] leading-[24px] font-extrabold">
            New to Twitter?
          </span>
        </div>

        <div className="px-[12px]">
          <span className="text-[13px] leading-[16px] text-greyTxt">
            Sign up now to get your own personalized timeline!
          </span>
        </div>

        <div className="mx-[12px] my-[16px]">
          <div className="flex flex-col items-center">
            <div className="mb-[12px]">
              <button className="btn-signup">
                <div className="flex flex-row justify-center px-[16px]">
                  <span className="h-[18px] mr-[8px] w-[18px]">
                    {logoGoogle}
                  </span>
                  <span className="text-[14px]">Sign up with Google</span>
                </div>
              </button>
            </div>
            <div className="mb-[12px]">
              <button className="btn-signup">
                <div className="flex flex-row justify-center">
                  <span className="h-[18px] mr-[8px] w-[18px]">
                    {logoApple}
                  </span>
                  <span className="text-[15px] leading-20px font-bold">
                    Sign up with Apple
                  </span>
                </div>
              </button>
            </div>
            <div>
              <button className="btn-signup">
                <div className="flex flex-row justify-center">
                  <span className="text-[15px] leading-20px font-bold">
                    Create Account
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="mb-[16px] px-[12px]">
          <span className="text-[13px] leading-[16px] ">
            By signing up, you agree to the{" "}
            <a className="text-blue">Terms of Service</a> and{" "}
            <a className="text-blue">Privacy Policy</a>, including{" "}
            <a className="text-blue">Cookie Use</a>
          </span>
        </div>
      </div>
    </div>
  );
}
