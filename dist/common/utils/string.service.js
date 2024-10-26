"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringService = void 0;
const common_1 = require("@nestjs/common");
let StringService = class StringService {
    random(length) {
        const chars = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890";
        const charsLength = chars.length;
        const randomArray = Array.from({ length }, () => chars[Math.floor(Math.random() * charsLength)]);
        const randomString = randomArray.join("");
        return randomString;
    }
    slug(value) {
        if (!value)
            return undefined;
        value = value.trim().toLowerCase();
        value = value.replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, "a");
        value = value.replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, "e");
        value = value.replace(/i|í|ì|ỉ|ĩ|ị/gi, "i");
        value = value.replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, "o");
        value = value.replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, "u");
        value = value.replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, "y");
        value = value.replace(/đ/gi, "d");
        value = value.replace(/\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/gi, "");
        return value.replace(/\s+/g, "-");
    }
};
exports.StringService = StringService;
exports.StringService = StringService = __decorate([
    (0, common_1.Injectable)()
], StringService);
//# sourceMappingURL=string.service.js.map