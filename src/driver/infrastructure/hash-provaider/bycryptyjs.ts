import { compare, hash } from "bcryptjs";
import { HashProvider } from "../../../shared/aplication/providers/hash-provider.js";

export class Bcryptjs implements HashProvider{
    async generateHash(payload: string): Promise<string> {
        return hash(payload, 8);
    }
    compareHash(payload: string, hash: string): Promise<boolean> {
        return compare(payload, hash)
    }
    
}