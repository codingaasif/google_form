import React from 'react';
import { Box, SvgIcon, Typography } from '@mui/material';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

const BackgroundPattern = () => {
    return (
        <Box
            sx={{
                height: '300px',
                backgroundColor: '#4CAF50', // Google green color
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
            }}
        >
            {[...Array(20)].map((_, index) => (
                <Box
                    key={index}
                    sx={{
                        position: 'absolute',
                        opacity: 0.2, // Make icons transparent
                        fontSize: `${Math.random() * 3 + 1}rem`, // Randomize size
                        color: '#ffffff', // Icon color
                        top: `${Math.random() * 100}%`, // Randomize position
                        left: `${Math.random() * 100}%`,
                        transform: `rotate(${Math.random() * 360}deg)`, // Randomize rotation
                    }}
                >
                    <Typography>Softmind Infotech Pvt Ltd</Typography>
                    {index % 2 === 0 ? (
                        <VideoCallIcon fontSize="inherit" />
                    ) : (
                        <ChatBubbleIcon fontSize="inherit" />
                    )}
                </Box>
            ))}

            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 1, // Space between words
                    flexDirection: { xs: 'column', sm: 'row' }, // Stack vertically on small screens
                    textAlign: { xs: 'center', sm: 'left' }, // Center text on small screens, left on larger ones
                }}
            >
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: '900',
                        fontSize: { xs: '2rem', sm: '3rem' }, // Smaller font size on small screens
                        color: '#1976d2',
                        letterSpacing: { xs: 2, sm: 3 }, // Adjust letter spacing on small screens
                        fontFamily: 'Poppins, sans-serif',
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
                        textTransform: 'uppercase',
                        lineHeight: 1,
                    }}
                >
                    Softmind
                </Typography>
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: '900',
                        fontSize: { xs: '2rem', sm: '3rem' }, // Smaller font size on small screens
                        color: '#1976d2',
                        letterSpacing: { xs: 2, sm: 3 }, // Adjust letter spacing on small screens
                        fontFamily: 'Poppins, sans-serif',
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
                        textTransform: 'uppercase',
                        lineHeight: 1,
                    }}
                >
                    Infotech Pvt Ltd
                </Typography>
            </Box>


        </Box>
    );
};

export default BackgroundPattern;
