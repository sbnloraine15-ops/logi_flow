import { GetDriver } from "../../aplication/usecases/get-drive.js";

export class GetDriverDto implements GetDriver.Input{
    id: string;
}