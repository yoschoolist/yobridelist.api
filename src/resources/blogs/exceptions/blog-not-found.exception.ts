import { NotFoundException } from "@nestjs/common";

export class BlogNotFoundException extends NotFoundException {
    constructor() {
        super(`Blog was not found.`);
    }
}
