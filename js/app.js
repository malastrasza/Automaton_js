document.addEventListener("DOMContentLoaded", function () {
    function GameOfLife(width, height) {
        this.boardWidth = width;
        this.boardHeight = height;
    }

    const game = new GameOfLife(10, 10);

    console.log(game);



});