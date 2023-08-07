import {z} from "zod";

import {getConnectionQueryParamsSchema} from "../shared";

export const programSchema = z.object({
  id: z.string(),
  programId: z.string(),
})

export type Program = z.infer<typeof programSchema>
export const programConnectionQueryParamSchema = getConnectionQueryParamsSchema()
  .optional()
git remote add origin git@github.com:quirkles/nx-poc.git
