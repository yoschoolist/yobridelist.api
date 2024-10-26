import { Provider } from "@nestjs/common";
import { ManageBlogHandler, ManageBlogCategoryHandler, ManageBlogTagHandler } from "src/casl/policies/blogs/manage-blog-policy.handler";

export const ManageBlogPolicyProvider: Provider = ManageBlogHandler;
export const ManageBlogCategoryPolicyProvider: Provider = ManageBlogCategoryHandler;
export const ManageBlogTagPolicyProvider: Provider = ManageBlogTagHandler;