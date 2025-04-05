export type ApiResponse<T,Response> = {
    res: Response
    statusCode: number
    message: string
    data?: T
}