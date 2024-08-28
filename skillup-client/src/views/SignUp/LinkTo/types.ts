export type Props = {
	to?: string;
	icon?: Icon;
	children?: React.ReactNode;
	target?: string;
	rel?: string;
	onClick?: () => void;
};

type Icon = {
	name: string;
	logo: string;
	url: string;
};
