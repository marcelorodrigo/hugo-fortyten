/**
 * Hugo FortyTen Theme - Utility Functions
 * 
 * Collection of utility functions for search, sorting, and HTML escaping.
 * No dependencies on Alpine.js or other frameworks.
 * 
 * Pure Functions:
 * - fuzzySearch(query, items): Searches and scores items by relevance
 * - sortByDate(items): Sorts items by date (newest first)
 * 
 * DOM-Dependent Functions:
 * - escapeHtml(text): Uses document.createElement() for XSS prevention via browser's HTML parser
 */

window.ThemeUtilities = {
  /**
   * Fuzzy search algorithm
   * Searches through items by title and summary, scoring matches
   * 
   * @param {string} query - Search query string
   * @param {Array} items - Array of items to search (each item should have title and optionally summary)
   * @returns {Array} - Filtered and sorted array of items (top 10)
   * 
   * Note: Items without a valid title (null, undefined, or empty string) are skipped.
   * Summary is optional and defaults to empty string if missing.
   */
  fuzzySearch(query, items) {
    if (!query || !items || items.length === 0) return [];

    const terms = query.toLowerCase().trim().split(/\s+/);

    const scored = items
      .map(item => {
        // Defensive: Skip items without a valid title
        if (!item || typeof item.title !== 'string' || item.title.trim() === '') {
          return null;
        }

        let score = 0;
        // Safely normalize title and summary to lowercase strings
        const titleLower = item.title.toLowerCase();
        const summaryLower = typeof item.summary === 'string' ? item.summary.toLowerCase() : '';

        for (const term of terms) {
          // Title matches (higher weight)
          if (titleLower.includes(term)) {
            score += titleLower.startsWith(term) ? 10 : 5;
          }
          // Summary matches
          if (summaryLower.includes(term)) {
            score += 2;
          }
        }

        return { ...item, score };
      })
      .filter(item => item !== null && item.score > 0);

    return scored
      .sort((a, b) => b.score - a.score)
      .slice(0, 10);
  },

  /**
   * Sort items by date (newest first)
   * 
   * @param {Array} items - Array of items with date property
   * @returns {Array} - Sorted array
   */
  sortByDate(items) {
    if (!items || items.length === 0) return [];

    return [...items].sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateB - dateA; // Newest first
    });
  },

  /**
    * Escape HTML to prevent XSS attacks
    * 
    * @param {string|number|boolean} text - Text to escape (handles strings, numbers, booleans, etc.)
    * @returns {string} - Escaped HTML string
    */
   escapeHtml(text) {
     if (text === null || text === undefined) return '';
     const div = document.createElement('div');
     div.textContent = text;
     return div.innerHTML;
   }
};
