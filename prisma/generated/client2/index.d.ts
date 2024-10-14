
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model trx_user_activities
 * 
 */
export type trx_user_activities = $Result.DefaultSelection<Prisma.$trx_user_activitiesPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Trx_user_activities
 * const trx_user_activities = await prisma.trx_user_activities.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Trx_user_activities
   * const trx_user_activities = await prisma.trx_user_activities.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.trx_user_activities`: Exposes CRUD operations for the **trx_user_activities** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Trx_user_activities
    * const trx_user_activities = await prisma.trx_user_activities.findMany()
    * ```
    */
  get trx_user_activities(): Prisma.trx_user_activitiesDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.20.0
   * Query Engine version: 06fc58a368dc7be9fbbbe894adf8d445d208c284
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    trx_user_activities: 'trx_user_activities'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db2?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "trx_user_activities"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      trx_user_activities: {
        payload: Prisma.$trx_user_activitiesPayload<ExtArgs>
        fields: Prisma.trx_user_activitiesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.trx_user_activitiesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trx_user_activitiesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.trx_user_activitiesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trx_user_activitiesPayload>
          }
          findFirst: {
            args: Prisma.trx_user_activitiesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trx_user_activitiesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.trx_user_activitiesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trx_user_activitiesPayload>
          }
          findMany: {
            args: Prisma.trx_user_activitiesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trx_user_activitiesPayload>[]
          }
          create: {
            args: Prisma.trx_user_activitiesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trx_user_activitiesPayload>
          }
          createMany: {
            args: Prisma.trx_user_activitiesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.trx_user_activitiesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trx_user_activitiesPayload>[]
          }
          delete: {
            args: Prisma.trx_user_activitiesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trx_user_activitiesPayload>
          }
          update: {
            args: Prisma.trx_user_activitiesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trx_user_activitiesPayload>
          }
          deleteMany: {
            args: Prisma.trx_user_activitiesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.trx_user_activitiesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.trx_user_activitiesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trx_user_activitiesPayload>
          }
          aggregate: {
            args: Prisma.Trx_user_activitiesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrx_user_activities>
          }
          groupBy: {
            args: Prisma.trx_user_activitiesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Trx_user_activitiesGroupByOutputType>[]
          }
          count: {
            args: Prisma.trx_user_activitiesCountArgs<ExtArgs>
            result: $Utils.Optional<Trx_user_activitiesCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model trx_user_activities
   */

  export type AggregateTrx_user_activities = {
    _count: Trx_user_activitiesCountAggregateOutputType | null
    _min: Trx_user_activitiesMinAggregateOutputType | null
    _max: Trx_user_activitiesMaxAggregateOutputType | null
  }

  export type Trx_user_activitiesMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    date: Date | null
    page: string | null
    action: string | null
    created_at: Date | null
    updated_at: Date | null
    email: string | null
    reference_id: string | null
    reference_type: string | null
  }

  export type Trx_user_activitiesMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    date: Date | null
    page: string | null
    action: string | null
    created_at: Date | null
    updated_at: Date | null
    email: string | null
    reference_id: string | null
    reference_type: string | null
  }

  export type Trx_user_activitiesCountAggregateOutputType = {
    id: number
    user_id: number
    date: number
    page: number
    action: number
    created_at: number
    updated_at: number
    email: number
    reference_id: number
    reference_type: number
    _all: number
  }


  export type Trx_user_activitiesMinAggregateInputType = {
    id?: true
    user_id?: true
    date?: true
    page?: true
    action?: true
    created_at?: true
    updated_at?: true
    email?: true
    reference_id?: true
    reference_type?: true
  }

  export type Trx_user_activitiesMaxAggregateInputType = {
    id?: true
    user_id?: true
    date?: true
    page?: true
    action?: true
    created_at?: true
    updated_at?: true
    email?: true
    reference_id?: true
    reference_type?: true
  }

  export type Trx_user_activitiesCountAggregateInputType = {
    id?: true
    user_id?: true
    date?: true
    page?: true
    action?: true
    created_at?: true
    updated_at?: true
    email?: true
    reference_id?: true
    reference_type?: true
    _all?: true
  }

  export type Trx_user_activitiesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which trx_user_activities to aggregate.
     */
    where?: trx_user_activitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of trx_user_activities to fetch.
     */
    orderBy?: trx_user_activitiesOrderByWithRelationInput | trx_user_activitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: trx_user_activitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` trx_user_activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` trx_user_activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned trx_user_activities
    **/
    _count?: true | Trx_user_activitiesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Trx_user_activitiesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Trx_user_activitiesMaxAggregateInputType
  }

  export type GetTrx_user_activitiesAggregateType<T extends Trx_user_activitiesAggregateArgs> = {
        [P in keyof T & keyof AggregateTrx_user_activities]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrx_user_activities[P]>
      : GetScalarType<T[P], AggregateTrx_user_activities[P]>
  }




  export type trx_user_activitiesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: trx_user_activitiesWhereInput
    orderBy?: trx_user_activitiesOrderByWithAggregationInput | trx_user_activitiesOrderByWithAggregationInput[]
    by: Trx_user_activitiesScalarFieldEnum[] | Trx_user_activitiesScalarFieldEnum
    having?: trx_user_activitiesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Trx_user_activitiesCountAggregateInputType | true
    _min?: Trx_user_activitiesMinAggregateInputType
    _max?: Trx_user_activitiesMaxAggregateInputType
  }

  export type Trx_user_activitiesGroupByOutputType = {
    id: string
    user_id: string | null
    date: Date | null
    page: string | null
    action: string | null
    created_at: Date | null
    updated_at: Date | null
    email: string | null
    reference_id: string | null
    reference_type: string | null
    _count: Trx_user_activitiesCountAggregateOutputType | null
    _min: Trx_user_activitiesMinAggregateOutputType | null
    _max: Trx_user_activitiesMaxAggregateOutputType | null
  }

  type GetTrx_user_activitiesGroupByPayload<T extends trx_user_activitiesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Trx_user_activitiesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Trx_user_activitiesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Trx_user_activitiesGroupByOutputType[P]>
            : GetScalarType<T[P], Trx_user_activitiesGroupByOutputType[P]>
        }
      >
    >


  export type trx_user_activitiesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    date?: boolean
    page?: boolean
    action?: boolean
    created_at?: boolean
    updated_at?: boolean
    email?: boolean
    reference_id?: boolean
    reference_type?: boolean
  }, ExtArgs["result"]["trx_user_activities"]>

  export type trx_user_activitiesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    date?: boolean
    page?: boolean
    action?: boolean
    created_at?: boolean
    updated_at?: boolean
    email?: boolean
    reference_id?: boolean
    reference_type?: boolean
  }, ExtArgs["result"]["trx_user_activities"]>

  export type trx_user_activitiesSelectScalar = {
    id?: boolean
    user_id?: boolean
    date?: boolean
    page?: boolean
    action?: boolean
    created_at?: boolean
    updated_at?: boolean
    email?: boolean
    reference_id?: boolean
    reference_type?: boolean
  }


  export type $trx_user_activitiesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "trx_user_activities"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string | null
      date: Date | null
      page: string | null
      action: string | null
      created_at: Date | null
      updated_at: Date | null
      email: string | null
      reference_id: string | null
      reference_type: string | null
    }, ExtArgs["result"]["trx_user_activities"]>
    composites: {}
  }

  type trx_user_activitiesGetPayload<S extends boolean | null | undefined | trx_user_activitiesDefaultArgs> = $Result.GetResult<Prisma.$trx_user_activitiesPayload, S>

  type trx_user_activitiesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<trx_user_activitiesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Trx_user_activitiesCountAggregateInputType | true
    }

  export interface trx_user_activitiesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['trx_user_activities'], meta: { name: 'trx_user_activities' } }
    /**
     * Find zero or one Trx_user_activities that matches the filter.
     * @param {trx_user_activitiesFindUniqueArgs} args - Arguments to find a Trx_user_activities
     * @example
     * // Get one Trx_user_activities
     * const trx_user_activities = await prisma.trx_user_activities.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends trx_user_activitiesFindUniqueArgs>(args: SelectSubset<T, trx_user_activitiesFindUniqueArgs<ExtArgs>>): Prisma__trx_user_activitiesClient<$Result.GetResult<Prisma.$trx_user_activitiesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Trx_user_activities that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {trx_user_activitiesFindUniqueOrThrowArgs} args - Arguments to find a Trx_user_activities
     * @example
     * // Get one Trx_user_activities
     * const trx_user_activities = await prisma.trx_user_activities.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends trx_user_activitiesFindUniqueOrThrowArgs>(args: SelectSubset<T, trx_user_activitiesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__trx_user_activitiesClient<$Result.GetResult<Prisma.$trx_user_activitiesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Trx_user_activities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trx_user_activitiesFindFirstArgs} args - Arguments to find a Trx_user_activities
     * @example
     * // Get one Trx_user_activities
     * const trx_user_activities = await prisma.trx_user_activities.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends trx_user_activitiesFindFirstArgs>(args?: SelectSubset<T, trx_user_activitiesFindFirstArgs<ExtArgs>>): Prisma__trx_user_activitiesClient<$Result.GetResult<Prisma.$trx_user_activitiesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Trx_user_activities that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trx_user_activitiesFindFirstOrThrowArgs} args - Arguments to find a Trx_user_activities
     * @example
     * // Get one Trx_user_activities
     * const trx_user_activities = await prisma.trx_user_activities.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends trx_user_activitiesFindFirstOrThrowArgs>(args?: SelectSubset<T, trx_user_activitiesFindFirstOrThrowArgs<ExtArgs>>): Prisma__trx_user_activitiesClient<$Result.GetResult<Prisma.$trx_user_activitiesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Trx_user_activities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trx_user_activitiesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Trx_user_activities
     * const trx_user_activities = await prisma.trx_user_activities.findMany()
     * 
     * // Get first 10 Trx_user_activities
     * const trx_user_activities = await prisma.trx_user_activities.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const trx_user_activitiesWithIdOnly = await prisma.trx_user_activities.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends trx_user_activitiesFindManyArgs>(args?: SelectSubset<T, trx_user_activitiesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$trx_user_activitiesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Trx_user_activities.
     * @param {trx_user_activitiesCreateArgs} args - Arguments to create a Trx_user_activities.
     * @example
     * // Create one Trx_user_activities
     * const Trx_user_activities = await prisma.trx_user_activities.create({
     *   data: {
     *     // ... data to create a Trx_user_activities
     *   }
     * })
     * 
     */
    create<T extends trx_user_activitiesCreateArgs>(args: SelectSubset<T, trx_user_activitiesCreateArgs<ExtArgs>>): Prisma__trx_user_activitiesClient<$Result.GetResult<Prisma.$trx_user_activitiesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Trx_user_activities.
     * @param {trx_user_activitiesCreateManyArgs} args - Arguments to create many Trx_user_activities.
     * @example
     * // Create many Trx_user_activities
     * const trx_user_activities = await prisma.trx_user_activities.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends trx_user_activitiesCreateManyArgs>(args?: SelectSubset<T, trx_user_activitiesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Trx_user_activities and returns the data saved in the database.
     * @param {trx_user_activitiesCreateManyAndReturnArgs} args - Arguments to create many Trx_user_activities.
     * @example
     * // Create many Trx_user_activities
     * const trx_user_activities = await prisma.trx_user_activities.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Trx_user_activities and only return the `id`
     * const trx_user_activitiesWithIdOnly = await prisma.trx_user_activities.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends trx_user_activitiesCreateManyAndReturnArgs>(args?: SelectSubset<T, trx_user_activitiesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$trx_user_activitiesPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Trx_user_activities.
     * @param {trx_user_activitiesDeleteArgs} args - Arguments to delete one Trx_user_activities.
     * @example
     * // Delete one Trx_user_activities
     * const Trx_user_activities = await prisma.trx_user_activities.delete({
     *   where: {
     *     // ... filter to delete one Trx_user_activities
     *   }
     * })
     * 
     */
    delete<T extends trx_user_activitiesDeleteArgs>(args: SelectSubset<T, trx_user_activitiesDeleteArgs<ExtArgs>>): Prisma__trx_user_activitiesClient<$Result.GetResult<Prisma.$trx_user_activitiesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Trx_user_activities.
     * @param {trx_user_activitiesUpdateArgs} args - Arguments to update one Trx_user_activities.
     * @example
     * // Update one Trx_user_activities
     * const trx_user_activities = await prisma.trx_user_activities.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends trx_user_activitiesUpdateArgs>(args: SelectSubset<T, trx_user_activitiesUpdateArgs<ExtArgs>>): Prisma__trx_user_activitiesClient<$Result.GetResult<Prisma.$trx_user_activitiesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Trx_user_activities.
     * @param {trx_user_activitiesDeleteManyArgs} args - Arguments to filter Trx_user_activities to delete.
     * @example
     * // Delete a few Trx_user_activities
     * const { count } = await prisma.trx_user_activities.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends trx_user_activitiesDeleteManyArgs>(args?: SelectSubset<T, trx_user_activitiesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trx_user_activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trx_user_activitiesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Trx_user_activities
     * const trx_user_activities = await prisma.trx_user_activities.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends trx_user_activitiesUpdateManyArgs>(args: SelectSubset<T, trx_user_activitiesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Trx_user_activities.
     * @param {trx_user_activitiesUpsertArgs} args - Arguments to update or create a Trx_user_activities.
     * @example
     * // Update or create a Trx_user_activities
     * const trx_user_activities = await prisma.trx_user_activities.upsert({
     *   create: {
     *     // ... data to create a Trx_user_activities
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Trx_user_activities we want to update
     *   }
     * })
     */
    upsert<T extends trx_user_activitiesUpsertArgs>(args: SelectSubset<T, trx_user_activitiesUpsertArgs<ExtArgs>>): Prisma__trx_user_activitiesClient<$Result.GetResult<Prisma.$trx_user_activitiesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Trx_user_activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trx_user_activitiesCountArgs} args - Arguments to filter Trx_user_activities to count.
     * @example
     * // Count the number of Trx_user_activities
     * const count = await prisma.trx_user_activities.count({
     *   where: {
     *     // ... the filter for the Trx_user_activities we want to count
     *   }
     * })
    **/
    count<T extends trx_user_activitiesCountArgs>(
      args?: Subset<T, trx_user_activitiesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Trx_user_activitiesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Trx_user_activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Trx_user_activitiesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Trx_user_activitiesAggregateArgs>(args: Subset<T, Trx_user_activitiesAggregateArgs>): Prisma.PrismaPromise<GetTrx_user_activitiesAggregateType<T>>

    /**
     * Group by Trx_user_activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trx_user_activitiesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends trx_user_activitiesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: trx_user_activitiesGroupByArgs['orderBy'] }
        : { orderBy?: trx_user_activitiesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, trx_user_activitiesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrx_user_activitiesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the trx_user_activities model
   */
  readonly fields: trx_user_activitiesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for trx_user_activities.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__trx_user_activitiesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the trx_user_activities model
   */ 
  interface trx_user_activitiesFieldRefs {
    readonly id: FieldRef<"trx_user_activities", 'String'>
    readonly user_id: FieldRef<"trx_user_activities", 'String'>
    readonly date: FieldRef<"trx_user_activities", 'DateTime'>
    readonly page: FieldRef<"trx_user_activities", 'String'>
    readonly action: FieldRef<"trx_user_activities", 'String'>
    readonly created_at: FieldRef<"trx_user_activities", 'DateTime'>
    readonly updated_at: FieldRef<"trx_user_activities", 'DateTime'>
    readonly email: FieldRef<"trx_user_activities", 'String'>
    readonly reference_id: FieldRef<"trx_user_activities", 'String'>
    readonly reference_type: FieldRef<"trx_user_activities", 'String'>
  }
    

  // Custom InputTypes
  /**
   * trx_user_activities findUnique
   */
  export type trx_user_activitiesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trx_user_activities
     */
    select?: trx_user_activitiesSelect<ExtArgs> | null
    /**
     * Filter, which trx_user_activities to fetch.
     */
    where: trx_user_activitiesWhereUniqueInput
  }

  /**
   * trx_user_activities findUniqueOrThrow
   */
  export type trx_user_activitiesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trx_user_activities
     */
    select?: trx_user_activitiesSelect<ExtArgs> | null
    /**
     * Filter, which trx_user_activities to fetch.
     */
    where: trx_user_activitiesWhereUniqueInput
  }

  /**
   * trx_user_activities findFirst
   */
  export type trx_user_activitiesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trx_user_activities
     */
    select?: trx_user_activitiesSelect<ExtArgs> | null
    /**
     * Filter, which trx_user_activities to fetch.
     */
    where?: trx_user_activitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of trx_user_activities to fetch.
     */
    orderBy?: trx_user_activitiesOrderByWithRelationInput | trx_user_activitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for trx_user_activities.
     */
    cursor?: trx_user_activitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` trx_user_activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` trx_user_activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of trx_user_activities.
     */
    distinct?: Trx_user_activitiesScalarFieldEnum | Trx_user_activitiesScalarFieldEnum[]
  }

  /**
   * trx_user_activities findFirstOrThrow
   */
  export type trx_user_activitiesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trx_user_activities
     */
    select?: trx_user_activitiesSelect<ExtArgs> | null
    /**
     * Filter, which trx_user_activities to fetch.
     */
    where?: trx_user_activitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of trx_user_activities to fetch.
     */
    orderBy?: trx_user_activitiesOrderByWithRelationInput | trx_user_activitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for trx_user_activities.
     */
    cursor?: trx_user_activitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` trx_user_activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` trx_user_activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of trx_user_activities.
     */
    distinct?: Trx_user_activitiesScalarFieldEnum | Trx_user_activitiesScalarFieldEnum[]
  }

  /**
   * trx_user_activities findMany
   */
  export type trx_user_activitiesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trx_user_activities
     */
    select?: trx_user_activitiesSelect<ExtArgs> | null
    /**
     * Filter, which trx_user_activities to fetch.
     */
    where?: trx_user_activitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of trx_user_activities to fetch.
     */
    orderBy?: trx_user_activitiesOrderByWithRelationInput | trx_user_activitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing trx_user_activities.
     */
    cursor?: trx_user_activitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` trx_user_activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` trx_user_activities.
     */
    skip?: number
    distinct?: Trx_user_activitiesScalarFieldEnum | Trx_user_activitiesScalarFieldEnum[]
  }

  /**
   * trx_user_activities create
   */
  export type trx_user_activitiesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trx_user_activities
     */
    select?: trx_user_activitiesSelect<ExtArgs> | null
    /**
     * The data needed to create a trx_user_activities.
     */
    data: XOR<trx_user_activitiesCreateInput, trx_user_activitiesUncheckedCreateInput>
  }

  /**
   * trx_user_activities createMany
   */
  export type trx_user_activitiesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many trx_user_activities.
     */
    data: trx_user_activitiesCreateManyInput | trx_user_activitiesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * trx_user_activities createManyAndReturn
   */
  export type trx_user_activitiesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trx_user_activities
     */
    select?: trx_user_activitiesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many trx_user_activities.
     */
    data: trx_user_activitiesCreateManyInput | trx_user_activitiesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * trx_user_activities update
   */
  export type trx_user_activitiesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trx_user_activities
     */
    select?: trx_user_activitiesSelect<ExtArgs> | null
    /**
     * The data needed to update a trx_user_activities.
     */
    data: XOR<trx_user_activitiesUpdateInput, trx_user_activitiesUncheckedUpdateInput>
    /**
     * Choose, which trx_user_activities to update.
     */
    where: trx_user_activitiesWhereUniqueInput
  }

  /**
   * trx_user_activities updateMany
   */
  export type trx_user_activitiesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update trx_user_activities.
     */
    data: XOR<trx_user_activitiesUpdateManyMutationInput, trx_user_activitiesUncheckedUpdateManyInput>
    /**
     * Filter which trx_user_activities to update
     */
    where?: trx_user_activitiesWhereInput
  }

  /**
   * trx_user_activities upsert
   */
  export type trx_user_activitiesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trx_user_activities
     */
    select?: trx_user_activitiesSelect<ExtArgs> | null
    /**
     * The filter to search for the trx_user_activities to update in case it exists.
     */
    where: trx_user_activitiesWhereUniqueInput
    /**
     * In case the trx_user_activities found by the `where` argument doesn't exist, create a new trx_user_activities with this data.
     */
    create: XOR<trx_user_activitiesCreateInput, trx_user_activitiesUncheckedCreateInput>
    /**
     * In case the trx_user_activities was found with the provided `where` argument, update it with this data.
     */
    update: XOR<trx_user_activitiesUpdateInput, trx_user_activitiesUncheckedUpdateInput>
  }

  /**
   * trx_user_activities delete
   */
  export type trx_user_activitiesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trx_user_activities
     */
    select?: trx_user_activitiesSelect<ExtArgs> | null
    /**
     * Filter which trx_user_activities to delete.
     */
    where: trx_user_activitiesWhereUniqueInput
  }

  /**
   * trx_user_activities deleteMany
   */
  export type trx_user_activitiesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which trx_user_activities to delete
     */
    where?: trx_user_activitiesWhereInput
  }

  /**
   * trx_user_activities without action
   */
  export type trx_user_activitiesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trx_user_activities
     */
    select?: trx_user_activitiesSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Trx_user_activitiesScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    date: 'date',
    page: 'page',
    action: 'action',
    created_at: 'created_at',
    updated_at: 'updated_at',
    email: 'email',
    reference_id: 'reference_id',
    reference_type: 'reference_type'
  };

  export type Trx_user_activitiesScalarFieldEnum = (typeof Trx_user_activitiesScalarFieldEnum)[keyof typeof Trx_user_activitiesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type trx_user_activitiesWhereInput = {
    AND?: trx_user_activitiesWhereInput | trx_user_activitiesWhereInput[]
    OR?: trx_user_activitiesWhereInput[]
    NOT?: trx_user_activitiesWhereInput | trx_user_activitiesWhereInput[]
    id?: StringFilter<"trx_user_activities"> | string
    user_id?: StringNullableFilter<"trx_user_activities"> | string | null
    date?: DateTimeNullableFilter<"trx_user_activities"> | Date | string | null
    page?: StringNullableFilter<"trx_user_activities"> | string | null
    action?: StringNullableFilter<"trx_user_activities"> | string | null
    created_at?: DateTimeNullableFilter<"trx_user_activities"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"trx_user_activities"> | Date | string | null
    email?: StringNullableFilter<"trx_user_activities"> | string | null
    reference_id?: StringNullableFilter<"trx_user_activities"> | string | null
    reference_type?: StringNullableFilter<"trx_user_activities"> | string | null
  }

  export type trx_user_activitiesOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    date?: SortOrderInput | SortOrder
    page?: SortOrderInput | SortOrder
    action?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    reference_id?: SortOrderInput | SortOrder
    reference_type?: SortOrderInput | SortOrder
  }

  export type trx_user_activitiesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: trx_user_activitiesWhereInput | trx_user_activitiesWhereInput[]
    OR?: trx_user_activitiesWhereInput[]
    NOT?: trx_user_activitiesWhereInput | trx_user_activitiesWhereInput[]
    user_id?: StringNullableFilter<"trx_user_activities"> | string | null
    date?: DateTimeNullableFilter<"trx_user_activities"> | Date | string | null
    page?: StringNullableFilter<"trx_user_activities"> | string | null
    action?: StringNullableFilter<"trx_user_activities"> | string | null
    created_at?: DateTimeNullableFilter<"trx_user_activities"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"trx_user_activities"> | Date | string | null
    email?: StringNullableFilter<"trx_user_activities"> | string | null
    reference_id?: StringNullableFilter<"trx_user_activities"> | string | null
    reference_type?: StringNullableFilter<"trx_user_activities"> | string | null
  }, "id">

  export type trx_user_activitiesOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    date?: SortOrderInput | SortOrder
    page?: SortOrderInput | SortOrder
    action?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    reference_id?: SortOrderInput | SortOrder
    reference_type?: SortOrderInput | SortOrder
    _count?: trx_user_activitiesCountOrderByAggregateInput
    _max?: trx_user_activitiesMaxOrderByAggregateInput
    _min?: trx_user_activitiesMinOrderByAggregateInput
  }

  export type trx_user_activitiesScalarWhereWithAggregatesInput = {
    AND?: trx_user_activitiesScalarWhereWithAggregatesInput | trx_user_activitiesScalarWhereWithAggregatesInput[]
    OR?: trx_user_activitiesScalarWhereWithAggregatesInput[]
    NOT?: trx_user_activitiesScalarWhereWithAggregatesInput | trx_user_activitiesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"trx_user_activities"> | string
    user_id?: StringNullableWithAggregatesFilter<"trx_user_activities"> | string | null
    date?: DateTimeNullableWithAggregatesFilter<"trx_user_activities"> | Date | string | null
    page?: StringNullableWithAggregatesFilter<"trx_user_activities"> | string | null
    action?: StringNullableWithAggregatesFilter<"trx_user_activities"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"trx_user_activities"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"trx_user_activities"> | Date | string | null
    email?: StringNullableWithAggregatesFilter<"trx_user_activities"> | string | null
    reference_id?: StringNullableWithAggregatesFilter<"trx_user_activities"> | string | null
    reference_type?: StringNullableWithAggregatesFilter<"trx_user_activities"> | string | null
  }

  export type trx_user_activitiesCreateInput = {
    id: string
    user_id?: string | null
    date?: Date | string | null
    page?: string | null
    action?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    email?: string | null
    reference_id?: string | null
    reference_type?: string | null
  }

  export type trx_user_activitiesUncheckedCreateInput = {
    id: string
    user_id?: string | null
    date?: Date | string | null
    page?: string | null
    action?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    email?: string | null
    reference_id?: string | null
    reference_type?: string | null
  }

  export type trx_user_activitiesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    page?: NullableStringFieldUpdateOperationsInput | string | null
    action?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    reference_id?: NullableStringFieldUpdateOperationsInput | string | null
    reference_type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type trx_user_activitiesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    page?: NullableStringFieldUpdateOperationsInput | string | null
    action?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    reference_id?: NullableStringFieldUpdateOperationsInput | string | null
    reference_type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type trx_user_activitiesCreateManyInput = {
    id: string
    user_id?: string | null
    date?: Date | string | null
    page?: string | null
    action?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    email?: string | null
    reference_id?: string | null
    reference_type?: string | null
  }

  export type trx_user_activitiesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    page?: NullableStringFieldUpdateOperationsInput | string | null
    action?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    reference_id?: NullableStringFieldUpdateOperationsInput | string | null
    reference_type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type trx_user_activitiesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    page?: NullableStringFieldUpdateOperationsInput | string | null
    action?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    reference_id?: NullableStringFieldUpdateOperationsInput | string | null
    reference_type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type trx_user_activitiesCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    date?: SortOrder
    page?: SortOrder
    action?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    email?: SortOrder
    reference_id?: SortOrder
    reference_type?: SortOrder
  }

  export type trx_user_activitiesMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    date?: SortOrder
    page?: SortOrder
    action?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    email?: SortOrder
    reference_id?: SortOrder
    reference_type?: SortOrder
  }

  export type trx_user_activitiesMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    date?: SortOrder
    page?: SortOrder
    action?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    email?: SortOrder
    reference_id?: SortOrder
    reference_type?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use trx_user_activitiesDefaultArgs instead
     */
    export type trx_user_activitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = trx_user_activitiesDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}