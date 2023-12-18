var Mediator = (function() {
    function loadPage(page) {
        window.location.href = page;
    }

    return {
        loadPage: loadPage
    };
})();
