/**
 * SENA Include System
 * Loads header and footer dynamically into pages
 */

(function() {
    'use strict';

    // Detect if we're in pages folder or root
    var isInPages = window.location.pathname.includes('/pages/');

    // Set base paths
    var basePath = isInPages ? '../' : '';
    var assetsPath = basePath + 'assets/';
    var uploadsPath = basePath + 'uploads/';
    var pagesPath = isInPages ? '' : 'pages/';
    var includesPath = basePath + 'includes/';

    /**
     * Replace path placeholders in HTML content
     */
    function replacePaths(html) {
        return html
            .replace(/\{\{BASE_PATH\}\}/g, basePath)
            .replace(/\{\{ASSETS_PATH\}\}/g, assetsPath)
            .replace(/\{\{UPLOADS_PATH\}\}/g, uploadsPath)
            .replace(/\{\{PAGES_PATH\}\}/g, pagesPath)
            .replace(/\{\{INCLUDES_PATH\}\}/g, includesPath);
    }

    /**
     * Load HTML file and insert into target element
     */
    function loadInclude(file, targetId, callback) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', includesPath + file, true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    var content = replacePaths(xhr.responseText);
                    var target = document.getElementById(targetId);
                    if (target) {
                        target.innerHTML = content;
                    }
                    if (callback) callback();
                } else {
                    console.error('Failed to load ' + file);
                }
            }
        };
        xhr.send();
    }

    /**
     * Initialize includes when DOM is ready
     */
    function init() {
        // Load header
        loadInclude('header.html', 'header-placeholder', function() {
            console.log('Header loaded');
        });

        // Load footer
        loadInclude('footer.html', 'footer-placeholder', function() {
            console.log('Footer loaded');
        });
    }

    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
