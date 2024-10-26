"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeletePlaylistHandler = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const ability_1 = require("@casl/ability");
const casl_enum_1 = require("../../enums/casl.enum");
let DeletePlaylistHandler = class DeletePlaylistHandler {
    constructor(request) {
        this.request = request;
    }
    handle(ability) {
        if (!this.request["playlist"])
            return false;
        return ability.can(casl_enum_1.Action.Delete, (0, ability_1.subject)("Playlist", this.request["playlist"]));
    }
};
exports.DeletePlaylistHandler = DeletePlaylistHandler;
exports.DeletePlaylistHandler = DeletePlaylistHandler = __decorate([
    __param(0, (0, common_1.Inject)(core_1.REQUEST)),
    __metadata("design:paramtypes", [Object])
], DeletePlaylistHandler);
//# sourceMappingURL=delete-playlist-policy.handler.js.map