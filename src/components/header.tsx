import { Button } from './ui/button';

export function Header() {
	return (
		<header className="flex items-center h-20 bg-zinc-950 text-zinc-100">
			<nav className="flex justify-between items-center container mx-auto">
				<span className="text-2xl">React Prop Drilling Example</span>

				<Button type="button">New user</Button>
			</nav>
		</header>
	);
}
