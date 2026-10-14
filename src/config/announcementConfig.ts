import type { AnnouncementConfig } from "@/types/announcementConfig";
import { withUserConfig } from "../utils/config-overlay.ts";

/**
 * 公告栏配置。
 * 组件显示由 sidebarConfig 统一控制。
 */
export const announcementConfig: AnnouncementConfig = withUserConfig(
	"announcement",
	{
		title: "公告",
		content: "欢迎来到我的博客。这里记录一些学习与生活。",
		closable: true,
		closeDuration: 86400,
		link: {
			enable: true,
			text: "关于我",
			url: "/about/",
			external: false,
		},
	},
);
