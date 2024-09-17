import { User } from '@/app';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';

interface UsersListProps {
	users: User[];
}

export function UsersList({ users }: UsersListProps) {
	return (
		<div className="border border-zinc-700 rounded-lg overflow-hidden">
			<Table className="text-zinc-400">
				<TableHeader className="bg-zinc-800">
					<TableRow className="border-zinc-700 hover:bg-zinc-800">
						<TableHead className="text-zinc-100">ID</TableHead>
						<TableHead className="text-zinc-100">Full name</TableHead>
						<TableHead className="text-zinc-100">E-Mail</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{users.map((user) => (
						<TableRow key={user.id} className="border-zinc-700 hover:bg-zinc-800 hover:text-zinc-100">
							<TableCell>{user.id}</TableCell>
							<TableCell>{user.name}</TableCell>
							<TableCell>{user.email}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);
}
