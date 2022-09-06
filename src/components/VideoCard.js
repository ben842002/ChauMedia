import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelTitle, demoChannelUrl } from '../utils/constants';

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
    const stringCutOffLimitTitle = 60;
    const stringCutOffLimitDesc = 100;
    
    if (!snippet?.title) return "Loading...";
    
    // some titles appear with the ASCII value of an apostrophe
    let videoTitle = snippet?.title;
    videoTitle = videoTitle.replace(/&#39;/g, "'");

    return (
        <Card sx={{ width: { xs: "100%", sm: "358px", md: "320px" }, boxShadow: "none", borderRadius: 0 }}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl }>
                {/* Video Thumbnail */}
                <CardMedia 
                    image={snippet?.thumbnails?.high?.url || demoThumbnailUrl }
                    alt={snippet?.title}
                    sx={{ width: { xs: "100%", sm: "358px", md: "320px" }, height: "180px" }}
                /> 
            </Link>

            <CardContent sx={{ backgroundColor: "#1e1e1e", height: "115px" }}>
                {/* Title */}
                <Link to={videoId ? `/video/${videoId}` : demoVideoUrl }>
                    <Typography variant="subtitle1" fontWeight="bold" color="#fff" lineHeight={1.5}>
                        {videoTitle.length > stringCutOffLimitTitle ? 
                            (videoTitle.slice(0, stringCutOffLimitTitle) || demoVideoTitle.slice(0, stringCutOffLimitTitle)) + "..." : videoTitle
                        }
                    </Typography>
                </Link>

                {/* Channel */}
                <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl }>
                    <Typography variant="subtitle2" fontWeight="bold" color="#bababa" mt="5px">
                        {snippet?.channelTitle.slice(0, stringCutOffLimitTitle) || demoChannelTitle.slice(0, stringCutOffLimitTitle)}
                        <CheckCircle sx={{ fontSize: 13, color: "gray", ml: "5px" }} />
                    </Typography>
                </Link>
                
                {/* Video Description */}
                <Typography variant="subtitle2" fontSize="11.5px" color="#808080" mt={0.5}>
                    {snippet?.description.length > stringCutOffLimitDesc ? snippet?.description.slice(0, stringCutOffLimitDesc) + "..." : snippet?.description}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default VideoCard