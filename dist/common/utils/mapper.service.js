"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapperService = void 0;
class MapperService {
    static mapBool(value) {
        switch (value) {
            case "true":
                return true;
            case "false":
                return false;
            case undefined:
                return undefined;
            default:
                return value;
        }
    }
    static mapArray(value, convert = (item) => item) {
        if (Array.isArray(value)) {
            return value.map((item) => convert(item));
        }
        if (value) {
            if (value.includes(","))
                return value.split(",").map((item) => convert(item.trim()));
            return [convert(value)];
        }
        if (value === null) {
            return null;
        }
        return undefined;
    }
}
exports.MapperService = MapperService;
//# sourceMappingURL=mapper.service.js.map