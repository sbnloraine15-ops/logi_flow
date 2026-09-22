import { createParamDecorator, ExecutionContext } from "@nestjs/common";

export const DecoratorDriver = createParamDecorator((data: unknown, cx: ExecutionContext): string =>{
    const request = cx.switchToHttp().getRequest()
    return request.body.driverId
}) 