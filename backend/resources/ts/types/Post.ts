export type Post = {
  id: number;
  userId: string;
  displayName: string;
  userName: string;
  emailVerified: boolean;
  avatar: string;
  type: "tweet" | "replay" | "retweet";
  content: string;
  image: string;
  replay: number;
  retweet: number;
  likes: number;
  replayIds: string;
  retweetIds: string;
  likesIds: string;
  created_at: string;
  updated_at: string;
};

export type SendPost = {
  userId: string;
  displayName: string;
  userName: string;
  emailVerified: boolean;
  avatar: string;
  type: "tweet";
  content: string;
  image: string;
  replay: number;
  retweet: number;
  likes: number;
  replayIds: string;
  retweetIds: string;
  likesIds: string;
};
