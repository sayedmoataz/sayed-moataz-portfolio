import {
    Box,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    Stack,
    Typography
} from '@mui/material'
import { IoClose } from 'react-icons/io5'
import { ColorButton } from './../../utils/button.js'

const ServiceModal = ({ open, onClose, service, color }) => {
    if (!service) return null

    return (
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth="md"
            fullWidth
            PaperProps={{
                sx: {
                    bgcolor: 'rgba(20, 20, 30, 0.95)',
                    backdropFilter: 'blur(10px)',
                    border: `1px solid ${color}`,
                    boxShadow: `0px 0px 20px 2px ${color}`,
                    borderRadius: 3,
                }
            }}
        >
            <DialogTitle>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Typography
                        variant="h5"
                        fontFamily='"Noto Sans", sans-serif'
                        fontWeight={700}
                        color={color}
                    >
                        {service.name}
                    </Typography>
                    <IconButton
                        onClick={onClose}
                        sx={{
                            color: color,
                            '&:hover': {
                                bgcolor: 'rgba(255, 255, 255, 0.1)'
                            }
                        }}
                    >
                        <IoClose size={24} />
                    </IconButton>
                </Stack>
            </DialogTitle>
            <DialogContent>
                <Stack spacing={3}>
                    <Box>
                        <Typography
                            variant="h6"
                            fontFamily='"Noto Sans", sans-serif'
                            fontWeight={600}
                            color="#FFFFFF"
                            gutterBottom
                        >
                            Overview
                        </Typography>
                        <Typography
                            variant="body1"
                            fontFamily='"Noto Sans", sans-serif'
                            color="rgba(255, 255, 255, 0.8)"
                            sx={{ lineHeight: 1.8 }}
                        >
                            {service.proposal}
                        </Typography>
                    </Box>

                    {service.details && (
                        <Box>
                            <Typography
                                variant="h6"
                                fontFamily='"Noto Sans", sans-serif'
                                fontWeight={600}
                                color="#FFFFFF"
                                gutterBottom
                            >
                                What I Offer
                            </Typography>
                            <Typography
                                variant="body1"
                                fontFamily='"Noto Sans", sans-serif'
                                color="rgba(255, 255, 255, 0.8)"
                                sx={{ lineHeight: 1.8 }}
                            >
                                {service.details}
                            </Typography>
                        </Box>
                    )}

                    {service.technologies && service.technologies.length > 0 && (
                        <Box>
                            <Typography
                                variant="h6"
                                fontFamily='"Noto Sans", sans-serif'
                                fontWeight={600}
                                color="#FFFFFF"
                                gutterBottom
                            >
                                Technologies & Tools
                            </Typography>
                            <Stack direction="row" flexWrap="wrap" gap={1}>
                                {service.technologies.map((tech, index) => (
                                    <Box
                                        key={index}
                                        sx={{
                                            px: 2,
                                            py: 0.5,
                                            bgcolor: 'rgba(255, 255, 255, 0.1)',
                                            border: `1px solid ${color}`,
                                            borderRadius: 2,
                                        }}
                                    >
                                        <Typography
                                            variant="body2"
                                            fontFamily='"Noto Sans", sans-serif'
                                            color={color}
                                        >
                                            {tech}
                                        </Typography>
                                    </Box>
                                ))}
                            </Stack>
                        </Box>
                    )}
                </Stack>
            </DialogContent>
            <DialogActions sx={{ px: 3, pb: 2 }}>
                <ColorButton
                    variant="contained"
                    onClick={onClose}
                    size="large"
                >
                    Close
                </ColorButton>
            </DialogActions>
        </Dialog>
    )
}

export default ServiceModal
