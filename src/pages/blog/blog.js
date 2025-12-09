import CloseIcon from '@mui/icons-material/Close';
import {
    Box,
    Button,
    Card,
    CardContent,
    Chip,
    Container,
    Dialog,
    DialogContent,
    DialogTitle,
    Grid,
    IconButton,
    Slide,
    Stack,
    Typography
} from '@mui/material';
import { marked } from 'marked';
import { forwardRef, useContext, useState } from 'react';
import { FaCalendarAlt, FaClock, FaCode, FaExternalLinkAlt } from 'react-icons/fa';

import { AppContext } from '../../context/context/context.js';
import articlesData from '../../data/articles.json';
import Header from '../../utils/header.js';
import { readMarkdownFile } from '../../utils/markdownReader.js';

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const Blog = () => {
    const { state } = useContext(AppContext);
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedArticle, setSelectedArticle] = useState(null);
    const [articleContent, setArticleContent] = useState('');

    const handleOpenArticle = async (article) => {
        setSelectedArticle(article);
        setOpenDialog(true);

        try {
            const markdownText = await readMarkdownFile(article.id);
            const htmlContent = marked(markdownText);
            setArticleContent(htmlContent);
        } catch (error) {
            console.error('Error loading article:', error);
            setArticleContent('<p>Error loading article content. Please try again later.</p>');
        }
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
        setSelectedArticle(null);
        setArticleContent('');
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Container maxWidth="xl" sx={{ py: { xs: 5, md: 10 }, px: { xs: 2, md: 5 } }}>
                <Header color={state.color.light} title='BLOG & ARTICLES' />

                <Typography
                    variant="body1"
                    textAlign="center"
                    fontFamily='"Noto Sans", sans-serif'
                    sx={{
                        color: state.color.light,
                        opacity: 0.8,
                        mb: 6,
                        maxWidth: 800,
                        mx: 'auto',
                        fontSize: { xs: 14, md: 16 }
                    }}
                >
                    Technical insights, tutorials, and best practices from my development journey
                </Typography>

                <Grid container spacing={4}>
                    {articlesData.articles
                        .sort((a, b) => new Date(b.createdDate) - new Date(a.createdDate))
                        .map((article) => (
                            <Grid item xs={12} md={6} lg={4} key={article.id}>
                                <Card
                                    data-aos="fade-up"
                                    sx={{
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        bgcolor: 'transparent',
                                        border: `2px solid ${state.color.primary}`,
                                        boxShadow: `0px 0px 15px 2px ${state.color.primary}`,
                                        borderRadius: 3,
                                        overflow: 'hidden',
                                        transition: 'all 0.4s ease-in-out',
                                        '&:hover': {
                                            transform: 'translateY(-8px)',
                                            border: `2px solid ${state.color.teal}`,
                                            boxShadow: `0px 0px 25px 4px ${state.color.teal}`,
                                        }
                                    }}
                                >
                                    {/* Header Section with Gradient */}
                                    <Box
                                        sx={{
                                            background: `linear-gradient(135deg, ${state.color.primary}20 0%, ${state.color.teal}20 100%)`,
                                            p: 3,
                                            borderBottom: `1px solid ${state.color.primary}`,
                                            position: 'relative',
                                            overflow: 'hidden',
                                            '&::before': {
                                                content: '""',
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                right: 0,
                                                height: '4px',
                                                background: `linear-gradient(90deg, ${state.color.primary}, ${state.color.teal})`,
                                            }
                                        }}
                                    >
                                        <Stack direction="row" alignItems="flex-start" spacing={2}>
                                            <Box
                                                sx={{
                                                    width: 48,
                                                    height: 48,
                                                    borderRadius: 2,
                                                    bgcolor: `${state.color.primary}30`,
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    border: `2px solid ${state.color.primary}`,
                                                    flexShrink: 0
                                                }}
                                            >
                                                <FaCode size={24} color={state.color.primary} />
                                            </Box>
                                            <Box flex={1}>
                                                <Typography
                                                    variant="h5"
                                                    component="h3"
                                                    sx={{
                                                        color: state.color.light,
                                                        fontWeight: 700,
                                                        fontFamily: '"Noto Sans", sans-serif',
                                                        fontSize: { xs: 18, md: 20 },
                                                        mb: 1,
                                                        lineHeight: 1.3
                                                    }}
                                                >
                                                    {article.title}
                                                </Typography>

                                                {/* Meta Information */}
                                                <Stack direction="row" spacing={2} flexWrap="wrap" gap={1}>
                                                    <Stack direction="row" alignItems="center" spacing={0.5}>
                                                        <FaCalendarAlt size={12} color={state.color.secondary} />
                                                        <Typography
                                                            variant="caption"
                                                            sx={{
                                                                color: state.color.secondary,
                                                                fontFamily: '"Noto Sans", sans-serif',
                                                                fontSize: { xs: 11, md: 12 }
                                                            }}
                                                        >
                                                            {formatDate(article.createdDate)}
                                                        </Typography>
                                                    </Stack>
                                                    <Stack direction="row" alignItems="center" spacing={0.5}>
                                                        <FaClock size={12} color={state.color.primary} />
                                                        <Typography
                                                            variant="caption"
                                                            sx={{
                                                                color: state.color.primary,
                                                                fontFamily: '"Noto Sans", sans-serif',
                                                                fontSize: { xs: 11, md: 12 }
                                                            }}
                                                        >
                                                            {article.readTime}
                                                        </Typography>
                                                    </Stack>
                                                </Stack>
                                            </Box>
                                        </Stack>
                                    </Box>

                                    <CardContent sx={{ p: 3, flex: 1, display: 'flex', flexDirection: 'column' }}>
                                        {/* Summary */}
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                color: state.color.light,
                                                opacity: 0.9,
                                                mb: 3,
                                                fontFamily: '"Noto Sans", sans-serif',
                                                fontSize: { xs: 13, md: 15 },
                                                lineHeight: 1.7,
                                                flex: 1
                                            }}
                                        >
                                            {article.summary}
                                        </Typography>

                                        {/* Technologies */}
                                        <Box>
                                            <Typography
                                                variant="caption"
                                                sx={{
                                                    color: state.color.secondary,
                                                    fontFamily: '"Noto Sans", sans-serif',
                                                    fontSize: { xs: 11, md: 12 },
                                                    fontWeight: 600,
                                                    mb: 1,
                                                    display: 'block'
                                                }}
                                            >
                                                Technologies
                                            </Typography>
                                            <Stack
                                                direction="row"
                                                spacing={1}
                                                flexWrap="wrap"
                                                gap={1}
                                            >
                                                {article.technologies.map((tech, index) => (
                                                    <Chip
                                                        key={index}
                                                        label={tech}
                                                        size="small"
                                                        sx={{
                                                            bgcolor: state.color.primary,
                                                            color: state.color.dark,
                                                            fontFamily: '"Noto Sans", sans-serif',
                                                            fontSize: { xs: 10, md: 11 },
                                                            fontWeight: 600,
                                                            height: 24,
                                                            '&:hover': {
                                                                bgcolor: state.color.teal,
                                                            }
                                                        }}
                                                    />
                                                ))}
                                            </Stack>
                                        </Box>

                                        {/* Read More Button */}
                                        <Box sx={{ mt: 3, textAlign: 'center' }}>
                                            <Button
                                                onClick={() => handleOpenArticle(article)}
                                                endIcon={<FaExternalLinkAlt size={14} />}
                                                sx={{
                                                    color: state.color.primary,
                                                    fontFamily: '"Noto Sans", sans-serif',
                                                    fontWeight: 600,
                                                    fontSize: { xs: 12, md: 14 },
                                                    textTransform: 'none',
                                                    px: 3,
                                                    py: 1,
                                                    borderRadius: 2,
                                                    border: `1px solid ${state.color.primary}`,
                                                    width: '100%',
                                                    '&:hover': {
                                                        bgcolor: state.color.primary,
                                                        color: state.color.dark,
                                                        borderColor: state.color.primary,
                                                    }
                                                }}
                                            >
                                                Read Full Article
                                            </Button>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                </Grid>
            </Container>

            {/* Article Dialog */}
            <Dialog
                open={openDialog}
                onClose={handleCloseDialog}
                TransitionComponent={Transition}
                maxWidth="md"
                fullWidth
                scroll="paper"
                sx={{
                    '& .MuiDialog-paper': {
                        bgcolor: state.color.dark,
                        backgroundImage: 'none',
                        border: `2px solid ${state.color.primary}`,
                        boxShadow: `0px 0px 30px 5px ${state.color.primary}`,
                        borderRadius: 3,
                        maxHeight: '90vh'
                    }
                }}
            >
                {selectedArticle && (
                    <>
                        <DialogTitle
                            sx={{
                                background: `linear-gradient(135deg, ${state.color.primary}20 0%, ${state.color.teal}20 100%)`,
                                borderBottom: `2px solid ${state.color.primary}`,
                                position: 'relative',
                                pr: 6,
                                '&::before': {
                                    content: '""',
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    height: '4px',
                                    background: `linear-gradient(90deg, ${state.color.primary}, ${state.color.teal})`,
                                }
                            }}
                        >
                            <Stack spacing={2}>
                                <Stack direction="row" alignItems="center" spacing={2}>
                                    <Box
                                        sx={{
                                            width: 48,
                                            height: 48,
                                            borderRadius: 2,
                                            bgcolor: `${state.color.primary}30`,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            border: `2px solid ${state.color.primary}`,
                                        }}
                                    >
                                        <FaCode size={24} color={state.color.primary} />
                                    </Box>
                                    <Typography
                                        variant="h5"
                                        sx={{
                                            color: state.color.light,
                                            fontWeight: 700,
                                            fontFamily: '"Noto Sans", sans-serif',
                                            fontSize: { xs: 18, md: 22 }
                                        }}
                                    >
                                        {selectedArticle.title}
                                    </Typography>
                                </Stack>

                                <Stack direction="row" spacing={3} flexWrap="wrap" gap={1}>
                                    <Stack direction="row" alignItems="center" spacing={0.5}>
                                        <FaCalendarAlt size={14} color={state.color.secondary} />
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                color: state.color.secondary,
                                                fontFamily: '"Noto Sans", sans-serif',
                                                fontSize: 13
                                            }}
                                        >
                                            {formatDate(selectedArticle.createdDate)}
                                        </Typography>
                                    </Stack>
                                    <Stack direction="row" alignItems="center" spacing={0.5}>
                                        <FaClock size={14} color={state.color.primary} />
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                color: state.color.primary,
                                                fontFamily: '"Noto Sans", sans-serif',
                                                fontSize: 13
                                            }}
                                        >
                                            {selectedArticle.readTime}
                                        </Typography>
                                    </Stack>
                                </Stack>

                                <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
                                    {selectedArticle.technologies.map((tech, index) => (
                                        <Chip
                                            key={index}
                                            label={tech}
                                            size="small"
                                            sx={{
                                                bgcolor: state.color.primary,
                                                color: state.color.dark,
                                                fontFamily: '"Noto Sans", sans-serif',
                                                fontSize: 11,
                                                fontWeight: 600,
                                            }}
                                        />
                                    ))}
                                </Stack>
                            </Stack>

                            <IconButton
                                onClick={handleCloseDialog}
                                sx={{
                                    position: 'absolute',
                                    right: 8,
                                    top: 8,
                                    color: state.color.light,
                                    bgcolor: `${state.color.primary}30`,
                                    '&:hover': {
                                        bgcolor: state.color.primary,
                                    }
                                }}
                            >
                                <CloseIcon />
                            </IconButton>
                        </DialogTitle>

                        <DialogContent
                            sx={{
                                p: 4,
                                bgcolor: state.color.dark,
                                '& h1, & h2, & h3, & h4, & h5, & h6': {
                                    color: state.color.light,
                                    fontFamily: '"Noto Sans", sans-serif',
                                    fontWeight: 600,
                                    mt: 3,
                                    mb: 2
                                },
                                '& h1': { fontSize: { xs: 24, md: 32 } },
                                '& h2': { fontSize: { xs: 20, md: 28 } },
                                '& h3': { fontSize: { xs: 18, md: 24 } },
                                '& p': {
                                    color: state.color.light,
                                    fontFamily: '"Noto Sans", sans-serif',
                                    lineHeight: 1.8,
                                    mb: 2,
                                    fontSize: { xs: 14, md: 16 }
                                },
                                '& code': {
                                    bgcolor: `${state.color.primary}20`,
                                    color: state.color.primary,
                                    px: 1,
                                    py: 0.5,
                                    borderRadius: 1,
                                    fontFamily: 'monospace',
                                    fontSize: { xs: 12, md: 14 }
                                },
                                '& pre': {
                                    bgcolor: 'rgba(0,0,0,0.4)',
                                    p: 3,
                                    borderRadius: 2,
                                    overflow: 'auto',
                                    border: `1px solid ${state.color.primary}`,
                                    my: 2
                                },
                                '& pre code': {
                                    bgcolor: 'transparent',
                                    p: 0
                                },
                                '& ul, & ol': {
                                    color: state.color.light,
                                    fontFamily: '"Noto Sans", sans-serif',
                                    pl: 3,
                                    mb: 2
                                },
                                '& li': {
                                    mb: 1,
                                    lineHeight: 1.7
                                },
                                '& a': {
                                    color: state.color.teal,
                                    textDecoration: 'none',
                                    '&:hover': {
                                        textDecoration: 'underline'
                                    }
                                },
                                '& blockquote': {
                                    borderLeft: `4px solid ${state.color.primary}`,
                                    pl: 2,
                                    ml: 0,
                                    my: 2,
                                    fontStyle: 'italic',
                                    color: state.color.light,
                                    opacity: 0.9
                                },
                                '& img': {
                                    maxWidth: '100%',
                                    borderRadius: 2,
                                    my: 2
                                }
                            }}
                            dangerouslySetInnerHTML={{
                                __html: articleContent
                            }}
                        />
                    </>
                )}
            </Dialog>
        </Box>
    );
};

export default Blog;