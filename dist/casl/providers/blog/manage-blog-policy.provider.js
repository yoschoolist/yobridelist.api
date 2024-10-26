"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManageBlogTagPolicyProvider = exports.ManageBlogCategoryPolicyProvider = exports.ManageBlogPolicyProvider = void 0;
const manage_blog_policy_handler_1 = require("../../policies/blogs/manage-blog-policy.handler");
exports.ManageBlogPolicyProvider = manage_blog_policy_handler_1.ManageBlogHandler;
exports.ManageBlogCategoryPolicyProvider = manage_blog_policy_handler_1.ManageBlogCategoryHandler;
exports.ManageBlogTagPolicyProvider = manage_blog_policy_handler_1.ManageBlogTagHandler;
//# sourceMappingURL=manage-blog-policy.provider.js.map