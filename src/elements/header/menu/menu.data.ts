interface MenuItem {
	id: number;
	url: string;
    text: string;
}

export const MENU: MenuItem[] = [
	{
        id: 1,
		url: '/example1',
        text: 'Для бизнеса',
	},
	{
        id: 2,
		url: '/example2',
        text: 'Карьера в Kangaroo',
	},
	{
        id: 3,
		url: '/example3',
        text: 'Помощь',
	},
]
