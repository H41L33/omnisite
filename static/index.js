// Enhanced Interactivity & Persona Theming
(function () {
    'use strict';

    /**
     * Applies a randomized hover effect to specified elements, overriding CSS transforms.
     */
    function initAnimatedElements() {
        const animatedElements = document.querySelectorAll(`
            .fancy-animate, .header-title, .pfp-container, .header nav a, .content-nav_header,
            .footer-links img, .content a, .footer-text a, .collection_entry
        `);

        animatedElements.forEach(el => {
            const baseTransform = el.style.transform; // Store original transform if any
            const translateAmount = el.matches('.content a, .footer-text a') ? '-0.2rem' : '-0.5rem';

            el.addEventListener('mouseenter', () => {
                const rotation = (Math.random() * 8 - 4).toFixed(2);
                el.style.transition = 'all 200ms ease-out';
                el.style.transform = `translate(0, ${translateAmount}) rotate(${rotation}deg)`;
            });

            el.addEventListener('mouseleave', () => {
                el.style.transition = 'all 200ms ease-in';
                el.style.transform = baseTransform; // Reset to original state
            });
        });
    }

    // Initialize the animated elements when the DOM is ready
    document.addEventListener('DOMContentLoaded', initAnimatedElements);
})();
