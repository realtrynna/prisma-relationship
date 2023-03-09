import { Transform } from 'class-transformer';
import {
    ApiHeader,
    ApiProperty,
    Assert,
} from '../../../common/validators/common-dto-validator';

@ApiHeader({ name: '회원가입 데이터' })
export class CreateUserDto {
    @Transform(({ value }) => value.trim())
    @ApiProperty({
        example: 'admin@admin.com',
        type: String,
        description: '이메일',
    })
    @Assert.IsNotEmpty()
    @Assert.IsEmail()
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
    @Assert.IsNotEmpty()
    password: string;

    constructor() {}
}
