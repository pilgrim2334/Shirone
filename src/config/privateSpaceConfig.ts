import type { PrivateSpaceConfig } from "../types/privateSpaceConfig.ts";

/**
 * 私人空间配置。
 * 私人文章放在 src/content/private/，不会进入公开文章集合、归档、搜索或订阅源。
 * 更换访问密码后需重新构建部署，旧的构建产物不会自动更新。
 */
export const privateSpaceConfig: PrivateSpaceConfig = {
	enable: true,
	title: "私人空间",
	description:
		"仅向我允许的访客开放。输入访问密码后，可查看这里的全部私人文章。",
	password: "SZ-vault-7Q4m-N9x2",
	passwordHint: "请向霜折获取访问密码",
};
