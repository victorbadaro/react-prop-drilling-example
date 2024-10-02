import { useState } from 'react';
import { Header } from './components/header';
import { UsersList } from './components/users-list';

export type User = {
	id: number;
	name: string;
	email: string;
}

export type UserToBeAdded = Omit<User, 'id'>;

export function App() {
	const [users, setUsers] = useState<User[]>([]);

	function addUser(userToBeAdded: UserToBeAdded) {
		setUsers((prev) => [...prev, {
			id: users.length + 1,
			name: userToBeAdded.name,
			email: userToBeAdded.email
		}]);
	}

	return (
		<div className="space-y-8 min-h-screen bg-zinc-900 text-zinc-100">
			<Header addUser={addUser} />

			<main className="container mx-auto">
				<div className="flex flex-col gap-4">
					<h1 className="text-2xl font-semibold">Users</h1>

					{users.length > 0 ? (
						<UsersList users={users} />
					) : (
						<div className="flex items-center justify-center h-72 border border-dashed border-zinc-700 rounded-lg">
							<p>Users list is empty.</p>
						</div>
					)}
				</div>
			</main>
		</div>
	);
}
