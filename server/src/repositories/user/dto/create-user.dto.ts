import {
    ApiHeader,
    ApiProperty,
    Assert,
} from '../../../common/validators/common-dto-validator';

import { IsEmail } from "class-validator";

@ApiHeader({ name: '사용자 가입 데이터' })
export class CreateUserDto {
    @ApiProperty({
        example: 'admin@admin.com',
        type: String,
        description: '이메일',
    })
    // @Assert.IsNotEmpty()
    // @Assert.IsEmail()
    @IsEmail()
    email: string;

    @ApiProperty({
        example: '윤승근',
        type: String,
        description: '이름',
    })
    @Assert.IsNotEmpty()
    @Assert.IsString()
    @Assert.MinLength(2)
    @Assert.MaxLength(6)
    name: string;

    /**
     * @todo: 정규표현식(Matches) 사용
     */
    @ApiProperty({
        example: 'admin1@',
        type: String,
        description: '비밀번호',
    })
    password: string;
}
