import {IsEmail, IsString,IsNotEmpty, IsStrongPassword, Matches, Length, MinLength, MaxLength, IsUrl} from 'class-validator'
export class AdminDTO{
    @IsString()
    @IsNotEmpty({message:"Name Cannot be Empty"})
    @Matches(/^[A-Za-z]+$/, { message: 'Enter a Proper Name!' })
    @Length(50)
    @MinLength(10)
    @MaxLength(50)
    // @IsUrl(undefined,{message:"Invalid Url"})
    // @Matches(/^localhost:3000\/admin\/addadmin$/, { message: 'Invalid URL' })
    name:string;
    
    @IsEmail({},{message:"Invalid Email"}) 
    @IsNotEmpty()
    email:string;

    @IsNotEmpty()
    @IsStrongPassword()
    Password:string;
    
}