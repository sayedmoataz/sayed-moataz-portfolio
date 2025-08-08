import { ExpandLess, ExpandMore } from '@mui/icons-material';
import {
    Box,
    Card,
    CardActions,
    CardContent,
    Chip,
    Collapse,
    Container,
    Divider,
    IconButton,
    Stack,
    Typography
} from '@mui/material';
import { marked } from 'marked';
import React, { useContext, useState } from 'react';

import { AppContext } from '../../context/context/context.js';
import articlesData from '../../data/articles.json';
import { readMarkdownFile } from '../../utils/markdownReader.js';
import './blog.css';

const Blog = () => {
    const { state } = useContext(AppContext);
    const [expandedArticles, setExpandedArticles] = useState({});
    const [articleContents, setArticleContents] = useState({});

    const handleExpandClick = async (articleId, filename) => {
        const isCurrentlyExpanded = expandedArticles[articleId];
        
        if (!isCurrentlyExpanded) {
            // If expanding this article, close all others first
            setExpandedArticles({ [articleId]: true });
            
            // Load content if not already loaded
            if (!articleContents[articleId]) {
                try {
                    // Read real markdown content from the articles folder
                    const markdownText = await readMarkdownFile(articleId);
                    const htmlContent = marked(markdownText);
                    
                    setArticleContents(prev => ({
                        ...prev,
                        [articleId]: htmlContent
                    }));
                } catch (error) {
                    console.error('Error loading article:', error);
                    setArticleContents(prev => ({
                        ...prev,
                        [articleId]: '<p>Error loading article content. Please try again later.</p>'
                    }));
                }
            }
        } else {
            // If collapsing this article, just close it
            setExpandedArticles(prev => ({
                ...prev,
                [articleId]: false
            }));
        }
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <Box data-aos="fade-up" sx={{ mt: 10 }}>
            <Container maxWidth="lg" sx={{ py: 4 }}>
                <Typography
                    variant="h4"
                    component="h2"
                    gutterBottom
                    textAlign="center"
                    sx={{
                        color: state.color.light,
                        mb: 4,
                        fontFamily: '"Noto Sans", sans-serif'
                    }}
                >
                    Latest Articles & Insights
                </Typography>
                
                <Stack spacing={3}>
                    {articlesData.articles
                        .sort((a, b) => new Date(b.createdDate) - new Date(a.createdDate))
                        .map((article) => (
                        <Card
                            key={article.id}
                            className="blog-card"
                            sx={{
                                bgcolor: 'transparent',
                                border: `1px solid ${state.color.primary}`,
                                boxShadow: `0px 0px 10px 2px ${state.color.primary}`,
                                borderRadius: 3,
                                overflow: 'hidden'
                            }}
                        >
                            <CardContent sx={{ p: 3 }}>
                                <Typography
                                    variant="h5"
                                    component="h3"
                                    gutterBottom
                                    sx={{
                                        color: state.color.light,
                                        fontWeight: 600,
                                        fontFamily: '"Noto Sans", sans-serif'
                                    }}
                                >
                                    {article.title}
                                </Typography>
                                
                                <Typography
                                    variant="body1"
                                    color="text.secondary"
                                    sx={{
                                        color: state.color.light,
                                        opacity: 0.8,
                                        mb: 2,
                                        fontFamily: '"Noto Sans", sans-serif'
                                    }}
                                >
                                    {article.summary}
                                </Typography>
                                
                                <Stack
                                    direction="row"
                                    spacing={2}
                                    alignItems="center"
                                    flexWrap="wrap"
                                    gap={1}
                                    sx={{ mb: 2 }}
                                >
                                    {article.technologies.map((tech, index) => (
                                        <Chip
                                            key={index}
                                            label={tech}
                                            size="small"
                                            className="technology-chip"
                                            sx={{
                                                bgcolor: state.color.primary,
                                                color: 'white',
                                                '&:hover': {
                                                    bgcolor: state.color.primary,
                                                    opacity: 0.8
                                                }
                                            }}
                                        />
                                    ))}
                                </Stack>
                                
                                <Stack
                                    direction="row"
                                    justifyContent="space-between"
                                    alignItems="center"
                                    sx={{ mb: 1 }}
                                >
                                    <Typography
                                        variant="caption"
                                        sx={{
                                            color: state.color.light,
                                            opacity: 0.7,
                                            fontFamily: '"Noto Sans", sans-serif'
                                        }}
                                    >
                                        Created: {formatDate(article.createdDate)}
                                    </Typography>
                                    <Typography
                                        variant="caption"
                                        sx={{
                                            color: state.color.light,
                                            opacity: 0.7,
                                            fontFamily: '"Noto Sans", sans-serif'
                                        }}
                                    >
                                        {article.readTime}
                                    </Typography>
                                </Stack>
                            </CardContent>
                            
                            <Divider sx={{ borderColor: state.color.primary }} />
                            
                            <CardActions sx={{ justifyContent: 'center', p: 2 }}>
                                <IconButton
                                    className="expand-button"
                                    onClick={() => handleExpandClick(article.id, article.filename)}
                                    sx={{
                                        color: state.color.primary,
                                        '&:hover': {
                                            bgcolor: state.color.primary,
                                            color: 'white'
                                        }
                                    }}
                                >
                                    {expandedArticles[article.id] ? <ExpandLess /> : <ExpandMore />}
                                </IconButton>
                            </CardActions>
                            
                            <Collapse in={expandedArticles[article.id]} timeout="auto" unmountOnExit>
                                <Box
                                    className="blog-content"
                                    sx={{
                                        p: 3,
                                        bgcolor: 'rgba(0,0,0,0.02)',
                                        borderTop: `1px solid ${state.color.primary}`,
                                        '& h1, & h2, & h3, & h4, & h5, & h6': {
                                            color: state.color.light,
                                            fontFamily: '"Noto Sans", sans-serif',
                                            fontWeight: 600
                                        },
                                        '& p': {
                                            color: state.color.light,
                                            fontFamily: '"Noto Sans", sans-serif',
                                            lineHeight: 1.6
                                        },
                                        '& code': {
                                            bgcolor: 'rgba(0,0,0,0.1)',
                                            color: state.color.primary,
                                            px: 1,
                                            py: 0.5,
                                            borderRadius: 1,
                                            fontFamily: 'monospace'
                                        },
                                        '& pre': {
                                            bgcolor: 'rgba(0,0,0,0.1)',
                                            p: 2,
                                            borderRadius: 2,
                                            overflow: 'auto'
                                        },
                                        '& ul, & ol': {
                                            color: state.color.light,
                                            fontFamily: '"Noto Sans", sans-serif'
                                        }
                                    }}
                                    dangerouslySetInnerHTML={{
                                        __html: articleContents[article.id] || ''
                                    }}
                                />
                            </Collapse>
                        </Card>
                    ))}
                </Stack>
            </Container>
        </Box>
    );
};

export default Blog; 