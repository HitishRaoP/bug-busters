import { type Response } from 'express';
import { type ApiResponse } from '@bug-busters/types/Api';

export const sendResponse = <T>({
    res,
    statusCode,
    message,
    data,
}: ApiResponse<T, Response>) => {
    res.status(statusCode).json({ message, data });
};