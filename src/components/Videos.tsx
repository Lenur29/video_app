import { Box, Stack } from '@mui/material';
import { FC } from 'react';

import { ChannelCard } from './ChannelCard';
import { IVideo } from './types';
import { VideoCard } from './VideoCard';

type Props = {
  videos: IVideo[];
  direction?: 'row' | 'column';
};

export const Videos: FC<Props> = ({ videos, direction = 'row' }) => {
  if (!videos) return null;

  return (
    <Stack direction={direction} flexWrap='wrap' justifyContent='start' gap={2}>
      {videos?.map((item, idx) => (
        <Box key={idx} sx={{ width: { xs: '100%', sm: 'unset' }}}>
          {item?.id?.videoId && <VideoCard video={item} />}
          {item?.id?.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};
  