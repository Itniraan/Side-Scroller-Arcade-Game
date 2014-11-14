/**
File Name: constants.ts
Author: Blake Murdock
Website Name: Constants class for Star Savior Side-Scrolling Arcade Game
Purpose: This file contains all constant variables that will be used in the game
*/
var constants;
(function (constants) {
    // State Machine Constants
    constants.MENU_STATE = 0;
    constants.PLAY_STATE = 1;
    constants.GAME_OVER_STATE = 2;

    // Game Constants
    constants.ENEMY_NUM = 3;
    constants.LABEL_FONT = "30px Consolas";
    constants.LABEL_COLOUR = "#FFFFFF";
    constants.PLAYER_LIVES = 3;
    constants.BULLET_SPEED = 5;
})(constants || (constants = {}));
//# sourceMappingURL=constants.js.map
