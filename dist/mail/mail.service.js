"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailService = void 0;
const common_1 = require("@nestjs/common");
const fs = require("fs");
const ejs = require("ejs");
const juice = require("juice");
const nodemailer = require("nodemailer");
let MailService = class MailService {
    async sendEmail({ to, subject, templateName, templateVars, }) {
        const templatePath = `src/mail/templates/${templateName}.html`;
        const options = {
            from: process.env.EMAIL,
            to,
            subject,
        };
        if (templateName && fs.existsSync(templatePath)) {
            const template = fs.readFileSync(templatePath, "utf-8");
            const html = ejs.render(template, templateVars);
            const htmlWithStylesInlined = juice(html);
            options.html = htmlWithStylesInlined;
        }
        this.smtp = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: +process.env.EMAIL_PORT,
            secure: false,
            auth: {
                user: process.env.EMAIL,
                pass: process.env.EMAIL_PASSWORD,
            },
        });
        return await this.smtp.sendMail(options).catch(() => null);
    }
};
exports.MailService = MailService;
exports.MailService = MailService = __decorate([
    (0, common_1.Injectable)()
], MailService);
//# sourceMappingURL=mail.service.js.map