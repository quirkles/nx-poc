import {z, ZodSchema} from 'zod'

type Edge<T> = {
  node: T
  cursor: string
}

function getEdgeSchema<T>(entitySchema: ZodSchema<T>) {
  return z.object({
    node: entitySchema,
    cursor: z.string()
  })
}

export type Connection<T> = {
  total: number
  edges: Edge<T>[]
  pageInfo: {
    endCursor: string | null
    hasNextPage: boolean
  }
}

export function getConnectionSchema<T>(entity: ZodSchema<T>) {
  return z.object({
    total: z.number(),
    edges: z.array(getEdgeSchema<T>(entity)),
    pageInfo: z.object({
      endCursor: z.string().or(z.null()),
      hasNextPage: z.boolean()
    })
  }).required()
}

export type ConnectionQueryParams<T extends string[] = []> = {
  first?: number;
  last?: number;
  after?: string;
  before?: string;
  sortDirection?: 'ASC' | 'DESC';
  sortBy?: T[number]
};

export function getConnectionQueryParamsSchema(sortByFields?: [string, ...string[]]) {
  return z.object({
    first: z.number().optional(),
    last: z.number().optional(),
    after: z.string().optional(),
    before: z.string().optional(),
    sortDirection: z.enum(['ASC',  'DESC']).optional(),
    sortBy: sortByFields ? z.enum(sortByFields).optional() : z.never()
  })
}
