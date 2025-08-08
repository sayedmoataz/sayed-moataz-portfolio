// Utility to read markdown files from the articles folder
// This uses auto-generated content from the actual markdown files

import { getAvailableArticleIds, getMarkdownContent, hasMarkdownContent } from './markdownContent.js';

/**
 * Reads the content of a markdown file by article ID
 * @param {string} articleId - The ID of the article
 * @returns {Promise<string>} - The markdown content as a string
 */
export const readMarkdownFile = async (articleId) => {
    try {
        const markdownText = getMarkdownContent(articleId);
        if (!markdownText) {
            throw new Error(`Markdown content not found for article: ${articleId}`);
        }
        
        return markdownText;
    } catch (error) {
        console.error('Error reading markdown content:', error);
        throw error;
    }
};

/**
 * Gets all available article IDs
 * @returns {string[]} - Array of available article IDs
 */
export { getAvailableArticleIds };

/**
 * Checks if an article ID has content
 * @param {string} articleId - The ID to check
 * @returns {boolean} - True if the article has content
 */
  export { hasMarkdownContent };
