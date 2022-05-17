"use strict";
exports.__esModule = true;
var express_1 = require("express");
var Shows_Module_1 = require("../modules/ShowsModule/Shows.Module");
var mainRouter = (0, express_1.Router)();
var showsModule = new Shows_Module_1["default"]();
mainRouter.get('/', function (req, res) { return showsModule.getShows(req, res); });
mainRouter.post('/', function (req, res) { return showsModule.createShow(req, res); });
exports["default"] = mainRouter;
