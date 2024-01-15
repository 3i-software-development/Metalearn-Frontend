import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import ytdl from "ytdl-core";

const YoutubeVideo = ({ videoUrl, width, height }) => {
    const [videoId, setVideoId] = useState(null);

    useEffect(() => {
        const getVideoId = async () => {
            try {
                // Trích xuất ID video từ đường link
                const id = ytdl.getURLVideoID(videoUrl);
                setVideoId(id);
            } catch (error) {
                console.error("Error extracting video ID:", error);
            }
        };

        getVideoId();
    }, [videoUrl]);

    if (!videoId) {
        return <div>Loading...</div>;
    }

    const opts = {
        height: height || "390",
        width: width || "640",
        playerVars: {
            autoplay: 1,
        },
    };

    return <YouTube videoId={videoId} opts={opts} />;
};

export default YoutubeVideo;
