import defaultPic from "../../styles/assets/default_profile.png";

export default function Avatar({
  profilePic = defaultPic,
  size = 39,
}): JSX.Element {
  return (
    <>
      <img
        className="rounded-full"
        width={size}
        height={size}
        src={profilePic}
      />
    </>
  );
}
