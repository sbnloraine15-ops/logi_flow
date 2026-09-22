import { createParamDecorator, ExecutionContext } from "@nestjs/common";

export const Decorator = createParamDecorator((data: unknown, cx: ExecutionContext): string =>{
    const request = cx.switchToHttp().getRequest()
    return request.driverId
}) 