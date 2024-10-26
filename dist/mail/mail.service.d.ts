export declare class MailService {
    private smtp;
    sendEmail({ to, subject, templateName, templateVars, }: {
        to: string;
        subject: string;
        templateName?: string;
        templateVars: any;
    }): Promise<any>;
}
