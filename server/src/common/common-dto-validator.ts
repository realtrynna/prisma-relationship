import { applyDecorators } from '@nestjs/common';
import Validator from 'class-validator';

export { ApiHeader, ApiProperty } from '@nestjs/swagger';

export namespace Assert {
    export function IsOptional() {
        return applyDecorators(Validator.IsOptional());
    }

    export function IsNotEmpty(message?: string) {
        if (!message) message = 'Please enter the content.';

        return applyDecorators(
            Validator.IsNotEmpty({
                message,
            }),
        );
    }

    export function IsString() {
        return applyDecorators(
            Validator.IsString({
                message: 'Data must be a string.',
            }),
        );
    }

    export function IsNumber() {
        return applyDecorators(
            Validator.IsNumber(
                {
                    allowNaN: false,
                    allowInfinity: false,
                    maxDecimalPlaces: 2,
                },
                {
                    message: 'Data must be a number',
                },
            ),
        );
    }

    export function IsEmail() {
        return applyDecorators(
            Validator.IsEmail(
                {
                    host_blacklist: ['@gmail.com'],
                },
                {
                    message:
                        'Gmail is not available and please check if the email format is correct.',
                },
            ),
        );
    }

    export function MinLength(min: number) {
        return applyDecorators(
            Validator.MinLength(min, {
                message: `Data must be entered at least ${min}`,
            }),
        );
    }

    export function MaxLength(max: number) {
        return applyDecorators(
            Validator.MaxLength(max, {
                message: `Data can be up to ${max}`,
            }),
        );
    }

    export function Matches(reg: RegExp) {}
}
