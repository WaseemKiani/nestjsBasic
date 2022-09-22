import {IsString,

    IsEmail,

    IsOptional,

    IsNotEmpty,

    IsNumber,

    IsArray,

    IsPhoneNumber,

    IsDate} from "class-validator";


export class CreateUserDto {
    id: string;
    name: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;
    
    password: string;
    role: string;
    createdAt: Date;
}