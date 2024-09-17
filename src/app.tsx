import { useState } from 'react';
import { Header } from './components/header';
import { UsersList } from './components/users-list';

export type User = {
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

			<main className="container mx-auto">
				<div className="flex flex-col gap-4">
					<h1 className="text-2xl font-semibold">Users</h1>
					<UsersList users={users} />
				</div>
			</main>
		</div>
	);
}
