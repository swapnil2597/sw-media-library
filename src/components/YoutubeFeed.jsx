import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
// import { motion } from "framer-motion";


// const motionContainer = {
//     hidden: { opacity: 1, scale: 0 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: {
//         delayChildren: 0.3,
//         staggerChildren: 0.2
//       }
//     }
//   };
  
//   const motionItem = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1
//     }
//   };

function Media({loading, videosList}) {
//   const { loading = false } = loading;

  return (
//       <motion.ul
//   className="motionContainer"
//   variants={motionContainer}
//   initial="hidden"
//   animate="visible"
// >
    <Grid m="auto" container wrap="wrap" sx={{
        justifyContent: "space-evenly"
    }}>

      {(loading ? Array.from(new Array(50)) : videosList)?.map((item, index) => (
        // <motion.li key={index} className="item" variants={motionItem}>
            <div className='feedCardWrapper' >
                    <Box key={index} sx={{ width: 358,  my: 5, borderRadius: "12px", cursor:"pointer", mx:1  }}>
                    {item ? (
                        
                        <Link to={`/video/${item?.id?.videoId}`} >

                            <img
                            style={{ 
                                width: 358, height: 180, 
                                borderRadius: "12px",
                                // border: "1px solid #333",
                                boxShadow: "0px 0px 50px #333"
                            }}
                            alt={item?.snippet?.title}
                            src={item?.snippet?.thumbnails?.medium?.url}
                            />
                        </Link>
                    ) : (
                        <Skeleton variant="rectangular" width={210} height={118} />
                    )}

                    {item ? (
                        <div style={{ display:"flex", flexDirection:"row", marginTop: "8px", padding:2}}>
                            <Avatar
                                alt="channel name"
                                src="https://images.pexels.com/photos/3850512/pexels-photo-3850512.jpeg?auto=compress&cs=tinysrgb&w=800"
                                sx={{ width: 24, height: 24, mr:2 }}
                                />
                            <>
                                <Box sx={{ pr: 2 }}>
                                <Link to={`/video/${item?.id?.videoId}`} >
                                    <Typography sx={{color:"#fff"}} gutterBottom variant="body2">
                                        {item?.snippet?.title}
                                    </Typography>
                                </Link>
                                <Link to={`/channel/${item?.snippet?.channelId}`} >
                                    <Typography display="block" variant="caption" color="#aaa">
                                        {item?.snippet?.channelTitle}
                                    </Typography>
                                </Link>
                                <Typography variant="caption" color="#aaa">
                                    {/* {`${item?.snippet?.views} • ${item?.snippet?.createdAt}`}
                                    */}
                                    130M views - 10 months ago
                                </Typography>
                                </Box>
                            </>
                        </div>
                    ) : (
                        <Box sx={{ pt: 0.5 }}>
                        <Skeleton />
                        <Skeleton width="60%" />
                        </Box>
                    )}
                    </Box>
            </div>
    //   </motion.li>
      ))}
    </Grid>
    // </motion.ul>
  );
}

Media.propTypes = {
  loading: PropTypes.bool,
};

export default function YouTube({videosList}) {
    console.log("video list", videosList);
  return (
    <Box sx={{ overflow: 'hidden' }}>
        { videosList ?
         <Media videosList={videosList} />
        : 
        <Media loading videosList={videosList} />
        }
    </Box>
  );
}
