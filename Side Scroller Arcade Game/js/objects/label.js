﻿var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/// <reference path="../constants.ts" />
/**
File Name: label.ts
Author: Blake Murdock
Website Name: Label object class for Star Savior Side-Scrolling Arcade Game
Purpose: This file contains all details to initalize a Label object
*/
var objects;
(function (objects) {
    var Label = (function (_super) {
        __extends(Label, _super);
        function Label(x, y, labelText) {
            _super.call(this, labelText, constants.LABEL_FONT, constants.LABEL_COLOUR);
            this.regX = this.getBounds().width / 2;
            this.regY = this.getBounds().height / 2;
            this.x = x;
            this.y = y;
        }
        return Label;
    })(createjs.Text);
    objects.Label = Label;
})(objects || (objects = {}));
//# sourceMappingURL=label.js.map
