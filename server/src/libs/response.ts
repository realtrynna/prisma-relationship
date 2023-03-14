import { HttpException, Injectable } from '@nestjs/common';

export interface IResponse {
    message: string;
    statusCode: number;
    error?: string;
}

export interface IResponseData {
    result: string;
    message: string;
    statusCode: number;
    data: any;
}

export type TFailedResponse = IResponse;

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace ResponseUtil {
    export function succeededWrap<T extends IResponse>(
        message: T,
        data: any,
    ): IResponseData {
        return {
            ...message,
            message: message.message,
            result: 'success',
            data,
        };
    }

    export function failedWrap<T extends IResponse>(message: T) {
        return {
            ...message,
            statusCode: message.statusCode,
        };
    }
}
