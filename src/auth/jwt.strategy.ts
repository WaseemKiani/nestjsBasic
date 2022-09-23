import { PassportStrategy } from '@nestjs/passport';
import {Strategy ,  ExtractJwt} from 'passport-jwt'

export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: "SECRET"
        })
    }
    async validate(payload: any){
        console.log("first JWT")
        return {
            id: payload.id,
            email: payload.email,
            name: payload.name
        }
    }
}