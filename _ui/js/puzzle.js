app.Puzzle = (function(window) {
    const hasTouch = 'ontouchstart' in window,
        endEvent = hasTouch ? 'touchend' : 'mouseup';

    const Puzzle = function (options) {
        this.board = new app.Board({
            cssClass: 'board',
            id: 'board',
            image: options.image,
            timerWidth: 100,
            timerHeight: 100,
        });

        // Add board and timer to wrapper
        const wrapper = document.querySelector(options.wrapper);
        wrapper.style.position = 'relative';
        wrapper.appendChild(this.board.element);
        app.utils.event.fire('board:appended');
        this.initEvents();
    };
    
    Puzzle.prototype.initEvents = function() {
        const that = this;
        // document.getElementById('shuffle').addEventListener(endEvent, function() {
        //     that.board.shuffle();
        // }, false);

        that.board.shuffle();

        window.setTimeout(function() {
            document.querySelector('#timer-wrapper').remove();  // Remove timer.
            that.board.element.firstChild.remove();  // Remove image mask.
        }, 3000);
    };

    return Puzzle;
})(window);