export type NavType = {
	label: string;
	href: string;
};

export type NavSub = {
	title: string;
	href: string;
	description?: string;
	types?: NavType[];
};

export type NavMain = {
	label: string;
	href: string;
	description?: string;
	featured?: {
		title: string;
		description?: string;
		href: string;
		image?: string;
	};
	sub: NavSub[];
};

export type NavConfig = NavMain[]; 