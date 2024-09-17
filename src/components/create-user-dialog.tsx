import { UserToBeUpdated } from '@/app';
import { FormEvent, useState } from 'react';
import { Button } from './ui/button';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Input } from './ui/input';
import { Label } from './ui/label';

interface CreateUserDialogProps {
	addUser: (user: UserToBeUpdated) => void;
}

export function CreateUserDialog({ addUser }: CreateUserDialogProps) {
	const [isOpen, setIsOpen] = useState(false);

	function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();

		const form = event.currentTarget;
		const formData = new FormData(form);
		const name = formData.get('name')?.toString();
		const email = formData.get('email')?.toString();

		if (!name || !email) {
			return;
		}

		addUser({ name, email });

		form.reset();
		setIsOpen(false);
	}

	return (
		<Dialog open={isOpen} onOpenChange={setIsOpen}>
			<DialogTrigger asChild>
				<Button type="button">New user</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Create user</DialogTitle>
					<DialogDescription>Create a new user here. Click save when you're done. The new user will be added in users list.</DialogDescription>
				</DialogHeader>

				<form id="create-user-form" onSubmit={handleFormSubmit} className="flex flex-col gap-y-4">
					<div className="grid grid-cols-4 gap-3 items-center">
						<Label htmlFor="name" className="text-right">Name</Label>
						<Input name="name" id="name" className="col-span-3" />
					</div>

					<div className="grid grid-cols-4 gap-3 items-center">
						<Label htmlFor="email" className="text-right">E-Mail</Label>
						<Input type="email" name="email" id="email" className="col-span-3" />
					</div>
				</form>

				<DialogFooter>
					<DialogClose asChild>
						<Button type="reset" form="create-user-form" variant="secondary">Close</Button>
					</DialogClose>

					<Button type="submit" form="create-user-form">Save</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
