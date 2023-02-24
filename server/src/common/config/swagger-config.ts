import { UserController } from "../../controllers/user/user.controller";

export type TApiOperation = {
    summary: string;
    description: string;
}

export type TApiSuccessResponse = {
    operation: TApiOperation,
    description: string;
    auth: boolean;
    requestBody?: any;
    type?: any;
    schema?: any;
}

export type TMethodMapping = ["GET", "POST", "DELETE", "PUT", "PATCH"];
