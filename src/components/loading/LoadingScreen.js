import { Box, Stack, Typography } from '@mui/material'
import { keyframes } from '@mui/system'

const pulse = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.8;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const LoadingScreen = () => {
    return (
        <Box
            sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
                zIndex: 9999,
                animation: `${fadeIn} 0.3s ease-in`
            }}
        >
            <Stack spacing={4} alignItems="center">
                {/* Logo/Initials */}
                <Box
                    sx={{
                        width: 120,
                        height: 120,
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #368F80 0%, #40718D 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 0 40px rgba(54, 143, 128, 0.5)',
                        animation: `${pulse} 2s ease-in-out infinite`,
                        position: 'relative'
                    }}
                >
                    <Typography
                        variant="h2"
                        sx={{
                            color: '#FFFFFF',
                            fontWeight: 900,
                            fontSize: 48,
                            fontFamily: '"Noto Sans", sans-serif',
                            letterSpacing: 2
                        }}
                    >
                        SM
                    </Typography>
                </Box>

                {/* Loading Spinner
                <CircularProgress
                    size={60}
                    thickness={3}
                    sx={{
                        color: '#368F80',
                        '& .MuiCircularProgress-circle': {
                            strokeLinecap: 'round',
                        }
                    }}
                /> */}

                {/* Loading Text */}
                <Typography
                    variant="h6"
                    sx={{
                        color: '#FFFFFF',
                        fontFamily: '"Noto Sans", sans-serif',
                        fontWeight: 300,
                        letterSpacing: 3,
                        opacity: 0.8
                    }}
                >
                    LOADING...
                </Typography>
            </Stack>
        </Box>
    )
}

export default LoadingScreen
