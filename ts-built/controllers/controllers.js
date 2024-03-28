"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = void 0;
const command_controller_1 = require("./command-controller");
const hear_controller_1 = require("./hear-controller");
var Controller;
(function (Controller) {
    class Command extends command_controller_1.CommandsController {
    }
    Controller.Command = Command;
    class Hear extends hear_controller_1.HearController {
    }
    Controller.Hear = Hear;
})(Controller || (exports.Controller = Controller = {}));
exports.default = {
    Controller
};
