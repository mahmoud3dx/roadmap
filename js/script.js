// Simplified JavaScript with ES5 syntax for maximum compatibility
window.onload = function() {
    // Filter functionality for roadmap categories
    var filterLinks = document.getElementsByClassName('filter-link');
    var roadmapCards = document.getElementsByClassName('roadmap-card');
    
    for (var i = 0; i < filterLinks.length; i++) {
        filterLinks[i].onclick = function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            for (var j = 0; j < filterLinks.length; j++) {
                filterLinks[j].className = filterLinks[j].className.replace(' active', '');
            }
            
            // Add active class to clicked link
            this.className += ' active';
            
            var filter = this.getAttribute('data-filter');
            
            // Show/hide roadmap cards based on filter
            for (var k = 0; k < roadmapCards.length; k++) {
                if (filter === 'all' || roadmapCards[k].getAttribute('data-category') === filter) {
                    roadmapCards[k].style.display = 'flex';
                } else {
                    roadmapCards[k].style.display = 'none';
                }
            }
        };
    }
    
    // Smooth scrolling alternative (basic version)
    var anchorLinks = document.getElementsByTagName('a');
    for (var i = 0; i < anchorLinks.length; i++) {
        var href = anchorLinks[i].getAttribute('href');
        if (href && href.indexOf('#') === 0 && href !== '#') {
            anchorLinks[i].onclick = function(e) {
                e.preventDefault();
                var targetId = this.getAttribute('href');
                var targetElement = document.getElementById(targetId.substring(1));
                if (targetElement) {
                    window.scrollTo(0, targetElement.offsetTop);
                }
                return false;
            };
        }
    }
    
    // Add print functionality
    var printButton = document.getElementsByClassName('print-button');
    if (printButton.length > 0) {
        for (var i = 0; i < printButton.length; i++) {
            printButton[i].onclick = function(e) {
                e.preventDefault();
                window.print();
                return false;
            };
        }
    }
};
