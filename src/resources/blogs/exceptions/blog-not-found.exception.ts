import { NotFoundException } from "@nestjs/common";

export class BlogNotFoundException extends NotFoundException {
    constructor() {
        super(`Blog was not found.`);
    }
}


export class BlogCategoryNotFoundException extends NotFoundException {
    constructor() {
        super(`Blog Category was not found.`);
    }
}

export class BlogTagNotFoundException extends NotFoundException {
    constructor() {
        super(`Blog Tag was not found.`);
    }
}
