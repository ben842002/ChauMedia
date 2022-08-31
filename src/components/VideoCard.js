import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelTitle, demoChannelUrl } from '../utils/constants';

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
    console.log(snippet)
    return (
        <Card sx={{ width: { md: "320px", xs: "100%" }, boxShadow: "none", borderRadius: 0 }}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl }>
                {/* Video Thumbnail */}
                <CardMedia 
                    image={snippet?.thumbnails?.high?.url || demoThumbnailUrl }
                    alt={snippet?.title}
                    sx={{ width: "358px", height: "180px" }}
                /> 
            </Link>

            <CardContent sx={{ backgroundColor: "#1e1e1e", height: "106px" }}>
                {/* Title */}
                <Link to={videoId ? `/video/${videoId}` : demoVideoUrl }>
                    <Typography variant="subtitle1" fontWeight="bold" color="#fff">
                        {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
                    </Typography>
                </Link>

                {/* Channel */}
                <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl }>
                    <Typography variant="subtitle2" fontWeight="bold" color="#bababa">
                        {snippet?.channelTitle.slice(0, 60) || demoChannelTitle.slice(0, 60)}
                        <CheckCircle sx={{ fontSize: 12, color: "gray", ml: "5px" }} />
                    </Typography>
                </Link>
                
                {/* Video Description */}
                <Typography variant="subtitle2" fontSize="11px" color="#808080" mt={0.5}>
                    {snippet?.description.length > 100 ? snippet?.description.slice(0, 100) + "..." : snippet?.description}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default VideoCard