export default interface ProfileProps {
  userHandle?: string;
  userName?: string;
  firstName?: string;
  lastName?: string;
  profilePic?: string;
  backgroundPic?: string;
  bio?: string;
  location?: string;
  website?: string;
  joinedDate?: Date;
  following?: number;
  followers?: number;
}
