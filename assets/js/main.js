/**
 * Hugo FortyTen Theme - Main JavaScript
 * 
 * Includes:
 * - Site search functionality with modal UI
 */

(function() {
  'use strict';

  // ============================================
  // Search Functionality
  // ============================================

  const Search = {
    // State
    searchIndex: null,
    isLoading: false,
    selectedIndex: -1,
    
    // DOM Elements (cached after init)
    elements: {},

    /**
     * Initialize search functionality
     */
    init() {
      this.cacheElements();
      if (!this.elements.dialog) return; // Search not enabled
      
      this.bindEvents();
    },

    /**
     * Cache DOM elements for performance
     */
     cacheElements() {
       this.elements = {
         button: document.getElementById('search-button') || document.getElementById('search-button-desktop'),
         dialog: document.getElementById('search-modal'),
         input: document.getElementById('search-input'),
         closeBtn: document.getElementById('search-close'),
         results: document.getElementById('search-results'),
         noResults: document.getElementById('search-no-results'),
         loading: document.getElementById('search-loading')
       };
     },

    /**
     * Bind event listeners
     */
    bindEvents() {
      const { button, dialog, input, closeBtn } = this.elements;

      // Open modal
      if (button) {
        button.addEventListener('click', () => this.open());
      }

      // Close modal via X button
      if (closeBtn) {
        closeBtn.addEventListener('click', () => this.close());
      }

      // Close modal when clicking backdrop (outside dialog content)
      if (dialog) {
        dialog.addEventListener('click', (e) => {
          if (e.target === dialog) {
            this.close();
          }
        });

        // Handle close event (triggered by ESC key or close() method)
        dialog.addEventListener('close', () => {
          this.onClose();
        });
      }

      // Keyboard shortcut: Ctrl/Cmd + K to open
      document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
          e.preventDefault();
          this.toggle();
        }
      });
      
      // Search input events
      if (input) {
        input.addEventListener('input', (e) => this.handleSearch(e.target.value));
        input.addEventListener('keydown', (e) => this.handleInputKeydown(e));
      }
    },

    /**
     * Handle keyboard navigation in search input
     */
    handleInputKeydown(e) {
      const items = this.elements.results.querySelectorAll('[role="option"]');
      const count = items.length;

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          this.selectedIndex = Math.min(this.selectedIndex + 1, count - 1);
          this.updateSelection(items);
          break;

        case 'ArrowUp':
          e.preventDefault();
          this.selectedIndex = Math.max(this.selectedIndex - 1, -1);
          this.updateSelection(items);
          break;

        case 'Enter':
          e.preventDefault();
          if (this.selectedIndex >= 0 && items[this.selectedIndex]) {
            const link = items[this.selectedIndex].querySelector('a');
            if (link) {
              window.location.href = link.href;
            }
          }
          break;
      }
    },

    /**
     * Update visual selection state
     */
    updateSelection(items) {
      items.forEach((item, index) => {
        if (index === this.selectedIndex) {
          item.classList.add('bg-sky-50');
          item.setAttribute('aria-selected', 'true');
          item.scrollIntoView({ block: 'nearest' });
        } else {
          item.classList.remove('bg-sky-50');
          item.setAttribute('aria-selected', 'false');
        }
      });
    },

    /**
     * Check if dialog is open
     */
    isOpen() {
      return this.elements.dialog?.open;
    },

    /**
     * Toggle dialog visibility
     */
    toggle() {
      if (this.isOpen()) {
        this.close();
      } else {
        this.open();
      }
    },

    /**
     * Open search dialog
     */
    async open() {
      const { dialog, input } = this.elements;
      if (!dialog) return;

      // Show modal dialog (handles backdrop, focus trap, ESC key)
      dialog.showModal();

      // Focus input
      if (input) {
        input.focus();
        input.select();
      }

      // Load search index if not already loaded
      if (!this.searchIndex) {
        await this.loadSearchIndex();
      }

      // Show initial results (recent posts)
      this.showInitialResults();
    },

    /**
     * Close search dialog
     */
    close() {
      const { dialog } = this.elements;
      if (!dialog) return;

      dialog.close();
    },

    /**
     * Handle dialog close event (cleanup)
     */
    onClose() {
      const { input } = this.elements;
      
      // Clear input and reset state
      if (input) {
        input.value = '';
      }
      this.selectedIndex = -1;
    },

    /**
     * Load search index from JSON
     */
    async loadSearchIndex() {
      if (this.isLoading) return;
      
      this.isLoading = true;
      this.showLoading(true);

      try {
        const response = await fetch('/index.json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        this.searchIndex = await response.json();
      } catch (error) {
        console.error('Failed to load search index:', error);
        this.searchIndex = [];
      } finally {
        this.isLoading = false;
        this.showLoading(false);
      }
    },

    /**
     * Show/hide loading state
     */
    showLoading(show) {
      const { loading, results, noResults } = this.elements;
      if (loading) {
        loading.classList.toggle('hidden', !show);
      }
      if (results) {
        results.classList.toggle('hidden', show);
      }
      if (noResults) {
        noResults.classList.add('hidden');
      }
    },

    /**
     * Show initial results (most recent posts)
     */
    showInitialResults() {
      if (!this.searchIndex || this.searchIndex.length === 0) {
        this.renderResults([]);
        return;
      }

      // Sort by date (newest first) and take top 10
      const recent = [...this.searchIndex]
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 10);

      this.renderResults(recent, true);
    },

    /**
     * Handle search input
     */
    handleSearch(query) {
      this.selectedIndex = -1;
      
      if (!query.trim()) {
        this.showInitialResults();
        return;
      }

      if (!this.searchIndex) {
        return;
      }

      const results = this.search(query);
      this.renderResults(results);
    },

    /**
     * Perform search on index
     */
    search(query) {
      const terms = query.toLowerCase().trim().split(/\s+/);
      
      const scored = this.searchIndex.map(item => {
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
     * Render search results
     */
    renderResults(results, isInitial = false) {
      const { results: resultsList, noResults } = this.elements;
      
      if (!resultsList) return;

      // Clear existing results
      resultsList.innerHTML = '';

      if (results.length === 0) {
        noResults?.classList.remove('hidden');
        return;
      }

      noResults?.classList.add('hidden');

      // Add header for initial results
      if (isInitial) {
        const header = document.createElement('li');
        header.className = 'px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider';
        header.textContent = 'Recent';
        resultsList.appendChild(header);
      }

      // Render each result
      results.forEach((item, index) => {
        const li = document.createElement('li');
        li.setAttribute('role', 'option');
        li.setAttribute('aria-selected', 'false');
        li.className = 'rounded-lg hover:bg-sky-50 transition-colors';
        
        li.innerHTML = `
          <a href="${this.escapeHtml(item.url)}" class="block px-3 py-3">
            <div class="flex items-start gap-3">
              <ion-icon name="document-text-outline" class="text-gray-400 text-lg mt-0.5 flex-shrink-0" aria-hidden="true"></ion-icon>
              <div class="min-w-0 flex-1">
                <p class="text-sm font-medium text-gray-900 truncate">${this.escapeHtml(item.title)}</p>
                ${item.summary ? `<p class="text-sm text-gray-500 line-clamp-2 mt-0.5">${this.escapeHtml(item.summary)}</p>` : ''}
              </div>
            </div>
          </a>
        `;
        
        resultsList.appendChild(li);
      });
    },

    /**
     * Escape HTML to prevent XSS
     */
    escapeHtml(text) {
      if (!text) return '';
      const div = document.createElement('div');
      div.textContent = text;
      return div.innerHTML;
    }
  };

  // ============================================
  // Mobile Menu Functionality
  // ============================================

  const MobileMenu = {
    // State
    isOpen: false,
    
    // DOM Elements (cached after init)
    elements: {},

    /**
     * Initialize mobile menu functionality
     */
    init() {
      this.cacheElements();
      if (!this.elements.toggle) return; // Mobile menu not in DOM
      
      this.bindEvents();
    },

    /**
     * Cache DOM elements for performance
     */
    cacheElements() {
      this.elements = {
        toggle: document.getElementById('mobile-menu-toggle'),
        panel: document.getElementById('mobile-menu-panel'),
        overlay: document.getElementById('mobile-menu-overlay'),
        closeBtn: document.getElementById('mobile-menu-close'),
        body: document.body
      };
    },

    /**
     * Bind event listeners
     */
    bindEvents() {
      const { toggle, overlay, closeBtn } = this.elements;

      // Open on hamburger click
      if (toggle) {
        toggle.addEventListener('click', () => this.open());
      }

      // Close on X button
      if (closeBtn) {
        closeBtn.addEventListener('click', () => this.close());
      }

      // Close on overlay click
      if (overlay) {
        overlay.addEventListener('click', () => this.close());
      }

      // Close on ESC key
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && this.isOpen) {
          this.close();
        }
      });

      // Close on window resize to desktop (lg breakpoint = 1024px)
      window.addEventListener('resize', () => {
        if (window.innerWidth >= 1024 && this.isOpen) {
          this.close();
        }
      });

      // Close on link click inside mobile menu
      const menuLinks = this.elements.panel?.querySelectorAll('a');
      if (menuLinks) {
        menuLinks.forEach(link => {
          link.addEventListener('click', () => this.close());
        });
      }
    },

    /**
     * Open mobile menu
     */
    open() {
      const { panel, overlay, toggle, body } = this.elements;
      
      if (!panel || !overlay) return;

      // Show panel with slide-in animation
      panel.classList.remove('-translate-x-full');
      panel.setAttribute('aria-hidden', 'false');

      // Show overlay
      overlay.classList.remove('hidden');

      // Prevent body scroll
      body.classList.add('overflow-hidden');

      // Update toggle button state
      if (toggle) {
        toggle.setAttribute('aria-expanded', 'true');
        toggle.setAttribute('aria-pressed', 'true');
      }

      this.isOpen = true;

      // Focus the close button for accessibility
      document.getElementById('mobile-menu-close')?.focus();
    },

    /**
     * Close mobile menu
     */
    close() {
      const { panel, overlay, toggle, body } = this.elements;
      
      if (!panel || !overlay) return;

      // Hide panel with slide-out animation
      panel.classList.add('-translate-x-full');
      panel.setAttribute('aria-hidden', 'true');

      // Hide overlay
      overlay.classList.add('hidden');

      // Restore body scroll
      body.classList.remove('overflow-hidden');

      // Update toggle button state
      if (toggle) {
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-pressed', 'false');
        toggle.focus();
      }

      this.isOpen = false;
    }
  };

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      Search.init();
      MobileMenu.init();
    });
  } else {
    Search.init();
    MobileMenu.init();
  }

})();
