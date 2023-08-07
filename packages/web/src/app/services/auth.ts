import {z} from "zod";
import jwtDecode from 'jwt-decode'

const decodedGoogleJwtSchema = z.object({
  "iss": z.string(),
  "azp": z.string(),
  "aud": z.string(),
  "sub": z.string(),
  "hd": z.string(),
  "email": z.string(),
  "email_verified": z.boolean(),
  "nbf": z.number(),
  "name": z.string(),
  "picture": z.string(),
  "given_name": z.string(),
  "family_name": z.string(),
  "locale": z.string(),
  "iat": z.number(),
  "exp": z.number(),
  "jti": z.string(),
})

export function decodeJwt(token: string): z.infer<typeof decodedGoogleJwtSchema> {
    const decoded = jwtDecode(token)
    return decodedGoogleJwtSchema.parse(decoded)
}
