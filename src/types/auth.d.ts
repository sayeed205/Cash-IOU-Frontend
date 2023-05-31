export interface loginErrRes {
    error: string;
    message: string;
    statusCode: number;
}

export interface loginRes {
    ok: boolean;
    data: {
        token: string;
    };
}
