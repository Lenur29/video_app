interface IThumbnail {
  default: {
    url: string;
    height: number;
    width: number;
  };
  high: {
    url: string;
    height: number;
    width: number;
  };
  medium: {
    url: string;
    height: number;
    width: number;
  };
}

export interface IVideo {
  id: {
    kind: string;
    videoId: string;
    channelId?: string;
  };
  kind: string;
  snippet: {
    channelId: string;
    channelTitle: string;
    description: string;
    liveBroadcastContent: string;
    publishTime: string;
    publishedAt: string;
    thumbnails: IThumbnail;
    title: string;
  };
}

export interface IVideoDetail {
  contentDetails: {
    caption: string;
    definition: string;
    dimension: string;
    duration: string;
    licensedContent: true;
    projection: string;
  };
  id: string;
  kind: string;
  snippet: {
    categoryId: string;
    channelId: string;
    channelTitle: string;
    defaultAudioLanguage: string;
    defaultLanguage: string;
    description: string;
    liveBroadcastContent: string;
    localized: {
      description: string;
      title: string;
    };
    publishedAt: string;
    tags: string[];
    title: string;
  };
  statistics: {
    commentCount: string;
    favoriteCount: string;
    likeCount: string;
    viewCount: string;
  };
}
