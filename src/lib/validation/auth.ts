import { IsNotEmpty, IsPhoneNumber, IsStrongPassword } from 'class-validator';
import { Match } from '../decorators/match.decorator';

export class LoginSchema {
    @IsPhoneNumber()
    phone: string;

    @IsStrongPassword()
    password: string;
}

export class SignupSchema {
    @IsPhoneNumber()
    @IsNotEmpty()
    phone: string;

    @IsStrongPassword()
    @IsNotEmpty()
    password: string;

    @IsStrongPassword()
    @IsNotEmpty()
    @Match(SignupSchema, (o) => o.password)
    confirmPassword: string;

    @IsNotEmpty()
    name: string;
}
