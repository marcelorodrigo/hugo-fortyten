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
   * @param {Array} items - Array of items to search (must have title, summary properties)
   * @returns {Array} - Filtered and sorted array of items (top 10)
   */
  fuzzySearch(query, items) {
    if (!query || !items || items.length === 0) return [];

    const terms = query.toLowerCase().trim().split(/\s+/);

    const scored = items.map(item => {
      let score = 0;
      const titleLower = item.title.toLowerCase();
      const summaryLower = (item.summary || '').toLowerCase();

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
    });

    return scored
      .filter(item => item.score > 0)
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
