import { useState } from 'react';
import { Header } from './components/header';

type User = {
	id: number;
	name: string;
	email: string;
}

export type UserToBeUpdated = Omit<User, 'id'>;

export function App() {
	const [users, setUsers] = useState<User[]>([]);

	function addUser(user: UserToBeUpdated) {
		setUsers((prev) => [...prev, {
			id: users.length + 1,
			name: user.name,
			email: user.email
		}]);
	}

	return (
		<div className="space-y-8 min-h-screen bg-zinc-900 text-zinc-100">
			<Header addUser={addUser} />
		</div>
	);
}
