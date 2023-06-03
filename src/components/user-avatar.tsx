import CurrentUser from '@/types/current-user';
import { AvatarProps } from '@radix-ui/react-avatar';
import { Icons } from './icons';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

interface UserAvatarProps extends AvatarProps {
    user: Pick<CurrentUser, 'name' | 'image'>;
}

export function UserAvatar({ user, ...props }: UserAvatarProps) {
    return (
        <Avatar {...props}>
            {user.image ? (
                <AvatarImage alt="Picture" src={user.image} />
            ) : (
                <AvatarFallback>
                    <span className="sr-only">{user.name}</span>
                    <Icons.user className="w-4 h-4" />
                </AvatarFallback>
            )}
        </Avatar>
    );
}
