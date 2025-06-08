
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model Segment
 * 
 */
export type Segment = $Result.DefaultSelection<Prisma.$SegmentPayload>
/**
 * Model TranslationMemory
 * 
 */
export type TranslationMemory = $Result.DefaultSelection<Prisma.$TranslationMemoryPayload>
/**
 * Model GlossaryEntry
 * 
 */
export type GlossaryEntry = $Result.DefaultSelection<Prisma.$GlossaryEntryPayload>
/**
 * Model Comment
 * 
 */
export type Comment = $Result.DefaultSelection<Prisma.$CommentPayload>
/**
 * Model ActivityLog
 * 
 */
export type ActivityLog = $Result.DefaultSelection<Prisma.$ActivityLogPayload>
/**
 * Model LanguagePair
 * 
 */
export type LanguagePair = $Result.DefaultSelection<Prisma.$LanguagePairPayload>
/**
 * Model FileUpload
 * 
 */
export type FileUpload = $Result.DefaultSelection<Prisma.$FileUploadPayload>
/**
 * Model Tag
 * 
 */
export type Tag = $Result.DefaultSelection<Prisma.$TagPayload>
/**
 * Model GlossaryEntryTag
 * 
 */
export type GlossaryEntryTag = $Result.DefaultSelection<Prisma.$GlossaryEntryTagPayload>
/**
 * Model SegmentTag
 * 
 */
export type SegmentTag = $Result.DefaultSelection<Prisma.$SegmentTagPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = $Result.DefaultSelection<Prisma.$VerificationTokenPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const SegmentStatus: {
  DRAFT: 'DRAFT',
  TRANSLATED: 'TRANSLATED',
  REVIEWED: 'REVIEWED'
};

export type SegmentStatus = (typeof SegmentStatus)[keyof typeof SegmentStatus]

}

export type SegmentStatus = $Enums.SegmentStatus

export const SegmentStatus: typeof $Enums.SegmentStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.segment`: Exposes CRUD operations for the **Segment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Segments
    * const segments = await prisma.segment.findMany()
    * ```
    */
  get segment(): Prisma.SegmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.translationMemory`: Exposes CRUD operations for the **TranslationMemory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TranslationMemories
    * const translationMemories = await prisma.translationMemory.findMany()
    * ```
    */
  get translationMemory(): Prisma.TranslationMemoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.glossaryEntry`: Exposes CRUD operations for the **GlossaryEntry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GlossaryEntries
    * const glossaryEntries = await prisma.glossaryEntry.findMany()
    * ```
    */
  get glossaryEntry(): Prisma.GlossaryEntryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.CommentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.activityLog`: Exposes CRUD operations for the **ActivityLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ActivityLogs
    * const activityLogs = await prisma.activityLog.findMany()
    * ```
    */
  get activityLog(): Prisma.ActivityLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.languagePair`: Exposes CRUD operations for the **LanguagePair** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LanguagePairs
    * const languagePairs = await prisma.languagePair.findMany()
    * ```
    */
  get languagePair(): Prisma.LanguagePairDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fileUpload`: Exposes CRUD operations for the **FileUpload** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FileUploads
    * const fileUploads = await prisma.fileUpload.findMany()
    * ```
    */
  get fileUpload(): Prisma.FileUploadDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tag`: Exposes CRUD operations for the **Tag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tag.findMany()
    * ```
    */
  get tag(): Prisma.TagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.glossaryEntryTag`: Exposes CRUD operations for the **GlossaryEntryTag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GlossaryEntryTags
    * const glossaryEntryTags = await prisma.glossaryEntryTag.findMany()
    * ```
    */
  get glossaryEntryTag(): Prisma.GlossaryEntryTagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.segmentTag`: Exposes CRUD operations for the **SegmentTag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SegmentTags
    * const segmentTags = await prisma.segmentTag.findMany()
    * ```
    */
  get segmentTag(): Prisma.SegmentTagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.9.0
   * Query Engine version: 81e4af48011447c3cc503a190e86995b66d2a28e
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    User: 'User',
    Project: 'Project',
    Segment: 'Segment',
    TranslationMemory: 'TranslationMemory',
    GlossaryEntry: 'GlossaryEntry',
    Comment: 'Comment',
    ActivityLog: 'ActivityLog',
    LanguagePair: 'LanguagePair',
    FileUpload: 'FileUpload',
    Tag: 'Tag',
    GlossaryEntryTag: 'GlossaryEntryTag',
    SegmentTag: 'SegmentTag',
    Account: 'Account',
    Session: 'Session',
    VerificationToken: 'VerificationToken'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "project" | "segment" | "translationMemory" | "glossaryEntry" | "comment" | "activityLog" | "languagePair" | "fileUpload" | "tag" | "glossaryEntryTag" | "segmentTag" | "account" | "session" | "verificationToken"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      Segment: {
        payload: Prisma.$SegmentPayload<ExtArgs>
        fields: Prisma.SegmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SegmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SegmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SegmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SegmentPayload>
          }
          findFirst: {
            args: Prisma.SegmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SegmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SegmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SegmentPayload>
          }
          findMany: {
            args: Prisma.SegmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SegmentPayload>[]
          }
          create: {
            args: Prisma.SegmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SegmentPayload>
          }
          createMany: {
            args: Prisma.SegmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SegmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SegmentPayload>[]
          }
          delete: {
            args: Prisma.SegmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SegmentPayload>
          }
          update: {
            args: Prisma.SegmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SegmentPayload>
          }
          deleteMany: {
            args: Prisma.SegmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SegmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SegmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SegmentPayload>[]
          }
          upsert: {
            args: Prisma.SegmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SegmentPayload>
          }
          aggregate: {
            args: Prisma.SegmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSegment>
          }
          groupBy: {
            args: Prisma.SegmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<SegmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.SegmentCountArgs<ExtArgs>
            result: $Utils.Optional<SegmentCountAggregateOutputType> | number
          }
        }
      }
      TranslationMemory: {
        payload: Prisma.$TranslationMemoryPayload<ExtArgs>
        fields: Prisma.TranslationMemoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TranslationMemoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranslationMemoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TranslationMemoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranslationMemoryPayload>
          }
          findFirst: {
            args: Prisma.TranslationMemoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranslationMemoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TranslationMemoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranslationMemoryPayload>
          }
          findMany: {
            args: Prisma.TranslationMemoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranslationMemoryPayload>[]
          }
          create: {
            args: Prisma.TranslationMemoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranslationMemoryPayload>
          }
          createMany: {
            args: Prisma.TranslationMemoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TranslationMemoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranslationMemoryPayload>[]
          }
          delete: {
            args: Prisma.TranslationMemoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranslationMemoryPayload>
          }
          update: {
            args: Prisma.TranslationMemoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranslationMemoryPayload>
          }
          deleteMany: {
            args: Prisma.TranslationMemoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TranslationMemoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TranslationMemoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranslationMemoryPayload>[]
          }
          upsert: {
            args: Prisma.TranslationMemoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranslationMemoryPayload>
          }
          aggregate: {
            args: Prisma.TranslationMemoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTranslationMemory>
          }
          groupBy: {
            args: Prisma.TranslationMemoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<TranslationMemoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.TranslationMemoryCountArgs<ExtArgs>
            result: $Utils.Optional<TranslationMemoryCountAggregateOutputType> | number
          }
        }
      }
      GlossaryEntry: {
        payload: Prisma.$GlossaryEntryPayload<ExtArgs>
        fields: Prisma.GlossaryEntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GlossaryEntryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlossaryEntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GlossaryEntryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlossaryEntryPayload>
          }
          findFirst: {
            args: Prisma.GlossaryEntryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlossaryEntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GlossaryEntryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlossaryEntryPayload>
          }
          findMany: {
            args: Prisma.GlossaryEntryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlossaryEntryPayload>[]
          }
          create: {
            args: Prisma.GlossaryEntryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlossaryEntryPayload>
          }
          createMany: {
            args: Prisma.GlossaryEntryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GlossaryEntryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlossaryEntryPayload>[]
          }
          delete: {
            args: Prisma.GlossaryEntryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlossaryEntryPayload>
          }
          update: {
            args: Prisma.GlossaryEntryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlossaryEntryPayload>
          }
          deleteMany: {
            args: Prisma.GlossaryEntryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GlossaryEntryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GlossaryEntryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlossaryEntryPayload>[]
          }
          upsert: {
            args: Prisma.GlossaryEntryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlossaryEntryPayload>
          }
          aggregate: {
            args: Prisma.GlossaryEntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGlossaryEntry>
          }
          groupBy: {
            args: Prisma.GlossaryEntryGroupByArgs<ExtArgs>
            result: $Utils.Optional<GlossaryEntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.GlossaryEntryCountArgs<ExtArgs>
            result: $Utils.Optional<GlossaryEntryCountAggregateOutputType> | number
          }
        }
      }
      Comment: {
        payload: Prisma.$CommentPayload<ExtArgs>
        fields: Prisma.CommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findFirst: {
            args: Prisma.CommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findMany: {
            args: Prisma.CommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          create: {
            args: Prisma.CommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          createMany: {
            args: Prisma.CommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          delete: {
            args: Prisma.CommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          update: {
            args: Prisma.CommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          deleteMany: {
            args: Prisma.CommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          upsert: {
            args: Prisma.CommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          aggregate: {
            args: Prisma.CommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComment>
          }
          groupBy: {
            args: Prisma.CommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentCountArgs<ExtArgs>
            result: $Utils.Optional<CommentCountAggregateOutputType> | number
          }
        }
      }
      ActivityLog: {
        payload: Prisma.$ActivityLogPayload<ExtArgs>
        fields: Prisma.ActivityLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActivityLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActivityLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          findFirst: {
            args: Prisma.ActivityLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActivityLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          findMany: {
            args: Prisma.ActivityLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>[]
          }
          create: {
            args: Prisma.ActivityLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          createMany: {
            args: Prisma.ActivityLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActivityLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>[]
          }
          delete: {
            args: Prisma.ActivityLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          update: {
            args: Prisma.ActivityLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          deleteMany: {
            args: Prisma.ActivityLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActivityLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ActivityLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>[]
          }
          upsert: {
            args: Prisma.ActivityLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          aggregate: {
            args: Prisma.ActivityLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActivityLog>
          }
          groupBy: {
            args: Prisma.ActivityLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActivityLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActivityLogCountArgs<ExtArgs>
            result: $Utils.Optional<ActivityLogCountAggregateOutputType> | number
          }
        }
      }
      LanguagePair: {
        payload: Prisma.$LanguagePairPayload<ExtArgs>
        fields: Prisma.LanguagePairFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LanguagePairFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePairPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LanguagePairFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePairPayload>
          }
          findFirst: {
            args: Prisma.LanguagePairFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePairPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LanguagePairFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePairPayload>
          }
          findMany: {
            args: Prisma.LanguagePairFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePairPayload>[]
          }
          create: {
            args: Prisma.LanguagePairCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePairPayload>
          }
          createMany: {
            args: Prisma.LanguagePairCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LanguagePairCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePairPayload>[]
          }
          delete: {
            args: Prisma.LanguagePairDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePairPayload>
          }
          update: {
            args: Prisma.LanguagePairUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePairPayload>
          }
          deleteMany: {
            args: Prisma.LanguagePairDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LanguagePairUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LanguagePairUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePairPayload>[]
          }
          upsert: {
            args: Prisma.LanguagePairUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePairPayload>
          }
          aggregate: {
            args: Prisma.LanguagePairAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLanguagePair>
          }
          groupBy: {
            args: Prisma.LanguagePairGroupByArgs<ExtArgs>
            result: $Utils.Optional<LanguagePairGroupByOutputType>[]
          }
          count: {
            args: Prisma.LanguagePairCountArgs<ExtArgs>
            result: $Utils.Optional<LanguagePairCountAggregateOutputType> | number
          }
        }
      }
      FileUpload: {
        payload: Prisma.$FileUploadPayload<ExtArgs>
        fields: Prisma.FileUploadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FileUploadFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileUploadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FileUploadFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileUploadPayload>
          }
          findFirst: {
            args: Prisma.FileUploadFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileUploadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FileUploadFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileUploadPayload>
          }
          findMany: {
            args: Prisma.FileUploadFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileUploadPayload>[]
          }
          create: {
            args: Prisma.FileUploadCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileUploadPayload>
          }
          createMany: {
            args: Prisma.FileUploadCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FileUploadCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileUploadPayload>[]
          }
          delete: {
            args: Prisma.FileUploadDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileUploadPayload>
          }
          update: {
            args: Prisma.FileUploadUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileUploadPayload>
          }
          deleteMany: {
            args: Prisma.FileUploadDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FileUploadUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FileUploadUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileUploadPayload>[]
          }
          upsert: {
            args: Prisma.FileUploadUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileUploadPayload>
          }
          aggregate: {
            args: Prisma.FileUploadAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFileUpload>
          }
          groupBy: {
            args: Prisma.FileUploadGroupByArgs<ExtArgs>
            result: $Utils.Optional<FileUploadGroupByOutputType>[]
          }
          count: {
            args: Prisma.FileUploadCountArgs<ExtArgs>
            result: $Utils.Optional<FileUploadCountAggregateOutputType> | number
          }
        }
      }
      Tag: {
        payload: Prisma.$TagPayload<ExtArgs>
        fields: Prisma.TagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findFirst: {
            args: Prisma.TagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findMany: {
            args: Prisma.TagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          create: {
            args: Prisma.TagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          createMany: {
            args: Prisma.TagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          delete: {
            args: Prisma.TagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          update: {
            args: Prisma.TagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          deleteMany: {
            args: Prisma.TagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          upsert: {
            args: Prisma.TagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          aggregate: {
            args: Prisma.TagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTag>
          }
          groupBy: {
            args: Prisma.TagGroupByArgs<ExtArgs>
            result: $Utils.Optional<TagGroupByOutputType>[]
          }
          count: {
            args: Prisma.TagCountArgs<ExtArgs>
            result: $Utils.Optional<TagCountAggregateOutputType> | number
          }
        }
      }
      GlossaryEntryTag: {
        payload: Prisma.$GlossaryEntryTagPayload<ExtArgs>
        fields: Prisma.GlossaryEntryTagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GlossaryEntryTagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlossaryEntryTagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GlossaryEntryTagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlossaryEntryTagPayload>
          }
          findFirst: {
            args: Prisma.GlossaryEntryTagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlossaryEntryTagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GlossaryEntryTagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlossaryEntryTagPayload>
          }
          findMany: {
            args: Prisma.GlossaryEntryTagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlossaryEntryTagPayload>[]
          }
          create: {
            args: Prisma.GlossaryEntryTagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlossaryEntryTagPayload>
          }
          createMany: {
            args: Prisma.GlossaryEntryTagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GlossaryEntryTagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlossaryEntryTagPayload>[]
          }
          delete: {
            args: Prisma.GlossaryEntryTagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlossaryEntryTagPayload>
          }
          update: {
            args: Prisma.GlossaryEntryTagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlossaryEntryTagPayload>
          }
          deleteMany: {
            args: Prisma.GlossaryEntryTagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GlossaryEntryTagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GlossaryEntryTagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlossaryEntryTagPayload>[]
          }
          upsert: {
            args: Prisma.GlossaryEntryTagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlossaryEntryTagPayload>
          }
          aggregate: {
            args: Prisma.GlossaryEntryTagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGlossaryEntryTag>
          }
          groupBy: {
            args: Prisma.GlossaryEntryTagGroupByArgs<ExtArgs>
            result: $Utils.Optional<GlossaryEntryTagGroupByOutputType>[]
          }
          count: {
            args: Prisma.GlossaryEntryTagCountArgs<ExtArgs>
            result: $Utils.Optional<GlossaryEntryTagCountAggregateOutputType> | number
          }
        }
      }
      SegmentTag: {
        payload: Prisma.$SegmentTagPayload<ExtArgs>
        fields: Prisma.SegmentTagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SegmentTagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SegmentTagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SegmentTagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SegmentTagPayload>
          }
          findFirst: {
            args: Prisma.SegmentTagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SegmentTagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SegmentTagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SegmentTagPayload>
          }
          findMany: {
            args: Prisma.SegmentTagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SegmentTagPayload>[]
          }
          create: {
            args: Prisma.SegmentTagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SegmentTagPayload>
          }
          createMany: {
            args: Prisma.SegmentTagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SegmentTagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SegmentTagPayload>[]
          }
          delete: {
            args: Prisma.SegmentTagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SegmentTagPayload>
          }
          update: {
            args: Prisma.SegmentTagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SegmentTagPayload>
          }
          deleteMany: {
            args: Prisma.SegmentTagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SegmentTagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SegmentTagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SegmentTagPayload>[]
          }
          upsert: {
            args: Prisma.SegmentTagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SegmentTagPayload>
          }
          aggregate: {
            args: Prisma.SegmentTagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSegmentTag>
          }
          groupBy: {
            args: Prisma.SegmentTagGroupByArgs<ExtArgs>
            result: $Utils.Optional<SegmentTagGroupByOutputType>[]
          }
          count: {
            args: Prisma.SegmentTagCountArgs<ExtArgs>
            result: $Utils.Optional<SegmentTagCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      VerificationToken: {
        payload: Prisma.$VerificationTokenPayload<ExtArgs>
        fields: Prisma.VerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findMany: {
            args: Prisma.VerificationTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          create: {
            args: Prisma.VerificationTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          createMany: {
            args: Prisma.VerificationTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          delete: {
            args: Prisma.VerificationTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          update: {
            args: Prisma.VerificationTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          upsert: {
            args: Prisma.VerificationTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.VerificationTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationToken>
          }
          groupBy: {
            args: Prisma.VerificationTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationTokenCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenCountAggregateOutputType> | number
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
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    project?: ProjectOmit
    segment?: SegmentOmit
    translationMemory?: TranslationMemoryOmit
    glossaryEntry?: GlossaryEntryOmit
    comment?: CommentOmit
    activityLog?: ActivityLogOmit
    languagePair?: LanguagePairOmit
    fileUpload?: FileUploadOmit
    tag?: TagOmit
    glossaryEntryTag?: GlossaryEntryTagOmit
    segmentTag?: SegmentTagOmit
    account?: AccountOmit
    session?: SessionOmit
    verificationToken?: VerificationTokenOmit
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
    | 'updateManyAndReturn'
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    accounts: number
    sessions: number
    projects: number
    comments: number
    activityLogs: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    projects?: boolean | UserCountOutputTypeCountProjectsArgs
    comments?: boolean | UserCountOutputTypeCountCommentsArgs
    activityLogs?: boolean | UserCountOutputTypeCountActivityLogsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountActivityLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityLogWhereInput
  }


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    segments: number
    tms: number
    glossaries: number
    languagePairs: number
    fileUploads: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    segments?: boolean | ProjectCountOutputTypeCountSegmentsArgs
    tms?: boolean | ProjectCountOutputTypeCountTmsArgs
    glossaries?: boolean | ProjectCountOutputTypeCountGlossariesArgs
    languagePairs?: boolean | ProjectCountOutputTypeCountLanguagePairsArgs
    fileUploads?: boolean | ProjectCountOutputTypeCountFileUploadsArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountSegmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SegmentWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountTmsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TranslationMemoryWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountGlossariesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GlossaryEntryWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountLanguagePairsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LanguagePairWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountFileUploadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FileUploadWhereInput
  }


  /**
   * Count Type SegmentCountOutputType
   */

  export type SegmentCountOutputType = {
    comments: number
    activityLogs: number
    tags: number
    segmentTags: number
  }

  export type SegmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | SegmentCountOutputTypeCountCommentsArgs
    activityLogs?: boolean | SegmentCountOutputTypeCountActivityLogsArgs
    tags?: boolean | SegmentCountOutputTypeCountTagsArgs
    segmentTags?: boolean | SegmentCountOutputTypeCountSegmentTagsArgs
  }

  // Custom InputTypes
  /**
   * SegmentCountOutputType without action
   */
  export type SegmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SegmentCountOutputType
     */
    select?: SegmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SegmentCountOutputType without action
   */
  export type SegmentCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * SegmentCountOutputType without action
   */
  export type SegmentCountOutputTypeCountActivityLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityLogWhereInput
  }

  /**
   * SegmentCountOutputType without action
   */
  export type SegmentCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
  }

  /**
   * SegmentCountOutputType without action
   */
  export type SegmentCountOutputTypeCountSegmentTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SegmentTagWhereInput
  }


  /**
   * Count Type GlossaryEntryCountOutputType
   */

  export type GlossaryEntryCountOutputType = {
    tags: number
    glossaryEntryTags: number
  }

  export type GlossaryEntryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tags?: boolean | GlossaryEntryCountOutputTypeCountTagsArgs
    glossaryEntryTags?: boolean | GlossaryEntryCountOutputTypeCountGlossaryEntryTagsArgs
  }

  // Custom InputTypes
  /**
   * GlossaryEntryCountOutputType without action
   */
  export type GlossaryEntryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlossaryEntryCountOutputType
     */
    select?: GlossaryEntryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GlossaryEntryCountOutputType without action
   */
  export type GlossaryEntryCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
  }

  /**
   * GlossaryEntryCountOutputType without action
   */
  export type GlossaryEntryCountOutputTypeCountGlossaryEntryTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GlossaryEntryTagWhereInput
  }


  /**
   * Count Type LanguagePairCountOutputType
   */

  export type LanguagePairCountOutputType = {
    projects: number
  }

  export type LanguagePairCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | LanguagePairCountOutputTypeCountProjectsArgs
  }

  // Custom InputTypes
  /**
   * LanguagePairCountOutputType without action
   */
  export type LanguagePairCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LanguagePairCountOutputType
     */
    select?: LanguagePairCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LanguagePairCountOutputType without action
   */
  export type LanguagePairCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }


  /**
   * Count Type TagCountOutputType
   */

  export type TagCountOutputType = {
    glossaryEntries: number
    segments: number
    glossaryEntryTags: number
    segmentTags: number
  }

  export type TagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    glossaryEntries?: boolean | TagCountOutputTypeCountGlossaryEntriesArgs
    segments?: boolean | TagCountOutputTypeCountSegmentsArgs
    glossaryEntryTags?: boolean | TagCountOutputTypeCountGlossaryEntryTagsArgs
    segmentTags?: boolean | TagCountOutputTypeCountSegmentTagsArgs
  }

  // Custom InputTypes
  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagCountOutputType
     */
    select?: TagCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountGlossaryEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GlossaryEntryWhereInput
  }

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountSegmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SegmentWhereInput
  }

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountGlossaryEntryTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GlossaryEntryTagWhereInput
  }

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountSegmentTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SegmentTagWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    emailVerified: Date | null
    image: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    emailVerified: Date | null
    image: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    createdAt: number
    updatedAt: number
    emailVerified: number
    image: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    emailVerified?: true
    image?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    emailVerified?: true
    image?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    emailVerified?: true
    image?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string | null
    name: string | null
    createdAt: Date
    updatedAt: Date
    emailVerified: Date | null
    image: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    emailVerified?: boolean
    image?: boolean
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    projects?: boolean | User$projectsArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    activityLogs?: boolean | User$activityLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    emailVerified?: boolean
    image?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    emailVerified?: boolean
    image?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    emailVerified?: boolean
    image?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "createdAt" | "updatedAt" | "emailVerified" | "image", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    projects?: boolean | User$projectsArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    activityLogs?: boolean | User$activityLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      projects: Prisma.$ProjectPayload<ExtArgs>[]
      comments: Prisma.$CommentPayload<ExtArgs>[]
      activityLogs: Prisma.$ActivityLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string | null
      name: string | null
      createdAt: Date
      updatedAt: Date
      emailVerified: Date | null
      image: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    projects<T extends User$projectsArgs<ExtArgs> = {}>(args?: Subset<T, User$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends User$commentsArgs<ExtArgs> = {}>(args?: Subset<T, User$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    activityLogs<T extends User$activityLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$activityLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly image: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.projects
   */
  export type User$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * User.comments
   */
  export type User$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * User.activityLogs
   */
  export type User$activityLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    where?: ActivityLogWhereInput
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    cursor?: ActivityLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ownerId: string | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ownerId: string | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    name: number
    description: number
    createdAt: number
    updatedAt: number
    ownerId: number
    _all: number
  }


  export type ProjectMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    ownerId?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    ownerId?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    ownerId?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: string
    name: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    ownerId: string
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ownerId?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    segments?: boolean | Project$segmentsArgs<ExtArgs>
    tms?: boolean | Project$tmsArgs<ExtArgs>
    glossaries?: boolean | Project$glossariesArgs<ExtArgs>
    languagePairs?: boolean | Project$languagePairsArgs<ExtArgs>
    fileUploads?: boolean | Project$fileUploadsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ownerId?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ownerId?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ownerId?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "createdAt" | "updatedAt" | "ownerId", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    segments?: boolean | Project$segmentsArgs<ExtArgs>
    tms?: boolean | Project$tmsArgs<ExtArgs>
    glossaries?: boolean | Project$glossariesArgs<ExtArgs>
    languagePairs?: boolean | Project$languagePairsArgs<ExtArgs>
    fileUploads?: boolean | Project$fileUploadsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      segments: Prisma.$SegmentPayload<ExtArgs>[]
      tms: Prisma.$TranslationMemoryPayload<ExtArgs>[]
      glossaries: Prisma.$GlossaryEntryPayload<ExtArgs>[]
      languagePairs: Prisma.$LanguagePairPayload<ExtArgs>[]
      fileUploads: Prisma.$FileUploadPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      createdAt: Date
      updatedAt: Date
      ownerId: string
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {ProjectUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
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
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    segments<T extends Project$segmentsArgs<ExtArgs> = {}>(args?: Subset<T, Project$segmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SegmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tms<T extends Project$tmsArgs<ExtArgs> = {}>(args?: Subset<T, Project$tmsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TranslationMemoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    glossaries<T extends Project$glossariesArgs<ExtArgs> = {}>(args?: Subset<T, Project$glossariesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GlossaryEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    languagePairs<T extends Project$languagePairsArgs<ExtArgs> = {}>(args?: Subset<T, Project$languagePairsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LanguagePairPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    fileUploads<T extends Project$fileUploadsArgs<ExtArgs> = {}>(args?: Subset<T, Project$fileUploadsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FileUploadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Project model
   */
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'String'>
    readonly name: FieldRef<"Project", 'String'>
    readonly description: FieldRef<"Project", 'String'>
    readonly createdAt: FieldRef<"Project", 'DateTime'>
    readonly updatedAt: FieldRef<"Project", 'DateTime'>
    readonly ownerId: FieldRef<"Project", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project updateManyAndReturn
   */
  export type ProjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Project.segments
   */
  export type Project$segmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Segment
     */
    select?: SegmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Segment
     */
    omit?: SegmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SegmentInclude<ExtArgs> | null
    where?: SegmentWhereInput
    orderBy?: SegmentOrderByWithRelationInput | SegmentOrderByWithRelationInput[]
    cursor?: SegmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SegmentScalarFieldEnum | SegmentScalarFieldEnum[]
  }

  /**
   * Project.tms
   */
  export type Project$tmsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranslationMemory
     */
    select?: TranslationMemorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TranslationMemory
     */
    omit?: TranslationMemoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranslationMemoryInclude<ExtArgs> | null
    where?: TranslationMemoryWhereInput
    orderBy?: TranslationMemoryOrderByWithRelationInput | TranslationMemoryOrderByWithRelationInput[]
    cursor?: TranslationMemoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TranslationMemoryScalarFieldEnum | TranslationMemoryScalarFieldEnum[]
  }

  /**
   * Project.glossaries
   */
  export type Project$glossariesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlossaryEntry
     */
    select?: GlossaryEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlossaryEntry
     */
    omit?: GlossaryEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlossaryEntryInclude<ExtArgs> | null
    where?: GlossaryEntryWhereInput
    orderBy?: GlossaryEntryOrderByWithRelationInput | GlossaryEntryOrderByWithRelationInput[]
    cursor?: GlossaryEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GlossaryEntryScalarFieldEnum | GlossaryEntryScalarFieldEnum[]
  }

  /**
   * Project.languagePairs
   */
  export type Project$languagePairsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LanguagePair
     */
    select?: LanguagePairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LanguagePair
     */
    omit?: LanguagePairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguagePairInclude<ExtArgs> | null
    where?: LanguagePairWhereInput
    orderBy?: LanguagePairOrderByWithRelationInput | LanguagePairOrderByWithRelationInput[]
    cursor?: LanguagePairWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LanguagePairScalarFieldEnum | LanguagePairScalarFieldEnum[]
  }

  /**
   * Project.fileUploads
   */
  export type Project$fileUploadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileUpload
     */
    select?: FileUploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileUpload
     */
    omit?: FileUploadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileUploadInclude<ExtArgs> | null
    where?: FileUploadWhereInput
    orderBy?: FileUploadOrderByWithRelationInput | FileUploadOrderByWithRelationInput[]
    cursor?: FileUploadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FileUploadScalarFieldEnum | FileUploadScalarFieldEnum[]
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model Segment
   */

  export type AggregateSegment = {
    _count: SegmentCountAggregateOutputType | null
    _avg: SegmentAvgAggregateOutputType | null
    _sum: SegmentSumAggregateOutputType | null
    _min: SegmentMinAggregateOutputType | null
    _max: SegmentMaxAggregateOutputType | null
  }

  export type SegmentAvgAggregateOutputType = {
    index: number | null
  }

  export type SegmentSumAggregateOutputType = {
    index: number | null
  }

  export type SegmentMinAggregateOutputType = {
    id: string | null
    index: number | null
    sourceText: string | null
    targetText: string | null
    status: $Enums.SegmentStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    projectId: string | null
  }

  export type SegmentMaxAggregateOutputType = {
    id: string | null
    index: number | null
    sourceText: string | null
    targetText: string | null
    status: $Enums.SegmentStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    projectId: string | null
  }

  export type SegmentCountAggregateOutputType = {
    id: number
    index: number
    sourceText: number
    targetText: number
    status: number
    createdAt: number
    updatedAt: number
    projectId: number
    _all: number
  }


  export type SegmentAvgAggregateInputType = {
    index?: true
  }

  export type SegmentSumAggregateInputType = {
    index?: true
  }

  export type SegmentMinAggregateInputType = {
    id?: true
    index?: true
    sourceText?: true
    targetText?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    projectId?: true
  }

  export type SegmentMaxAggregateInputType = {
    id?: true
    index?: true
    sourceText?: true
    targetText?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    projectId?: true
  }

  export type SegmentCountAggregateInputType = {
    id?: true
    index?: true
    sourceText?: true
    targetText?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    projectId?: true
    _all?: true
  }

  export type SegmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Segment to aggregate.
     */
    where?: SegmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Segments to fetch.
     */
    orderBy?: SegmentOrderByWithRelationInput | SegmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SegmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Segments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Segments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Segments
    **/
    _count?: true | SegmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SegmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SegmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SegmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SegmentMaxAggregateInputType
  }

  export type GetSegmentAggregateType<T extends SegmentAggregateArgs> = {
        [P in keyof T & keyof AggregateSegment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSegment[P]>
      : GetScalarType<T[P], AggregateSegment[P]>
  }




  export type SegmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SegmentWhereInput
    orderBy?: SegmentOrderByWithAggregationInput | SegmentOrderByWithAggregationInput[]
    by: SegmentScalarFieldEnum[] | SegmentScalarFieldEnum
    having?: SegmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SegmentCountAggregateInputType | true
    _avg?: SegmentAvgAggregateInputType
    _sum?: SegmentSumAggregateInputType
    _min?: SegmentMinAggregateInputType
    _max?: SegmentMaxAggregateInputType
  }

  export type SegmentGroupByOutputType = {
    id: string
    index: number
    sourceText: string
    targetText: string | null
    status: $Enums.SegmentStatus
    createdAt: Date
    updatedAt: Date
    projectId: string
    _count: SegmentCountAggregateOutputType | null
    _avg: SegmentAvgAggregateOutputType | null
    _sum: SegmentSumAggregateOutputType | null
    _min: SegmentMinAggregateOutputType | null
    _max: SegmentMaxAggregateOutputType | null
  }

  type GetSegmentGroupByPayload<T extends SegmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SegmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SegmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SegmentGroupByOutputType[P]>
            : GetScalarType<T[P], SegmentGroupByOutputType[P]>
        }
      >
    >


  export type SegmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    index?: boolean
    sourceText?: boolean
    targetText?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    projectId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    comments?: boolean | Segment$commentsArgs<ExtArgs>
    activityLogs?: boolean | Segment$activityLogsArgs<ExtArgs>
    tags?: boolean | Segment$tagsArgs<ExtArgs>
    segmentTags?: boolean | Segment$segmentTagsArgs<ExtArgs>
    _count?: boolean | SegmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["segment"]>

  export type SegmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    index?: boolean
    sourceText?: boolean
    targetText?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    projectId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["segment"]>

  export type SegmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    index?: boolean
    sourceText?: boolean
    targetText?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    projectId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["segment"]>

  export type SegmentSelectScalar = {
    id?: boolean
    index?: boolean
    sourceText?: boolean
    targetText?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    projectId?: boolean
  }

  export type SegmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "index" | "sourceText" | "targetText" | "status" | "createdAt" | "updatedAt" | "projectId", ExtArgs["result"]["segment"]>
  export type SegmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    comments?: boolean | Segment$commentsArgs<ExtArgs>
    activityLogs?: boolean | Segment$activityLogsArgs<ExtArgs>
    tags?: boolean | Segment$tagsArgs<ExtArgs>
    segmentTags?: boolean | Segment$segmentTagsArgs<ExtArgs>
    _count?: boolean | SegmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SegmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type SegmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $SegmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Segment"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      comments: Prisma.$CommentPayload<ExtArgs>[]
      activityLogs: Prisma.$ActivityLogPayload<ExtArgs>[]
      tags: Prisma.$TagPayload<ExtArgs>[]
      segmentTags: Prisma.$SegmentTagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      index: number
      sourceText: string
      targetText: string | null
      status: $Enums.SegmentStatus
      createdAt: Date
      updatedAt: Date
      projectId: string
    }, ExtArgs["result"]["segment"]>
    composites: {}
  }

  type SegmentGetPayload<S extends boolean | null | undefined | SegmentDefaultArgs> = $Result.GetResult<Prisma.$SegmentPayload, S>

  type SegmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SegmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SegmentCountAggregateInputType | true
    }

  export interface SegmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Segment'], meta: { name: 'Segment' } }
    /**
     * Find zero or one Segment that matches the filter.
     * @param {SegmentFindUniqueArgs} args - Arguments to find a Segment
     * @example
     * // Get one Segment
     * const segment = await prisma.segment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SegmentFindUniqueArgs>(args: SelectSubset<T, SegmentFindUniqueArgs<ExtArgs>>): Prisma__SegmentClient<$Result.GetResult<Prisma.$SegmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Segment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SegmentFindUniqueOrThrowArgs} args - Arguments to find a Segment
     * @example
     * // Get one Segment
     * const segment = await prisma.segment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SegmentFindUniqueOrThrowArgs>(args: SelectSubset<T, SegmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SegmentClient<$Result.GetResult<Prisma.$SegmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Segment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SegmentFindFirstArgs} args - Arguments to find a Segment
     * @example
     * // Get one Segment
     * const segment = await prisma.segment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SegmentFindFirstArgs>(args?: SelectSubset<T, SegmentFindFirstArgs<ExtArgs>>): Prisma__SegmentClient<$Result.GetResult<Prisma.$SegmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Segment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SegmentFindFirstOrThrowArgs} args - Arguments to find a Segment
     * @example
     * // Get one Segment
     * const segment = await prisma.segment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SegmentFindFirstOrThrowArgs>(args?: SelectSubset<T, SegmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__SegmentClient<$Result.GetResult<Prisma.$SegmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Segments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SegmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Segments
     * const segments = await prisma.segment.findMany()
     * 
     * // Get first 10 Segments
     * const segments = await prisma.segment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const segmentWithIdOnly = await prisma.segment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SegmentFindManyArgs>(args?: SelectSubset<T, SegmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SegmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Segment.
     * @param {SegmentCreateArgs} args - Arguments to create a Segment.
     * @example
     * // Create one Segment
     * const Segment = await prisma.segment.create({
     *   data: {
     *     // ... data to create a Segment
     *   }
     * })
     * 
     */
    create<T extends SegmentCreateArgs>(args: SelectSubset<T, SegmentCreateArgs<ExtArgs>>): Prisma__SegmentClient<$Result.GetResult<Prisma.$SegmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Segments.
     * @param {SegmentCreateManyArgs} args - Arguments to create many Segments.
     * @example
     * // Create many Segments
     * const segment = await prisma.segment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SegmentCreateManyArgs>(args?: SelectSubset<T, SegmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Segments and returns the data saved in the database.
     * @param {SegmentCreateManyAndReturnArgs} args - Arguments to create many Segments.
     * @example
     * // Create many Segments
     * const segment = await prisma.segment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Segments and only return the `id`
     * const segmentWithIdOnly = await prisma.segment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SegmentCreateManyAndReturnArgs>(args?: SelectSubset<T, SegmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SegmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Segment.
     * @param {SegmentDeleteArgs} args - Arguments to delete one Segment.
     * @example
     * // Delete one Segment
     * const Segment = await prisma.segment.delete({
     *   where: {
     *     // ... filter to delete one Segment
     *   }
     * })
     * 
     */
    delete<T extends SegmentDeleteArgs>(args: SelectSubset<T, SegmentDeleteArgs<ExtArgs>>): Prisma__SegmentClient<$Result.GetResult<Prisma.$SegmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Segment.
     * @param {SegmentUpdateArgs} args - Arguments to update one Segment.
     * @example
     * // Update one Segment
     * const segment = await prisma.segment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SegmentUpdateArgs>(args: SelectSubset<T, SegmentUpdateArgs<ExtArgs>>): Prisma__SegmentClient<$Result.GetResult<Prisma.$SegmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Segments.
     * @param {SegmentDeleteManyArgs} args - Arguments to filter Segments to delete.
     * @example
     * // Delete a few Segments
     * const { count } = await prisma.segment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SegmentDeleteManyArgs>(args?: SelectSubset<T, SegmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Segments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SegmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Segments
     * const segment = await prisma.segment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SegmentUpdateManyArgs>(args: SelectSubset<T, SegmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Segments and returns the data updated in the database.
     * @param {SegmentUpdateManyAndReturnArgs} args - Arguments to update many Segments.
     * @example
     * // Update many Segments
     * const segment = await prisma.segment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Segments and only return the `id`
     * const segmentWithIdOnly = await prisma.segment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SegmentUpdateManyAndReturnArgs>(args: SelectSubset<T, SegmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SegmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Segment.
     * @param {SegmentUpsertArgs} args - Arguments to update or create a Segment.
     * @example
     * // Update or create a Segment
     * const segment = await prisma.segment.upsert({
     *   create: {
     *     // ... data to create a Segment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Segment we want to update
     *   }
     * })
     */
    upsert<T extends SegmentUpsertArgs>(args: SelectSubset<T, SegmentUpsertArgs<ExtArgs>>): Prisma__SegmentClient<$Result.GetResult<Prisma.$SegmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Segments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SegmentCountArgs} args - Arguments to filter Segments to count.
     * @example
     * // Count the number of Segments
     * const count = await prisma.segment.count({
     *   where: {
     *     // ... the filter for the Segments we want to count
     *   }
     * })
    **/
    count<T extends SegmentCountArgs>(
      args?: Subset<T, SegmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SegmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Segment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SegmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SegmentAggregateArgs>(args: Subset<T, SegmentAggregateArgs>): Prisma.PrismaPromise<GetSegmentAggregateType<T>>

    /**
     * Group by Segment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SegmentGroupByArgs} args - Group by arguments.
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
      T extends SegmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SegmentGroupByArgs['orderBy'] }
        : { orderBy?: SegmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SegmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSegmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Segment model
   */
  readonly fields: SegmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Segment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SegmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    comments<T extends Segment$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Segment$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    activityLogs<T extends Segment$activityLogsArgs<ExtArgs> = {}>(args?: Subset<T, Segment$activityLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tags<T extends Segment$tagsArgs<ExtArgs> = {}>(args?: Subset<T, Segment$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    segmentTags<T extends Segment$segmentTagsArgs<ExtArgs> = {}>(args?: Subset<T, Segment$segmentTagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SegmentTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Segment model
   */
  interface SegmentFieldRefs {
    readonly id: FieldRef<"Segment", 'String'>
    readonly index: FieldRef<"Segment", 'Int'>
    readonly sourceText: FieldRef<"Segment", 'String'>
    readonly targetText: FieldRef<"Segment", 'String'>
    readonly status: FieldRef<"Segment", 'SegmentStatus'>
    readonly createdAt: FieldRef<"Segment", 'DateTime'>
    readonly updatedAt: FieldRef<"Segment", 'DateTime'>
    readonly projectId: FieldRef<"Segment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Segment findUnique
   */
  export type SegmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Segment
     */
    select?: SegmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Segment
     */
    omit?: SegmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SegmentInclude<ExtArgs> | null
    /**
     * Filter, which Segment to fetch.
     */
    where: SegmentWhereUniqueInput
  }

  /**
   * Segment findUniqueOrThrow
   */
  export type SegmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Segment
     */
    select?: SegmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Segment
     */
    omit?: SegmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SegmentInclude<ExtArgs> | null
    /**
     * Filter, which Segment to fetch.
     */
    where: SegmentWhereUniqueInput
  }

  /**
   * Segment findFirst
   */
  export type SegmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Segment
     */
    select?: SegmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Segment
     */
    omit?: SegmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SegmentInclude<ExtArgs> | null
    /**
     * Filter, which Segment to fetch.
     */
    where?: SegmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Segments to fetch.
     */
    orderBy?: SegmentOrderByWithRelationInput | SegmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Segments.
     */
    cursor?: SegmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Segments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Segments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Segments.
     */
    distinct?: SegmentScalarFieldEnum | SegmentScalarFieldEnum[]
  }

  /**
   * Segment findFirstOrThrow
   */
  export type SegmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Segment
     */
    select?: SegmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Segment
     */
    omit?: SegmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SegmentInclude<ExtArgs> | null
    /**
     * Filter, which Segment to fetch.
     */
    where?: SegmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Segments to fetch.
     */
    orderBy?: SegmentOrderByWithRelationInput | SegmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Segments.
     */
    cursor?: SegmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Segments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Segments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Segments.
     */
    distinct?: SegmentScalarFieldEnum | SegmentScalarFieldEnum[]
  }

  /**
   * Segment findMany
   */
  export type SegmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Segment
     */
    select?: SegmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Segment
     */
    omit?: SegmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SegmentInclude<ExtArgs> | null
    /**
     * Filter, which Segments to fetch.
     */
    where?: SegmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Segments to fetch.
     */
    orderBy?: SegmentOrderByWithRelationInput | SegmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Segments.
     */
    cursor?: SegmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Segments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Segments.
     */
    skip?: number
    distinct?: SegmentScalarFieldEnum | SegmentScalarFieldEnum[]
  }

  /**
   * Segment create
   */
  export type SegmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Segment
     */
    select?: SegmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Segment
     */
    omit?: SegmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SegmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Segment.
     */
    data: XOR<SegmentCreateInput, SegmentUncheckedCreateInput>
  }

  /**
   * Segment createMany
   */
  export type SegmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Segments.
     */
    data: SegmentCreateManyInput | SegmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Segment createManyAndReturn
   */
  export type SegmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Segment
     */
    select?: SegmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Segment
     */
    omit?: SegmentOmit<ExtArgs> | null
    /**
     * The data used to create many Segments.
     */
    data: SegmentCreateManyInput | SegmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SegmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Segment update
   */
  export type SegmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Segment
     */
    select?: SegmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Segment
     */
    omit?: SegmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SegmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Segment.
     */
    data: XOR<SegmentUpdateInput, SegmentUncheckedUpdateInput>
    /**
     * Choose, which Segment to update.
     */
    where: SegmentWhereUniqueInput
  }

  /**
   * Segment updateMany
   */
  export type SegmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Segments.
     */
    data: XOR<SegmentUpdateManyMutationInput, SegmentUncheckedUpdateManyInput>
    /**
     * Filter which Segments to update
     */
    where?: SegmentWhereInput
    /**
     * Limit how many Segments to update.
     */
    limit?: number
  }

  /**
   * Segment updateManyAndReturn
   */
  export type SegmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Segment
     */
    select?: SegmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Segment
     */
    omit?: SegmentOmit<ExtArgs> | null
    /**
     * The data used to update Segments.
     */
    data: XOR<SegmentUpdateManyMutationInput, SegmentUncheckedUpdateManyInput>
    /**
     * Filter which Segments to update
     */
    where?: SegmentWhereInput
    /**
     * Limit how many Segments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SegmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Segment upsert
   */
  export type SegmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Segment
     */
    select?: SegmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Segment
     */
    omit?: SegmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SegmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Segment to update in case it exists.
     */
    where: SegmentWhereUniqueInput
    /**
     * In case the Segment found by the `where` argument doesn't exist, create a new Segment with this data.
     */
    create: XOR<SegmentCreateInput, SegmentUncheckedCreateInput>
    /**
     * In case the Segment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SegmentUpdateInput, SegmentUncheckedUpdateInput>
  }

  /**
   * Segment delete
   */
  export type SegmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Segment
     */
    select?: SegmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Segment
     */
    omit?: SegmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SegmentInclude<ExtArgs> | null
    /**
     * Filter which Segment to delete.
     */
    where: SegmentWhereUniqueInput
  }

  /**
   * Segment deleteMany
   */
  export type SegmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Segments to delete
     */
    where?: SegmentWhereInput
    /**
     * Limit how many Segments to delete.
     */
    limit?: number
  }

  /**
   * Segment.comments
   */
  export type Segment$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Segment.activityLogs
   */
  export type Segment$activityLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    where?: ActivityLogWhereInput
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    cursor?: ActivityLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * Segment.tags
   */
  export type Segment$tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    where?: TagWhereInput
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    cursor?: TagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Segment.segmentTags
   */
  export type Segment$segmentTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SegmentTag
     */
    select?: SegmentTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SegmentTag
     */
    omit?: SegmentTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SegmentTagInclude<ExtArgs> | null
    where?: SegmentTagWhereInput
    orderBy?: SegmentTagOrderByWithRelationInput | SegmentTagOrderByWithRelationInput[]
    cursor?: SegmentTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SegmentTagScalarFieldEnum | SegmentTagScalarFieldEnum[]
  }

  /**
   * Segment without action
   */
  export type SegmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Segment
     */
    select?: SegmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Segment
     */
    omit?: SegmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SegmentInclude<ExtArgs> | null
  }


  /**
   * Model TranslationMemory
   */

  export type AggregateTranslationMemory = {
    _count: TranslationMemoryCountAggregateOutputType | null
    _avg: TranslationMemoryAvgAggregateOutputType | null
    _sum: TranslationMemorySumAggregateOutputType | null
    _min: TranslationMemoryMinAggregateOutputType | null
    _max: TranslationMemoryMaxAggregateOutputType | null
  }

  export type TranslationMemoryAvgAggregateOutputType = {
    score: number | null
  }

  export type TranslationMemorySumAggregateOutputType = {
    score: number | null
  }

  export type TranslationMemoryMinAggregateOutputType = {
    id: string | null
    sourceText: string | null
    targetText: string | null
    langPair: string | null
    score: number | null
    createdAt: Date | null
    projectId: string | null
  }

  export type TranslationMemoryMaxAggregateOutputType = {
    id: string | null
    sourceText: string | null
    targetText: string | null
    langPair: string | null
    score: number | null
    createdAt: Date | null
    projectId: string | null
  }

  export type TranslationMemoryCountAggregateOutputType = {
    id: number
    sourceText: number
    targetText: number
    langPair: number
    score: number
    createdAt: number
    projectId: number
    _all: number
  }


  export type TranslationMemoryAvgAggregateInputType = {
    score?: true
  }

  export type TranslationMemorySumAggregateInputType = {
    score?: true
  }

  export type TranslationMemoryMinAggregateInputType = {
    id?: true
    sourceText?: true
    targetText?: true
    langPair?: true
    score?: true
    createdAt?: true
    projectId?: true
  }

  export type TranslationMemoryMaxAggregateInputType = {
    id?: true
    sourceText?: true
    targetText?: true
    langPair?: true
    score?: true
    createdAt?: true
    projectId?: true
  }

  export type TranslationMemoryCountAggregateInputType = {
    id?: true
    sourceText?: true
    targetText?: true
    langPair?: true
    score?: true
    createdAt?: true
    projectId?: true
    _all?: true
  }

  export type TranslationMemoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TranslationMemory to aggregate.
     */
    where?: TranslationMemoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TranslationMemories to fetch.
     */
    orderBy?: TranslationMemoryOrderByWithRelationInput | TranslationMemoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TranslationMemoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TranslationMemories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TranslationMemories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TranslationMemories
    **/
    _count?: true | TranslationMemoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TranslationMemoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TranslationMemorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TranslationMemoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TranslationMemoryMaxAggregateInputType
  }

  export type GetTranslationMemoryAggregateType<T extends TranslationMemoryAggregateArgs> = {
        [P in keyof T & keyof AggregateTranslationMemory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTranslationMemory[P]>
      : GetScalarType<T[P], AggregateTranslationMemory[P]>
  }




  export type TranslationMemoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TranslationMemoryWhereInput
    orderBy?: TranslationMemoryOrderByWithAggregationInput | TranslationMemoryOrderByWithAggregationInput[]
    by: TranslationMemoryScalarFieldEnum[] | TranslationMemoryScalarFieldEnum
    having?: TranslationMemoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TranslationMemoryCountAggregateInputType | true
    _avg?: TranslationMemoryAvgAggregateInputType
    _sum?: TranslationMemorySumAggregateInputType
    _min?: TranslationMemoryMinAggregateInputType
    _max?: TranslationMemoryMaxAggregateInputType
  }

  export type TranslationMemoryGroupByOutputType = {
    id: string
    sourceText: string
    targetText: string
    langPair: string
    score: number
    createdAt: Date
    projectId: string
    _count: TranslationMemoryCountAggregateOutputType | null
    _avg: TranslationMemoryAvgAggregateOutputType | null
    _sum: TranslationMemorySumAggregateOutputType | null
    _min: TranslationMemoryMinAggregateOutputType | null
    _max: TranslationMemoryMaxAggregateOutputType | null
  }

  type GetTranslationMemoryGroupByPayload<T extends TranslationMemoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TranslationMemoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TranslationMemoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TranslationMemoryGroupByOutputType[P]>
            : GetScalarType<T[P], TranslationMemoryGroupByOutputType[P]>
        }
      >
    >


  export type TranslationMemorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sourceText?: boolean
    targetText?: boolean
    langPair?: boolean
    score?: boolean
    createdAt?: boolean
    projectId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["translationMemory"]>

  export type TranslationMemorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sourceText?: boolean
    targetText?: boolean
    langPair?: boolean
    score?: boolean
    createdAt?: boolean
    projectId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["translationMemory"]>

  export type TranslationMemorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sourceText?: boolean
    targetText?: boolean
    langPair?: boolean
    score?: boolean
    createdAt?: boolean
    projectId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["translationMemory"]>

  export type TranslationMemorySelectScalar = {
    id?: boolean
    sourceText?: boolean
    targetText?: boolean
    langPair?: boolean
    score?: boolean
    createdAt?: boolean
    projectId?: boolean
  }

  export type TranslationMemoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sourceText" | "targetText" | "langPair" | "score" | "createdAt" | "projectId", ExtArgs["result"]["translationMemory"]>
  export type TranslationMemoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type TranslationMemoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type TranslationMemoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $TranslationMemoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TranslationMemory"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sourceText: string
      targetText: string
      langPair: string
      score: number
      createdAt: Date
      projectId: string
    }, ExtArgs["result"]["translationMemory"]>
    composites: {}
  }

  type TranslationMemoryGetPayload<S extends boolean | null | undefined | TranslationMemoryDefaultArgs> = $Result.GetResult<Prisma.$TranslationMemoryPayload, S>

  type TranslationMemoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TranslationMemoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TranslationMemoryCountAggregateInputType | true
    }

  export interface TranslationMemoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TranslationMemory'], meta: { name: 'TranslationMemory' } }
    /**
     * Find zero or one TranslationMemory that matches the filter.
     * @param {TranslationMemoryFindUniqueArgs} args - Arguments to find a TranslationMemory
     * @example
     * // Get one TranslationMemory
     * const translationMemory = await prisma.translationMemory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TranslationMemoryFindUniqueArgs>(args: SelectSubset<T, TranslationMemoryFindUniqueArgs<ExtArgs>>): Prisma__TranslationMemoryClient<$Result.GetResult<Prisma.$TranslationMemoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TranslationMemory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TranslationMemoryFindUniqueOrThrowArgs} args - Arguments to find a TranslationMemory
     * @example
     * // Get one TranslationMemory
     * const translationMemory = await prisma.translationMemory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TranslationMemoryFindUniqueOrThrowArgs>(args: SelectSubset<T, TranslationMemoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TranslationMemoryClient<$Result.GetResult<Prisma.$TranslationMemoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TranslationMemory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranslationMemoryFindFirstArgs} args - Arguments to find a TranslationMemory
     * @example
     * // Get one TranslationMemory
     * const translationMemory = await prisma.translationMemory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TranslationMemoryFindFirstArgs>(args?: SelectSubset<T, TranslationMemoryFindFirstArgs<ExtArgs>>): Prisma__TranslationMemoryClient<$Result.GetResult<Prisma.$TranslationMemoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TranslationMemory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranslationMemoryFindFirstOrThrowArgs} args - Arguments to find a TranslationMemory
     * @example
     * // Get one TranslationMemory
     * const translationMemory = await prisma.translationMemory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TranslationMemoryFindFirstOrThrowArgs>(args?: SelectSubset<T, TranslationMemoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__TranslationMemoryClient<$Result.GetResult<Prisma.$TranslationMemoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TranslationMemories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranslationMemoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TranslationMemories
     * const translationMemories = await prisma.translationMemory.findMany()
     * 
     * // Get first 10 TranslationMemories
     * const translationMemories = await prisma.translationMemory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const translationMemoryWithIdOnly = await prisma.translationMemory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TranslationMemoryFindManyArgs>(args?: SelectSubset<T, TranslationMemoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TranslationMemoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TranslationMemory.
     * @param {TranslationMemoryCreateArgs} args - Arguments to create a TranslationMemory.
     * @example
     * // Create one TranslationMemory
     * const TranslationMemory = await prisma.translationMemory.create({
     *   data: {
     *     // ... data to create a TranslationMemory
     *   }
     * })
     * 
     */
    create<T extends TranslationMemoryCreateArgs>(args: SelectSubset<T, TranslationMemoryCreateArgs<ExtArgs>>): Prisma__TranslationMemoryClient<$Result.GetResult<Prisma.$TranslationMemoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TranslationMemories.
     * @param {TranslationMemoryCreateManyArgs} args - Arguments to create many TranslationMemories.
     * @example
     * // Create many TranslationMemories
     * const translationMemory = await prisma.translationMemory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TranslationMemoryCreateManyArgs>(args?: SelectSubset<T, TranslationMemoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TranslationMemories and returns the data saved in the database.
     * @param {TranslationMemoryCreateManyAndReturnArgs} args - Arguments to create many TranslationMemories.
     * @example
     * // Create many TranslationMemories
     * const translationMemory = await prisma.translationMemory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TranslationMemories and only return the `id`
     * const translationMemoryWithIdOnly = await prisma.translationMemory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TranslationMemoryCreateManyAndReturnArgs>(args?: SelectSubset<T, TranslationMemoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TranslationMemoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TranslationMemory.
     * @param {TranslationMemoryDeleteArgs} args - Arguments to delete one TranslationMemory.
     * @example
     * // Delete one TranslationMemory
     * const TranslationMemory = await prisma.translationMemory.delete({
     *   where: {
     *     // ... filter to delete one TranslationMemory
     *   }
     * })
     * 
     */
    delete<T extends TranslationMemoryDeleteArgs>(args: SelectSubset<T, TranslationMemoryDeleteArgs<ExtArgs>>): Prisma__TranslationMemoryClient<$Result.GetResult<Prisma.$TranslationMemoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TranslationMemory.
     * @param {TranslationMemoryUpdateArgs} args - Arguments to update one TranslationMemory.
     * @example
     * // Update one TranslationMemory
     * const translationMemory = await prisma.translationMemory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TranslationMemoryUpdateArgs>(args: SelectSubset<T, TranslationMemoryUpdateArgs<ExtArgs>>): Prisma__TranslationMemoryClient<$Result.GetResult<Prisma.$TranslationMemoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TranslationMemories.
     * @param {TranslationMemoryDeleteManyArgs} args - Arguments to filter TranslationMemories to delete.
     * @example
     * // Delete a few TranslationMemories
     * const { count } = await prisma.translationMemory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TranslationMemoryDeleteManyArgs>(args?: SelectSubset<T, TranslationMemoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TranslationMemories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranslationMemoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TranslationMemories
     * const translationMemory = await prisma.translationMemory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TranslationMemoryUpdateManyArgs>(args: SelectSubset<T, TranslationMemoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TranslationMemories and returns the data updated in the database.
     * @param {TranslationMemoryUpdateManyAndReturnArgs} args - Arguments to update many TranslationMemories.
     * @example
     * // Update many TranslationMemories
     * const translationMemory = await prisma.translationMemory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TranslationMemories and only return the `id`
     * const translationMemoryWithIdOnly = await prisma.translationMemory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TranslationMemoryUpdateManyAndReturnArgs>(args: SelectSubset<T, TranslationMemoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TranslationMemoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TranslationMemory.
     * @param {TranslationMemoryUpsertArgs} args - Arguments to update or create a TranslationMemory.
     * @example
     * // Update or create a TranslationMemory
     * const translationMemory = await prisma.translationMemory.upsert({
     *   create: {
     *     // ... data to create a TranslationMemory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TranslationMemory we want to update
     *   }
     * })
     */
    upsert<T extends TranslationMemoryUpsertArgs>(args: SelectSubset<T, TranslationMemoryUpsertArgs<ExtArgs>>): Prisma__TranslationMemoryClient<$Result.GetResult<Prisma.$TranslationMemoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TranslationMemories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranslationMemoryCountArgs} args - Arguments to filter TranslationMemories to count.
     * @example
     * // Count the number of TranslationMemories
     * const count = await prisma.translationMemory.count({
     *   where: {
     *     // ... the filter for the TranslationMemories we want to count
     *   }
     * })
    **/
    count<T extends TranslationMemoryCountArgs>(
      args?: Subset<T, TranslationMemoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TranslationMemoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TranslationMemory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranslationMemoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TranslationMemoryAggregateArgs>(args: Subset<T, TranslationMemoryAggregateArgs>): Prisma.PrismaPromise<GetTranslationMemoryAggregateType<T>>

    /**
     * Group by TranslationMemory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranslationMemoryGroupByArgs} args - Group by arguments.
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
      T extends TranslationMemoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TranslationMemoryGroupByArgs['orderBy'] }
        : { orderBy?: TranslationMemoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TranslationMemoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTranslationMemoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TranslationMemory model
   */
  readonly fields: TranslationMemoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TranslationMemory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TranslationMemoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TranslationMemory model
   */
  interface TranslationMemoryFieldRefs {
    readonly id: FieldRef<"TranslationMemory", 'String'>
    readonly sourceText: FieldRef<"TranslationMemory", 'String'>
    readonly targetText: FieldRef<"TranslationMemory", 'String'>
    readonly langPair: FieldRef<"TranslationMemory", 'String'>
    readonly score: FieldRef<"TranslationMemory", 'Int'>
    readonly createdAt: FieldRef<"TranslationMemory", 'DateTime'>
    readonly projectId: FieldRef<"TranslationMemory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TranslationMemory findUnique
   */
  export type TranslationMemoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranslationMemory
     */
    select?: TranslationMemorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TranslationMemory
     */
    omit?: TranslationMemoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranslationMemoryInclude<ExtArgs> | null
    /**
     * Filter, which TranslationMemory to fetch.
     */
    where: TranslationMemoryWhereUniqueInput
  }

  /**
   * TranslationMemory findUniqueOrThrow
   */
  export type TranslationMemoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranslationMemory
     */
    select?: TranslationMemorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TranslationMemory
     */
    omit?: TranslationMemoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranslationMemoryInclude<ExtArgs> | null
    /**
     * Filter, which TranslationMemory to fetch.
     */
    where: TranslationMemoryWhereUniqueInput
  }

  /**
   * TranslationMemory findFirst
   */
  export type TranslationMemoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranslationMemory
     */
    select?: TranslationMemorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TranslationMemory
     */
    omit?: TranslationMemoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranslationMemoryInclude<ExtArgs> | null
    /**
     * Filter, which TranslationMemory to fetch.
     */
    where?: TranslationMemoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TranslationMemories to fetch.
     */
    orderBy?: TranslationMemoryOrderByWithRelationInput | TranslationMemoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TranslationMemories.
     */
    cursor?: TranslationMemoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TranslationMemories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TranslationMemories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TranslationMemories.
     */
    distinct?: TranslationMemoryScalarFieldEnum | TranslationMemoryScalarFieldEnum[]
  }

  /**
   * TranslationMemory findFirstOrThrow
   */
  export type TranslationMemoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranslationMemory
     */
    select?: TranslationMemorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TranslationMemory
     */
    omit?: TranslationMemoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranslationMemoryInclude<ExtArgs> | null
    /**
     * Filter, which TranslationMemory to fetch.
     */
    where?: TranslationMemoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TranslationMemories to fetch.
     */
    orderBy?: TranslationMemoryOrderByWithRelationInput | TranslationMemoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TranslationMemories.
     */
    cursor?: TranslationMemoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TranslationMemories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TranslationMemories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TranslationMemories.
     */
    distinct?: TranslationMemoryScalarFieldEnum | TranslationMemoryScalarFieldEnum[]
  }

  /**
   * TranslationMemory findMany
   */
  export type TranslationMemoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranslationMemory
     */
    select?: TranslationMemorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TranslationMemory
     */
    omit?: TranslationMemoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranslationMemoryInclude<ExtArgs> | null
    /**
     * Filter, which TranslationMemories to fetch.
     */
    where?: TranslationMemoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TranslationMemories to fetch.
     */
    orderBy?: TranslationMemoryOrderByWithRelationInput | TranslationMemoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TranslationMemories.
     */
    cursor?: TranslationMemoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TranslationMemories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TranslationMemories.
     */
    skip?: number
    distinct?: TranslationMemoryScalarFieldEnum | TranslationMemoryScalarFieldEnum[]
  }

  /**
   * TranslationMemory create
   */
  export type TranslationMemoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranslationMemory
     */
    select?: TranslationMemorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TranslationMemory
     */
    omit?: TranslationMemoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranslationMemoryInclude<ExtArgs> | null
    /**
     * The data needed to create a TranslationMemory.
     */
    data: XOR<TranslationMemoryCreateInput, TranslationMemoryUncheckedCreateInput>
  }

  /**
   * TranslationMemory createMany
   */
  export type TranslationMemoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TranslationMemories.
     */
    data: TranslationMemoryCreateManyInput | TranslationMemoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TranslationMemory createManyAndReturn
   */
  export type TranslationMemoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranslationMemory
     */
    select?: TranslationMemorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TranslationMemory
     */
    omit?: TranslationMemoryOmit<ExtArgs> | null
    /**
     * The data used to create many TranslationMemories.
     */
    data: TranslationMemoryCreateManyInput | TranslationMemoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranslationMemoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TranslationMemory update
   */
  export type TranslationMemoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranslationMemory
     */
    select?: TranslationMemorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TranslationMemory
     */
    omit?: TranslationMemoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranslationMemoryInclude<ExtArgs> | null
    /**
     * The data needed to update a TranslationMemory.
     */
    data: XOR<TranslationMemoryUpdateInput, TranslationMemoryUncheckedUpdateInput>
    /**
     * Choose, which TranslationMemory to update.
     */
    where: TranslationMemoryWhereUniqueInput
  }

  /**
   * TranslationMemory updateMany
   */
  export type TranslationMemoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TranslationMemories.
     */
    data: XOR<TranslationMemoryUpdateManyMutationInput, TranslationMemoryUncheckedUpdateManyInput>
    /**
     * Filter which TranslationMemories to update
     */
    where?: TranslationMemoryWhereInput
    /**
     * Limit how many TranslationMemories to update.
     */
    limit?: number
  }

  /**
   * TranslationMemory updateManyAndReturn
   */
  export type TranslationMemoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranslationMemory
     */
    select?: TranslationMemorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TranslationMemory
     */
    omit?: TranslationMemoryOmit<ExtArgs> | null
    /**
     * The data used to update TranslationMemories.
     */
    data: XOR<TranslationMemoryUpdateManyMutationInput, TranslationMemoryUncheckedUpdateManyInput>
    /**
     * Filter which TranslationMemories to update
     */
    where?: TranslationMemoryWhereInput
    /**
     * Limit how many TranslationMemories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranslationMemoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TranslationMemory upsert
   */
  export type TranslationMemoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranslationMemory
     */
    select?: TranslationMemorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TranslationMemory
     */
    omit?: TranslationMemoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranslationMemoryInclude<ExtArgs> | null
    /**
     * The filter to search for the TranslationMemory to update in case it exists.
     */
    where: TranslationMemoryWhereUniqueInput
    /**
     * In case the TranslationMemory found by the `where` argument doesn't exist, create a new TranslationMemory with this data.
     */
    create: XOR<TranslationMemoryCreateInput, TranslationMemoryUncheckedCreateInput>
    /**
     * In case the TranslationMemory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TranslationMemoryUpdateInput, TranslationMemoryUncheckedUpdateInput>
  }

  /**
   * TranslationMemory delete
   */
  export type TranslationMemoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranslationMemory
     */
    select?: TranslationMemorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TranslationMemory
     */
    omit?: TranslationMemoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranslationMemoryInclude<ExtArgs> | null
    /**
     * Filter which TranslationMemory to delete.
     */
    where: TranslationMemoryWhereUniqueInput
  }

  /**
   * TranslationMemory deleteMany
   */
  export type TranslationMemoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TranslationMemories to delete
     */
    where?: TranslationMemoryWhereInput
    /**
     * Limit how many TranslationMemories to delete.
     */
    limit?: number
  }

  /**
   * TranslationMemory without action
   */
  export type TranslationMemoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranslationMemory
     */
    select?: TranslationMemorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TranslationMemory
     */
    omit?: TranslationMemoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranslationMemoryInclude<ExtArgs> | null
  }


  /**
   * Model GlossaryEntry
   */

  export type AggregateGlossaryEntry = {
    _count: GlossaryEntryCountAggregateOutputType | null
    _min: GlossaryEntryMinAggregateOutputType | null
    _max: GlossaryEntryMaxAggregateOutputType | null
  }

  export type GlossaryEntryMinAggregateOutputType = {
    id: string | null
    term: string | null
    definition: string | null
    sourceLang: string | null
    targetLang: string | null
    translation: string | null
    createdAt: Date | null
    projectId: string | null
  }

  export type GlossaryEntryMaxAggregateOutputType = {
    id: string | null
    term: string | null
    definition: string | null
    sourceLang: string | null
    targetLang: string | null
    translation: string | null
    createdAt: Date | null
    projectId: string | null
  }

  export type GlossaryEntryCountAggregateOutputType = {
    id: number
    term: number
    definition: number
    sourceLang: number
    targetLang: number
    translation: number
    createdAt: number
    projectId: number
    _all: number
  }


  export type GlossaryEntryMinAggregateInputType = {
    id?: true
    term?: true
    definition?: true
    sourceLang?: true
    targetLang?: true
    translation?: true
    createdAt?: true
    projectId?: true
  }

  export type GlossaryEntryMaxAggregateInputType = {
    id?: true
    term?: true
    definition?: true
    sourceLang?: true
    targetLang?: true
    translation?: true
    createdAt?: true
    projectId?: true
  }

  export type GlossaryEntryCountAggregateInputType = {
    id?: true
    term?: true
    definition?: true
    sourceLang?: true
    targetLang?: true
    translation?: true
    createdAt?: true
    projectId?: true
    _all?: true
  }

  export type GlossaryEntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GlossaryEntry to aggregate.
     */
    where?: GlossaryEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GlossaryEntries to fetch.
     */
    orderBy?: GlossaryEntryOrderByWithRelationInput | GlossaryEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GlossaryEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GlossaryEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GlossaryEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GlossaryEntries
    **/
    _count?: true | GlossaryEntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GlossaryEntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GlossaryEntryMaxAggregateInputType
  }

  export type GetGlossaryEntryAggregateType<T extends GlossaryEntryAggregateArgs> = {
        [P in keyof T & keyof AggregateGlossaryEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGlossaryEntry[P]>
      : GetScalarType<T[P], AggregateGlossaryEntry[P]>
  }




  export type GlossaryEntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GlossaryEntryWhereInput
    orderBy?: GlossaryEntryOrderByWithAggregationInput | GlossaryEntryOrderByWithAggregationInput[]
    by: GlossaryEntryScalarFieldEnum[] | GlossaryEntryScalarFieldEnum
    having?: GlossaryEntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GlossaryEntryCountAggregateInputType | true
    _min?: GlossaryEntryMinAggregateInputType
    _max?: GlossaryEntryMaxAggregateInputType
  }

  export type GlossaryEntryGroupByOutputType = {
    id: string
    term: string
    definition: string | null
    sourceLang: string
    targetLang: string
    translation: string | null
    createdAt: Date
    projectId: string
    _count: GlossaryEntryCountAggregateOutputType | null
    _min: GlossaryEntryMinAggregateOutputType | null
    _max: GlossaryEntryMaxAggregateOutputType | null
  }

  type GetGlossaryEntryGroupByPayload<T extends GlossaryEntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GlossaryEntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GlossaryEntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GlossaryEntryGroupByOutputType[P]>
            : GetScalarType<T[P], GlossaryEntryGroupByOutputType[P]>
        }
      >
    >


  export type GlossaryEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    term?: boolean
    definition?: boolean
    sourceLang?: boolean
    targetLang?: boolean
    translation?: boolean
    createdAt?: boolean
    projectId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    tags?: boolean | GlossaryEntry$tagsArgs<ExtArgs>
    glossaryEntryTags?: boolean | GlossaryEntry$glossaryEntryTagsArgs<ExtArgs>
    _count?: boolean | GlossaryEntryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["glossaryEntry"]>

  export type GlossaryEntrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    term?: boolean
    definition?: boolean
    sourceLang?: boolean
    targetLang?: boolean
    translation?: boolean
    createdAt?: boolean
    projectId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["glossaryEntry"]>

  export type GlossaryEntrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    term?: boolean
    definition?: boolean
    sourceLang?: boolean
    targetLang?: boolean
    translation?: boolean
    createdAt?: boolean
    projectId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["glossaryEntry"]>

  export type GlossaryEntrySelectScalar = {
    id?: boolean
    term?: boolean
    definition?: boolean
    sourceLang?: boolean
    targetLang?: boolean
    translation?: boolean
    createdAt?: boolean
    projectId?: boolean
  }

  export type GlossaryEntryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "term" | "definition" | "sourceLang" | "targetLang" | "translation" | "createdAt" | "projectId", ExtArgs["result"]["glossaryEntry"]>
  export type GlossaryEntryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    tags?: boolean | GlossaryEntry$tagsArgs<ExtArgs>
    glossaryEntryTags?: boolean | GlossaryEntry$glossaryEntryTagsArgs<ExtArgs>
    _count?: boolean | GlossaryEntryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GlossaryEntryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type GlossaryEntryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $GlossaryEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GlossaryEntry"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      tags: Prisma.$TagPayload<ExtArgs>[]
      glossaryEntryTags: Prisma.$GlossaryEntryTagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      term: string
      definition: string | null
      sourceLang: string
      targetLang: string
      translation: string | null
      createdAt: Date
      projectId: string
    }, ExtArgs["result"]["glossaryEntry"]>
    composites: {}
  }

  type GlossaryEntryGetPayload<S extends boolean | null | undefined | GlossaryEntryDefaultArgs> = $Result.GetResult<Prisma.$GlossaryEntryPayload, S>

  type GlossaryEntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GlossaryEntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GlossaryEntryCountAggregateInputType | true
    }

  export interface GlossaryEntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GlossaryEntry'], meta: { name: 'GlossaryEntry' } }
    /**
     * Find zero or one GlossaryEntry that matches the filter.
     * @param {GlossaryEntryFindUniqueArgs} args - Arguments to find a GlossaryEntry
     * @example
     * // Get one GlossaryEntry
     * const glossaryEntry = await prisma.glossaryEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GlossaryEntryFindUniqueArgs>(args: SelectSubset<T, GlossaryEntryFindUniqueArgs<ExtArgs>>): Prisma__GlossaryEntryClient<$Result.GetResult<Prisma.$GlossaryEntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GlossaryEntry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GlossaryEntryFindUniqueOrThrowArgs} args - Arguments to find a GlossaryEntry
     * @example
     * // Get one GlossaryEntry
     * const glossaryEntry = await prisma.glossaryEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GlossaryEntryFindUniqueOrThrowArgs>(args: SelectSubset<T, GlossaryEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GlossaryEntryClient<$Result.GetResult<Prisma.$GlossaryEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GlossaryEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlossaryEntryFindFirstArgs} args - Arguments to find a GlossaryEntry
     * @example
     * // Get one GlossaryEntry
     * const glossaryEntry = await prisma.glossaryEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GlossaryEntryFindFirstArgs>(args?: SelectSubset<T, GlossaryEntryFindFirstArgs<ExtArgs>>): Prisma__GlossaryEntryClient<$Result.GetResult<Prisma.$GlossaryEntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GlossaryEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlossaryEntryFindFirstOrThrowArgs} args - Arguments to find a GlossaryEntry
     * @example
     * // Get one GlossaryEntry
     * const glossaryEntry = await prisma.glossaryEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GlossaryEntryFindFirstOrThrowArgs>(args?: SelectSubset<T, GlossaryEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma__GlossaryEntryClient<$Result.GetResult<Prisma.$GlossaryEntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GlossaryEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlossaryEntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GlossaryEntries
     * const glossaryEntries = await prisma.glossaryEntry.findMany()
     * 
     * // Get first 10 GlossaryEntries
     * const glossaryEntries = await prisma.glossaryEntry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const glossaryEntryWithIdOnly = await prisma.glossaryEntry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GlossaryEntryFindManyArgs>(args?: SelectSubset<T, GlossaryEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GlossaryEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GlossaryEntry.
     * @param {GlossaryEntryCreateArgs} args - Arguments to create a GlossaryEntry.
     * @example
     * // Create one GlossaryEntry
     * const GlossaryEntry = await prisma.glossaryEntry.create({
     *   data: {
     *     // ... data to create a GlossaryEntry
     *   }
     * })
     * 
     */
    create<T extends GlossaryEntryCreateArgs>(args: SelectSubset<T, GlossaryEntryCreateArgs<ExtArgs>>): Prisma__GlossaryEntryClient<$Result.GetResult<Prisma.$GlossaryEntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GlossaryEntries.
     * @param {GlossaryEntryCreateManyArgs} args - Arguments to create many GlossaryEntries.
     * @example
     * // Create many GlossaryEntries
     * const glossaryEntry = await prisma.glossaryEntry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GlossaryEntryCreateManyArgs>(args?: SelectSubset<T, GlossaryEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GlossaryEntries and returns the data saved in the database.
     * @param {GlossaryEntryCreateManyAndReturnArgs} args - Arguments to create many GlossaryEntries.
     * @example
     * // Create many GlossaryEntries
     * const glossaryEntry = await prisma.glossaryEntry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GlossaryEntries and only return the `id`
     * const glossaryEntryWithIdOnly = await prisma.glossaryEntry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GlossaryEntryCreateManyAndReturnArgs>(args?: SelectSubset<T, GlossaryEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GlossaryEntryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GlossaryEntry.
     * @param {GlossaryEntryDeleteArgs} args - Arguments to delete one GlossaryEntry.
     * @example
     * // Delete one GlossaryEntry
     * const GlossaryEntry = await prisma.glossaryEntry.delete({
     *   where: {
     *     // ... filter to delete one GlossaryEntry
     *   }
     * })
     * 
     */
    delete<T extends GlossaryEntryDeleteArgs>(args: SelectSubset<T, GlossaryEntryDeleteArgs<ExtArgs>>): Prisma__GlossaryEntryClient<$Result.GetResult<Prisma.$GlossaryEntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GlossaryEntry.
     * @param {GlossaryEntryUpdateArgs} args - Arguments to update one GlossaryEntry.
     * @example
     * // Update one GlossaryEntry
     * const glossaryEntry = await prisma.glossaryEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GlossaryEntryUpdateArgs>(args: SelectSubset<T, GlossaryEntryUpdateArgs<ExtArgs>>): Prisma__GlossaryEntryClient<$Result.GetResult<Prisma.$GlossaryEntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GlossaryEntries.
     * @param {GlossaryEntryDeleteManyArgs} args - Arguments to filter GlossaryEntries to delete.
     * @example
     * // Delete a few GlossaryEntries
     * const { count } = await prisma.glossaryEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GlossaryEntryDeleteManyArgs>(args?: SelectSubset<T, GlossaryEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GlossaryEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlossaryEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GlossaryEntries
     * const glossaryEntry = await prisma.glossaryEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GlossaryEntryUpdateManyArgs>(args: SelectSubset<T, GlossaryEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GlossaryEntries and returns the data updated in the database.
     * @param {GlossaryEntryUpdateManyAndReturnArgs} args - Arguments to update many GlossaryEntries.
     * @example
     * // Update many GlossaryEntries
     * const glossaryEntry = await prisma.glossaryEntry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GlossaryEntries and only return the `id`
     * const glossaryEntryWithIdOnly = await prisma.glossaryEntry.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GlossaryEntryUpdateManyAndReturnArgs>(args: SelectSubset<T, GlossaryEntryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GlossaryEntryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GlossaryEntry.
     * @param {GlossaryEntryUpsertArgs} args - Arguments to update or create a GlossaryEntry.
     * @example
     * // Update or create a GlossaryEntry
     * const glossaryEntry = await prisma.glossaryEntry.upsert({
     *   create: {
     *     // ... data to create a GlossaryEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GlossaryEntry we want to update
     *   }
     * })
     */
    upsert<T extends GlossaryEntryUpsertArgs>(args: SelectSubset<T, GlossaryEntryUpsertArgs<ExtArgs>>): Prisma__GlossaryEntryClient<$Result.GetResult<Prisma.$GlossaryEntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GlossaryEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlossaryEntryCountArgs} args - Arguments to filter GlossaryEntries to count.
     * @example
     * // Count the number of GlossaryEntries
     * const count = await prisma.glossaryEntry.count({
     *   where: {
     *     // ... the filter for the GlossaryEntries we want to count
     *   }
     * })
    **/
    count<T extends GlossaryEntryCountArgs>(
      args?: Subset<T, GlossaryEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GlossaryEntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GlossaryEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlossaryEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GlossaryEntryAggregateArgs>(args: Subset<T, GlossaryEntryAggregateArgs>): Prisma.PrismaPromise<GetGlossaryEntryAggregateType<T>>

    /**
     * Group by GlossaryEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlossaryEntryGroupByArgs} args - Group by arguments.
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
      T extends GlossaryEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GlossaryEntryGroupByArgs['orderBy'] }
        : { orderBy?: GlossaryEntryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GlossaryEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGlossaryEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GlossaryEntry model
   */
  readonly fields: GlossaryEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GlossaryEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GlossaryEntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tags<T extends GlossaryEntry$tagsArgs<ExtArgs> = {}>(args?: Subset<T, GlossaryEntry$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    glossaryEntryTags<T extends GlossaryEntry$glossaryEntryTagsArgs<ExtArgs> = {}>(args?: Subset<T, GlossaryEntry$glossaryEntryTagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GlossaryEntryTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the GlossaryEntry model
   */
  interface GlossaryEntryFieldRefs {
    readonly id: FieldRef<"GlossaryEntry", 'String'>
    readonly term: FieldRef<"GlossaryEntry", 'String'>
    readonly definition: FieldRef<"GlossaryEntry", 'String'>
    readonly sourceLang: FieldRef<"GlossaryEntry", 'String'>
    readonly targetLang: FieldRef<"GlossaryEntry", 'String'>
    readonly translation: FieldRef<"GlossaryEntry", 'String'>
    readonly createdAt: FieldRef<"GlossaryEntry", 'DateTime'>
    readonly projectId: FieldRef<"GlossaryEntry", 'String'>
  }
    

  // Custom InputTypes
  /**
   * GlossaryEntry findUnique
   */
  export type GlossaryEntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlossaryEntry
     */
    select?: GlossaryEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlossaryEntry
     */
    omit?: GlossaryEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlossaryEntryInclude<ExtArgs> | null
    /**
     * Filter, which GlossaryEntry to fetch.
     */
    where: GlossaryEntryWhereUniqueInput
  }

  /**
   * GlossaryEntry findUniqueOrThrow
   */
  export type GlossaryEntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlossaryEntry
     */
    select?: GlossaryEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlossaryEntry
     */
    omit?: GlossaryEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlossaryEntryInclude<ExtArgs> | null
    /**
     * Filter, which GlossaryEntry to fetch.
     */
    where: GlossaryEntryWhereUniqueInput
  }

  /**
   * GlossaryEntry findFirst
   */
  export type GlossaryEntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlossaryEntry
     */
    select?: GlossaryEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlossaryEntry
     */
    omit?: GlossaryEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlossaryEntryInclude<ExtArgs> | null
    /**
     * Filter, which GlossaryEntry to fetch.
     */
    where?: GlossaryEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GlossaryEntries to fetch.
     */
    orderBy?: GlossaryEntryOrderByWithRelationInput | GlossaryEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GlossaryEntries.
     */
    cursor?: GlossaryEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GlossaryEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GlossaryEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GlossaryEntries.
     */
    distinct?: GlossaryEntryScalarFieldEnum | GlossaryEntryScalarFieldEnum[]
  }

  /**
   * GlossaryEntry findFirstOrThrow
   */
  export type GlossaryEntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlossaryEntry
     */
    select?: GlossaryEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlossaryEntry
     */
    omit?: GlossaryEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlossaryEntryInclude<ExtArgs> | null
    /**
     * Filter, which GlossaryEntry to fetch.
     */
    where?: GlossaryEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GlossaryEntries to fetch.
     */
    orderBy?: GlossaryEntryOrderByWithRelationInput | GlossaryEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GlossaryEntries.
     */
    cursor?: GlossaryEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GlossaryEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GlossaryEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GlossaryEntries.
     */
    distinct?: GlossaryEntryScalarFieldEnum | GlossaryEntryScalarFieldEnum[]
  }

  /**
   * GlossaryEntry findMany
   */
  export type GlossaryEntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlossaryEntry
     */
    select?: GlossaryEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlossaryEntry
     */
    omit?: GlossaryEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlossaryEntryInclude<ExtArgs> | null
    /**
     * Filter, which GlossaryEntries to fetch.
     */
    where?: GlossaryEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GlossaryEntries to fetch.
     */
    orderBy?: GlossaryEntryOrderByWithRelationInput | GlossaryEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GlossaryEntries.
     */
    cursor?: GlossaryEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GlossaryEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GlossaryEntries.
     */
    skip?: number
    distinct?: GlossaryEntryScalarFieldEnum | GlossaryEntryScalarFieldEnum[]
  }

  /**
   * GlossaryEntry create
   */
  export type GlossaryEntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlossaryEntry
     */
    select?: GlossaryEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlossaryEntry
     */
    omit?: GlossaryEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlossaryEntryInclude<ExtArgs> | null
    /**
     * The data needed to create a GlossaryEntry.
     */
    data: XOR<GlossaryEntryCreateInput, GlossaryEntryUncheckedCreateInput>
  }

  /**
   * GlossaryEntry createMany
   */
  export type GlossaryEntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GlossaryEntries.
     */
    data: GlossaryEntryCreateManyInput | GlossaryEntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GlossaryEntry createManyAndReturn
   */
  export type GlossaryEntryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlossaryEntry
     */
    select?: GlossaryEntrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GlossaryEntry
     */
    omit?: GlossaryEntryOmit<ExtArgs> | null
    /**
     * The data used to create many GlossaryEntries.
     */
    data: GlossaryEntryCreateManyInput | GlossaryEntryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlossaryEntryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GlossaryEntry update
   */
  export type GlossaryEntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlossaryEntry
     */
    select?: GlossaryEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlossaryEntry
     */
    omit?: GlossaryEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlossaryEntryInclude<ExtArgs> | null
    /**
     * The data needed to update a GlossaryEntry.
     */
    data: XOR<GlossaryEntryUpdateInput, GlossaryEntryUncheckedUpdateInput>
    /**
     * Choose, which GlossaryEntry to update.
     */
    where: GlossaryEntryWhereUniqueInput
  }

  /**
   * GlossaryEntry updateMany
   */
  export type GlossaryEntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GlossaryEntries.
     */
    data: XOR<GlossaryEntryUpdateManyMutationInput, GlossaryEntryUncheckedUpdateManyInput>
    /**
     * Filter which GlossaryEntries to update
     */
    where?: GlossaryEntryWhereInput
    /**
     * Limit how many GlossaryEntries to update.
     */
    limit?: number
  }

  /**
   * GlossaryEntry updateManyAndReturn
   */
  export type GlossaryEntryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlossaryEntry
     */
    select?: GlossaryEntrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GlossaryEntry
     */
    omit?: GlossaryEntryOmit<ExtArgs> | null
    /**
     * The data used to update GlossaryEntries.
     */
    data: XOR<GlossaryEntryUpdateManyMutationInput, GlossaryEntryUncheckedUpdateManyInput>
    /**
     * Filter which GlossaryEntries to update
     */
    where?: GlossaryEntryWhereInput
    /**
     * Limit how many GlossaryEntries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlossaryEntryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GlossaryEntry upsert
   */
  export type GlossaryEntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlossaryEntry
     */
    select?: GlossaryEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlossaryEntry
     */
    omit?: GlossaryEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlossaryEntryInclude<ExtArgs> | null
    /**
     * The filter to search for the GlossaryEntry to update in case it exists.
     */
    where: GlossaryEntryWhereUniqueInput
    /**
     * In case the GlossaryEntry found by the `where` argument doesn't exist, create a new GlossaryEntry with this data.
     */
    create: XOR<GlossaryEntryCreateInput, GlossaryEntryUncheckedCreateInput>
    /**
     * In case the GlossaryEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GlossaryEntryUpdateInput, GlossaryEntryUncheckedUpdateInput>
  }

  /**
   * GlossaryEntry delete
   */
  export type GlossaryEntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlossaryEntry
     */
    select?: GlossaryEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlossaryEntry
     */
    omit?: GlossaryEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlossaryEntryInclude<ExtArgs> | null
    /**
     * Filter which GlossaryEntry to delete.
     */
    where: GlossaryEntryWhereUniqueInput
  }

  /**
   * GlossaryEntry deleteMany
   */
  export type GlossaryEntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GlossaryEntries to delete
     */
    where?: GlossaryEntryWhereInput
    /**
     * Limit how many GlossaryEntries to delete.
     */
    limit?: number
  }

  /**
   * GlossaryEntry.tags
   */
  export type GlossaryEntry$tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    where?: TagWhereInput
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    cursor?: TagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * GlossaryEntry.glossaryEntryTags
   */
  export type GlossaryEntry$glossaryEntryTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlossaryEntryTag
     */
    select?: GlossaryEntryTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlossaryEntryTag
     */
    omit?: GlossaryEntryTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlossaryEntryTagInclude<ExtArgs> | null
    where?: GlossaryEntryTagWhereInput
    orderBy?: GlossaryEntryTagOrderByWithRelationInput | GlossaryEntryTagOrderByWithRelationInput[]
    cursor?: GlossaryEntryTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GlossaryEntryTagScalarFieldEnum | GlossaryEntryTagScalarFieldEnum[]
  }

  /**
   * GlossaryEntry without action
   */
  export type GlossaryEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlossaryEntry
     */
    select?: GlossaryEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlossaryEntry
     */
    omit?: GlossaryEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlossaryEntryInclude<ExtArgs> | null
  }


  /**
   * Model Comment
   */

  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentMinAggregateOutputType = {
    id: string | null
    content: string | null
    createdAt: Date | null
    authorId: string | null
    segmentId: string | null
  }

  export type CommentMaxAggregateOutputType = {
    id: string | null
    content: string | null
    createdAt: Date | null
    authorId: string | null
    segmentId: string | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    content: number
    createdAt: number
    authorId: number
    segmentId: number
    _all: number
  }


  export type CommentMinAggregateInputType = {
    id?: true
    content?: true
    createdAt?: true
    authorId?: true
    segmentId?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    content?: true
    createdAt?: true
    authorId?: true
    segmentId?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    content?: true
    createdAt?: true
    authorId?: true
    segmentId?: true
    _all?: true
  }

  export type CommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comment to aggregate.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }




  export type CommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithAggregationInput | CommentOrderByWithAggregationInput[]
    by: CommentScalarFieldEnum[] | CommentScalarFieldEnum
    having?: CommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }

  export type CommentGroupByOutputType = {
    id: string
    content: string
    createdAt: Date
    authorId: string
    segmentId: string
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      >
    >


  export type CommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    createdAt?: boolean
    authorId?: boolean
    segmentId?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    segment?: boolean | SegmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    createdAt?: boolean
    authorId?: boolean
    segmentId?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    segment?: boolean | SegmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    createdAt?: boolean
    authorId?: boolean
    segmentId?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    segment?: boolean | SegmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectScalar = {
    id?: boolean
    content?: boolean
    createdAt?: boolean
    authorId?: boolean
    segmentId?: boolean
  }

  export type CommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "createdAt" | "authorId" | "segmentId", ExtArgs["result"]["comment"]>
  export type CommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    segment?: boolean | SegmentDefaultArgs<ExtArgs>
  }
  export type CommentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    segment?: boolean | SegmentDefaultArgs<ExtArgs>
  }
  export type CommentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    segment?: boolean | SegmentDefaultArgs<ExtArgs>
  }

  export type $CommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comment"
    objects: {
      author: Prisma.$UserPayload<ExtArgs>
      segment: Prisma.$SegmentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string
      createdAt: Date
      authorId: string
      segmentId: string
    }, ExtArgs["result"]["comment"]>
    composites: {}
  }

  type CommentGetPayload<S extends boolean | null | undefined | CommentDefaultArgs> = $Result.GetResult<Prisma.$CommentPayload, S>

  type CommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentCountAggregateInputType | true
    }

  export interface CommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comment'], meta: { name: 'Comment' } }
    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentFindUniqueArgs>(args: SelectSubset<T, CommentFindUniqueArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentFindFirstArgs>(args?: SelectSubset<T, CommentFindFirstArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommentFindManyArgs>(args?: SelectSubset<T, CommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
     */
    create<T extends CommentCreateArgs>(args: SelectSubset<T, CommentCreateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentCreateManyArgs>(args?: SelectSubset<T, CommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comments and returns the data saved in the database.
     * @param {CommentCreateManyAndReturnArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommentCreateManyAndReturnArgs>(args?: SelectSubset<T, CommentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
     */
    delete<T extends CommentDeleteArgs>(args: SelectSubset<T, CommentDeleteArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentUpdateArgs>(args: SelectSubset<T, CommentUpdateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentDeleteManyArgs>(args?: SelectSubset<T, CommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentUpdateManyArgs>(args: SelectSubset<T, CommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments and returns the data updated in the database.
     * @param {CommentUpdateManyAndReturnArgs} args - Arguments to update many Comments.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CommentUpdateManyAndReturnArgs>(args: SelectSubset<T, CommentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
     */
    upsert<T extends CommentUpsertArgs>(args: SelectSubset<T, CommentUpsertArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): Prisma.PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
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
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comment model
   */
  readonly fields: CommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    segment<T extends SegmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SegmentDefaultArgs<ExtArgs>>): Prisma__SegmentClient<$Result.GetResult<Prisma.$SegmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Comment model
   */
  interface CommentFieldRefs {
    readonly id: FieldRef<"Comment", 'String'>
    readonly content: FieldRef<"Comment", 'String'>
    readonly createdAt: FieldRef<"Comment", 'DateTime'>
    readonly authorId: FieldRef<"Comment", 'String'>
    readonly segmentId: FieldRef<"Comment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Comment findUnique
   */
  export type CommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findUniqueOrThrow
   */
  export type CommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findFirst
   */
  export type CommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findFirstOrThrow
   */
  export type CommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findMany
   */
  export type CommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment create
   */
  export type CommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to create a Comment.
     */
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>
  }

  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comment createManyAndReturn
   */
  export type CommentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment update
   */
  export type CommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to update a Comment.
     */
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
    /**
     * Choose, which Comment to update.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
  }

  /**
   * Comment updateManyAndReturn
   */
  export type CommentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment upsert
   */
  export type CommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The filter to search for the Comment to update in case it exists.
     */
    where: CommentWhereUniqueInput
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     */
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
  }

  /**
   * Comment delete
   */
  export type CommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter which Comment to delete.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to delete.
     */
    limit?: number
  }

  /**
   * Comment without action
   */
  export type CommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
  }


  /**
   * Model ActivityLog
   */

  export type AggregateActivityLog = {
    _count: ActivityLogCountAggregateOutputType | null
    _min: ActivityLogMinAggregateOutputType | null
    _max: ActivityLogMaxAggregateOutputType | null
  }

  export type ActivityLogMinAggregateOutputType = {
    id: string | null
    action: string | null
    detail: string | null
    createdAt: Date | null
    userId: string | null
    segmentId: string | null
  }

  export type ActivityLogMaxAggregateOutputType = {
    id: string | null
    action: string | null
    detail: string | null
    createdAt: Date | null
    userId: string | null
    segmentId: string | null
  }

  export type ActivityLogCountAggregateOutputType = {
    id: number
    action: number
    detail: number
    createdAt: number
    userId: number
    segmentId: number
    _all: number
  }


  export type ActivityLogMinAggregateInputType = {
    id?: true
    action?: true
    detail?: true
    createdAt?: true
    userId?: true
    segmentId?: true
  }

  export type ActivityLogMaxAggregateInputType = {
    id?: true
    action?: true
    detail?: true
    createdAt?: true
    userId?: true
    segmentId?: true
  }

  export type ActivityLogCountAggregateInputType = {
    id?: true
    action?: true
    detail?: true
    createdAt?: true
    userId?: true
    segmentId?: true
    _all?: true
  }

  export type ActivityLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActivityLog to aggregate.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ActivityLogs
    **/
    _count?: true | ActivityLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActivityLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActivityLogMaxAggregateInputType
  }

  export type GetActivityLogAggregateType<T extends ActivityLogAggregateArgs> = {
        [P in keyof T & keyof AggregateActivityLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActivityLog[P]>
      : GetScalarType<T[P], AggregateActivityLog[P]>
  }




  export type ActivityLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityLogWhereInput
    orderBy?: ActivityLogOrderByWithAggregationInput | ActivityLogOrderByWithAggregationInput[]
    by: ActivityLogScalarFieldEnum[] | ActivityLogScalarFieldEnum
    having?: ActivityLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActivityLogCountAggregateInputType | true
    _min?: ActivityLogMinAggregateInputType
    _max?: ActivityLogMaxAggregateInputType
  }

  export type ActivityLogGroupByOutputType = {
    id: string
    action: string
    detail: string | null
    createdAt: Date
    userId: string
    segmentId: string
    _count: ActivityLogCountAggregateOutputType | null
    _min: ActivityLogMinAggregateOutputType | null
    _max: ActivityLogMaxAggregateOutputType | null
  }

  type GetActivityLogGroupByPayload<T extends ActivityLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActivityLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActivityLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActivityLogGroupByOutputType[P]>
            : GetScalarType<T[P], ActivityLogGroupByOutputType[P]>
        }
      >
    >


  export type ActivityLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    detail?: boolean
    createdAt?: boolean
    userId?: boolean
    segmentId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    segment?: boolean | SegmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activityLog"]>

  export type ActivityLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    detail?: boolean
    createdAt?: boolean
    userId?: boolean
    segmentId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    segment?: boolean | SegmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activityLog"]>

  export type ActivityLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    detail?: boolean
    createdAt?: boolean
    userId?: boolean
    segmentId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    segment?: boolean | SegmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activityLog"]>

  export type ActivityLogSelectScalar = {
    id?: boolean
    action?: boolean
    detail?: boolean
    createdAt?: boolean
    userId?: boolean
    segmentId?: boolean
  }

  export type ActivityLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "action" | "detail" | "createdAt" | "userId" | "segmentId", ExtArgs["result"]["activityLog"]>
  export type ActivityLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    segment?: boolean | SegmentDefaultArgs<ExtArgs>
  }
  export type ActivityLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    segment?: boolean | SegmentDefaultArgs<ExtArgs>
  }
  export type ActivityLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    segment?: boolean | SegmentDefaultArgs<ExtArgs>
  }

  export type $ActivityLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ActivityLog"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      segment: Prisma.$SegmentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      action: string
      detail: string | null
      createdAt: Date
      userId: string
      segmentId: string
    }, ExtArgs["result"]["activityLog"]>
    composites: {}
  }

  type ActivityLogGetPayload<S extends boolean | null | undefined | ActivityLogDefaultArgs> = $Result.GetResult<Prisma.$ActivityLogPayload, S>

  type ActivityLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActivityLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActivityLogCountAggregateInputType | true
    }

  export interface ActivityLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ActivityLog'], meta: { name: 'ActivityLog' } }
    /**
     * Find zero or one ActivityLog that matches the filter.
     * @param {ActivityLogFindUniqueArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActivityLogFindUniqueArgs>(args: SelectSubset<T, ActivityLogFindUniqueArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ActivityLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActivityLogFindUniqueOrThrowArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActivityLogFindUniqueOrThrowArgs>(args: SelectSubset<T, ActivityLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActivityLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogFindFirstArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActivityLogFindFirstArgs>(args?: SelectSubset<T, ActivityLogFindFirstArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActivityLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogFindFirstOrThrowArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActivityLogFindFirstOrThrowArgs>(args?: SelectSubset<T, ActivityLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ActivityLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ActivityLogs
     * const activityLogs = await prisma.activityLog.findMany()
     * 
     * // Get first 10 ActivityLogs
     * const activityLogs = await prisma.activityLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const activityLogWithIdOnly = await prisma.activityLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActivityLogFindManyArgs>(args?: SelectSubset<T, ActivityLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ActivityLog.
     * @param {ActivityLogCreateArgs} args - Arguments to create a ActivityLog.
     * @example
     * // Create one ActivityLog
     * const ActivityLog = await prisma.activityLog.create({
     *   data: {
     *     // ... data to create a ActivityLog
     *   }
     * })
     * 
     */
    create<T extends ActivityLogCreateArgs>(args: SelectSubset<T, ActivityLogCreateArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ActivityLogs.
     * @param {ActivityLogCreateManyArgs} args - Arguments to create many ActivityLogs.
     * @example
     * // Create many ActivityLogs
     * const activityLog = await prisma.activityLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActivityLogCreateManyArgs>(args?: SelectSubset<T, ActivityLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ActivityLogs and returns the data saved in the database.
     * @param {ActivityLogCreateManyAndReturnArgs} args - Arguments to create many ActivityLogs.
     * @example
     * // Create many ActivityLogs
     * const activityLog = await prisma.activityLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ActivityLogs and only return the `id`
     * const activityLogWithIdOnly = await prisma.activityLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActivityLogCreateManyAndReturnArgs>(args?: SelectSubset<T, ActivityLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ActivityLog.
     * @param {ActivityLogDeleteArgs} args - Arguments to delete one ActivityLog.
     * @example
     * // Delete one ActivityLog
     * const ActivityLog = await prisma.activityLog.delete({
     *   where: {
     *     // ... filter to delete one ActivityLog
     *   }
     * })
     * 
     */
    delete<T extends ActivityLogDeleteArgs>(args: SelectSubset<T, ActivityLogDeleteArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ActivityLog.
     * @param {ActivityLogUpdateArgs} args - Arguments to update one ActivityLog.
     * @example
     * // Update one ActivityLog
     * const activityLog = await prisma.activityLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActivityLogUpdateArgs>(args: SelectSubset<T, ActivityLogUpdateArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ActivityLogs.
     * @param {ActivityLogDeleteManyArgs} args - Arguments to filter ActivityLogs to delete.
     * @example
     * // Delete a few ActivityLogs
     * const { count } = await prisma.activityLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActivityLogDeleteManyArgs>(args?: SelectSubset<T, ActivityLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActivityLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ActivityLogs
     * const activityLog = await prisma.activityLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActivityLogUpdateManyArgs>(args: SelectSubset<T, ActivityLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActivityLogs and returns the data updated in the database.
     * @param {ActivityLogUpdateManyAndReturnArgs} args - Arguments to update many ActivityLogs.
     * @example
     * // Update many ActivityLogs
     * const activityLog = await prisma.activityLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ActivityLogs and only return the `id`
     * const activityLogWithIdOnly = await prisma.activityLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ActivityLogUpdateManyAndReturnArgs>(args: SelectSubset<T, ActivityLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ActivityLog.
     * @param {ActivityLogUpsertArgs} args - Arguments to update or create a ActivityLog.
     * @example
     * // Update or create a ActivityLog
     * const activityLog = await prisma.activityLog.upsert({
     *   create: {
     *     // ... data to create a ActivityLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ActivityLog we want to update
     *   }
     * })
     */
    upsert<T extends ActivityLogUpsertArgs>(args: SelectSubset<T, ActivityLogUpsertArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ActivityLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogCountArgs} args - Arguments to filter ActivityLogs to count.
     * @example
     * // Count the number of ActivityLogs
     * const count = await prisma.activityLog.count({
     *   where: {
     *     // ... the filter for the ActivityLogs we want to count
     *   }
     * })
    **/
    count<T extends ActivityLogCountArgs>(
      args?: Subset<T, ActivityLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActivityLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ActivityLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ActivityLogAggregateArgs>(args: Subset<T, ActivityLogAggregateArgs>): Prisma.PrismaPromise<GetActivityLogAggregateType<T>>

    /**
     * Group by ActivityLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogGroupByArgs} args - Group by arguments.
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
      T extends ActivityLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActivityLogGroupByArgs['orderBy'] }
        : { orderBy?: ActivityLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ActivityLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivityLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ActivityLog model
   */
  readonly fields: ActivityLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ActivityLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActivityLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    segment<T extends SegmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SegmentDefaultArgs<ExtArgs>>): Prisma__SegmentClient<$Result.GetResult<Prisma.$SegmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ActivityLog model
   */
  interface ActivityLogFieldRefs {
    readonly id: FieldRef<"ActivityLog", 'String'>
    readonly action: FieldRef<"ActivityLog", 'String'>
    readonly detail: FieldRef<"ActivityLog", 'String'>
    readonly createdAt: FieldRef<"ActivityLog", 'DateTime'>
    readonly userId: FieldRef<"ActivityLog", 'String'>
    readonly segmentId: FieldRef<"ActivityLog", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ActivityLog findUnique
   */
  export type ActivityLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog findUniqueOrThrow
   */
  export type ActivityLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog findFirst
   */
  export type ActivityLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActivityLogs.
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivityLogs.
     */
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * ActivityLog findFirstOrThrow
   */
  export type ActivityLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActivityLogs.
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivityLogs.
     */
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * ActivityLog findMany
   */
  export type ActivityLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLogs to fetch.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ActivityLogs.
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * ActivityLog create
   */
  export type ActivityLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * The data needed to create a ActivityLog.
     */
    data: XOR<ActivityLogCreateInput, ActivityLogUncheckedCreateInput>
  }

  /**
   * ActivityLog createMany
   */
  export type ActivityLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ActivityLogs.
     */
    data: ActivityLogCreateManyInput | ActivityLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ActivityLog createManyAndReturn
   */
  export type ActivityLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * The data used to create many ActivityLogs.
     */
    data: ActivityLogCreateManyInput | ActivityLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ActivityLog update
   */
  export type ActivityLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * The data needed to update a ActivityLog.
     */
    data: XOR<ActivityLogUpdateInput, ActivityLogUncheckedUpdateInput>
    /**
     * Choose, which ActivityLog to update.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog updateMany
   */
  export type ActivityLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ActivityLogs.
     */
    data: XOR<ActivityLogUpdateManyMutationInput, ActivityLogUncheckedUpdateManyInput>
    /**
     * Filter which ActivityLogs to update
     */
    where?: ActivityLogWhereInput
    /**
     * Limit how many ActivityLogs to update.
     */
    limit?: number
  }

  /**
   * ActivityLog updateManyAndReturn
   */
  export type ActivityLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * The data used to update ActivityLogs.
     */
    data: XOR<ActivityLogUpdateManyMutationInput, ActivityLogUncheckedUpdateManyInput>
    /**
     * Filter which ActivityLogs to update
     */
    where?: ActivityLogWhereInput
    /**
     * Limit how many ActivityLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ActivityLog upsert
   */
  export type ActivityLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * The filter to search for the ActivityLog to update in case it exists.
     */
    where: ActivityLogWhereUniqueInput
    /**
     * In case the ActivityLog found by the `where` argument doesn't exist, create a new ActivityLog with this data.
     */
    create: XOR<ActivityLogCreateInput, ActivityLogUncheckedCreateInput>
    /**
     * In case the ActivityLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActivityLogUpdateInput, ActivityLogUncheckedUpdateInput>
  }

  /**
   * ActivityLog delete
   */
  export type ActivityLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter which ActivityLog to delete.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog deleteMany
   */
  export type ActivityLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActivityLogs to delete
     */
    where?: ActivityLogWhereInput
    /**
     * Limit how many ActivityLogs to delete.
     */
    limit?: number
  }

  /**
   * ActivityLog without action
   */
  export type ActivityLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
  }


  /**
   * Model LanguagePair
   */

  export type AggregateLanguagePair = {
    _count: LanguagePairCountAggregateOutputType | null
    _min: LanguagePairMinAggregateOutputType | null
    _max: LanguagePairMaxAggregateOutputType | null
  }

  export type LanguagePairMinAggregateOutputType = {
    id: string | null
    sourceLang: string | null
    targetLang: string | null
    createdAt: Date | null
  }

  export type LanguagePairMaxAggregateOutputType = {
    id: string | null
    sourceLang: string | null
    targetLang: string | null
    createdAt: Date | null
  }

  export type LanguagePairCountAggregateOutputType = {
    id: number
    sourceLang: number
    targetLang: number
    createdAt: number
    _all: number
  }


  export type LanguagePairMinAggregateInputType = {
    id?: true
    sourceLang?: true
    targetLang?: true
    createdAt?: true
  }

  export type LanguagePairMaxAggregateInputType = {
    id?: true
    sourceLang?: true
    targetLang?: true
    createdAt?: true
  }

  export type LanguagePairCountAggregateInputType = {
    id?: true
    sourceLang?: true
    targetLang?: true
    createdAt?: true
    _all?: true
  }

  export type LanguagePairAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LanguagePair to aggregate.
     */
    where?: LanguagePairWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LanguagePairs to fetch.
     */
    orderBy?: LanguagePairOrderByWithRelationInput | LanguagePairOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LanguagePairWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LanguagePairs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LanguagePairs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LanguagePairs
    **/
    _count?: true | LanguagePairCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LanguagePairMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LanguagePairMaxAggregateInputType
  }

  export type GetLanguagePairAggregateType<T extends LanguagePairAggregateArgs> = {
        [P in keyof T & keyof AggregateLanguagePair]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLanguagePair[P]>
      : GetScalarType<T[P], AggregateLanguagePair[P]>
  }




  export type LanguagePairGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LanguagePairWhereInput
    orderBy?: LanguagePairOrderByWithAggregationInput | LanguagePairOrderByWithAggregationInput[]
    by: LanguagePairScalarFieldEnum[] | LanguagePairScalarFieldEnum
    having?: LanguagePairScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LanguagePairCountAggregateInputType | true
    _min?: LanguagePairMinAggregateInputType
    _max?: LanguagePairMaxAggregateInputType
  }

  export type LanguagePairGroupByOutputType = {
    id: string
    sourceLang: string
    targetLang: string
    createdAt: Date
    _count: LanguagePairCountAggregateOutputType | null
    _min: LanguagePairMinAggregateOutputType | null
    _max: LanguagePairMaxAggregateOutputType | null
  }

  type GetLanguagePairGroupByPayload<T extends LanguagePairGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LanguagePairGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LanguagePairGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LanguagePairGroupByOutputType[P]>
            : GetScalarType<T[P], LanguagePairGroupByOutputType[P]>
        }
      >
    >


  export type LanguagePairSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sourceLang?: boolean
    targetLang?: boolean
    createdAt?: boolean
    projects?: boolean | LanguagePair$projectsArgs<ExtArgs>
    _count?: boolean | LanguagePairCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["languagePair"]>

  export type LanguagePairSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sourceLang?: boolean
    targetLang?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["languagePair"]>

  export type LanguagePairSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sourceLang?: boolean
    targetLang?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["languagePair"]>

  export type LanguagePairSelectScalar = {
    id?: boolean
    sourceLang?: boolean
    targetLang?: boolean
    createdAt?: boolean
  }

  export type LanguagePairOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sourceLang" | "targetLang" | "createdAt", ExtArgs["result"]["languagePair"]>
  export type LanguagePairInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | LanguagePair$projectsArgs<ExtArgs>
    _count?: boolean | LanguagePairCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LanguagePairIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type LanguagePairIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LanguagePairPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LanguagePair"
    objects: {
      projects: Prisma.$ProjectPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sourceLang: string
      targetLang: string
      createdAt: Date
    }, ExtArgs["result"]["languagePair"]>
    composites: {}
  }

  type LanguagePairGetPayload<S extends boolean | null | undefined | LanguagePairDefaultArgs> = $Result.GetResult<Prisma.$LanguagePairPayload, S>

  type LanguagePairCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LanguagePairFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LanguagePairCountAggregateInputType | true
    }

  export interface LanguagePairDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LanguagePair'], meta: { name: 'LanguagePair' } }
    /**
     * Find zero or one LanguagePair that matches the filter.
     * @param {LanguagePairFindUniqueArgs} args - Arguments to find a LanguagePair
     * @example
     * // Get one LanguagePair
     * const languagePair = await prisma.languagePair.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LanguagePairFindUniqueArgs>(args: SelectSubset<T, LanguagePairFindUniqueArgs<ExtArgs>>): Prisma__LanguagePairClient<$Result.GetResult<Prisma.$LanguagePairPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LanguagePair that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LanguagePairFindUniqueOrThrowArgs} args - Arguments to find a LanguagePair
     * @example
     * // Get one LanguagePair
     * const languagePair = await prisma.languagePair.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LanguagePairFindUniqueOrThrowArgs>(args: SelectSubset<T, LanguagePairFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LanguagePairClient<$Result.GetResult<Prisma.$LanguagePairPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LanguagePair that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguagePairFindFirstArgs} args - Arguments to find a LanguagePair
     * @example
     * // Get one LanguagePair
     * const languagePair = await prisma.languagePair.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LanguagePairFindFirstArgs>(args?: SelectSubset<T, LanguagePairFindFirstArgs<ExtArgs>>): Prisma__LanguagePairClient<$Result.GetResult<Prisma.$LanguagePairPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LanguagePair that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguagePairFindFirstOrThrowArgs} args - Arguments to find a LanguagePair
     * @example
     * // Get one LanguagePair
     * const languagePair = await prisma.languagePair.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LanguagePairFindFirstOrThrowArgs>(args?: SelectSubset<T, LanguagePairFindFirstOrThrowArgs<ExtArgs>>): Prisma__LanguagePairClient<$Result.GetResult<Prisma.$LanguagePairPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LanguagePairs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguagePairFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LanguagePairs
     * const languagePairs = await prisma.languagePair.findMany()
     * 
     * // Get first 10 LanguagePairs
     * const languagePairs = await prisma.languagePair.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const languagePairWithIdOnly = await prisma.languagePair.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LanguagePairFindManyArgs>(args?: SelectSubset<T, LanguagePairFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LanguagePairPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LanguagePair.
     * @param {LanguagePairCreateArgs} args - Arguments to create a LanguagePair.
     * @example
     * // Create one LanguagePair
     * const LanguagePair = await prisma.languagePair.create({
     *   data: {
     *     // ... data to create a LanguagePair
     *   }
     * })
     * 
     */
    create<T extends LanguagePairCreateArgs>(args: SelectSubset<T, LanguagePairCreateArgs<ExtArgs>>): Prisma__LanguagePairClient<$Result.GetResult<Prisma.$LanguagePairPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LanguagePairs.
     * @param {LanguagePairCreateManyArgs} args - Arguments to create many LanguagePairs.
     * @example
     * // Create many LanguagePairs
     * const languagePair = await prisma.languagePair.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LanguagePairCreateManyArgs>(args?: SelectSubset<T, LanguagePairCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LanguagePairs and returns the data saved in the database.
     * @param {LanguagePairCreateManyAndReturnArgs} args - Arguments to create many LanguagePairs.
     * @example
     * // Create many LanguagePairs
     * const languagePair = await prisma.languagePair.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LanguagePairs and only return the `id`
     * const languagePairWithIdOnly = await prisma.languagePair.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LanguagePairCreateManyAndReturnArgs>(args?: SelectSubset<T, LanguagePairCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LanguagePairPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LanguagePair.
     * @param {LanguagePairDeleteArgs} args - Arguments to delete one LanguagePair.
     * @example
     * // Delete one LanguagePair
     * const LanguagePair = await prisma.languagePair.delete({
     *   where: {
     *     // ... filter to delete one LanguagePair
     *   }
     * })
     * 
     */
    delete<T extends LanguagePairDeleteArgs>(args: SelectSubset<T, LanguagePairDeleteArgs<ExtArgs>>): Prisma__LanguagePairClient<$Result.GetResult<Prisma.$LanguagePairPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LanguagePair.
     * @param {LanguagePairUpdateArgs} args - Arguments to update one LanguagePair.
     * @example
     * // Update one LanguagePair
     * const languagePair = await prisma.languagePair.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LanguagePairUpdateArgs>(args: SelectSubset<T, LanguagePairUpdateArgs<ExtArgs>>): Prisma__LanguagePairClient<$Result.GetResult<Prisma.$LanguagePairPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LanguagePairs.
     * @param {LanguagePairDeleteManyArgs} args - Arguments to filter LanguagePairs to delete.
     * @example
     * // Delete a few LanguagePairs
     * const { count } = await prisma.languagePair.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LanguagePairDeleteManyArgs>(args?: SelectSubset<T, LanguagePairDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LanguagePairs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguagePairUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LanguagePairs
     * const languagePair = await prisma.languagePair.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LanguagePairUpdateManyArgs>(args: SelectSubset<T, LanguagePairUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LanguagePairs and returns the data updated in the database.
     * @param {LanguagePairUpdateManyAndReturnArgs} args - Arguments to update many LanguagePairs.
     * @example
     * // Update many LanguagePairs
     * const languagePair = await prisma.languagePair.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LanguagePairs and only return the `id`
     * const languagePairWithIdOnly = await prisma.languagePair.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LanguagePairUpdateManyAndReturnArgs>(args: SelectSubset<T, LanguagePairUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LanguagePairPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LanguagePair.
     * @param {LanguagePairUpsertArgs} args - Arguments to update or create a LanguagePair.
     * @example
     * // Update or create a LanguagePair
     * const languagePair = await prisma.languagePair.upsert({
     *   create: {
     *     // ... data to create a LanguagePair
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LanguagePair we want to update
     *   }
     * })
     */
    upsert<T extends LanguagePairUpsertArgs>(args: SelectSubset<T, LanguagePairUpsertArgs<ExtArgs>>): Prisma__LanguagePairClient<$Result.GetResult<Prisma.$LanguagePairPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LanguagePairs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguagePairCountArgs} args - Arguments to filter LanguagePairs to count.
     * @example
     * // Count the number of LanguagePairs
     * const count = await prisma.languagePair.count({
     *   where: {
     *     // ... the filter for the LanguagePairs we want to count
     *   }
     * })
    **/
    count<T extends LanguagePairCountArgs>(
      args?: Subset<T, LanguagePairCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LanguagePairCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LanguagePair.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguagePairAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LanguagePairAggregateArgs>(args: Subset<T, LanguagePairAggregateArgs>): Prisma.PrismaPromise<GetLanguagePairAggregateType<T>>

    /**
     * Group by LanguagePair.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguagePairGroupByArgs} args - Group by arguments.
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
      T extends LanguagePairGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LanguagePairGroupByArgs['orderBy'] }
        : { orderBy?: LanguagePairGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LanguagePairGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLanguagePairGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LanguagePair model
   */
  readonly fields: LanguagePairFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LanguagePair.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LanguagePairClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projects<T extends LanguagePair$projectsArgs<ExtArgs> = {}>(args?: Subset<T, LanguagePair$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the LanguagePair model
   */
  interface LanguagePairFieldRefs {
    readonly id: FieldRef<"LanguagePair", 'String'>
    readonly sourceLang: FieldRef<"LanguagePair", 'String'>
    readonly targetLang: FieldRef<"LanguagePair", 'String'>
    readonly createdAt: FieldRef<"LanguagePair", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LanguagePair findUnique
   */
  export type LanguagePairFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LanguagePair
     */
    select?: LanguagePairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LanguagePair
     */
    omit?: LanguagePairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguagePairInclude<ExtArgs> | null
    /**
     * Filter, which LanguagePair to fetch.
     */
    where: LanguagePairWhereUniqueInput
  }

  /**
   * LanguagePair findUniqueOrThrow
   */
  export type LanguagePairFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LanguagePair
     */
    select?: LanguagePairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LanguagePair
     */
    omit?: LanguagePairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguagePairInclude<ExtArgs> | null
    /**
     * Filter, which LanguagePair to fetch.
     */
    where: LanguagePairWhereUniqueInput
  }

  /**
   * LanguagePair findFirst
   */
  export type LanguagePairFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LanguagePair
     */
    select?: LanguagePairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LanguagePair
     */
    omit?: LanguagePairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguagePairInclude<ExtArgs> | null
    /**
     * Filter, which LanguagePair to fetch.
     */
    where?: LanguagePairWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LanguagePairs to fetch.
     */
    orderBy?: LanguagePairOrderByWithRelationInput | LanguagePairOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LanguagePairs.
     */
    cursor?: LanguagePairWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LanguagePairs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LanguagePairs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LanguagePairs.
     */
    distinct?: LanguagePairScalarFieldEnum | LanguagePairScalarFieldEnum[]
  }

  /**
   * LanguagePair findFirstOrThrow
   */
  export type LanguagePairFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LanguagePair
     */
    select?: LanguagePairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LanguagePair
     */
    omit?: LanguagePairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguagePairInclude<ExtArgs> | null
    /**
     * Filter, which LanguagePair to fetch.
     */
    where?: LanguagePairWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LanguagePairs to fetch.
     */
    orderBy?: LanguagePairOrderByWithRelationInput | LanguagePairOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LanguagePairs.
     */
    cursor?: LanguagePairWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LanguagePairs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LanguagePairs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LanguagePairs.
     */
    distinct?: LanguagePairScalarFieldEnum | LanguagePairScalarFieldEnum[]
  }

  /**
   * LanguagePair findMany
   */
  export type LanguagePairFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LanguagePair
     */
    select?: LanguagePairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LanguagePair
     */
    omit?: LanguagePairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguagePairInclude<ExtArgs> | null
    /**
     * Filter, which LanguagePairs to fetch.
     */
    where?: LanguagePairWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LanguagePairs to fetch.
     */
    orderBy?: LanguagePairOrderByWithRelationInput | LanguagePairOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LanguagePairs.
     */
    cursor?: LanguagePairWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LanguagePairs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LanguagePairs.
     */
    skip?: number
    distinct?: LanguagePairScalarFieldEnum | LanguagePairScalarFieldEnum[]
  }

  /**
   * LanguagePair create
   */
  export type LanguagePairCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LanguagePair
     */
    select?: LanguagePairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LanguagePair
     */
    omit?: LanguagePairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguagePairInclude<ExtArgs> | null
    /**
     * The data needed to create a LanguagePair.
     */
    data: XOR<LanguagePairCreateInput, LanguagePairUncheckedCreateInput>
  }

  /**
   * LanguagePair createMany
   */
  export type LanguagePairCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LanguagePairs.
     */
    data: LanguagePairCreateManyInput | LanguagePairCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LanguagePair createManyAndReturn
   */
  export type LanguagePairCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LanguagePair
     */
    select?: LanguagePairSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LanguagePair
     */
    omit?: LanguagePairOmit<ExtArgs> | null
    /**
     * The data used to create many LanguagePairs.
     */
    data: LanguagePairCreateManyInput | LanguagePairCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LanguagePair update
   */
  export type LanguagePairUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LanguagePair
     */
    select?: LanguagePairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LanguagePair
     */
    omit?: LanguagePairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguagePairInclude<ExtArgs> | null
    /**
     * The data needed to update a LanguagePair.
     */
    data: XOR<LanguagePairUpdateInput, LanguagePairUncheckedUpdateInput>
    /**
     * Choose, which LanguagePair to update.
     */
    where: LanguagePairWhereUniqueInput
  }

  /**
   * LanguagePair updateMany
   */
  export type LanguagePairUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LanguagePairs.
     */
    data: XOR<LanguagePairUpdateManyMutationInput, LanguagePairUncheckedUpdateManyInput>
    /**
     * Filter which LanguagePairs to update
     */
    where?: LanguagePairWhereInput
    /**
     * Limit how many LanguagePairs to update.
     */
    limit?: number
  }

  /**
   * LanguagePair updateManyAndReturn
   */
  export type LanguagePairUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LanguagePair
     */
    select?: LanguagePairSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LanguagePair
     */
    omit?: LanguagePairOmit<ExtArgs> | null
    /**
     * The data used to update LanguagePairs.
     */
    data: XOR<LanguagePairUpdateManyMutationInput, LanguagePairUncheckedUpdateManyInput>
    /**
     * Filter which LanguagePairs to update
     */
    where?: LanguagePairWhereInput
    /**
     * Limit how many LanguagePairs to update.
     */
    limit?: number
  }

  /**
   * LanguagePair upsert
   */
  export type LanguagePairUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LanguagePair
     */
    select?: LanguagePairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LanguagePair
     */
    omit?: LanguagePairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguagePairInclude<ExtArgs> | null
    /**
     * The filter to search for the LanguagePair to update in case it exists.
     */
    where: LanguagePairWhereUniqueInput
    /**
     * In case the LanguagePair found by the `where` argument doesn't exist, create a new LanguagePair with this data.
     */
    create: XOR<LanguagePairCreateInput, LanguagePairUncheckedCreateInput>
    /**
     * In case the LanguagePair was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LanguagePairUpdateInput, LanguagePairUncheckedUpdateInput>
  }

  /**
   * LanguagePair delete
   */
  export type LanguagePairDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LanguagePair
     */
    select?: LanguagePairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LanguagePair
     */
    omit?: LanguagePairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguagePairInclude<ExtArgs> | null
    /**
     * Filter which LanguagePair to delete.
     */
    where: LanguagePairWhereUniqueInput
  }

  /**
   * LanguagePair deleteMany
   */
  export type LanguagePairDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LanguagePairs to delete
     */
    where?: LanguagePairWhereInput
    /**
     * Limit how many LanguagePairs to delete.
     */
    limit?: number
  }

  /**
   * LanguagePair.projects
   */
  export type LanguagePair$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * LanguagePair without action
   */
  export type LanguagePairDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LanguagePair
     */
    select?: LanguagePairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LanguagePair
     */
    omit?: LanguagePairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguagePairInclude<ExtArgs> | null
  }


  /**
   * Model FileUpload
   */

  export type AggregateFileUpload = {
    _count: FileUploadCountAggregateOutputType | null
    _min: FileUploadMinAggregateOutputType | null
    _max: FileUploadMaxAggregateOutputType | null
  }

  export type FileUploadMinAggregateOutputType = {
    id: string | null
    filename: string | null
    fileType: string | null
    url: string | null
    uploadedAt: Date | null
    projectId: string | null
  }

  export type FileUploadMaxAggregateOutputType = {
    id: string | null
    filename: string | null
    fileType: string | null
    url: string | null
    uploadedAt: Date | null
    projectId: string | null
  }

  export type FileUploadCountAggregateOutputType = {
    id: number
    filename: number
    fileType: number
    url: number
    uploadedAt: number
    projectId: number
    _all: number
  }


  export type FileUploadMinAggregateInputType = {
    id?: true
    filename?: true
    fileType?: true
    url?: true
    uploadedAt?: true
    projectId?: true
  }

  export type FileUploadMaxAggregateInputType = {
    id?: true
    filename?: true
    fileType?: true
    url?: true
    uploadedAt?: true
    projectId?: true
  }

  export type FileUploadCountAggregateInputType = {
    id?: true
    filename?: true
    fileType?: true
    url?: true
    uploadedAt?: true
    projectId?: true
    _all?: true
  }

  export type FileUploadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FileUpload to aggregate.
     */
    where?: FileUploadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FileUploads to fetch.
     */
    orderBy?: FileUploadOrderByWithRelationInput | FileUploadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FileUploadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FileUploads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FileUploads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FileUploads
    **/
    _count?: true | FileUploadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FileUploadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FileUploadMaxAggregateInputType
  }

  export type GetFileUploadAggregateType<T extends FileUploadAggregateArgs> = {
        [P in keyof T & keyof AggregateFileUpload]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFileUpload[P]>
      : GetScalarType<T[P], AggregateFileUpload[P]>
  }




  export type FileUploadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FileUploadWhereInput
    orderBy?: FileUploadOrderByWithAggregationInput | FileUploadOrderByWithAggregationInput[]
    by: FileUploadScalarFieldEnum[] | FileUploadScalarFieldEnum
    having?: FileUploadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FileUploadCountAggregateInputType | true
    _min?: FileUploadMinAggregateInputType
    _max?: FileUploadMaxAggregateInputType
  }

  export type FileUploadGroupByOutputType = {
    id: string
    filename: string
    fileType: string
    url: string
    uploadedAt: Date
    projectId: string
    _count: FileUploadCountAggregateOutputType | null
    _min: FileUploadMinAggregateOutputType | null
    _max: FileUploadMaxAggregateOutputType | null
  }

  type GetFileUploadGroupByPayload<T extends FileUploadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FileUploadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FileUploadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FileUploadGroupByOutputType[P]>
            : GetScalarType<T[P], FileUploadGroupByOutputType[P]>
        }
      >
    >


  export type FileUploadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    filename?: boolean
    fileType?: boolean
    url?: boolean
    uploadedAt?: boolean
    projectId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fileUpload"]>

  export type FileUploadSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    filename?: boolean
    fileType?: boolean
    url?: boolean
    uploadedAt?: boolean
    projectId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fileUpload"]>

  export type FileUploadSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    filename?: boolean
    fileType?: boolean
    url?: boolean
    uploadedAt?: boolean
    projectId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fileUpload"]>

  export type FileUploadSelectScalar = {
    id?: boolean
    filename?: boolean
    fileType?: boolean
    url?: boolean
    uploadedAt?: boolean
    projectId?: boolean
  }

  export type FileUploadOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "filename" | "fileType" | "url" | "uploadedAt" | "projectId", ExtArgs["result"]["fileUpload"]>
  export type FileUploadInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type FileUploadIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type FileUploadIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $FileUploadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FileUpload"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      filename: string
      fileType: string
      url: string
      uploadedAt: Date
      projectId: string
    }, ExtArgs["result"]["fileUpload"]>
    composites: {}
  }

  type FileUploadGetPayload<S extends boolean | null | undefined | FileUploadDefaultArgs> = $Result.GetResult<Prisma.$FileUploadPayload, S>

  type FileUploadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FileUploadFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FileUploadCountAggregateInputType | true
    }

  export interface FileUploadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FileUpload'], meta: { name: 'FileUpload' } }
    /**
     * Find zero or one FileUpload that matches the filter.
     * @param {FileUploadFindUniqueArgs} args - Arguments to find a FileUpload
     * @example
     * // Get one FileUpload
     * const fileUpload = await prisma.fileUpload.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FileUploadFindUniqueArgs>(args: SelectSubset<T, FileUploadFindUniqueArgs<ExtArgs>>): Prisma__FileUploadClient<$Result.GetResult<Prisma.$FileUploadPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FileUpload that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FileUploadFindUniqueOrThrowArgs} args - Arguments to find a FileUpload
     * @example
     * // Get one FileUpload
     * const fileUpload = await prisma.fileUpload.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FileUploadFindUniqueOrThrowArgs>(args: SelectSubset<T, FileUploadFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FileUploadClient<$Result.GetResult<Prisma.$FileUploadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FileUpload that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileUploadFindFirstArgs} args - Arguments to find a FileUpload
     * @example
     * // Get one FileUpload
     * const fileUpload = await prisma.fileUpload.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FileUploadFindFirstArgs>(args?: SelectSubset<T, FileUploadFindFirstArgs<ExtArgs>>): Prisma__FileUploadClient<$Result.GetResult<Prisma.$FileUploadPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FileUpload that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileUploadFindFirstOrThrowArgs} args - Arguments to find a FileUpload
     * @example
     * // Get one FileUpload
     * const fileUpload = await prisma.fileUpload.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FileUploadFindFirstOrThrowArgs>(args?: SelectSubset<T, FileUploadFindFirstOrThrowArgs<ExtArgs>>): Prisma__FileUploadClient<$Result.GetResult<Prisma.$FileUploadPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FileUploads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileUploadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FileUploads
     * const fileUploads = await prisma.fileUpload.findMany()
     * 
     * // Get first 10 FileUploads
     * const fileUploads = await prisma.fileUpload.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fileUploadWithIdOnly = await prisma.fileUpload.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FileUploadFindManyArgs>(args?: SelectSubset<T, FileUploadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FileUploadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FileUpload.
     * @param {FileUploadCreateArgs} args - Arguments to create a FileUpload.
     * @example
     * // Create one FileUpload
     * const FileUpload = await prisma.fileUpload.create({
     *   data: {
     *     // ... data to create a FileUpload
     *   }
     * })
     * 
     */
    create<T extends FileUploadCreateArgs>(args: SelectSubset<T, FileUploadCreateArgs<ExtArgs>>): Prisma__FileUploadClient<$Result.GetResult<Prisma.$FileUploadPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FileUploads.
     * @param {FileUploadCreateManyArgs} args - Arguments to create many FileUploads.
     * @example
     * // Create many FileUploads
     * const fileUpload = await prisma.fileUpload.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FileUploadCreateManyArgs>(args?: SelectSubset<T, FileUploadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FileUploads and returns the data saved in the database.
     * @param {FileUploadCreateManyAndReturnArgs} args - Arguments to create many FileUploads.
     * @example
     * // Create many FileUploads
     * const fileUpload = await prisma.fileUpload.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FileUploads and only return the `id`
     * const fileUploadWithIdOnly = await prisma.fileUpload.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FileUploadCreateManyAndReturnArgs>(args?: SelectSubset<T, FileUploadCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FileUploadPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FileUpload.
     * @param {FileUploadDeleteArgs} args - Arguments to delete one FileUpload.
     * @example
     * // Delete one FileUpload
     * const FileUpload = await prisma.fileUpload.delete({
     *   where: {
     *     // ... filter to delete one FileUpload
     *   }
     * })
     * 
     */
    delete<T extends FileUploadDeleteArgs>(args: SelectSubset<T, FileUploadDeleteArgs<ExtArgs>>): Prisma__FileUploadClient<$Result.GetResult<Prisma.$FileUploadPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FileUpload.
     * @param {FileUploadUpdateArgs} args - Arguments to update one FileUpload.
     * @example
     * // Update one FileUpload
     * const fileUpload = await prisma.fileUpload.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FileUploadUpdateArgs>(args: SelectSubset<T, FileUploadUpdateArgs<ExtArgs>>): Prisma__FileUploadClient<$Result.GetResult<Prisma.$FileUploadPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FileUploads.
     * @param {FileUploadDeleteManyArgs} args - Arguments to filter FileUploads to delete.
     * @example
     * // Delete a few FileUploads
     * const { count } = await prisma.fileUpload.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FileUploadDeleteManyArgs>(args?: SelectSubset<T, FileUploadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FileUploads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileUploadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FileUploads
     * const fileUpload = await prisma.fileUpload.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FileUploadUpdateManyArgs>(args: SelectSubset<T, FileUploadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FileUploads and returns the data updated in the database.
     * @param {FileUploadUpdateManyAndReturnArgs} args - Arguments to update many FileUploads.
     * @example
     * // Update many FileUploads
     * const fileUpload = await prisma.fileUpload.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FileUploads and only return the `id`
     * const fileUploadWithIdOnly = await prisma.fileUpload.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FileUploadUpdateManyAndReturnArgs>(args: SelectSubset<T, FileUploadUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FileUploadPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FileUpload.
     * @param {FileUploadUpsertArgs} args - Arguments to update or create a FileUpload.
     * @example
     * // Update or create a FileUpload
     * const fileUpload = await prisma.fileUpload.upsert({
     *   create: {
     *     // ... data to create a FileUpload
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FileUpload we want to update
     *   }
     * })
     */
    upsert<T extends FileUploadUpsertArgs>(args: SelectSubset<T, FileUploadUpsertArgs<ExtArgs>>): Prisma__FileUploadClient<$Result.GetResult<Prisma.$FileUploadPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FileUploads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileUploadCountArgs} args - Arguments to filter FileUploads to count.
     * @example
     * // Count the number of FileUploads
     * const count = await prisma.fileUpload.count({
     *   where: {
     *     // ... the filter for the FileUploads we want to count
     *   }
     * })
    **/
    count<T extends FileUploadCountArgs>(
      args?: Subset<T, FileUploadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FileUploadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FileUpload.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileUploadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FileUploadAggregateArgs>(args: Subset<T, FileUploadAggregateArgs>): Prisma.PrismaPromise<GetFileUploadAggregateType<T>>

    /**
     * Group by FileUpload.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileUploadGroupByArgs} args - Group by arguments.
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
      T extends FileUploadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FileUploadGroupByArgs['orderBy'] }
        : { orderBy?: FileUploadGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FileUploadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFileUploadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FileUpload model
   */
  readonly fields: FileUploadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FileUpload.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FileUploadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the FileUpload model
   */
  interface FileUploadFieldRefs {
    readonly id: FieldRef<"FileUpload", 'String'>
    readonly filename: FieldRef<"FileUpload", 'String'>
    readonly fileType: FieldRef<"FileUpload", 'String'>
    readonly url: FieldRef<"FileUpload", 'String'>
    readonly uploadedAt: FieldRef<"FileUpload", 'DateTime'>
    readonly projectId: FieldRef<"FileUpload", 'String'>
  }
    

  // Custom InputTypes
  /**
   * FileUpload findUnique
   */
  export type FileUploadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileUpload
     */
    select?: FileUploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileUpload
     */
    omit?: FileUploadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileUploadInclude<ExtArgs> | null
    /**
     * Filter, which FileUpload to fetch.
     */
    where: FileUploadWhereUniqueInput
  }

  /**
   * FileUpload findUniqueOrThrow
   */
  export type FileUploadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileUpload
     */
    select?: FileUploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileUpload
     */
    omit?: FileUploadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileUploadInclude<ExtArgs> | null
    /**
     * Filter, which FileUpload to fetch.
     */
    where: FileUploadWhereUniqueInput
  }

  /**
   * FileUpload findFirst
   */
  export type FileUploadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileUpload
     */
    select?: FileUploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileUpload
     */
    omit?: FileUploadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileUploadInclude<ExtArgs> | null
    /**
     * Filter, which FileUpload to fetch.
     */
    where?: FileUploadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FileUploads to fetch.
     */
    orderBy?: FileUploadOrderByWithRelationInput | FileUploadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FileUploads.
     */
    cursor?: FileUploadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FileUploads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FileUploads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FileUploads.
     */
    distinct?: FileUploadScalarFieldEnum | FileUploadScalarFieldEnum[]
  }

  /**
   * FileUpload findFirstOrThrow
   */
  export type FileUploadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileUpload
     */
    select?: FileUploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileUpload
     */
    omit?: FileUploadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileUploadInclude<ExtArgs> | null
    /**
     * Filter, which FileUpload to fetch.
     */
    where?: FileUploadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FileUploads to fetch.
     */
    orderBy?: FileUploadOrderByWithRelationInput | FileUploadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FileUploads.
     */
    cursor?: FileUploadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FileUploads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FileUploads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FileUploads.
     */
    distinct?: FileUploadScalarFieldEnum | FileUploadScalarFieldEnum[]
  }

  /**
   * FileUpload findMany
   */
  export type FileUploadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileUpload
     */
    select?: FileUploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileUpload
     */
    omit?: FileUploadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileUploadInclude<ExtArgs> | null
    /**
     * Filter, which FileUploads to fetch.
     */
    where?: FileUploadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FileUploads to fetch.
     */
    orderBy?: FileUploadOrderByWithRelationInput | FileUploadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FileUploads.
     */
    cursor?: FileUploadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FileUploads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FileUploads.
     */
    skip?: number
    distinct?: FileUploadScalarFieldEnum | FileUploadScalarFieldEnum[]
  }

  /**
   * FileUpload create
   */
  export type FileUploadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileUpload
     */
    select?: FileUploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileUpload
     */
    omit?: FileUploadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileUploadInclude<ExtArgs> | null
    /**
     * The data needed to create a FileUpload.
     */
    data: XOR<FileUploadCreateInput, FileUploadUncheckedCreateInput>
  }

  /**
   * FileUpload createMany
   */
  export type FileUploadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FileUploads.
     */
    data: FileUploadCreateManyInput | FileUploadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FileUpload createManyAndReturn
   */
  export type FileUploadCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileUpload
     */
    select?: FileUploadSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FileUpload
     */
    omit?: FileUploadOmit<ExtArgs> | null
    /**
     * The data used to create many FileUploads.
     */
    data: FileUploadCreateManyInput | FileUploadCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileUploadIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FileUpload update
   */
  export type FileUploadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileUpload
     */
    select?: FileUploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileUpload
     */
    omit?: FileUploadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileUploadInclude<ExtArgs> | null
    /**
     * The data needed to update a FileUpload.
     */
    data: XOR<FileUploadUpdateInput, FileUploadUncheckedUpdateInput>
    /**
     * Choose, which FileUpload to update.
     */
    where: FileUploadWhereUniqueInput
  }

  /**
   * FileUpload updateMany
   */
  export type FileUploadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FileUploads.
     */
    data: XOR<FileUploadUpdateManyMutationInput, FileUploadUncheckedUpdateManyInput>
    /**
     * Filter which FileUploads to update
     */
    where?: FileUploadWhereInput
    /**
     * Limit how many FileUploads to update.
     */
    limit?: number
  }

  /**
   * FileUpload updateManyAndReturn
   */
  export type FileUploadUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileUpload
     */
    select?: FileUploadSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FileUpload
     */
    omit?: FileUploadOmit<ExtArgs> | null
    /**
     * The data used to update FileUploads.
     */
    data: XOR<FileUploadUpdateManyMutationInput, FileUploadUncheckedUpdateManyInput>
    /**
     * Filter which FileUploads to update
     */
    where?: FileUploadWhereInput
    /**
     * Limit how many FileUploads to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileUploadIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FileUpload upsert
   */
  export type FileUploadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileUpload
     */
    select?: FileUploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileUpload
     */
    omit?: FileUploadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileUploadInclude<ExtArgs> | null
    /**
     * The filter to search for the FileUpload to update in case it exists.
     */
    where: FileUploadWhereUniqueInput
    /**
     * In case the FileUpload found by the `where` argument doesn't exist, create a new FileUpload with this data.
     */
    create: XOR<FileUploadCreateInput, FileUploadUncheckedCreateInput>
    /**
     * In case the FileUpload was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FileUploadUpdateInput, FileUploadUncheckedUpdateInput>
  }

  /**
   * FileUpload delete
   */
  export type FileUploadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileUpload
     */
    select?: FileUploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileUpload
     */
    omit?: FileUploadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileUploadInclude<ExtArgs> | null
    /**
     * Filter which FileUpload to delete.
     */
    where: FileUploadWhereUniqueInput
  }

  /**
   * FileUpload deleteMany
   */
  export type FileUploadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FileUploads to delete
     */
    where?: FileUploadWhereInput
    /**
     * Limit how many FileUploads to delete.
     */
    limit?: number
  }

  /**
   * FileUpload without action
   */
  export type FileUploadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileUpload
     */
    select?: FileUploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileUpload
     */
    omit?: FileUploadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileUploadInclude<ExtArgs> | null
  }


  /**
   * Model Tag
   */

  export type AggregateTag = {
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  export type TagMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type TagMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type TagCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type TagMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type TagMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type TagCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type TagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tag to aggregate.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tags
    **/
    _count?: true | TagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagMaxAggregateInputType
  }

  export type GetTagAggregateType<T extends TagAggregateArgs> = {
        [P in keyof T & keyof AggregateTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTag[P]>
      : GetScalarType<T[P], AggregateTag[P]>
  }




  export type TagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
    orderBy?: TagOrderByWithAggregationInput | TagOrderByWithAggregationInput[]
    by: TagScalarFieldEnum[] | TagScalarFieldEnum
    having?: TagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagCountAggregateInputType | true
    _min?: TagMinAggregateInputType
    _max?: TagMaxAggregateInputType
  }

  export type TagGroupByOutputType = {
    id: string
    name: string
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  type GetTagGroupByPayload<T extends TagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagGroupByOutputType[P]>
            : GetScalarType<T[P], TagGroupByOutputType[P]>
        }
      >
    >


  export type TagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    glossaryEntries?: boolean | Tag$glossaryEntriesArgs<ExtArgs>
    segments?: boolean | Tag$segmentsArgs<ExtArgs>
    glossaryEntryTags?: boolean | Tag$glossaryEntryTagsArgs<ExtArgs>
    segmentTags?: boolean | Tag$segmentTagsArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>

  export type TagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["tag"]>

  export type TagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["tag"]>

  export type TagSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type TagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["tag"]>
  export type TagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    glossaryEntries?: boolean | Tag$glossaryEntriesArgs<ExtArgs>
    segments?: boolean | Tag$segmentsArgs<ExtArgs>
    glossaryEntryTags?: boolean | Tag$glossaryEntryTagsArgs<ExtArgs>
    segmentTags?: boolean | Tag$segmentTagsArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tag"
    objects: {
      glossaryEntries: Prisma.$GlossaryEntryPayload<ExtArgs>[]
      segments: Prisma.$SegmentPayload<ExtArgs>[]
      glossaryEntryTags: Prisma.$GlossaryEntryTagPayload<ExtArgs>[]
      segmentTags: Prisma.$SegmentTagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["tag"]>
    composites: {}
  }

  type TagGetPayload<S extends boolean | null | undefined | TagDefaultArgs> = $Result.GetResult<Prisma.$TagPayload, S>

  type TagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TagCountAggregateInputType | true
    }

  export interface TagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tag'], meta: { name: 'Tag' } }
    /**
     * Find zero or one Tag that matches the filter.
     * @param {TagFindUniqueArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TagFindUniqueArgs>(args: SelectSubset<T, TagFindUniqueArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TagFindUniqueOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TagFindUniqueOrThrowArgs>(args: SelectSubset<T, TagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TagFindFirstArgs>(args?: SelectSubset<T, TagFindFirstArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TagFindFirstOrThrowArgs>(args?: SelectSubset<T, TagFindFirstOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tag.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagWithIdOnly = await prisma.tag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TagFindManyArgs>(args?: SelectSubset<T, TagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tag.
     * @param {TagCreateArgs} args - Arguments to create a Tag.
     * @example
     * // Create one Tag
     * const Tag = await prisma.tag.create({
     *   data: {
     *     // ... data to create a Tag
     *   }
     * })
     * 
     */
    create<T extends TagCreateArgs>(args: SelectSubset<T, TagCreateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tags.
     * @param {TagCreateManyArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TagCreateManyArgs>(args?: SelectSubset<T, TagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tags and returns the data saved in the database.
     * @param {TagCreateManyAndReturnArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TagCreateManyAndReturnArgs>(args?: SelectSubset<T, TagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tag.
     * @param {TagDeleteArgs} args - Arguments to delete one Tag.
     * @example
     * // Delete one Tag
     * const Tag = await prisma.tag.delete({
     *   where: {
     *     // ... filter to delete one Tag
     *   }
     * })
     * 
     */
    delete<T extends TagDeleteArgs>(args: SelectSubset<T, TagDeleteArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tag.
     * @param {TagUpdateArgs} args - Arguments to update one Tag.
     * @example
     * // Update one Tag
     * const tag = await prisma.tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TagUpdateArgs>(args: SelectSubset<T, TagUpdateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tags.
     * @param {TagDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TagDeleteManyArgs>(args?: SelectSubset<T, TagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TagUpdateManyArgs>(args: SelectSubset<T, TagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags and returns the data updated in the database.
     * @param {TagUpdateManyAndReturnArgs} args - Arguments to update many Tags.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TagUpdateManyAndReturnArgs>(args: SelectSubset<T, TagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tag.
     * @param {TagUpsertArgs} args - Arguments to update or create a Tag.
     * @example
     * // Update or create a Tag
     * const tag = await prisma.tag.upsert({
     *   create: {
     *     // ... data to create a Tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tag we want to update
     *   }
     * })
     */
    upsert<T extends TagUpsertArgs>(args: SelectSubset<T, TagUpsertArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tag.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends TagCountArgs>(
      args?: Subset<T, TagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TagAggregateArgs>(args: Subset<T, TagAggregateArgs>): Prisma.PrismaPromise<GetTagAggregateType<T>>

    /**
     * Group by Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagGroupByArgs} args - Group by arguments.
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
      T extends TagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagGroupByArgs['orderBy'] }
        : { orderBy?: TagGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tag model
   */
  readonly fields: TagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    glossaryEntries<T extends Tag$glossaryEntriesArgs<ExtArgs> = {}>(args?: Subset<T, Tag$glossaryEntriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GlossaryEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    segments<T extends Tag$segmentsArgs<ExtArgs> = {}>(args?: Subset<T, Tag$segmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SegmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    glossaryEntryTags<T extends Tag$glossaryEntryTagsArgs<ExtArgs> = {}>(args?: Subset<T, Tag$glossaryEntryTagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GlossaryEntryTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    segmentTags<T extends Tag$segmentTagsArgs<ExtArgs> = {}>(args?: Subset<T, Tag$segmentTagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SegmentTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Tag model
   */
  interface TagFieldRefs {
    readonly id: FieldRef<"Tag", 'String'>
    readonly name: FieldRef<"Tag", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Tag findUnique
   */
  export type TagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findUniqueOrThrow
   */
  export type TagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findFirst
   */
  export type TagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findFirstOrThrow
   */
  export type TagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findMany
   */
  export type TagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag create
   */
  export type TagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to create a Tag.
     */
    data: XOR<TagCreateInput, TagUncheckedCreateInput>
  }

  /**
   * Tag createMany
   */
  export type TagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag createManyAndReturn
   */
  export type TagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag update
   */
  export type TagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to update a Tag.
     */
    data: XOR<TagUpdateInput, TagUncheckedUpdateInput>
    /**
     * Choose, which Tag to update.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag updateMany
   */
  export type TagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag updateManyAndReturn
   */
  export type TagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag upsert
   */
  export type TagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The filter to search for the Tag to update in case it exists.
     */
    where: TagWhereUniqueInput
    /**
     * In case the Tag found by the `where` argument doesn't exist, create a new Tag with this data.
     */
    create: XOR<TagCreateInput, TagUncheckedCreateInput>
    /**
     * In case the Tag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TagUpdateInput, TagUncheckedUpdateInput>
  }

  /**
   * Tag delete
   */
  export type TagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter which Tag to delete.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag deleteMany
   */
  export type TagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tags to delete
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to delete.
     */
    limit?: number
  }

  /**
   * Tag.glossaryEntries
   */
  export type Tag$glossaryEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlossaryEntry
     */
    select?: GlossaryEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlossaryEntry
     */
    omit?: GlossaryEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlossaryEntryInclude<ExtArgs> | null
    where?: GlossaryEntryWhereInput
    orderBy?: GlossaryEntryOrderByWithRelationInput | GlossaryEntryOrderByWithRelationInput[]
    cursor?: GlossaryEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GlossaryEntryScalarFieldEnum | GlossaryEntryScalarFieldEnum[]
  }

  /**
   * Tag.segments
   */
  export type Tag$segmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Segment
     */
    select?: SegmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Segment
     */
    omit?: SegmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SegmentInclude<ExtArgs> | null
    where?: SegmentWhereInput
    orderBy?: SegmentOrderByWithRelationInput | SegmentOrderByWithRelationInput[]
    cursor?: SegmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SegmentScalarFieldEnum | SegmentScalarFieldEnum[]
  }

  /**
   * Tag.glossaryEntryTags
   */
  export type Tag$glossaryEntryTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlossaryEntryTag
     */
    select?: GlossaryEntryTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlossaryEntryTag
     */
    omit?: GlossaryEntryTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlossaryEntryTagInclude<ExtArgs> | null
    where?: GlossaryEntryTagWhereInput
    orderBy?: GlossaryEntryTagOrderByWithRelationInput | GlossaryEntryTagOrderByWithRelationInput[]
    cursor?: GlossaryEntryTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GlossaryEntryTagScalarFieldEnum | GlossaryEntryTagScalarFieldEnum[]
  }

  /**
   * Tag.segmentTags
   */
  export type Tag$segmentTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SegmentTag
     */
    select?: SegmentTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SegmentTag
     */
    omit?: SegmentTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SegmentTagInclude<ExtArgs> | null
    where?: SegmentTagWhereInput
    orderBy?: SegmentTagOrderByWithRelationInput | SegmentTagOrderByWithRelationInput[]
    cursor?: SegmentTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SegmentTagScalarFieldEnum | SegmentTagScalarFieldEnum[]
  }

  /**
   * Tag without action
   */
  export type TagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
  }


  /**
   * Model GlossaryEntryTag
   */

  export type AggregateGlossaryEntryTag = {
    _count: GlossaryEntryTagCountAggregateOutputType | null
    _min: GlossaryEntryTagMinAggregateOutputType | null
    _max: GlossaryEntryTagMaxAggregateOutputType | null
  }

  export type GlossaryEntryTagMinAggregateOutputType = {
    id: string | null
    glossaryId: string | null
    tagId: string | null
  }

  export type GlossaryEntryTagMaxAggregateOutputType = {
    id: string | null
    glossaryId: string | null
    tagId: string | null
  }

  export type GlossaryEntryTagCountAggregateOutputType = {
    id: number
    glossaryId: number
    tagId: number
    _all: number
  }


  export type GlossaryEntryTagMinAggregateInputType = {
    id?: true
    glossaryId?: true
    tagId?: true
  }

  export type GlossaryEntryTagMaxAggregateInputType = {
    id?: true
    glossaryId?: true
    tagId?: true
  }

  export type GlossaryEntryTagCountAggregateInputType = {
    id?: true
    glossaryId?: true
    tagId?: true
    _all?: true
  }

  export type GlossaryEntryTagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GlossaryEntryTag to aggregate.
     */
    where?: GlossaryEntryTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GlossaryEntryTags to fetch.
     */
    orderBy?: GlossaryEntryTagOrderByWithRelationInput | GlossaryEntryTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GlossaryEntryTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GlossaryEntryTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GlossaryEntryTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GlossaryEntryTags
    **/
    _count?: true | GlossaryEntryTagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GlossaryEntryTagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GlossaryEntryTagMaxAggregateInputType
  }

  export type GetGlossaryEntryTagAggregateType<T extends GlossaryEntryTagAggregateArgs> = {
        [P in keyof T & keyof AggregateGlossaryEntryTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGlossaryEntryTag[P]>
      : GetScalarType<T[P], AggregateGlossaryEntryTag[P]>
  }




  export type GlossaryEntryTagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GlossaryEntryTagWhereInput
    orderBy?: GlossaryEntryTagOrderByWithAggregationInput | GlossaryEntryTagOrderByWithAggregationInput[]
    by: GlossaryEntryTagScalarFieldEnum[] | GlossaryEntryTagScalarFieldEnum
    having?: GlossaryEntryTagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GlossaryEntryTagCountAggregateInputType | true
    _min?: GlossaryEntryTagMinAggregateInputType
    _max?: GlossaryEntryTagMaxAggregateInputType
  }

  export type GlossaryEntryTagGroupByOutputType = {
    id: string
    glossaryId: string
    tagId: string
    _count: GlossaryEntryTagCountAggregateOutputType | null
    _min: GlossaryEntryTagMinAggregateOutputType | null
    _max: GlossaryEntryTagMaxAggregateOutputType | null
  }

  type GetGlossaryEntryTagGroupByPayload<T extends GlossaryEntryTagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GlossaryEntryTagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GlossaryEntryTagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GlossaryEntryTagGroupByOutputType[P]>
            : GetScalarType<T[P], GlossaryEntryTagGroupByOutputType[P]>
        }
      >
    >


  export type GlossaryEntryTagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    glossaryId?: boolean
    tagId?: boolean
    glossaryEntry?: boolean | GlossaryEntryDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["glossaryEntryTag"]>

  export type GlossaryEntryTagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    glossaryId?: boolean
    tagId?: boolean
    glossaryEntry?: boolean | GlossaryEntryDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["glossaryEntryTag"]>

  export type GlossaryEntryTagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    glossaryId?: boolean
    tagId?: boolean
    glossaryEntry?: boolean | GlossaryEntryDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["glossaryEntryTag"]>

  export type GlossaryEntryTagSelectScalar = {
    id?: boolean
    glossaryId?: boolean
    tagId?: boolean
  }

  export type GlossaryEntryTagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "glossaryId" | "tagId", ExtArgs["result"]["glossaryEntryTag"]>
  export type GlossaryEntryTagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    glossaryEntry?: boolean | GlossaryEntryDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }
  export type GlossaryEntryTagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    glossaryEntry?: boolean | GlossaryEntryDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }
  export type GlossaryEntryTagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    glossaryEntry?: boolean | GlossaryEntryDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }

  export type $GlossaryEntryTagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GlossaryEntryTag"
    objects: {
      glossaryEntry: Prisma.$GlossaryEntryPayload<ExtArgs>
      tag: Prisma.$TagPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      glossaryId: string
      tagId: string
    }, ExtArgs["result"]["glossaryEntryTag"]>
    composites: {}
  }

  type GlossaryEntryTagGetPayload<S extends boolean | null | undefined | GlossaryEntryTagDefaultArgs> = $Result.GetResult<Prisma.$GlossaryEntryTagPayload, S>

  type GlossaryEntryTagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GlossaryEntryTagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GlossaryEntryTagCountAggregateInputType | true
    }

  export interface GlossaryEntryTagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GlossaryEntryTag'], meta: { name: 'GlossaryEntryTag' } }
    /**
     * Find zero or one GlossaryEntryTag that matches the filter.
     * @param {GlossaryEntryTagFindUniqueArgs} args - Arguments to find a GlossaryEntryTag
     * @example
     * // Get one GlossaryEntryTag
     * const glossaryEntryTag = await prisma.glossaryEntryTag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GlossaryEntryTagFindUniqueArgs>(args: SelectSubset<T, GlossaryEntryTagFindUniqueArgs<ExtArgs>>): Prisma__GlossaryEntryTagClient<$Result.GetResult<Prisma.$GlossaryEntryTagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GlossaryEntryTag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GlossaryEntryTagFindUniqueOrThrowArgs} args - Arguments to find a GlossaryEntryTag
     * @example
     * // Get one GlossaryEntryTag
     * const glossaryEntryTag = await prisma.glossaryEntryTag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GlossaryEntryTagFindUniqueOrThrowArgs>(args: SelectSubset<T, GlossaryEntryTagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GlossaryEntryTagClient<$Result.GetResult<Prisma.$GlossaryEntryTagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GlossaryEntryTag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlossaryEntryTagFindFirstArgs} args - Arguments to find a GlossaryEntryTag
     * @example
     * // Get one GlossaryEntryTag
     * const glossaryEntryTag = await prisma.glossaryEntryTag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GlossaryEntryTagFindFirstArgs>(args?: SelectSubset<T, GlossaryEntryTagFindFirstArgs<ExtArgs>>): Prisma__GlossaryEntryTagClient<$Result.GetResult<Prisma.$GlossaryEntryTagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GlossaryEntryTag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlossaryEntryTagFindFirstOrThrowArgs} args - Arguments to find a GlossaryEntryTag
     * @example
     * // Get one GlossaryEntryTag
     * const glossaryEntryTag = await prisma.glossaryEntryTag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GlossaryEntryTagFindFirstOrThrowArgs>(args?: SelectSubset<T, GlossaryEntryTagFindFirstOrThrowArgs<ExtArgs>>): Prisma__GlossaryEntryTagClient<$Result.GetResult<Prisma.$GlossaryEntryTagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GlossaryEntryTags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlossaryEntryTagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GlossaryEntryTags
     * const glossaryEntryTags = await prisma.glossaryEntryTag.findMany()
     * 
     * // Get first 10 GlossaryEntryTags
     * const glossaryEntryTags = await prisma.glossaryEntryTag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const glossaryEntryTagWithIdOnly = await prisma.glossaryEntryTag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GlossaryEntryTagFindManyArgs>(args?: SelectSubset<T, GlossaryEntryTagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GlossaryEntryTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GlossaryEntryTag.
     * @param {GlossaryEntryTagCreateArgs} args - Arguments to create a GlossaryEntryTag.
     * @example
     * // Create one GlossaryEntryTag
     * const GlossaryEntryTag = await prisma.glossaryEntryTag.create({
     *   data: {
     *     // ... data to create a GlossaryEntryTag
     *   }
     * })
     * 
     */
    create<T extends GlossaryEntryTagCreateArgs>(args: SelectSubset<T, GlossaryEntryTagCreateArgs<ExtArgs>>): Prisma__GlossaryEntryTagClient<$Result.GetResult<Prisma.$GlossaryEntryTagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GlossaryEntryTags.
     * @param {GlossaryEntryTagCreateManyArgs} args - Arguments to create many GlossaryEntryTags.
     * @example
     * // Create many GlossaryEntryTags
     * const glossaryEntryTag = await prisma.glossaryEntryTag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GlossaryEntryTagCreateManyArgs>(args?: SelectSubset<T, GlossaryEntryTagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GlossaryEntryTags and returns the data saved in the database.
     * @param {GlossaryEntryTagCreateManyAndReturnArgs} args - Arguments to create many GlossaryEntryTags.
     * @example
     * // Create many GlossaryEntryTags
     * const glossaryEntryTag = await prisma.glossaryEntryTag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GlossaryEntryTags and only return the `id`
     * const glossaryEntryTagWithIdOnly = await prisma.glossaryEntryTag.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GlossaryEntryTagCreateManyAndReturnArgs>(args?: SelectSubset<T, GlossaryEntryTagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GlossaryEntryTagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GlossaryEntryTag.
     * @param {GlossaryEntryTagDeleteArgs} args - Arguments to delete one GlossaryEntryTag.
     * @example
     * // Delete one GlossaryEntryTag
     * const GlossaryEntryTag = await prisma.glossaryEntryTag.delete({
     *   where: {
     *     // ... filter to delete one GlossaryEntryTag
     *   }
     * })
     * 
     */
    delete<T extends GlossaryEntryTagDeleteArgs>(args: SelectSubset<T, GlossaryEntryTagDeleteArgs<ExtArgs>>): Prisma__GlossaryEntryTagClient<$Result.GetResult<Prisma.$GlossaryEntryTagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GlossaryEntryTag.
     * @param {GlossaryEntryTagUpdateArgs} args - Arguments to update one GlossaryEntryTag.
     * @example
     * // Update one GlossaryEntryTag
     * const glossaryEntryTag = await prisma.glossaryEntryTag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GlossaryEntryTagUpdateArgs>(args: SelectSubset<T, GlossaryEntryTagUpdateArgs<ExtArgs>>): Prisma__GlossaryEntryTagClient<$Result.GetResult<Prisma.$GlossaryEntryTagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GlossaryEntryTags.
     * @param {GlossaryEntryTagDeleteManyArgs} args - Arguments to filter GlossaryEntryTags to delete.
     * @example
     * // Delete a few GlossaryEntryTags
     * const { count } = await prisma.glossaryEntryTag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GlossaryEntryTagDeleteManyArgs>(args?: SelectSubset<T, GlossaryEntryTagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GlossaryEntryTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlossaryEntryTagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GlossaryEntryTags
     * const glossaryEntryTag = await prisma.glossaryEntryTag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GlossaryEntryTagUpdateManyArgs>(args: SelectSubset<T, GlossaryEntryTagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GlossaryEntryTags and returns the data updated in the database.
     * @param {GlossaryEntryTagUpdateManyAndReturnArgs} args - Arguments to update many GlossaryEntryTags.
     * @example
     * // Update many GlossaryEntryTags
     * const glossaryEntryTag = await prisma.glossaryEntryTag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GlossaryEntryTags and only return the `id`
     * const glossaryEntryTagWithIdOnly = await prisma.glossaryEntryTag.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GlossaryEntryTagUpdateManyAndReturnArgs>(args: SelectSubset<T, GlossaryEntryTagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GlossaryEntryTagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GlossaryEntryTag.
     * @param {GlossaryEntryTagUpsertArgs} args - Arguments to update or create a GlossaryEntryTag.
     * @example
     * // Update or create a GlossaryEntryTag
     * const glossaryEntryTag = await prisma.glossaryEntryTag.upsert({
     *   create: {
     *     // ... data to create a GlossaryEntryTag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GlossaryEntryTag we want to update
     *   }
     * })
     */
    upsert<T extends GlossaryEntryTagUpsertArgs>(args: SelectSubset<T, GlossaryEntryTagUpsertArgs<ExtArgs>>): Prisma__GlossaryEntryTagClient<$Result.GetResult<Prisma.$GlossaryEntryTagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GlossaryEntryTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlossaryEntryTagCountArgs} args - Arguments to filter GlossaryEntryTags to count.
     * @example
     * // Count the number of GlossaryEntryTags
     * const count = await prisma.glossaryEntryTag.count({
     *   where: {
     *     // ... the filter for the GlossaryEntryTags we want to count
     *   }
     * })
    **/
    count<T extends GlossaryEntryTagCountArgs>(
      args?: Subset<T, GlossaryEntryTagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GlossaryEntryTagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GlossaryEntryTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlossaryEntryTagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GlossaryEntryTagAggregateArgs>(args: Subset<T, GlossaryEntryTagAggregateArgs>): Prisma.PrismaPromise<GetGlossaryEntryTagAggregateType<T>>

    /**
     * Group by GlossaryEntryTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlossaryEntryTagGroupByArgs} args - Group by arguments.
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
      T extends GlossaryEntryTagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GlossaryEntryTagGroupByArgs['orderBy'] }
        : { orderBy?: GlossaryEntryTagGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GlossaryEntryTagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGlossaryEntryTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GlossaryEntryTag model
   */
  readonly fields: GlossaryEntryTagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GlossaryEntryTag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GlossaryEntryTagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    glossaryEntry<T extends GlossaryEntryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GlossaryEntryDefaultArgs<ExtArgs>>): Prisma__GlossaryEntryClient<$Result.GetResult<Prisma.$GlossaryEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tag<T extends TagDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TagDefaultArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the GlossaryEntryTag model
   */
  interface GlossaryEntryTagFieldRefs {
    readonly id: FieldRef<"GlossaryEntryTag", 'String'>
    readonly glossaryId: FieldRef<"GlossaryEntryTag", 'String'>
    readonly tagId: FieldRef<"GlossaryEntryTag", 'String'>
  }
    

  // Custom InputTypes
  /**
   * GlossaryEntryTag findUnique
   */
  export type GlossaryEntryTagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlossaryEntryTag
     */
    select?: GlossaryEntryTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlossaryEntryTag
     */
    omit?: GlossaryEntryTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlossaryEntryTagInclude<ExtArgs> | null
    /**
     * Filter, which GlossaryEntryTag to fetch.
     */
    where: GlossaryEntryTagWhereUniqueInput
  }

  /**
   * GlossaryEntryTag findUniqueOrThrow
   */
  export type GlossaryEntryTagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlossaryEntryTag
     */
    select?: GlossaryEntryTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlossaryEntryTag
     */
    omit?: GlossaryEntryTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlossaryEntryTagInclude<ExtArgs> | null
    /**
     * Filter, which GlossaryEntryTag to fetch.
     */
    where: GlossaryEntryTagWhereUniqueInput
  }

  /**
   * GlossaryEntryTag findFirst
   */
  export type GlossaryEntryTagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlossaryEntryTag
     */
    select?: GlossaryEntryTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlossaryEntryTag
     */
    omit?: GlossaryEntryTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlossaryEntryTagInclude<ExtArgs> | null
    /**
     * Filter, which GlossaryEntryTag to fetch.
     */
    where?: GlossaryEntryTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GlossaryEntryTags to fetch.
     */
    orderBy?: GlossaryEntryTagOrderByWithRelationInput | GlossaryEntryTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GlossaryEntryTags.
     */
    cursor?: GlossaryEntryTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GlossaryEntryTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GlossaryEntryTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GlossaryEntryTags.
     */
    distinct?: GlossaryEntryTagScalarFieldEnum | GlossaryEntryTagScalarFieldEnum[]
  }

  /**
   * GlossaryEntryTag findFirstOrThrow
   */
  export type GlossaryEntryTagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlossaryEntryTag
     */
    select?: GlossaryEntryTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlossaryEntryTag
     */
    omit?: GlossaryEntryTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlossaryEntryTagInclude<ExtArgs> | null
    /**
     * Filter, which GlossaryEntryTag to fetch.
     */
    where?: GlossaryEntryTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GlossaryEntryTags to fetch.
     */
    orderBy?: GlossaryEntryTagOrderByWithRelationInput | GlossaryEntryTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GlossaryEntryTags.
     */
    cursor?: GlossaryEntryTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GlossaryEntryTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GlossaryEntryTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GlossaryEntryTags.
     */
    distinct?: GlossaryEntryTagScalarFieldEnum | GlossaryEntryTagScalarFieldEnum[]
  }

  /**
   * GlossaryEntryTag findMany
   */
  export type GlossaryEntryTagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlossaryEntryTag
     */
    select?: GlossaryEntryTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlossaryEntryTag
     */
    omit?: GlossaryEntryTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlossaryEntryTagInclude<ExtArgs> | null
    /**
     * Filter, which GlossaryEntryTags to fetch.
     */
    where?: GlossaryEntryTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GlossaryEntryTags to fetch.
     */
    orderBy?: GlossaryEntryTagOrderByWithRelationInput | GlossaryEntryTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GlossaryEntryTags.
     */
    cursor?: GlossaryEntryTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GlossaryEntryTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GlossaryEntryTags.
     */
    skip?: number
    distinct?: GlossaryEntryTagScalarFieldEnum | GlossaryEntryTagScalarFieldEnum[]
  }

  /**
   * GlossaryEntryTag create
   */
  export type GlossaryEntryTagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlossaryEntryTag
     */
    select?: GlossaryEntryTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlossaryEntryTag
     */
    omit?: GlossaryEntryTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlossaryEntryTagInclude<ExtArgs> | null
    /**
     * The data needed to create a GlossaryEntryTag.
     */
    data: XOR<GlossaryEntryTagCreateInput, GlossaryEntryTagUncheckedCreateInput>
  }

  /**
   * GlossaryEntryTag createMany
   */
  export type GlossaryEntryTagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GlossaryEntryTags.
     */
    data: GlossaryEntryTagCreateManyInput | GlossaryEntryTagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GlossaryEntryTag createManyAndReturn
   */
  export type GlossaryEntryTagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlossaryEntryTag
     */
    select?: GlossaryEntryTagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GlossaryEntryTag
     */
    omit?: GlossaryEntryTagOmit<ExtArgs> | null
    /**
     * The data used to create many GlossaryEntryTags.
     */
    data: GlossaryEntryTagCreateManyInput | GlossaryEntryTagCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlossaryEntryTagIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GlossaryEntryTag update
   */
  export type GlossaryEntryTagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlossaryEntryTag
     */
    select?: GlossaryEntryTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlossaryEntryTag
     */
    omit?: GlossaryEntryTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlossaryEntryTagInclude<ExtArgs> | null
    /**
     * The data needed to update a GlossaryEntryTag.
     */
    data: XOR<GlossaryEntryTagUpdateInput, GlossaryEntryTagUncheckedUpdateInput>
    /**
     * Choose, which GlossaryEntryTag to update.
     */
    where: GlossaryEntryTagWhereUniqueInput
  }

  /**
   * GlossaryEntryTag updateMany
   */
  export type GlossaryEntryTagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GlossaryEntryTags.
     */
    data: XOR<GlossaryEntryTagUpdateManyMutationInput, GlossaryEntryTagUncheckedUpdateManyInput>
    /**
     * Filter which GlossaryEntryTags to update
     */
    where?: GlossaryEntryTagWhereInput
    /**
     * Limit how many GlossaryEntryTags to update.
     */
    limit?: number
  }

  /**
   * GlossaryEntryTag updateManyAndReturn
   */
  export type GlossaryEntryTagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlossaryEntryTag
     */
    select?: GlossaryEntryTagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GlossaryEntryTag
     */
    omit?: GlossaryEntryTagOmit<ExtArgs> | null
    /**
     * The data used to update GlossaryEntryTags.
     */
    data: XOR<GlossaryEntryTagUpdateManyMutationInput, GlossaryEntryTagUncheckedUpdateManyInput>
    /**
     * Filter which GlossaryEntryTags to update
     */
    where?: GlossaryEntryTagWhereInput
    /**
     * Limit how many GlossaryEntryTags to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlossaryEntryTagIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GlossaryEntryTag upsert
   */
  export type GlossaryEntryTagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlossaryEntryTag
     */
    select?: GlossaryEntryTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlossaryEntryTag
     */
    omit?: GlossaryEntryTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlossaryEntryTagInclude<ExtArgs> | null
    /**
     * The filter to search for the GlossaryEntryTag to update in case it exists.
     */
    where: GlossaryEntryTagWhereUniqueInput
    /**
     * In case the GlossaryEntryTag found by the `where` argument doesn't exist, create a new GlossaryEntryTag with this data.
     */
    create: XOR<GlossaryEntryTagCreateInput, GlossaryEntryTagUncheckedCreateInput>
    /**
     * In case the GlossaryEntryTag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GlossaryEntryTagUpdateInput, GlossaryEntryTagUncheckedUpdateInput>
  }

  /**
   * GlossaryEntryTag delete
   */
  export type GlossaryEntryTagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlossaryEntryTag
     */
    select?: GlossaryEntryTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlossaryEntryTag
     */
    omit?: GlossaryEntryTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlossaryEntryTagInclude<ExtArgs> | null
    /**
     * Filter which GlossaryEntryTag to delete.
     */
    where: GlossaryEntryTagWhereUniqueInput
  }

  /**
   * GlossaryEntryTag deleteMany
   */
  export type GlossaryEntryTagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GlossaryEntryTags to delete
     */
    where?: GlossaryEntryTagWhereInput
    /**
     * Limit how many GlossaryEntryTags to delete.
     */
    limit?: number
  }

  /**
   * GlossaryEntryTag without action
   */
  export type GlossaryEntryTagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlossaryEntryTag
     */
    select?: GlossaryEntryTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlossaryEntryTag
     */
    omit?: GlossaryEntryTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlossaryEntryTagInclude<ExtArgs> | null
  }


  /**
   * Model SegmentTag
   */

  export type AggregateSegmentTag = {
    _count: SegmentTagCountAggregateOutputType | null
    _min: SegmentTagMinAggregateOutputType | null
    _max: SegmentTagMaxAggregateOutputType | null
  }

  export type SegmentTagMinAggregateOutputType = {
    id: string | null
    segmentId: string | null
    tagId: string | null
  }

  export type SegmentTagMaxAggregateOutputType = {
    id: string | null
    segmentId: string | null
    tagId: string | null
  }

  export type SegmentTagCountAggregateOutputType = {
    id: number
    segmentId: number
    tagId: number
    _all: number
  }


  export type SegmentTagMinAggregateInputType = {
    id?: true
    segmentId?: true
    tagId?: true
  }

  export type SegmentTagMaxAggregateInputType = {
    id?: true
    segmentId?: true
    tagId?: true
  }

  export type SegmentTagCountAggregateInputType = {
    id?: true
    segmentId?: true
    tagId?: true
    _all?: true
  }

  export type SegmentTagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SegmentTag to aggregate.
     */
    where?: SegmentTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SegmentTags to fetch.
     */
    orderBy?: SegmentTagOrderByWithRelationInput | SegmentTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SegmentTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SegmentTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SegmentTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SegmentTags
    **/
    _count?: true | SegmentTagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SegmentTagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SegmentTagMaxAggregateInputType
  }

  export type GetSegmentTagAggregateType<T extends SegmentTagAggregateArgs> = {
        [P in keyof T & keyof AggregateSegmentTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSegmentTag[P]>
      : GetScalarType<T[P], AggregateSegmentTag[P]>
  }




  export type SegmentTagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SegmentTagWhereInput
    orderBy?: SegmentTagOrderByWithAggregationInput | SegmentTagOrderByWithAggregationInput[]
    by: SegmentTagScalarFieldEnum[] | SegmentTagScalarFieldEnum
    having?: SegmentTagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SegmentTagCountAggregateInputType | true
    _min?: SegmentTagMinAggregateInputType
    _max?: SegmentTagMaxAggregateInputType
  }

  export type SegmentTagGroupByOutputType = {
    id: string
    segmentId: string
    tagId: string
    _count: SegmentTagCountAggregateOutputType | null
    _min: SegmentTagMinAggregateOutputType | null
    _max: SegmentTagMaxAggregateOutputType | null
  }

  type GetSegmentTagGroupByPayload<T extends SegmentTagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SegmentTagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SegmentTagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SegmentTagGroupByOutputType[P]>
            : GetScalarType<T[P], SegmentTagGroupByOutputType[P]>
        }
      >
    >


  export type SegmentTagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    segmentId?: boolean
    tagId?: boolean
    segment?: boolean | SegmentDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["segmentTag"]>

  export type SegmentTagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    segmentId?: boolean
    tagId?: boolean
    segment?: boolean | SegmentDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["segmentTag"]>

  export type SegmentTagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    segmentId?: boolean
    tagId?: boolean
    segment?: boolean | SegmentDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["segmentTag"]>

  export type SegmentTagSelectScalar = {
    id?: boolean
    segmentId?: boolean
    tagId?: boolean
  }

  export type SegmentTagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "segmentId" | "tagId", ExtArgs["result"]["segmentTag"]>
  export type SegmentTagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    segment?: boolean | SegmentDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }
  export type SegmentTagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    segment?: boolean | SegmentDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }
  export type SegmentTagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    segment?: boolean | SegmentDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }

  export type $SegmentTagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SegmentTag"
    objects: {
      segment: Prisma.$SegmentPayload<ExtArgs>
      tag: Prisma.$TagPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      segmentId: string
      tagId: string
    }, ExtArgs["result"]["segmentTag"]>
    composites: {}
  }

  type SegmentTagGetPayload<S extends boolean | null | undefined | SegmentTagDefaultArgs> = $Result.GetResult<Prisma.$SegmentTagPayload, S>

  type SegmentTagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SegmentTagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SegmentTagCountAggregateInputType | true
    }

  export interface SegmentTagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SegmentTag'], meta: { name: 'SegmentTag' } }
    /**
     * Find zero or one SegmentTag that matches the filter.
     * @param {SegmentTagFindUniqueArgs} args - Arguments to find a SegmentTag
     * @example
     * // Get one SegmentTag
     * const segmentTag = await prisma.segmentTag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SegmentTagFindUniqueArgs>(args: SelectSubset<T, SegmentTagFindUniqueArgs<ExtArgs>>): Prisma__SegmentTagClient<$Result.GetResult<Prisma.$SegmentTagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SegmentTag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SegmentTagFindUniqueOrThrowArgs} args - Arguments to find a SegmentTag
     * @example
     * // Get one SegmentTag
     * const segmentTag = await prisma.segmentTag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SegmentTagFindUniqueOrThrowArgs>(args: SelectSubset<T, SegmentTagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SegmentTagClient<$Result.GetResult<Prisma.$SegmentTagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SegmentTag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SegmentTagFindFirstArgs} args - Arguments to find a SegmentTag
     * @example
     * // Get one SegmentTag
     * const segmentTag = await prisma.segmentTag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SegmentTagFindFirstArgs>(args?: SelectSubset<T, SegmentTagFindFirstArgs<ExtArgs>>): Prisma__SegmentTagClient<$Result.GetResult<Prisma.$SegmentTagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SegmentTag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SegmentTagFindFirstOrThrowArgs} args - Arguments to find a SegmentTag
     * @example
     * // Get one SegmentTag
     * const segmentTag = await prisma.segmentTag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SegmentTagFindFirstOrThrowArgs>(args?: SelectSubset<T, SegmentTagFindFirstOrThrowArgs<ExtArgs>>): Prisma__SegmentTagClient<$Result.GetResult<Prisma.$SegmentTagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SegmentTags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SegmentTagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SegmentTags
     * const segmentTags = await prisma.segmentTag.findMany()
     * 
     * // Get first 10 SegmentTags
     * const segmentTags = await prisma.segmentTag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const segmentTagWithIdOnly = await prisma.segmentTag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SegmentTagFindManyArgs>(args?: SelectSubset<T, SegmentTagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SegmentTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SegmentTag.
     * @param {SegmentTagCreateArgs} args - Arguments to create a SegmentTag.
     * @example
     * // Create one SegmentTag
     * const SegmentTag = await prisma.segmentTag.create({
     *   data: {
     *     // ... data to create a SegmentTag
     *   }
     * })
     * 
     */
    create<T extends SegmentTagCreateArgs>(args: SelectSubset<T, SegmentTagCreateArgs<ExtArgs>>): Prisma__SegmentTagClient<$Result.GetResult<Prisma.$SegmentTagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SegmentTags.
     * @param {SegmentTagCreateManyArgs} args - Arguments to create many SegmentTags.
     * @example
     * // Create many SegmentTags
     * const segmentTag = await prisma.segmentTag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SegmentTagCreateManyArgs>(args?: SelectSubset<T, SegmentTagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SegmentTags and returns the data saved in the database.
     * @param {SegmentTagCreateManyAndReturnArgs} args - Arguments to create many SegmentTags.
     * @example
     * // Create many SegmentTags
     * const segmentTag = await prisma.segmentTag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SegmentTags and only return the `id`
     * const segmentTagWithIdOnly = await prisma.segmentTag.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SegmentTagCreateManyAndReturnArgs>(args?: SelectSubset<T, SegmentTagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SegmentTagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SegmentTag.
     * @param {SegmentTagDeleteArgs} args - Arguments to delete one SegmentTag.
     * @example
     * // Delete one SegmentTag
     * const SegmentTag = await prisma.segmentTag.delete({
     *   where: {
     *     // ... filter to delete one SegmentTag
     *   }
     * })
     * 
     */
    delete<T extends SegmentTagDeleteArgs>(args: SelectSubset<T, SegmentTagDeleteArgs<ExtArgs>>): Prisma__SegmentTagClient<$Result.GetResult<Prisma.$SegmentTagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SegmentTag.
     * @param {SegmentTagUpdateArgs} args - Arguments to update one SegmentTag.
     * @example
     * // Update one SegmentTag
     * const segmentTag = await prisma.segmentTag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SegmentTagUpdateArgs>(args: SelectSubset<T, SegmentTagUpdateArgs<ExtArgs>>): Prisma__SegmentTagClient<$Result.GetResult<Prisma.$SegmentTagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SegmentTags.
     * @param {SegmentTagDeleteManyArgs} args - Arguments to filter SegmentTags to delete.
     * @example
     * // Delete a few SegmentTags
     * const { count } = await prisma.segmentTag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SegmentTagDeleteManyArgs>(args?: SelectSubset<T, SegmentTagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SegmentTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SegmentTagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SegmentTags
     * const segmentTag = await prisma.segmentTag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SegmentTagUpdateManyArgs>(args: SelectSubset<T, SegmentTagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SegmentTags and returns the data updated in the database.
     * @param {SegmentTagUpdateManyAndReturnArgs} args - Arguments to update many SegmentTags.
     * @example
     * // Update many SegmentTags
     * const segmentTag = await prisma.segmentTag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SegmentTags and only return the `id`
     * const segmentTagWithIdOnly = await prisma.segmentTag.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SegmentTagUpdateManyAndReturnArgs>(args: SelectSubset<T, SegmentTagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SegmentTagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SegmentTag.
     * @param {SegmentTagUpsertArgs} args - Arguments to update or create a SegmentTag.
     * @example
     * // Update or create a SegmentTag
     * const segmentTag = await prisma.segmentTag.upsert({
     *   create: {
     *     // ... data to create a SegmentTag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SegmentTag we want to update
     *   }
     * })
     */
    upsert<T extends SegmentTagUpsertArgs>(args: SelectSubset<T, SegmentTagUpsertArgs<ExtArgs>>): Prisma__SegmentTagClient<$Result.GetResult<Prisma.$SegmentTagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SegmentTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SegmentTagCountArgs} args - Arguments to filter SegmentTags to count.
     * @example
     * // Count the number of SegmentTags
     * const count = await prisma.segmentTag.count({
     *   where: {
     *     // ... the filter for the SegmentTags we want to count
     *   }
     * })
    **/
    count<T extends SegmentTagCountArgs>(
      args?: Subset<T, SegmentTagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SegmentTagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SegmentTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SegmentTagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SegmentTagAggregateArgs>(args: Subset<T, SegmentTagAggregateArgs>): Prisma.PrismaPromise<GetSegmentTagAggregateType<T>>

    /**
     * Group by SegmentTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SegmentTagGroupByArgs} args - Group by arguments.
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
      T extends SegmentTagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SegmentTagGroupByArgs['orderBy'] }
        : { orderBy?: SegmentTagGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SegmentTagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSegmentTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SegmentTag model
   */
  readonly fields: SegmentTagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SegmentTag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SegmentTagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    segment<T extends SegmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SegmentDefaultArgs<ExtArgs>>): Prisma__SegmentClient<$Result.GetResult<Prisma.$SegmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tag<T extends TagDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TagDefaultArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SegmentTag model
   */
  interface SegmentTagFieldRefs {
    readonly id: FieldRef<"SegmentTag", 'String'>
    readonly segmentId: FieldRef<"SegmentTag", 'String'>
    readonly tagId: FieldRef<"SegmentTag", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SegmentTag findUnique
   */
  export type SegmentTagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SegmentTag
     */
    select?: SegmentTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SegmentTag
     */
    omit?: SegmentTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SegmentTagInclude<ExtArgs> | null
    /**
     * Filter, which SegmentTag to fetch.
     */
    where: SegmentTagWhereUniqueInput
  }

  /**
   * SegmentTag findUniqueOrThrow
   */
  export type SegmentTagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SegmentTag
     */
    select?: SegmentTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SegmentTag
     */
    omit?: SegmentTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SegmentTagInclude<ExtArgs> | null
    /**
     * Filter, which SegmentTag to fetch.
     */
    where: SegmentTagWhereUniqueInput
  }

  /**
   * SegmentTag findFirst
   */
  export type SegmentTagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SegmentTag
     */
    select?: SegmentTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SegmentTag
     */
    omit?: SegmentTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SegmentTagInclude<ExtArgs> | null
    /**
     * Filter, which SegmentTag to fetch.
     */
    where?: SegmentTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SegmentTags to fetch.
     */
    orderBy?: SegmentTagOrderByWithRelationInput | SegmentTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SegmentTags.
     */
    cursor?: SegmentTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SegmentTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SegmentTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SegmentTags.
     */
    distinct?: SegmentTagScalarFieldEnum | SegmentTagScalarFieldEnum[]
  }

  /**
   * SegmentTag findFirstOrThrow
   */
  export type SegmentTagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SegmentTag
     */
    select?: SegmentTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SegmentTag
     */
    omit?: SegmentTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SegmentTagInclude<ExtArgs> | null
    /**
     * Filter, which SegmentTag to fetch.
     */
    where?: SegmentTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SegmentTags to fetch.
     */
    orderBy?: SegmentTagOrderByWithRelationInput | SegmentTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SegmentTags.
     */
    cursor?: SegmentTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SegmentTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SegmentTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SegmentTags.
     */
    distinct?: SegmentTagScalarFieldEnum | SegmentTagScalarFieldEnum[]
  }

  /**
   * SegmentTag findMany
   */
  export type SegmentTagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SegmentTag
     */
    select?: SegmentTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SegmentTag
     */
    omit?: SegmentTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SegmentTagInclude<ExtArgs> | null
    /**
     * Filter, which SegmentTags to fetch.
     */
    where?: SegmentTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SegmentTags to fetch.
     */
    orderBy?: SegmentTagOrderByWithRelationInput | SegmentTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SegmentTags.
     */
    cursor?: SegmentTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SegmentTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SegmentTags.
     */
    skip?: number
    distinct?: SegmentTagScalarFieldEnum | SegmentTagScalarFieldEnum[]
  }

  /**
   * SegmentTag create
   */
  export type SegmentTagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SegmentTag
     */
    select?: SegmentTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SegmentTag
     */
    omit?: SegmentTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SegmentTagInclude<ExtArgs> | null
    /**
     * The data needed to create a SegmentTag.
     */
    data: XOR<SegmentTagCreateInput, SegmentTagUncheckedCreateInput>
  }

  /**
   * SegmentTag createMany
   */
  export type SegmentTagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SegmentTags.
     */
    data: SegmentTagCreateManyInput | SegmentTagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SegmentTag createManyAndReturn
   */
  export type SegmentTagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SegmentTag
     */
    select?: SegmentTagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SegmentTag
     */
    omit?: SegmentTagOmit<ExtArgs> | null
    /**
     * The data used to create many SegmentTags.
     */
    data: SegmentTagCreateManyInput | SegmentTagCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SegmentTagIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SegmentTag update
   */
  export type SegmentTagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SegmentTag
     */
    select?: SegmentTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SegmentTag
     */
    omit?: SegmentTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SegmentTagInclude<ExtArgs> | null
    /**
     * The data needed to update a SegmentTag.
     */
    data: XOR<SegmentTagUpdateInput, SegmentTagUncheckedUpdateInput>
    /**
     * Choose, which SegmentTag to update.
     */
    where: SegmentTagWhereUniqueInput
  }

  /**
   * SegmentTag updateMany
   */
  export type SegmentTagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SegmentTags.
     */
    data: XOR<SegmentTagUpdateManyMutationInput, SegmentTagUncheckedUpdateManyInput>
    /**
     * Filter which SegmentTags to update
     */
    where?: SegmentTagWhereInput
    /**
     * Limit how many SegmentTags to update.
     */
    limit?: number
  }

  /**
   * SegmentTag updateManyAndReturn
   */
  export type SegmentTagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SegmentTag
     */
    select?: SegmentTagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SegmentTag
     */
    omit?: SegmentTagOmit<ExtArgs> | null
    /**
     * The data used to update SegmentTags.
     */
    data: XOR<SegmentTagUpdateManyMutationInput, SegmentTagUncheckedUpdateManyInput>
    /**
     * Filter which SegmentTags to update
     */
    where?: SegmentTagWhereInput
    /**
     * Limit how many SegmentTags to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SegmentTagIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SegmentTag upsert
   */
  export type SegmentTagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SegmentTag
     */
    select?: SegmentTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SegmentTag
     */
    omit?: SegmentTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SegmentTagInclude<ExtArgs> | null
    /**
     * The filter to search for the SegmentTag to update in case it exists.
     */
    where: SegmentTagWhereUniqueInput
    /**
     * In case the SegmentTag found by the `where` argument doesn't exist, create a new SegmentTag with this data.
     */
    create: XOR<SegmentTagCreateInput, SegmentTagUncheckedCreateInput>
    /**
     * In case the SegmentTag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SegmentTagUpdateInput, SegmentTagUncheckedUpdateInput>
  }

  /**
   * SegmentTag delete
   */
  export type SegmentTagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SegmentTag
     */
    select?: SegmentTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SegmentTag
     */
    omit?: SegmentTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SegmentTagInclude<ExtArgs> | null
    /**
     * Filter which SegmentTag to delete.
     */
    where: SegmentTagWhereUniqueInput
  }

  /**
   * SegmentTag deleteMany
   */
  export type SegmentTagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SegmentTags to delete
     */
    where?: SegmentTagWhereInput
    /**
     * Limit how many SegmentTags to delete.
     */
    limit?: number
  }

  /**
   * SegmentTag without action
   */
  export type SegmentTagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SegmentTag
     */
    select?: SegmentTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SegmentTag
     */
    omit?: SegmentTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SegmentTagInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "provider" | "providerAccountId" | "refresh_token" | "access_token" | "expires_at" | "token_type" | "scope" | "id_token" | "session_state", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sessionToken: number
    userId: number
    expires: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    sessionToken: string
    userId: string
    expires: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionToken" | "userId" | "expires", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionToken: string
      userId: string
      expires: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model VerificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    identifier: number
    token: number
    expires: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationTokenWhereInput
    orderBy?: VerificationTokenOrderByWithAggregationInput | VerificationTokenOrderByWithAggregationInput[]
    by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type VerificationTokenGroupByOutputType = {
    identifier: string
    token: string
    expires: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectScalar = {
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }

  export type VerificationTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"identifier" | "token" | "expires", ExtArgs["result"]["verificationToken"]>

  export type $VerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      identifier: string
      token: string
      expires: Date
    }, ExtArgs["result"]["verificationToken"]>
    composites: {}
  }

  type VerificationTokenGetPayload<S extends boolean | null | undefined | VerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$VerificationTokenPayload, S>

  type VerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationTokenCountAggregateInputType | true
    }

  export interface VerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationToken'], meta: { name: 'VerificationToken' } }
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationTokenFindUniqueArgs>(args: SelectSubset<T, VerificationTokenFindUniqueArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VerificationToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationTokenFindFirstArgs>(args?: SelectSubset<T, VerificationTokenFindFirstArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.findMany({ select: { identifier: true } })
     * 
     */
    findMany<T extends VerificationTokenFindManyArgs>(args?: SelectSubset<T, VerificationTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
     */
    create<T extends VerificationTokenCreateArgs>(args: SelectSubset<T, VerificationTokenCreateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VerificationTokens.
     * @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationTokenCreateManyArgs>(args?: SelectSubset<T, VerificationTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VerificationTokens and returns the data saved in the database.
     * @param {VerificationTokenCreateManyAndReturnArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.createManyAndReturn({
     *   select: { identifier: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
     */
    delete<T extends VerificationTokenDeleteArgs>(args: SelectSubset<T, VerificationTokenDeleteArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationTokenUpdateArgs>(args: SelectSubset<T, VerificationTokenUpdateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationTokenDeleteManyArgs>(args?: SelectSubset<T, VerificationTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationTokenUpdateManyArgs>(args: SelectSubset<T, VerificationTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens and returns the data updated in the database.
     * @param {VerificationTokenUpdateManyAndReturnArgs} args - Arguments to update many VerificationTokens.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.updateManyAndReturn({
     *   select: { identifier: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VerificationTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
     */
    upsert<T extends VerificationTokenUpsertArgs>(args: SelectSubset<T, VerificationTokenUpsertArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
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
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationToken model
   */
  readonly fields: VerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the VerificationToken model
   */
  interface VerificationTokenFieldRefs {
    readonly identifier: FieldRef<"VerificationToken", 'String'>
    readonly token: FieldRef<"VerificationToken", 'String'>
    readonly expires: FieldRef<"VerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }

  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken createManyAndReturn
   */
  export type VerificationTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken updateManyAndReturn
   */
  export type VerificationTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }

  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to delete.
     */
    limit?: number
  }

  /**
   * VerificationToken without action
   */
  export type VerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    emailVerified: 'emailVerified',
    image: 'image'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    ownerId: 'ownerId'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const SegmentScalarFieldEnum: {
    id: 'id',
    index: 'index',
    sourceText: 'sourceText',
    targetText: 'targetText',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    projectId: 'projectId'
  };

  export type SegmentScalarFieldEnum = (typeof SegmentScalarFieldEnum)[keyof typeof SegmentScalarFieldEnum]


  export const TranslationMemoryScalarFieldEnum: {
    id: 'id',
    sourceText: 'sourceText',
    targetText: 'targetText',
    langPair: 'langPair',
    score: 'score',
    createdAt: 'createdAt',
    projectId: 'projectId'
  };

  export type TranslationMemoryScalarFieldEnum = (typeof TranslationMemoryScalarFieldEnum)[keyof typeof TranslationMemoryScalarFieldEnum]


  export const GlossaryEntryScalarFieldEnum: {
    id: 'id',
    term: 'term',
    definition: 'definition',
    sourceLang: 'sourceLang',
    targetLang: 'targetLang',
    translation: 'translation',
    createdAt: 'createdAt',
    projectId: 'projectId'
  };

  export type GlossaryEntryScalarFieldEnum = (typeof GlossaryEntryScalarFieldEnum)[keyof typeof GlossaryEntryScalarFieldEnum]


  export const CommentScalarFieldEnum: {
    id: 'id',
    content: 'content',
    createdAt: 'createdAt',
    authorId: 'authorId',
    segmentId: 'segmentId'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const ActivityLogScalarFieldEnum: {
    id: 'id',
    action: 'action',
    detail: 'detail',
    createdAt: 'createdAt',
    userId: 'userId',
    segmentId: 'segmentId'
  };

  export type ActivityLogScalarFieldEnum = (typeof ActivityLogScalarFieldEnum)[keyof typeof ActivityLogScalarFieldEnum]


  export const LanguagePairScalarFieldEnum: {
    id: 'id',
    sourceLang: 'sourceLang',
    targetLang: 'targetLang',
    createdAt: 'createdAt'
  };

  export type LanguagePairScalarFieldEnum = (typeof LanguagePairScalarFieldEnum)[keyof typeof LanguagePairScalarFieldEnum]


  export const FileUploadScalarFieldEnum: {
    id: 'id',
    filename: 'filename',
    fileType: 'fileType',
    url: 'url',
    uploadedAt: 'uploadedAt',
    projectId: 'projectId'
  };

  export type FileUploadScalarFieldEnum = (typeof FileUploadScalarFieldEnum)[keyof typeof FileUploadScalarFieldEnum]


  export const TagScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type TagScalarFieldEnum = (typeof TagScalarFieldEnum)[keyof typeof TagScalarFieldEnum]


  export const GlossaryEntryTagScalarFieldEnum: {
    id: 'id',
    glossaryId: 'glossaryId',
    tagId: 'tagId'
  };

  export type GlossaryEntryTagScalarFieldEnum = (typeof GlossaryEntryTagScalarFieldEnum)[keyof typeof GlossaryEntryTagScalarFieldEnum]


  export const SegmentTagScalarFieldEnum: {
    id: 'id',
    segmentId: 'segmentId',
    tagId: 'tagId'
  };

  export type SegmentTagScalarFieldEnum = (typeof SegmentTagScalarFieldEnum)[keyof typeof SegmentTagScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    identifier: 'identifier',
    token: 'token',
    expires: 'expires'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


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
   * Reference to a field of type 'SegmentStatus'
   */
  export type EnumSegmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SegmentStatus'>
    


  /**
   * Reference to a field of type 'SegmentStatus[]'
   */
  export type ListEnumSegmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SegmentStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringNullableFilter<"User"> | string | null
    name?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    projects?: ProjectListRelationFilter
    comments?: CommentListRelationFilter
    activityLogs?: ActivityLogListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
    projects?: ProjectOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
    activityLogs?: ActivityLogOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    projects?: ProjectListRelationFilter
    comments?: CommentListRelationFilter
    activityLogs?: ActivityLogListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: StringFilter<"Project"> | string
    name?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    ownerId?: StringFilter<"Project"> | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    segments?: SegmentListRelationFilter
    tms?: TranslationMemoryListRelationFilter
    glossaries?: GlossaryEntryListRelationFilter
    languagePairs?: LanguagePairListRelationFilter
    fileUploads?: FileUploadListRelationFilter
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerId?: SortOrder
    owner?: UserOrderByWithRelationInput
    segments?: SegmentOrderByRelationAggregateInput
    tms?: TranslationMemoryOrderByRelationAggregateInput
    glossaries?: GlossaryEntryOrderByRelationAggregateInput
    languagePairs?: LanguagePairOrderByRelationAggregateInput
    fileUploads?: FileUploadOrderByRelationAggregateInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    name?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    ownerId?: StringFilter<"Project"> | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    segments?: SegmentListRelationFilter
    tms?: TranslationMemoryListRelationFilter
    glossaries?: GlossaryEntryListRelationFilter
    languagePairs?: LanguagePairListRelationFilter
    fileUploads?: FileUploadListRelationFilter
  }, "id">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerId?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Project"> | string
    name?: StringWithAggregatesFilter<"Project"> | string
    description?: StringNullableWithAggregatesFilter<"Project"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    ownerId?: StringWithAggregatesFilter<"Project"> | string
  }

  export type SegmentWhereInput = {
    AND?: SegmentWhereInput | SegmentWhereInput[]
    OR?: SegmentWhereInput[]
    NOT?: SegmentWhereInput | SegmentWhereInput[]
    id?: StringFilter<"Segment"> | string
    index?: IntFilter<"Segment"> | number
    sourceText?: StringFilter<"Segment"> | string
    targetText?: StringNullableFilter<"Segment"> | string | null
    status?: EnumSegmentStatusFilter<"Segment"> | $Enums.SegmentStatus
    createdAt?: DateTimeFilter<"Segment"> | Date | string
    updatedAt?: DateTimeFilter<"Segment"> | Date | string
    projectId?: StringFilter<"Segment"> | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    comments?: CommentListRelationFilter
    activityLogs?: ActivityLogListRelationFilter
    tags?: TagListRelationFilter
    segmentTags?: SegmentTagListRelationFilter
  }

  export type SegmentOrderByWithRelationInput = {
    id?: SortOrder
    index?: SortOrder
    sourceText?: SortOrder
    targetText?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projectId?: SortOrder
    project?: ProjectOrderByWithRelationInput
    comments?: CommentOrderByRelationAggregateInput
    activityLogs?: ActivityLogOrderByRelationAggregateInput
    tags?: TagOrderByRelationAggregateInput
    segmentTags?: SegmentTagOrderByRelationAggregateInput
  }

  export type SegmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SegmentWhereInput | SegmentWhereInput[]
    OR?: SegmentWhereInput[]
    NOT?: SegmentWhereInput | SegmentWhereInput[]
    index?: IntFilter<"Segment"> | number
    sourceText?: StringFilter<"Segment"> | string
    targetText?: StringNullableFilter<"Segment"> | string | null
    status?: EnumSegmentStatusFilter<"Segment"> | $Enums.SegmentStatus
    createdAt?: DateTimeFilter<"Segment"> | Date | string
    updatedAt?: DateTimeFilter<"Segment"> | Date | string
    projectId?: StringFilter<"Segment"> | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    comments?: CommentListRelationFilter
    activityLogs?: ActivityLogListRelationFilter
    tags?: TagListRelationFilter
    segmentTags?: SegmentTagListRelationFilter
  }, "id">

  export type SegmentOrderByWithAggregationInput = {
    id?: SortOrder
    index?: SortOrder
    sourceText?: SortOrder
    targetText?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projectId?: SortOrder
    _count?: SegmentCountOrderByAggregateInput
    _avg?: SegmentAvgOrderByAggregateInput
    _max?: SegmentMaxOrderByAggregateInput
    _min?: SegmentMinOrderByAggregateInput
    _sum?: SegmentSumOrderByAggregateInput
  }

  export type SegmentScalarWhereWithAggregatesInput = {
    AND?: SegmentScalarWhereWithAggregatesInput | SegmentScalarWhereWithAggregatesInput[]
    OR?: SegmentScalarWhereWithAggregatesInput[]
    NOT?: SegmentScalarWhereWithAggregatesInput | SegmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Segment"> | string
    index?: IntWithAggregatesFilter<"Segment"> | number
    sourceText?: StringWithAggregatesFilter<"Segment"> | string
    targetText?: StringNullableWithAggregatesFilter<"Segment"> | string | null
    status?: EnumSegmentStatusWithAggregatesFilter<"Segment"> | $Enums.SegmentStatus
    createdAt?: DateTimeWithAggregatesFilter<"Segment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Segment"> | Date | string
    projectId?: StringWithAggregatesFilter<"Segment"> | string
  }

  export type TranslationMemoryWhereInput = {
    AND?: TranslationMemoryWhereInput | TranslationMemoryWhereInput[]
    OR?: TranslationMemoryWhereInput[]
    NOT?: TranslationMemoryWhereInput | TranslationMemoryWhereInput[]
    id?: StringFilter<"TranslationMemory"> | string
    sourceText?: StringFilter<"TranslationMemory"> | string
    targetText?: StringFilter<"TranslationMemory"> | string
    langPair?: StringFilter<"TranslationMemory"> | string
    score?: IntFilter<"TranslationMemory"> | number
    createdAt?: DateTimeFilter<"TranslationMemory"> | Date | string
    projectId?: StringFilter<"TranslationMemory"> | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }

  export type TranslationMemoryOrderByWithRelationInput = {
    id?: SortOrder
    sourceText?: SortOrder
    targetText?: SortOrder
    langPair?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
    projectId?: SortOrder
    project?: ProjectOrderByWithRelationInput
  }

  export type TranslationMemoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TranslationMemoryWhereInput | TranslationMemoryWhereInput[]
    OR?: TranslationMemoryWhereInput[]
    NOT?: TranslationMemoryWhereInput | TranslationMemoryWhereInput[]
    sourceText?: StringFilter<"TranslationMemory"> | string
    targetText?: StringFilter<"TranslationMemory"> | string
    langPair?: StringFilter<"TranslationMemory"> | string
    score?: IntFilter<"TranslationMemory"> | number
    createdAt?: DateTimeFilter<"TranslationMemory"> | Date | string
    projectId?: StringFilter<"TranslationMemory"> | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }, "id">

  export type TranslationMemoryOrderByWithAggregationInput = {
    id?: SortOrder
    sourceText?: SortOrder
    targetText?: SortOrder
    langPair?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
    projectId?: SortOrder
    _count?: TranslationMemoryCountOrderByAggregateInput
    _avg?: TranslationMemoryAvgOrderByAggregateInput
    _max?: TranslationMemoryMaxOrderByAggregateInput
    _min?: TranslationMemoryMinOrderByAggregateInput
    _sum?: TranslationMemorySumOrderByAggregateInput
  }

  export type TranslationMemoryScalarWhereWithAggregatesInput = {
    AND?: TranslationMemoryScalarWhereWithAggregatesInput | TranslationMemoryScalarWhereWithAggregatesInput[]
    OR?: TranslationMemoryScalarWhereWithAggregatesInput[]
    NOT?: TranslationMemoryScalarWhereWithAggregatesInput | TranslationMemoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TranslationMemory"> | string
    sourceText?: StringWithAggregatesFilter<"TranslationMemory"> | string
    targetText?: StringWithAggregatesFilter<"TranslationMemory"> | string
    langPair?: StringWithAggregatesFilter<"TranslationMemory"> | string
    score?: IntWithAggregatesFilter<"TranslationMemory"> | number
    createdAt?: DateTimeWithAggregatesFilter<"TranslationMemory"> | Date | string
    projectId?: StringWithAggregatesFilter<"TranslationMemory"> | string
  }

  export type GlossaryEntryWhereInput = {
    AND?: GlossaryEntryWhereInput | GlossaryEntryWhereInput[]
    OR?: GlossaryEntryWhereInput[]
    NOT?: GlossaryEntryWhereInput | GlossaryEntryWhereInput[]
    id?: StringFilter<"GlossaryEntry"> | string
    term?: StringFilter<"GlossaryEntry"> | string
    definition?: StringNullableFilter<"GlossaryEntry"> | string | null
    sourceLang?: StringFilter<"GlossaryEntry"> | string
    targetLang?: StringFilter<"GlossaryEntry"> | string
    translation?: StringNullableFilter<"GlossaryEntry"> | string | null
    createdAt?: DateTimeFilter<"GlossaryEntry"> | Date | string
    projectId?: StringFilter<"GlossaryEntry"> | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    tags?: TagListRelationFilter
    glossaryEntryTags?: GlossaryEntryTagListRelationFilter
  }

  export type GlossaryEntryOrderByWithRelationInput = {
    id?: SortOrder
    term?: SortOrder
    definition?: SortOrderInput | SortOrder
    sourceLang?: SortOrder
    targetLang?: SortOrder
    translation?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    projectId?: SortOrder
    project?: ProjectOrderByWithRelationInput
    tags?: TagOrderByRelationAggregateInput
    glossaryEntryTags?: GlossaryEntryTagOrderByRelationAggregateInput
  }

  export type GlossaryEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GlossaryEntryWhereInput | GlossaryEntryWhereInput[]
    OR?: GlossaryEntryWhereInput[]
    NOT?: GlossaryEntryWhereInput | GlossaryEntryWhereInput[]
    term?: StringFilter<"GlossaryEntry"> | string
    definition?: StringNullableFilter<"GlossaryEntry"> | string | null
    sourceLang?: StringFilter<"GlossaryEntry"> | string
    targetLang?: StringFilter<"GlossaryEntry"> | string
    translation?: StringNullableFilter<"GlossaryEntry"> | string | null
    createdAt?: DateTimeFilter<"GlossaryEntry"> | Date | string
    projectId?: StringFilter<"GlossaryEntry"> | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    tags?: TagListRelationFilter
    glossaryEntryTags?: GlossaryEntryTagListRelationFilter
  }, "id">

  export type GlossaryEntryOrderByWithAggregationInput = {
    id?: SortOrder
    term?: SortOrder
    definition?: SortOrderInput | SortOrder
    sourceLang?: SortOrder
    targetLang?: SortOrder
    translation?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    projectId?: SortOrder
    _count?: GlossaryEntryCountOrderByAggregateInput
    _max?: GlossaryEntryMaxOrderByAggregateInput
    _min?: GlossaryEntryMinOrderByAggregateInput
  }

  export type GlossaryEntryScalarWhereWithAggregatesInput = {
    AND?: GlossaryEntryScalarWhereWithAggregatesInput | GlossaryEntryScalarWhereWithAggregatesInput[]
    OR?: GlossaryEntryScalarWhereWithAggregatesInput[]
    NOT?: GlossaryEntryScalarWhereWithAggregatesInput | GlossaryEntryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GlossaryEntry"> | string
    term?: StringWithAggregatesFilter<"GlossaryEntry"> | string
    definition?: StringNullableWithAggregatesFilter<"GlossaryEntry"> | string | null
    sourceLang?: StringWithAggregatesFilter<"GlossaryEntry"> | string
    targetLang?: StringWithAggregatesFilter<"GlossaryEntry"> | string
    translation?: StringNullableWithAggregatesFilter<"GlossaryEntry"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"GlossaryEntry"> | Date | string
    projectId?: StringWithAggregatesFilter<"GlossaryEntry"> | string
  }

  export type CommentWhereInput = {
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    id?: StringFilter<"Comment"> | string
    content?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    authorId?: StringFilter<"Comment"> | string
    segmentId?: StringFilter<"Comment"> | string
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    segment?: XOR<SegmentScalarRelationFilter, SegmentWhereInput>
  }

  export type CommentOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    authorId?: SortOrder
    segmentId?: SortOrder
    author?: UserOrderByWithRelationInput
    segment?: SegmentOrderByWithRelationInput
  }

  export type CommentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    content?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    authorId?: StringFilter<"Comment"> | string
    segmentId?: StringFilter<"Comment"> | string
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    segment?: XOR<SegmentScalarRelationFilter, SegmentWhereInput>
  }, "id">

  export type CommentOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    authorId?: SortOrder
    segmentId?: SortOrder
    _count?: CommentCountOrderByAggregateInput
    _max?: CommentMaxOrderByAggregateInput
    _min?: CommentMinOrderByAggregateInput
  }

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    OR?: CommentScalarWhereWithAggregatesInput[]
    NOT?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Comment"> | string
    content?: StringWithAggregatesFilter<"Comment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
    authorId?: StringWithAggregatesFilter<"Comment"> | string
    segmentId?: StringWithAggregatesFilter<"Comment"> | string
  }

  export type ActivityLogWhereInput = {
    AND?: ActivityLogWhereInput | ActivityLogWhereInput[]
    OR?: ActivityLogWhereInput[]
    NOT?: ActivityLogWhereInput | ActivityLogWhereInput[]
    id?: StringFilter<"ActivityLog"> | string
    action?: StringFilter<"ActivityLog"> | string
    detail?: StringNullableFilter<"ActivityLog"> | string | null
    createdAt?: DateTimeFilter<"ActivityLog"> | Date | string
    userId?: StringFilter<"ActivityLog"> | string
    segmentId?: StringFilter<"ActivityLog"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    segment?: XOR<SegmentScalarRelationFilter, SegmentWhereInput>
  }

  export type ActivityLogOrderByWithRelationInput = {
    id?: SortOrder
    action?: SortOrder
    detail?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    segmentId?: SortOrder
    user?: UserOrderByWithRelationInput
    segment?: SegmentOrderByWithRelationInput
  }

  export type ActivityLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ActivityLogWhereInput | ActivityLogWhereInput[]
    OR?: ActivityLogWhereInput[]
    NOT?: ActivityLogWhereInput | ActivityLogWhereInput[]
    action?: StringFilter<"ActivityLog"> | string
    detail?: StringNullableFilter<"ActivityLog"> | string | null
    createdAt?: DateTimeFilter<"ActivityLog"> | Date | string
    userId?: StringFilter<"ActivityLog"> | string
    segmentId?: StringFilter<"ActivityLog"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    segment?: XOR<SegmentScalarRelationFilter, SegmentWhereInput>
  }, "id">

  export type ActivityLogOrderByWithAggregationInput = {
    id?: SortOrder
    action?: SortOrder
    detail?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    segmentId?: SortOrder
    _count?: ActivityLogCountOrderByAggregateInput
    _max?: ActivityLogMaxOrderByAggregateInput
    _min?: ActivityLogMinOrderByAggregateInput
  }

  export type ActivityLogScalarWhereWithAggregatesInput = {
    AND?: ActivityLogScalarWhereWithAggregatesInput | ActivityLogScalarWhereWithAggregatesInput[]
    OR?: ActivityLogScalarWhereWithAggregatesInput[]
    NOT?: ActivityLogScalarWhereWithAggregatesInput | ActivityLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ActivityLog"> | string
    action?: StringWithAggregatesFilter<"ActivityLog"> | string
    detail?: StringNullableWithAggregatesFilter<"ActivityLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ActivityLog"> | Date | string
    userId?: StringWithAggregatesFilter<"ActivityLog"> | string
    segmentId?: StringWithAggregatesFilter<"ActivityLog"> | string
  }

  export type LanguagePairWhereInput = {
    AND?: LanguagePairWhereInput | LanguagePairWhereInput[]
    OR?: LanguagePairWhereInput[]
    NOT?: LanguagePairWhereInput | LanguagePairWhereInput[]
    id?: StringFilter<"LanguagePair"> | string
    sourceLang?: StringFilter<"LanguagePair"> | string
    targetLang?: StringFilter<"LanguagePair"> | string
    createdAt?: DateTimeFilter<"LanguagePair"> | Date | string
    projects?: ProjectListRelationFilter
  }

  export type LanguagePairOrderByWithRelationInput = {
    id?: SortOrder
    sourceLang?: SortOrder
    targetLang?: SortOrder
    createdAt?: SortOrder
    projects?: ProjectOrderByRelationAggregateInput
  }

  export type LanguagePairWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LanguagePairWhereInput | LanguagePairWhereInput[]
    OR?: LanguagePairWhereInput[]
    NOT?: LanguagePairWhereInput | LanguagePairWhereInput[]
    sourceLang?: StringFilter<"LanguagePair"> | string
    targetLang?: StringFilter<"LanguagePair"> | string
    createdAt?: DateTimeFilter<"LanguagePair"> | Date | string
    projects?: ProjectListRelationFilter
  }, "id">

  export type LanguagePairOrderByWithAggregationInput = {
    id?: SortOrder
    sourceLang?: SortOrder
    targetLang?: SortOrder
    createdAt?: SortOrder
    _count?: LanguagePairCountOrderByAggregateInput
    _max?: LanguagePairMaxOrderByAggregateInput
    _min?: LanguagePairMinOrderByAggregateInput
  }

  export type LanguagePairScalarWhereWithAggregatesInput = {
    AND?: LanguagePairScalarWhereWithAggregatesInput | LanguagePairScalarWhereWithAggregatesInput[]
    OR?: LanguagePairScalarWhereWithAggregatesInput[]
    NOT?: LanguagePairScalarWhereWithAggregatesInput | LanguagePairScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LanguagePair"> | string
    sourceLang?: StringWithAggregatesFilter<"LanguagePair"> | string
    targetLang?: StringWithAggregatesFilter<"LanguagePair"> | string
    createdAt?: DateTimeWithAggregatesFilter<"LanguagePair"> | Date | string
  }

  export type FileUploadWhereInput = {
    AND?: FileUploadWhereInput | FileUploadWhereInput[]
    OR?: FileUploadWhereInput[]
    NOT?: FileUploadWhereInput | FileUploadWhereInput[]
    id?: StringFilter<"FileUpload"> | string
    filename?: StringFilter<"FileUpload"> | string
    fileType?: StringFilter<"FileUpload"> | string
    url?: StringFilter<"FileUpload"> | string
    uploadedAt?: DateTimeFilter<"FileUpload"> | Date | string
    projectId?: StringFilter<"FileUpload"> | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }

  export type FileUploadOrderByWithRelationInput = {
    id?: SortOrder
    filename?: SortOrder
    fileType?: SortOrder
    url?: SortOrder
    uploadedAt?: SortOrder
    projectId?: SortOrder
    project?: ProjectOrderByWithRelationInput
  }

  export type FileUploadWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FileUploadWhereInput | FileUploadWhereInput[]
    OR?: FileUploadWhereInput[]
    NOT?: FileUploadWhereInput | FileUploadWhereInput[]
    filename?: StringFilter<"FileUpload"> | string
    fileType?: StringFilter<"FileUpload"> | string
    url?: StringFilter<"FileUpload"> | string
    uploadedAt?: DateTimeFilter<"FileUpload"> | Date | string
    projectId?: StringFilter<"FileUpload"> | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }, "id">

  export type FileUploadOrderByWithAggregationInput = {
    id?: SortOrder
    filename?: SortOrder
    fileType?: SortOrder
    url?: SortOrder
    uploadedAt?: SortOrder
    projectId?: SortOrder
    _count?: FileUploadCountOrderByAggregateInput
    _max?: FileUploadMaxOrderByAggregateInput
    _min?: FileUploadMinOrderByAggregateInput
  }

  export type FileUploadScalarWhereWithAggregatesInput = {
    AND?: FileUploadScalarWhereWithAggregatesInput | FileUploadScalarWhereWithAggregatesInput[]
    OR?: FileUploadScalarWhereWithAggregatesInput[]
    NOT?: FileUploadScalarWhereWithAggregatesInput | FileUploadScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FileUpload"> | string
    filename?: StringWithAggregatesFilter<"FileUpload"> | string
    fileType?: StringWithAggregatesFilter<"FileUpload"> | string
    url?: StringWithAggregatesFilter<"FileUpload"> | string
    uploadedAt?: DateTimeWithAggregatesFilter<"FileUpload"> | Date | string
    projectId?: StringWithAggregatesFilter<"FileUpload"> | string
  }

  export type TagWhereInput = {
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    id?: StringFilter<"Tag"> | string
    name?: StringFilter<"Tag"> | string
    glossaryEntries?: GlossaryEntryListRelationFilter
    segments?: SegmentListRelationFilter
    glossaryEntryTags?: GlossaryEntryTagListRelationFilter
    segmentTags?: SegmentTagListRelationFilter
  }

  export type TagOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    glossaryEntries?: GlossaryEntryOrderByRelationAggregateInput
    segments?: SegmentOrderByRelationAggregateInput
    glossaryEntryTags?: GlossaryEntryTagOrderByRelationAggregateInput
    segmentTags?: SegmentTagOrderByRelationAggregateInput
  }

  export type TagWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    name?: StringFilter<"Tag"> | string
    glossaryEntries?: GlossaryEntryListRelationFilter
    segments?: SegmentListRelationFilter
    glossaryEntryTags?: GlossaryEntryTagListRelationFilter
    segmentTags?: SegmentTagListRelationFilter
  }, "id">

  export type TagOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: TagCountOrderByAggregateInput
    _max?: TagMaxOrderByAggregateInput
    _min?: TagMinOrderByAggregateInput
  }

  export type TagScalarWhereWithAggregatesInput = {
    AND?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    OR?: TagScalarWhereWithAggregatesInput[]
    NOT?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tag"> | string
    name?: StringWithAggregatesFilter<"Tag"> | string
  }

  export type GlossaryEntryTagWhereInput = {
    AND?: GlossaryEntryTagWhereInput | GlossaryEntryTagWhereInput[]
    OR?: GlossaryEntryTagWhereInput[]
    NOT?: GlossaryEntryTagWhereInput | GlossaryEntryTagWhereInput[]
    id?: StringFilter<"GlossaryEntryTag"> | string
    glossaryId?: StringFilter<"GlossaryEntryTag"> | string
    tagId?: StringFilter<"GlossaryEntryTag"> | string
    glossaryEntry?: XOR<GlossaryEntryScalarRelationFilter, GlossaryEntryWhereInput>
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>
  }

  export type GlossaryEntryTagOrderByWithRelationInput = {
    id?: SortOrder
    glossaryId?: SortOrder
    tagId?: SortOrder
    glossaryEntry?: GlossaryEntryOrderByWithRelationInput
    tag?: TagOrderByWithRelationInput
  }

  export type GlossaryEntryTagWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GlossaryEntryTagWhereInput | GlossaryEntryTagWhereInput[]
    OR?: GlossaryEntryTagWhereInput[]
    NOT?: GlossaryEntryTagWhereInput | GlossaryEntryTagWhereInput[]
    glossaryId?: StringFilter<"GlossaryEntryTag"> | string
    tagId?: StringFilter<"GlossaryEntryTag"> | string
    glossaryEntry?: XOR<GlossaryEntryScalarRelationFilter, GlossaryEntryWhereInput>
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>
  }, "id">

  export type GlossaryEntryTagOrderByWithAggregationInput = {
    id?: SortOrder
    glossaryId?: SortOrder
    tagId?: SortOrder
    _count?: GlossaryEntryTagCountOrderByAggregateInput
    _max?: GlossaryEntryTagMaxOrderByAggregateInput
    _min?: GlossaryEntryTagMinOrderByAggregateInput
  }

  export type GlossaryEntryTagScalarWhereWithAggregatesInput = {
    AND?: GlossaryEntryTagScalarWhereWithAggregatesInput | GlossaryEntryTagScalarWhereWithAggregatesInput[]
    OR?: GlossaryEntryTagScalarWhereWithAggregatesInput[]
    NOT?: GlossaryEntryTagScalarWhereWithAggregatesInput | GlossaryEntryTagScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GlossaryEntryTag"> | string
    glossaryId?: StringWithAggregatesFilter<"GlossaryEntryTag"> | string
    tagId?: StringWithAggregatesFilter<"GlossaryEntryTag"> | string
  }

  export type SegmentTagWhereInput = {
    AND?: SegmentTagWhereInput | SegmentTagWhereInput[]
    OR?: SegmentTagWhereInput[]
    NOT?: SegmentTagWhereInput | SegmentTagWhereInput[]
    id?: StringFilter<"SegmentTag"> | string
    segmentId?: StringFilter<"SegmentTag"> | string
    tagId?: StringFilter<"SegmentTag"> | string
    segment?: XOR<SegmentScalarRelationFilter, SegmentWhereInput>
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>
  }

  export type SegmentTagOrderByWithRelationInput = {
    id?: SortOrder
    segmentId?: SortOrder
    tagId?: SortOrder
    segment?: SegmentOrderByWithRelationInput
    tag?: TagOrderByWithRelationInput
  }

  export type SegmentTagWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SegmentTagWhereInput | SegmentTagWhereInput[]
    OR?: SegmentTagWhereInput[]
    NOT?: SegmentTagWhereInput | SegmentTagWhereInput[]
    segmentId?: StringFilter<"SegmentTag"> | string
    tagId?: StringFilter<"SegmentTag"> | string
    segment?: XOR<SegmentScalarRelationFilter, SegmentWhereInput>
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>
  }, "id">

  export type SegmentTagOrderByWithAggregationInput = {
    id?: SortOrder
    segmentId?: SortOrder
    tagId?: SortOrder
    _count?: SegmentTagCountOrderByAggregateInput
    _max?: SegmentTagMaxOrderByAggregateInput
    _min?: SegmentTagMinOrderByAggregateInput
  }

  export type SegmentTagScalarWhereWithAggregatesInput = {
    AND?: SegmentTagScalarWhereWithAggregatesInput | SegmentTagScalarWhereWithAggregatesInput[]
    OR?: SegmentTagScalarWhereWithAggregatesInput[]
    NOT?: SegmentTagScalarWhereWithAggregatesInput | SegmentTagScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SegmentTag"> | string
    segmentId?: StringWithAggregatesFilter<"SegmentTag"> | string
    tagId?: StringWithAggregatesFilter<"SegmentTag"> | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type VerificationTokenWhereInput = {
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }

  export type VerificationTokenOrderByWithRelationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    token?: string
    identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }, "token" | "identifier_token">

  export type VerificationTokenOrderByWithAggregationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    OR?: VerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    identifier?: StringWithAggregatesFilter<"VerificationToken"> | string
    token?: StringWithAggregatesFilter<"VerificationToken"> | string
    expires?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email?: string | null
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    projects?: ProjectCreateNestedManyWithoutOwnerInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
    activityLogs?: ActivityLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email?: string | null
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    projects?: ProjectUncheckedCreateNestedManyWithoutOwnerInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    projects?: ProjectUpdateManyWithoutOwnerNestedInput
    comments?: CommentUpdateManyWithoutAuthorNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutOwnerNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email?: string | null
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    emailVerified?: Date | string | null
    image?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProjectCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutProjectsInput
    segments?: SegmentCreateNestedManyWithoutProjectInput
    tms?: TranslationMemoryCreateNestedManyWithoutProjectInput
    glossaries?: GlossaryEntryCreateNestedManyWithoutProjectInput
    languagePairs?: LanguagePairCreateNestedManyWithoutProjectsInput
    fileUploads?: FileUploadCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId: string
    segments?: SegmentUncheckedCreateNestedManyWithoutProjectInput
    tms?: TranslationMemoryUncheckedCreateNestedManyWithoutProjectInput
    glossaries?: GlossaryEntryUncheckedCreateNestedManyWithoutProjectInput
    languagePairs?: LanguagePairUncheckedCreateNestedManyWithoutProjectsInput
    fileUploads?: FileUploadUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutProjectsNestedInput
    segments?: SegmentUpdateManyWithoutProjectNestedInput
    tms?: TranslationMemoryUpdateManyWithoutProjectNestedInput
    glossaries?: GlossaryEntryUpdateManyWithoutProjectNestedInput
    languagePairs?: LanguagePairUpdateManyWithoutProjectsNestedInput
    fileUploads?: FileUploadUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: StringFieldUpdateOperationsInput | string
    segments?: SegmentUncheckedUpdateManyWithoutProjectNestedInput
    tms?: TranslationMemoryUncheckedUpdateManyWithoutProjectNestedInput
    glossaries?: GlossaryEntryUncheckedUpdateManyWithoutProjectNestedInput
    languagePairs?: LanguagePairUncheckedUpdateManyWithoutProjectsNestedInput
    fileUploads?: FileUploadUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId: string
  }

  export type ProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: StringFieldUpdateOperationsInput | string
  }

  export type SegmentCreateInput = {
    id?: string
    index: number
    sourceText: string
    targetText?: string | null
    status?: $Enums.SegmentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutSegmentsInput
    comments?: CommentCreateNestedManyWithoutSegmentInput
    activityLogs?: ActivityLogCreateNestedManyWithoutSegmentInput
    tags?: TagCreateNestedManyWithoutSegmentsInput
    segmentTags?: SegmentTagCreateNestedManyWithoutSegmentInput
  }

  export type SegmentUncheckedCreateInput = {
    id?: string
    index: number
    sourceText: string
    targetText?: string | null
    status?: $Enums.SegmentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    projectId: string
    comments?: CommentUncheckedCreateNestedManyWithoutSegmentInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutSegmentInput
    tags?: TagUncheckedCreateNestedManyWithoutSegmentsInput
    segmentTags?: SegmentTagUncheckedCreateNestedManyWithoutSegmentInput
  }

  export type SegmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
    sourceText?: StringFieldUpdateOperationsInput | string
    targetText?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSegmentStatusFieldUpdateOperationsInput | $Enums.SegmentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutSegmentsNestedInput
    comments?: CommentUpdateManyWithoutSegmentNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutSegmentNestedInput
    tags?: TagUpdateManyWithoutSegmentsNestedInput
    segmentTags?: SegmentTagUpdateManyWithoutSegmentNestedInput
  }

  export type SegmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
    sourceText?: StringFieldUpdateOperationsInput | string
    targetText?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSegmentStatusFieldUpdateOperationsInput | $Enums.SegmentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: StringFieldUpdateOperationsInput | string
    comments?: CommentUncheckedUpdateManyWithoutSegmentNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutSegmentNestedInput
    tags?: TagUncheckedUpdateManyWithoutSegmentsNestedInput
    segmentTags?: SegmentTagUncheckedUpdateManyWithoutSegmentNestedInput
  }

  export type SegmentCreateManyInput = {
    id?: string
    index: number
    sourceText: string
    targetText?: string | null
    status?: $Enums.SegmentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    projectId: string
  }

  export type SegmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
    sourceText?: StringFieldUpdateOperationsInput | string
    targetText?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSegmentStatusFieldUpdateOperationsInput | $Enums.SegmentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SegmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
    sourceText?: StringFieldUpdateOperationsInput | string
    targetText?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSegmentStatusFieldUpdateOperationsInput | $Enums.SegmentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: StringFieldUpdateOperationsInput | string
  }

  export type TranslationMemoryCreateInput = {
    id?: string
    sourceText: string
    targetText: string
    langPair: string
    score?: number
    createdAt?: Date | string
    project: ProjectCreateNestedOneWithoutTmsInput
  }

  export type TranslationMemoryUncheckedCreateInput = {
    id?: string
    sourceText: string
    targetText: string
    langPair: string
    score?: number
    createdAt?: Date | string
    projectId: string
  }

  export type TranslationMemoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceText?: StringFieldUpdateOperationsInput | string
    targetText?: StringFieldUpdateOperationsInput | string
    langPair?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutTmsNestedInput
  }

  export type TranslationMemoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceText?: StringFieldUpdateOperationsInput | string
    targetText?: StringFieldUpdateOperationsInput | string
    langPair?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: StringFieldUpdateOperationsInput | string
  }

  export type TranslationMemoryCreateManyInput = {
    id?: string
    sourceText: string
    targetText: string
    langPair: string
    score?: number
    createdAt?: Date | string
    projectId: string
  }

  export type TranslationMemoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceText?: StringFieldUpdateOperationsInput | string
    targetText?: StringFieldUpdateOperationsInput | string
    langPair?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TranslationMemoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceText?: StringFieldUpdateOperationsInput | string
    targetText?: StringFieldUpdateOperationsInput | string
    langPair?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: StringFieldUpdateOperationsInput | string
  }

  export type GlossaryEntryCreateInput = {
    id?: string
    term: string
    definition?: string | null
    sourceLang: string
    targetLang: string
    translation?: string | null
    createdAt?: Date | string
    project: ProjectCreateNestedOneWithoutGlossariesInput
    tags?: TagCreateNestedManyWithoutGlossaryEntriesInput
    glossaryEntryTags?: GlossaryEntryTagCreateNestedManyWithoutGlossaryEntryInput
  }

  export type GlossaryEntryUncheckedCreateInput = {
    id?: string
    term: string
    definition?: string | null
    sourceLang: string
    targetLang: string
    translation?: string | null
    createdAt?: Date | string
    projectId: string
    tags?: TagUncheckedCreateNestedManyWithoutGlossaryEntriesInput
    glossaryEntryTags?: GlossaryEntryTagUncheckedCreateNestedManyWithoutGlossaryEntryInput
  }

  export type GlossaryEntryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    term?: StringFieldUpdateOperationsInput | string
    definition?: NullableStringFieldUpdateOperationsInput | string | null
    sourceLang?: StringFieldUpdateOperationsInput | string
    targetLang?: StringFieldUpdateOperationsInput | string
    translation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutGlossariesNestedInput
    tags?: TagUpdateManyWithoutGlossaryEntriesNestedInput
    glossaryEntryTags?: GlossaryEntryTagUpdateManyWithoutGlossaryEntryNestedInput
  }

  export type GlossaryEntryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    term?: StringFieldUpdateOperationsInput | string
    definition?: NullableStringFieldUpdateOperationsInput | string | null
    sourceLang?: StringFieldUpdateOperationsInput | string
    targetLang?: StringFieldUpdateOperationsInput | string
    translation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: StringFieldUpdateOperationsInput | string
    tags?: TagUncheckedUpdateManyWithoutGlossaryEntriesNestedInput
    glossaryEntryTags?: GlossaryEntryTagUncheckedUpdateManyWithoutGlossaryEntryNestedInput
  }

  export type GlossaryEntryCreateManyInput = {
    id?: string
    term: string
    definition?: string | null
    sourceLang: string
    targetLang: string
    translation?: string | null
    createdAt?: Date | string
    projectId: string
  }

  export type GlossaryEntryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    term?: StringFieldUpdateOperationsInput | string
    definition?: NullableStringFieldUpdateOperationsInput | string | null
    sourceLang?: StringFieldUpdateOperationsInput | string
    targetLang?: StringFieldUpdateOperationsInput | string
    translation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GlossaryEntryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    term?: StringFieldUpdateOperationsInput | string
    definition?: NullableStringFieldUpdateOperationsInput | string | null
    sourceLang?: StringFieldUpdateOperationsInput | string
    targetLang?: StringFieldUpdateOperationsInput | string
    translation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: StringFieldUpdateOperationsInput | string
  }

  export type CommentCreateInput = {
    id?: string
    content: string
    createdAt?: Date | string
    author: UserCreateNestedOneWithoutCommentsInput
    segment: SegmentCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateInput = {
    id?: string
    content: string
    createdAt?: Date | string
    authorId: string
    segmentId: string
  }

  export type CommentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutCommentsNestedInput
    segment?: SegmentUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: StringFieldUpdateOperationsInput | string
    segmentId?: StringFieldUpdateOperationsInput | string
  }

  export type CommentCreateManyInput = {
    id?: string
    content: string
    createdAt?: Date | string
    authorId: string
    segmentId: string
  }

  export type CommentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: StringFieldUpdateOperationsInput | string
    segmentId?: StringFieldUpdateOperationsInput | string
  }

  export type ActivityLogCreateInput = {
    id?: string
    action: string
    detail?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutActivityLogsInput
    segment: SegmentCreateNestedOneWithoutActivityLogsInput
  }

  export type ActivityLogUncheckedCreateInput = {
    id?: string
    action: string
    detail?: string | null
    createdAt?: Date | string
    userId: string
    segmentId: string
  }

  export type ActivityLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutActivityLogsNestedInput
    segment?: SegmentUpdateOneRequiredWithoutActivityLogsNestedInput
  }

  export type ActivityLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    segmentId?: StringFieldUpdateOperationsInput | string
  }

  export type ActivityLogCreateManyInput = {
    id?: string
    action: string
    detail?: string | null
    createdAt?: Date | string
    userId: string
    segmentId: string
  }

  export type ActivityLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    segmentId?: StringFieldUpdateOperationsInput | string
  }

  export type LanguagePairCreateInput = {
    id?: string
    sourceLang: string
    targetLang: string
    createdAt?: Date | string
    projects?: ProjectCreateNestedManyWithoutLanguagePairsInput
  }

  export type LanguagePairUncheckedCreateInput = {
    id?: string
    sourceLang: string
    targetLang: string
    createdAt?: Date | string
    projects?: ProjectUncheckedCreateNestedManyWithoutLanguagePairsInput
  }

  export type LanguagePairUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceLang?: StringFieldUpdateOperationsInput | string
    targetLang?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUpdateManyWithoutLanguagePairsNestedInput
  }

  export type LanguagePairUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceLang?: StringFieldUpdateOperationsInput | string
    targetLang?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUncheckedUpdateManyWithoutLanguagePairsNestedInput
  }

  export type LanguagePairCreateManyInput = {
    id?: string
    sourceLang: string
    targetLang: string
    createdAt?: Date | string
  }

  export type LanguagePairUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceLang?: StringFieldUpdateOperationsInput | string
    targetLang?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LanguagePairUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceLang?: StringFieldUpdateOperationsInput | string
    targetLang?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileUploadCreateInput = {
    id?: string
    filename: string
    fileType: string
    url: string
    uploadedAt?: Date | string
    project: ProjectCreateNestedOneWithoutFileUploadsInput
  }

  export type FileUploadUncheckedCreateInput = {
    id?: string
    filename: string
    fileType: string
    url: string
    uploadedAt?: Date | string
    projectId: string
  }

  export type FileUploadUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    fileType?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutFileUploadsNestedInput
  }

  export type FileUploadUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    fileType?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: StringFieldUpdateOperationsInput | string
  }

  export type FileUploadCreateManyInput = {
    id?: string
    filename: string
    fileType: string
    url: string
    uploadedAt?: Date | string
    projectId: string
  }

  export type FileUploadUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    fileType?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileUploadUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    fileType?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: StringFieldUpdateOperationsInput | string
  }

  export type TagCreateInput = {
    id?: string
    name: string
    glossaryEntries?: GlossaryEntryCreateNestedManyWithoutTagsInput
    segments?: SegmentCreateNestedManyWithoutTagsInput
    glossaryEntryTags?: GlossaryEntryTagCreateNestedManyWithoutTagInput
    segmentTags?: SegmentTagCreateNestedManyWithoutTagInput
  }

  export type TagUncheckedCreateInput = {
    id?: string
    name: string
    glossaryEntries?: GlossaryEntryUncheckedCreateNestedManyWithoutTagsInput
    segments?: SegmentUncheckedCreateNestedManyWithoutTagsInput
    glossaryEntryTags?: GlossaryEntryTagUncheckedCreateNestedManyWithoutTagInput
    segmentTags?: SegmentTagUncheckedCreateNestedManyWithoutTagInput
  }

  export type TagUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    glossaryEntries?: GlossaryEntryUpdateManyWithoutTagsNestedInput
    segments?: SegmentUpdateManyWithoutTagsNestedInput
    glossaryEntryTags?: GlossaryEntryTagUpdateManyWithoutTagNestedInput
    segmentTags?: SegmentTagUpdateManyWithoutTagNestedInput
  }

  export type TagUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    glossaryEntries?: GlossaryEntryUncheckedUpdateManyWithoutTagsNestedInput
    segments?: SegmentUncheckedUpdateManyWithoutTagsNestedInput
    glossaryEntryTags?: GlossaryEntryTagUncheckedUpdateManyWithoutTagNestedInput
    segmentTags?: SegmentTagUncheckedUpdateManyWithoutTagNestedInput
  }

  export type TagCreateManyInput = {
    id?: string
    name: string
  }

  export type TagUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TagUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type GlossaryEntryTagCreateInput = {
    id?: string
    glossaryEntry: GlossaryEntryCreateNestedOneWithoutGlossaryEntryTagsInput
    tag: TagCreateNestedOneWithoutGlossaryEntryTagsInput
  }

  export type GlossaryEntryTagUncheckedCreateInput = {
    id?: string
    glossaryId: string
    tagId: string
  }

  export type GlossaryEntryTagUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    glossaryEntry?: GlossaryEntryUpdateOneRequiredWithoutGlossaryEntryTagsNestedInput
    tag?: TagUpdateOneRequiredWithoutGlossaryEntryTagsNestedInput
  }

  export type GlossaryEntryTagUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    glossaryId?: StringFieldUpdateOperationsInput | string
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type GlossaryEntryTagCreateManyInput = {
    id?: string
    glossaryId: string
    tagId: string
  }

  export type GlossaryEntryTagUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type GlossaryEntryTagUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    glossaryId?: StringFieldUpdateOperationsInput | string
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type SegmentTagCreateInput = {
    id?: string
    segment: SegmentCreateNestedOneWithoutSegmentTagsInput
    tag: TagCreateNestedOneWithoutSegmentTagsInput
  }

  export type SegmentTagUncheckedCreateInput = {
    id?: string
    segmentId: string
    tagId: string
  }

  export type SegmentTagUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    segment?: SegmentUpdateOneRequiredWithoutSegmentTagsNestedInput
    tag?: TagUpdateOneRequiredWithoutSegmentTagsNestedInput
  }

  export type SegmentTagUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    segmentId?: StringFieldUpdateOperationsInput | string
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type SegmentTagCreateManyInput = {
    id?: string
    segmentId: string
    tagId: string
  }

  export type SegmentTagUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type SegmentTagUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    segmentId?: StringFieldUpdateOperationsInput | string
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type AccountCreateInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionCreateInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUncheckedCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateManyInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type ProjectListRelationFilter = {
    every?: ProjectWhereInput
    some?: ProjectWhereInput
    none?: ProjectWhereInput
  }

  export type CommentListRelationFilter = {
    every?: CommentWhereInput
    some?: CommentWhereInput
    none?: CommentWhereInput
  }

  export type ActivityLogListRelationFilter = {
    every?: ActivityLogWhereInput
    some?: ActivityLogWhereInput
    none?: ActivityLogWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ActivityLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SegmentListRelationFilter = {
    every?: SegmentWhereInput
    some?: SegmentWhereInput
    none?: SegmentWhereInput
  }

  export type TranslationMemoryListRelationFilter = {
    every?: TranslationMemoryWhereInput
    some?: TranslationMemoryWhereInput
    none?: TranslationMemoryWhereInput
  }

  export type GlossaryEntryListRelationFilter = {
    every?: GlossaryEntryWhereInput
    some?: GlossaryEntryWhereInput
    none?: GlossaryEntryWhereInput
  }

  export type LanguagePairListRelationFilter = {
    every?: LanguagePairWhereInput
    some?: LanguagePairWhereInput
    none?: LanguagePairWhereInput
  }

  export type FileUploadListRelationFilter = {
    every?: FileUploadWhereInput
    some?: FileUploadWhereInput
    none?: FileUploadWhereInput
  }

  export type SegmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TranslationMemoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GlossaryEntryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LanguagePairOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FileUploadOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerId?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerId?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerId?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumSegmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SegmentStatus | EnumSegmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SegmentStatus[] | ListEnumSegmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SegmentStatus[] | ListEnumSegmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSegmentStatusFilter<$PrismaModel> | $Enums.SegmentStatus
  }

  export type ProjectScalarRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }

  export type TagListRelationFilter = {
    every?: TagWhereInput
    some?: TagWhereInput
    none?: TagWhereInput
  }

  export type SegmentTagListRelationFilter = {
    every?: SegmentTagWhereInput
    some?: SegmentTagWhereInput
    none?: SegmentTagWhereInput
  }

  export type TagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SegmentTagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SegmentCountOrderByAggregateInput = {
    id?: SortOrder
    index?: SortOrder
    sourceText?: SortOrder
    targetText?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projectId?: SortOrder
  }

  export type SegmentAvgOrderByAggregateInput = {
    index?: SortOrder
  }

  export type SegmentMaxOrderByAggregateInput = {
    id?: SortOrder
    index?: SortOrder
    sourceText?: SortOrder
    targetText?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projectId?: SortOrder
  }

  export type SegmentMinOrderByAggregateInput = {
    id?: SortOrder
    index?: SortOrder
    sourceText?: SortOrder
    targetText?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projectId?: SortOrder
  }

  export type SegmentSumOrderByAggregateInput = {
    index?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumSegmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SegmentStatus | EnumSegmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SegmentStatus[] | ListEnumSegmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SegmentStatus[] | ListEnumSegmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSegmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.SegmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSegmentStatusFilter<$PrismaModel>
    _max?: NestedEnumSegmentStatusFilter<$PrismaModel>
  }

  export type TranslationMemoryCountOrderByAggregateInput = {
    id?: SortOrder
    sourceText?: SortOrder
    targetText?: SortOrder
    langPair?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
    projectId?: SortOrder
  }

  export type TranslationMemoryAvgOrderByAggregateInput = {
    score?: SortOrder
  }

  export type TranslationMemoryMaxOrderByAggregateInput = {
    id?: SortOrder
    sourceText?: SortOrder
    targetText?: SortOrder
    langPair?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
    projectId?: SortOrder
  }

  export type TranslationMemoryMinOrderByAggregateInput = {
    id?: SortOrder
    sourceText?: SortOrder
    targetText?: SortOrder
    langPair?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
    projectId?: SortOrder
  }

  export type TranslationMemorySumOrderByAggregateInput = {
    score?: SortOrder
  }

  export type GlossaryEntryTagListRelationFilter = {
    every?: GlossaryEntryTagWhereInput
    some?: GlossaryEntryTagWhereInput
    none?: GlossaryEntryTagWhereInput
  }

  export type GlossaryEntryTagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GlossaryEntryCountOrderByAggregateInput = {
    id?: SortOrder
    term?: SortOrder
    definition?: SortOrder
    sourceLang?: SortOrder
    targetLang?: SortOrder
    translation?: SortOrder
    createdAt?: SortOrder
    projectId?: SortOrder
  }

  export type GlossaryEntryMaxOrderByAggregateInput = {
    id?: SortOrder
    term?: SortOrder
    definition?: SortOrder
    sourceLang?: SortOrder
    targetLang?: SortOrder
    translation?: SortOrder
    createdAt?: SortOrder
    projectId?: SortOrder
  }

  export type GlossaryEntryMinOrderByAggregateInput = {
    id?: SortOrder
    term?: SortOrder
    definition?: SortOrder
    sourceLang?: SortOrder
    targetLang?: SortOrder
    translation?: SortOrder
    createdAt?: SortOrder
    projectId?: SortOrder
  }

  export type SegmentScalarRelationFilter = {
    is?: SegmentWhereInput
    isNot?: SegmentWhereInput
  }

  export type CommentCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    authorId?: SortOrder
    segmentId?: SortOrder
  }

  export type CommentMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    authorId?: SortOrder
    segmentId?: SortOrder
  }

  export type CommentMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    authorId?: SortOrder
    segmentId?: SortOrder
  }

  export type ActivityLogCountOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    detail?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    segmentId?: SortOrder
  }

  export type ActivityLogMaxOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    detail?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    segmentId?: SortOrder
  }

  export type ActivityLogMinOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    detail?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    segmentId?: SortOrder
  }

  export type LanguagePairCountOrderByAggregateInput = {
    id?: SortOrder
    sourceLang?: SortOrder
    targetLang?: SortOrder
    createdAt?: SortOrder
  }

  export type LanguagePairMaxOrderByAggregateInput = {
    id?: SortOrder
    sourceLang?: SortOrder
    targetLang?: SortOrder
    createdAt?: SortOrder
  }

  export type LanguagePairMinOrderByAggregateInput = {
    id?: SortOrder
    sourceLang?: SortOrder
    targetLang?: SortOrder
    createdAt?: SortOrder
  }

  export type FileUploadCountOrderByAggregateInput = {
    id?: SortOrder
    filename?: SortOrder
    fileType?: SortOrder
    url?: SortOrder
    uploadedAt?: SortOrder
    projectId?: SortOrder
  }

  export type FileUploadMaxOrderByAggregateInput = {
    id?: SortOrder
    filename?: SortOrder
    fileType?: SortOrder
    url?: SortOrder
    uploadedAt?: SortOrder
    projectId?: SortOrder
  }

  export type FileUploadMinOrderByAggregateInput = {
    id?: SortOrder
    filename?: SortOrder
    fileType?: SortOrder
    url?: SortOrder
    uploadedAt?: SortOrder
    projectId?: SortOrder
  }

  export type TagCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TagMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TagMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type GlossaryEntryScalarRelationFilter = {
    is?: GlossaryEntryWhereInput
    isNot?: GlossaryEntryWhereInput
  }

  export type TagScalarRelationFilter = {
    is?: TagWhereInput
    isNot?: TagWhereInput
  }

  export type GlossaryEntryTagCountOrderByAggregateInput = {
    id?: SortOrder
    glossaryId?: SortOrder
    tagId?: SortOrder
  }

  export type GlossaryEntryTagMaxOrderByAggregateInput = {
    id?: SortOrder
    glossaryId?: SortOrder
    tagId?: SortOrder
  }

  export type GlossaryEntryTagMinOrderByAggregateInput = {
    id?: SortOrder
    glossaryId?: SortOrder
    tagId?: SortOrder
  }

  export type SegmentTagCountOrderByAggregateInput = {
    id?: SortOrder
    segmentId?: SortOrder
    tagId?: SortOrder
  }

  export type SegmentTagMaxOrderByAggregateInput = {
    id?: SortOrder
    segmentId?: SortOrder
    tagId?: SortOrder
  }

  export type SegmentTagMinOrderByAggregateInput = {
    id?: SortOrder
    segmentId?: SortOrder
    tagId?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type ProjectCreateNestedManyWithoutOwnerInput = {
    create?: XOR<ProjectCreateWithoutOwnerInput, ProjectUncheckedCreateWithoutOwnerInput> | ProjectCreateWithoutOwnerInput[] | ProjectUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutOwnerInput | ProjectCreateOrConnectWithoutOwnerInput[]
    createMany?: ProjectCreateManyOwnerInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutAuthorInput = {
    create?: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput> | CommentCreateWithoutAuthorInput[] | CommentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutAuthorInput | CommentCreateOrConnectWithoutAuthorInput[]
    createMany?: CommentCreateManyAuthorInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type ActivityLogCreateNestedManyWithoutUserInput = {
    create?: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput> | ActivityLogCreateWithoutUserInput[] | ActivityLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutUserInput | ActivityLogCreateOrConnectWithoutUserInput[]
    createMany?: ActivityLogCreateManyUserInputEnvelope
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<ProjectCreateWithoutOwnerInput, ProjectUncheckedCreateWithoutOwnerInput> | ProjectCreateWithoutOwnerInput[] | ProjectUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutOwnerInput | ProjectCreateOrConnectWithoutOwnerInput[]
    createMany?: ProjectCreateManyOwnerInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput> | CommentCreateWithoutAuthorInput[] | CommentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutAuthorInput | CommentCreateOrConnectWithoutAuthorInput[]
    createMany?: CommentCreateManyAuthorInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type ActivityLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput> | ActivityLogCreateWithoutUserInput[] | ActivityLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutUserInput | ActivityLogCreateOrConnectWithoutUserInput[]
    createMany?: ActivityLogCreateManyUserInputEnvelope
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type ProjectUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<ProjectCreateWithoutOwnerInput, ProjectUncheckedCreateWithoutOwnerInput> | ProjectCreateWithoutOwnerInput[] | ProjectUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutOwnerInput | ProjectCreateOrConnectWithoutOwnerInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutOwnerInput | ProjectUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: ProjectCreateManyOwnerInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutOwnerInput | ProjectUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutOwnerInput | ProjectUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type CommentUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput> | CommentCreateWithoutAuthorInput[] | CommentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutAuthorInput | CommentCreateOrConnectWithoutAuthorInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutAuthorInput | CommentUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: CommentCreateManyAuthorInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutAuthorInput | CommentUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutAuthorInput | CommentUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type ActivityLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput> | ActivityLogCreateWithoutUserInput[] | ActivityLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutUserInput | ActivityLogCreateOrConnectWithoutUserInput[]
    upsert?: ActivityLogUpsertWithWhereUniqueWithoutUserInput | ActivityLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ActivityLogCreateManyUserInputEnvelope
    set?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    disconnect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    delete?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    update?: ActivityLogUpdateWithWhereUniqueWithoutUserInput | ActivityLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ActivityLogUpdateManyWithWhereWithoutUserInput | ActivityLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<ProjectCreateWithoutOwnerInput, ProjectUncheckedCreateWithoutOwnerInput> | ProjectCreateWithoutOwnerInput[] | ProjectUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutOwnerInput | ProjectCreateOrConnectWithoutOwnerInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutOwnerInput | ProjectUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: ProjectCreateManyOwnerInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutOwnerInput | ProjectUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutOwnerInput | ProjectUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput> | CommentCreateWithoutAuthorInput[] | CommentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutAuthorInput | CommentCreateOrConnectWithoutAuthorInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutAuthorInput | CommentUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: CommentCreateManyAuthorInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutAuthorInput | CommentUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutAuthorInput | CommentUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type ActivityLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput> | ActivityLogCreateWithoutUserInput[] | ActivityLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutUserInput | ActivityLogCreateOrConnectWithoutUserInput[]
    upsert?: ActivityLogUpsertWithWhereUniqueWithoutUserInput | ActivityLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ActivityLogCreateManyUserInputEnvelope
    set?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    disconnect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    delete?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    update?: ActivityLogUpdateWithWhereUniqueWithoutUserInput | ActivityLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ActivityLogUpdateManyWithWhereWithoutUserInput | ActivityLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutProjectsInput = {
    create?: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectsInput
    connect?: UserWhereUniqueInput
  }

  export type SegmentCreateNestedManyWithoutProjectInput = {
    create?: XOR<SegmentCreateWithoutProjectInput, SegmentUncheckedCreateWithoutProjectInput> | SegmentCreateWithoutProjectInput[] | SegmentUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: SegmentCreateOrConnectWithoutProjectInput | SegmentCreateOrConnectWithoutProjectInput[]
    createMany?: SegmentCreateManyProjectInputEnvelope
    connect?: SegmentWhereUniqueInput | SegmentWhereUniqueInput[]
  }

  export type TranslationMemoryCreateNestedManyWithoutProjectInput = {
    create?: XOR<TranslationMemoryCreateWithoutProjectInput, TranslationMemoryUncheckedCreateWithoutProjectInput> | TranslationMemoryCreateWithoutProjectInput[] | TranslationMemoryUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TranslationMemoryCreateOrConnectWithoutProjectInput | TranslationMemoryCreateOrConnectWithoutProjectInput[]
    createMany?: TranslationMemoryCreateManyProjectInputEnvelope
    connect?: TranslationMemoryWhereUniqueInput | TranslationMemoryWhereUniqueInput[]
  }

  export type GlossaryEntryCreateNestedManyWithoutProjectInput = {
    create?: XOR<GlossaryEntryCreateWithoutProjectInput, GlossaryEntryUncheckedCreateWithoutProjectInput> | GlossaryEntryCreateWithoutProjectInput[] | GlossaryEntryUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: GlossaryEntryCreateOrConnectWithoutProjectInput | GlossaryEntryCreateOrConnectWithoutProjectInput[]
    createMany?: GlossaryEntryCreateManyProjectInputEnvelope
    connect?: GlossaryEntryWhereUniqueInput | GlossaryEntryWhereUniqueInput[]
  }

  export type LanguagePairCreateNestedManyWithoutProjectsInput = {
    create?: XOR<LanguagePairCreateWithoutProjectsInput, LanguagePairUncheckedCreateWithoutProjectsInput> | LanguagePairCreateWithoutProjectsInput[] | LanguagePairUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: LanguagePairCreateOrConnectWithoutProjectsInput | LanguagePairCreateOrConnectWithoutProjectsInput[]
    connect?: LanguagePairWhereUniqueInput | LanguagePairWhereUniqueInput[]
  }

  export type FileUploadCreateNestedManyWithoutProjectInput = {
    create?: XOR<FileUploadCreateWithoutProjectInput, FileUploadUncheckedCreateWithoutProjectInput> | FileUploadCreateWithoutProjectInput[] | FileUploadUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: FileUploadCreateOrConnectWithoutProjectInput | FileUploadCreateOrConnectWithoutProjectInput[]
    createMany?: FileUploadCreateManyProjectInputEnvelope
    connect?: FileUploadWhereUniqueInput | FileUploadWhereUniqueInput[]
  }

  export type SegmentUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<SegmentCreateWithoutProjectInput, SegmentUncheckedCreateWithoutProjectInput> | SegmentCreateWithoutProjectInput[] | SegmentUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: SegmentCreateOrConnectWithoutProjectInput | SegmentCreateOrConnectWithoutProjectInput[]
    createMany?: SegmentCreateManyProjectInputEnvelope
    connect?: SegmentWhereUniqueInput | SegmentWhereUniqueInput[]
  }

  export type TranslationMemoryUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<TranslationMemoryCreateWithoutProjectInput, TranslationMemoryUncheckedCreateWithoutProjectInput> | TranslationMemoryCreateWithoutProjectInput[] | TranslationMemoryUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TranslationMemoryCreateOrConnectWithoutProjectInput | TranslationMemoryCreateOrConnectWithoutProjectInput[]
    createMany?: TranslationMemoryCreateManyProjectInputEnvelope
    connect?: TranslationMemoryWhereUniqueInput | TranslationMemoryWhereUniqueInput[]
  }

  export type GlossaryEntryUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<GlossaryEntryCreateWithoutProjectInput, GlossaryEntryUncheckedCreateWithoutProjectInput> | GlossaryEntryCreateWithoutProjectInput[] | GlossaryEntryUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: GlossaryEntryCreateOrConnectWithoutProjectInput | GlossaryEntryCreateOrConnectWithoutProjectInput[]
    createMany?: GlossaryEntryCreateManyProjectInputEnvelope
    connect?: GlossaryEntryWhereUniqueInput | GlossaryEntryWhereUniqueInput[]
  }

  export type LanguagePairUncheckedCreateNestedManyWithoutProjectsInput = {
    create?: XOR<LanguagePairCreateWithoutProjectsInput, LanguagePairUncheckedCreateWithoutProjectsInput> | LanguagePairCreateWithoutProjectsInput[] | LanguagePairUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: LanguagePairCreateOrConnectWithoutProjectsInput | LanguagePairCreateOrConnectWithoutProjectsInput[]
    connect?: LanguagePairWhereUniqueInput | LanguagePairWhereUniqueInput[]
  }

  export type FileUploadUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<FileUploadCreateWithoutProjectInput, FileUploadUncheckedCreateWithoutProjectInput> | FileUploadCreateWithoutProjectInput[] | FileUploadUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: FileUploadCreateOrConnectWithoutProjectInput | FileUploadCreateOrConnectWithoutProjectInput[]
    createMany?: FileUploadCreateManyProjectInputEnvelope
    connect?: FileUploadWhereUniqueInput | FileUploadWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutProjectsNestedInput = {
    create?: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectsInput
    upsert?: UserUpsertWithoutProjectsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProjectsInput, UserUpdateWithoutProjectsInput>, UserUncheckedUpdateWithoutProjectsInput>
  }

  export type SegmentUpdateManyWithoutProjectNestedInput = {
    create?: XOR<SegmentCreateWithoutProjectInput, SegmentUncheckedCreateWithoutProjectInput> | SegmentCreateWithoutProjectInput[] | SegmentUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: SegmentCreateOrConnectWithoutProjectInput | SegmentCreateOrConnectWithoutProjectInput[]
    upsert?: SegmentUpsertWithWhereUniqueWithoutProjectInput | SegmentUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: SegmentCreateManyProjectInputEnvelope
    set?: SegmentWhereUniqueInput | SegmentWhereUniqueInput[]
    disconnect?: SegmentWhereUniqueInput | SegmentWhereUniqueInput[]
    delete?: SegmentWhereUniqueInput | SegmentWhereUniqueInput[]
    connect?: SegmentWhereUniqueInput | SegmentWhereUniqueInput[]
    update?: SegmentUpdateWithWhereUniqueWithoutProjectInput | SegmentUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: SegmentUpdateManyWithWhereWithoutProjectInput | SegmentUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: SegmentScalarWhereInput | SegmentScalarWhereInput[]
  }

  export type TranslationMemoryUpdateManyWithoutProjectNestedInput = {
    create?: XOR<TranslationMemoryCreateWithoutProjectInput, TranslationMemoryUncheckedCreateWithoutProjectInput> | TranslationMemoryCreateWithoutProjectInput[] | TranslationMemoryUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TranslationMemoryCreateOrConnectWithoutProjectInput | TranslationMemoryCreateOrConnectWithoutProjectInput[]
    upsert?: TranslationMemoryUpsertWithWhereUniqueWithoutProjectInput | TranslationMemoryUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: TranslationMemoryCreateManyProjectInputEnvelope
    set?: TranslationMemoryWhereUniqueInput | TranslationMemoryWhereUniqueInput[]
    disconnect?: TranslationMemoryWhereUniqueInput | TranslationMemoryWhereUniqueInput[]
    delete?: TranslationMemoryWhereUniqueInput | TranslationMemoryWhereUniqueInput[]
    connect?: TranslationMemoryWhereUniqueInput | TranslationMemoryWhereUniqueInput[]
    update?: TranslationMemoryUpdateWithWhereUniqueWithoutProjectInput | TranslationMemoryUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: TranslationMemoryUpdateManyWithWhereWithoutProjectInput | TranslationMemoryUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: TranslationMemoryScalarWhereInput | TranslationMemoryScalarWhereInput[]
  }

  export type GlossaryEntryUpdateManyWithoutProjectNestedInput = {
    create?: XOR<GlossaryEntryCreateWithoutProjectInput, GlossaryEntryUncheckedCreateWithoutProjectInput> | GlossaryEntryCreateWithoutProjectInput[] | GlossaryEntryUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: GlossaryEntryCreateOrConnectWithoutProjectInput | GlossaryEntryCreateOrConnectWithoutProjectInput[]
    upsert?: GlossaryEntryUpsertWithWhereUniqueWithoutProjectInput | GlossaryEntryUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: GlossaryEntryCreateManyProjectInputEnvelope
    set?: GlossaryEntryWhereUniqueInput | GlossaryEntryWhereUniqueInput[]
    disconnect?: GlossaryEntryWhereUniqueInput | GlossaryEntryWhereUniqueInput[]
    delete?: GlossaryEntryWhereUniqueInput | GlossaryEntryWhereUniqueInput[]
    connect?: GlossaryEntryWhereUniqueInput | GlossaryEntryWhereUniqueInput[]
    update?: GlossaryEntryUpdateWithWhereUniqueWithoutProjectInput | GlossaryEntryUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: GlossaryEntryUpdateManyWithWhereWithoutProjectInput | GlossaryEntryUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: GlossaryEntryScalarWhereInput | GlossaryEntryScalarWhereInput[]
  }

  export type LanguagePairUpdateManyWithoutProjectsNestedInput = {
    create?: XOR<LanguagePairCreateWithoutProjectsInput, LanguagePairUncheckedCreateWithoutProjectsInput> | LanguagePairCreateWithoutProjectsInput[] | LanguagePairUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: LanguagePairCreateOrConnectWithoutProjectsInput | LanguagePairCreateOrConnectWithoutProjectsInput[]
    upsert?: LanguagePairUpsertWithWhereUniqueWithoutProjectsInput | LanguagePairUpsertWithWhereUniqueWithoutProjectsInput[]
    set?: LanguagePairWhereUniqueInput | LanguagePairWhereUniqueInput[]
    disconnect?: LanguagePairWhereUniqueInput | LanguagePairWhereUniqueInput[]
    delete?: LanguagePairWhereUniqueInput | LanguagePairWhereUniqueInput[]
    connect?: LanguagePairWhereUniqueInput | LanguagePairWhereUniqueInput[]
    update?: LanguagePairUpdateWithWhereUniqueWithoutProjectsInput | LanguagePairUpdateWithWhereUniqueWithoutProjectsInput[]
    updateMany?: LanguagePairUpdateManyWithWhereWithoutProjectsInput | LanguagePairUpdateManyWithWhereWithoutProjectsInput[]
    deleteMany?: LanguagePairScalarWhereInput | LanguagePairScalarWhereInput[]
  }

  export type FileUploadUpdateManyWithoutProjectNestedInput = {
    create?: XOR<FileUploadCreateWithoutProjectInput, FileUploadUncheckedCreateWithoutProjectInput> | FileUploadCreateWithoutProjectInput[] | FileUploadUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: FileUploadCreateOrConnectWithoutProjectInput | FileUploadCreateOrConnectWithoutProjectInput[]
    upsert?: FileUploadUpsertWithWhereUniqueWithoutProjectInput | FileUploadUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: FileUploadCreateManyProjectInputEnvelope
    set?: FileUploadWhereUniqueInput | FileUploadWhereUniqueInput[]
    disconnect?: FileUploadWhereUniqueInput | FileUploadWhereUniqueInput[]
    delete?: FileUploadWhereUniqueInput | FileUploadWhereUniqueInput[]
    connect?: FileUploadWhereUniqueInput | FileUploadWhereUniqueInput[]
    update?: FileUploadUpdateWithWhereUniqueWithoutProjectInput | FileUploadUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: FileUploadUpdateManyWithWhereWithoutProjectInput | FileUploadUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: FileUploadScalarWhereInput | FileUploadScalarWhereInput[]
  }

  export type SegmentUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<SegmentCreateWithoutProjectInput, SegmentUncheckedCreateWithoutProjectInput> | SegmentCreateWithoutProjectInput[] | SegmentUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: SegmentCreateOrConnectWithoutProjectInput | SegmentCreateOrConnectWithoutProjectInput[]
    upsert?: SegmentUpsertWithWhereUniqueWithoutProjectInput | SegmentUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: SegmentCreateManyProjectInputEnvelope
    set?: SegmentWhereUniqueInput | SegmentWhereUniqueInput[]
    disconnect?: SegmentWhereUniqueInput | SegmentWhereUniqueInput[]
    delete?: SegmentWhereUniqueInput | SegmentWhereUniqueInput[]
    connect?: SegmentWhereUniqueInput | SegmentWhereUniqueInput[]
    update?: SegmentUpdateWithWhereUniqueWithoutProjectInput | SegmentUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: SegmentUpdateManyWithWhereWithoutProjectInput | SegmentUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: SegmentScalarWhereInput | SegmentScalarWhereInput[]
  }

  export type TranslationMemoryUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<TranslationMemoryCreateWithoutProjectInput, TranslationMemoryUncheckedCreateWithoutProjectInput> | TranslationMemoryCreateWithoutProjectInput[] | TranslationMemoryUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TranslationMemoryCreateOrConnectWithoutProjectInput | TranslationMemoryCreateOrConnectWithoutProjectInput[]
    upsert?: TranslationMemoryUpsertWithWhereUniqueWithoutProjectInput | TranslationMemoryUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: TranslationMemoryCreateManyProjectInputEnvelope
    set?: TranslationMemoryWhereUniqueInput | TranslationMemoryWhereUniqueInput[]
    disconnect?: TranslationMemoryWhereUniqueInput | TranslationMemoryWhereUniqueInput[]
    delete?: TranslationMemoryWhereUniqueInput | TranslationMemoryWhereUniqueInput[]
    connect?: TranslationMemoryWhereUniqueInput | TranslationMemoryWhereUniqueInput[]
    update?: TranslationMemoryUpdateWithWhereUniqueWithoutProjectInput | TranslationMemoryUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: TranslationMemoryUpdateManyWithWhereWithoutProjectInput | TranslationMemoryUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: TranslationMemoryScalarWhereInput | TranslationMemoryScalarWhereInput[]
  }

  export type GlossaryEntryUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<GlossaryEntryCreateWithoutProjectInput, GlossaryEntryUncheckedCreateWithoutProjectInput> | GlossaryEntryCreateWithoutProjectInput[] | GlossaryEntryUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: GlossaryEntryCreateOrConnectWithoutProjectInput | GlossaryEntryCreateOrConnectWithoutProjectInput[]
    upsert?: GlossaryEntryUpsertWithWhereUniqueWithoutProjectInput | GlossaryEntryUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: GlossaryEntryCreateManyProjectInputEnvelope
    set?: GlossaryEntryWhereUniqueInput | GlossaryEntryWhereUniqueInput[]
    disconnect?: GlossaryEntryWhereUniqueInput | GlossaryEntryWhereUniqueInput[]
    delete?: GlossaryEntryWhereUniqueInput | GlossaryEntryWhereUniqueInput[]
    connect?: GlossaryEntryWhereUniqueInput | GlossaryEntryWhereUniqueInput[]
    update?: GlossaryEntryUpdateWithWhereUniqueWithoutProjectInput | GlossaryEntryUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: GlossaryEntryUpdateManyWithWhereWithoutProjectInput | GlossaryEntryUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: GlossaryEntryScalarWhereInput | GlossaryEntryScalarWhereInput[]
  }

  export type LanguagePairUncheckedUpdateManyWithoutProjectsNestedInput = {
    create?: XOR<LanguagePairCreateWithoutProjectsInput, LanguagePairUncheckedCreateWithoutProjectsInput> | LanguagePairCreateWithoutProjectsInput[] | LanguagePairUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: LanguagePairCreateOrConnectWithoutProjectsInput | LanguagePairCreateOrConnectWithoutProjectsInput[]
    upsert?: LanguagePairUpsertWithWhereUniqueWithoutProjectsInput | LanguagePairUpsertWithWhereUniqueWithoutProjectsInput[]
    set?: LanguagePairWhereUniqueInput | LanguagePairWhereUniqueInput[]
    disconnect?: LanguagePairWhereUniqueInput | LanguagePairWhereUniqueInput[]
    delete?: LanguagePairWhereUniqueInput | LanguagePairWhereUniqueInput[]
    connect?: LanguagePairWhereUniqueInput | LanguagePairWhereUniqueInput[]
    update?: LanguagePairUpdateWithWhereUniqueWithoutProjectsInput | LanguagePairUpdateWithWhereUniqueWithoutProjectsInput[]
    updateMany?: LanguagePairUpdateManyWithWhereWithoutProjectsInput | LanguagePairUpdateManyWithWhereWithoutProjectsInput[]
    deleteMany?: LanguagePairScalarWhereInput | LanguagePairScalarWhereInput[]
  }

  export type FileUploadUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<FileUploadCreateWithoutProjectInput, FileUploadUncheckedCreateWithoutProjectInput> | FileUploadCreateWithoutProjectInput[] | FileUploadUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: FileUploadCreateOrConnectWithoutProjectInput | FileUploadCreateOrConnectWithoutProjectInput[]
    upsert?: FileUploadUpsertWithWhereUniqueWithoutProjectInput | FileUploadUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: FileUploadCreateManyProjectInputEnvelope
    set?: FileUploadWhereUniqueInput | FileUploadWhereUniqueInput[]
    disconnect?: FileUploadWhereUniqueInput | FileUploadWhereUniqueInput[]
    delete?: FileUploadWhereUniqueInput | FileUploadWhereUniqueInput[]
    connect?: FileUploadWhereUniqueInput | FileUploadWhereUniqueInput[]
    update?: FileUploadUpdateWithWhereUniqueWithoutProjectInput | FileUploadUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: FileUploadUpdateManyWithWhereWithoutProjectInput | FileUploadUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: FileUploadScalarWhereInput | FileUploadScalarWhereInput[]
  }

  export type ProjectCreateNestedOneWithoutSegmentsInput = {
    create?: XOR<ProjectCreateWithoutSegmentsInput, ProjectUncheckedCreateWithoutSegmentsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutSegmentsInput
    connect?: ProjectWhereUniqueInput
  }

  export type CommentCreateNestedManyWithoutSegmentInput = {
    create?: XOR<CommentCreateWithoutSegmentInput, CommentUncheckedCreateWithoutSegmentInput> | CommentCreateWithoutSegmentInput[] | CommentUncheckedCreateWithoutSegmentInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutSegmentInput | CommentCreateOrConnectWithoutSegmentInput[]
    createMany?: CommentCreateManySegmentInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type ActivityLogCreateNestedManyWithoutSegmentInput = {
    create?: XOR<ActivityLogCreateWithoutSegmentInput, ActivityLogUncheckedCreateWithoutSegmentInput> | ActivityLogCreateWithoutSegmentInput[] | ActivityLogUncheckedCreateWithoutSegmentInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutSegmentInput | ActivityLogCreateOrConnectWithoutSegmentInput[]
    createMany?: ActivityLogCreateManySegmentInputEnvelope
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
  }

  export type TagCreateNestedManyWithoutSegmentsInput = {
    create?: XOR<TagCreateWithoutSegmentsInput, TagUncheckedCreateWithoutSegmentsInput> | TagCreateWithoutSegmentsInput[] | TagUncheckedCreateWithoutSegmentsInput[]
    connectOrCreate?: TagCreateOrConnectWithoutSegmentsInput | TagCreateOrConnectWithoutSegmentsInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type SegmentTagCreateNestedManyWithoutSegmentInput = {
    create?: XOR<SegmentTagCreateWithoutSegmentInput, SegmentTagUncheckedCreateWithoutSegmentInput> | SegmentTagCreateWithoutSegmentInput[] | SegmentTagUncheckedCreateWithoutSegmentInput[]
    connectOrCreate?: SegmentTagCreateOrConnectWithoutSegmentInput | SegmentTagCreateOrConnectWithoutSegmentInput[]
    createMany?: SegmentTagCreateManySegmentInputEnvelope
    connect?: SegmentTagWhereUniqueInput | SegmentTagWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutSegmentInput = {
    create?: XOR<CommentCreateWithoutSegmentInput, CommentUncheckedCreateWithoutSegmentInput> | CommentCreateWithoutSegmentInput[] | CommentUncheckedCreateWithoutSegmentInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutSegmentInput | CommentCreateOrConnectWithoutSegmentInput[]
    createMany?: CommentCreateManySegmentInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type ActivityLogUncheckedCreateNestedManyWithoutSegmentInput = {
    create?: XOR<ActivityLogCreateWithoutSegmentInput, ActivityLogUncheckedCreateWithoutSegmentInput> | ActivityLogCreateWithoutSegmentInput[] | ActivityLogUncheckedCreateWithoutSegmentInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutSegmentInput | ActivityLogCreateOrConnectWithoutSegmentInput[]
    createMany?: ActivityLogCreateManySegmentInputEnvelope
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
  }

  export type TagUncheckedCreateNestedManyWithoutSegmentsInput = {
    create?: XOR<TagCreateWithoutSegmentsInput, TagUncheckedCreateWithoutSegmentsInput> | TagCreateWithoutSegmentsInput[] | TagUncheckedCreateWithoutSegmentsInput[]
    connectOrCreate?: TagCreateOrConnectWithoutSegmentsInput | TagCreateOrConnectWithoutSegmentsInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type SegmentTagUncheckedCreateNestedManyWithoutSegmentInput = {
    create?: XOR<SegmentTagCreateWithoutSegmentInput, SegmentTagUncheckedCreateWithoutSegmentInput> | SegmentTagCreateWithoutSegmentInput[] | SegmentTagUncheckedCreateWithoutSegmentInput[]
    connectOrCreate?: SegmentTagCreateOrConnectWithoutSegmentInput | SegmentTagCreateOrConnectWithoutSegmentInput[]
    createMany?: SegmentTagCreateManySegmentInputEnvelope
    connect?: SegmentTagWhereUniqueInput | SegmentTagWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumSegmentStatusFieldUpdateOperationsInput = {
    set?: $Enums.SegmentStatus
  }

  export type ProjectUpdateOneRequiredWithoutSegmentsNestedInput = {
    create?: XOR<ProjectCreateWithoutSegmentsInput, ProjectUncheckedCreateWithoutSegmentsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutSegmentsInput
    upsert?: ProjectUpsertWithoutSegmentsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutSegmentsInput, ProjectUpdateWithoutSegmentsInput>, ProjectUncheckedUpdateWithoutSegmentsInput>
  }

  export type CommentUpdateManyWithoutSegmentNestedInput = {
    create?: XOR<CommentCreateWithoutSegmentInput, CommentUncheckedCreateWithoutSegmentInput> | CommentCreateWithoutSegmentInput[] | CommentUncheckedCreateWithoutSegmentInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutSegmentInput | CommentCreateOrConnectWithoutSegmentInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutSegmentInput | CommentUpsertWithWhereUniqueWithoutSegmentInput[]
    createMany?: CommentCreateManySegmentInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutSegmentInput | CommentUpdateWithWhereUniqueWithoutSegmentInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutSegmentInput | CommentUpdateManyWithWhereWithoutSegmentInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type ActivityLogUpdateManyWithoutSegmentNestedInput = {
    create?: XOR<ActivityLogCreateWithoutSegmentInput, ActivityLogUncheckedCreateWithoutSegmentInput> | ActivityLogCreateWithoutSegmentInput[] | ActivityLogUncheckedCreateWithoutSegmentInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutSegmentInput | ActivityLogCreateOrConnectWithoutSegmentInput[]
    upsert?: ActivityLogUpsertWithWhereUniqueWithoutSegmentInput | ActivityLogUpsertWithWhereUniqueWithoutSegmentInput[]
    createMany?: ActivityLogCreateManySegmentInputEnvelope
    set?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    disconnect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    delete?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    update?: ActivityLogUpdateWithWhereUniqueWithoutSegmentInput | ActivityLogUpdateWithWhereUniqueWithoutSegmentInput[]
    updateMany?: ActivityLogUpdateManyWithWhereWithoutSegmentInput | ActivityLogUpdateManyWithWhereWithoutSegmentInput[]
    deleteMany?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
  }

  export type TagUpdateManyWithoutSegmentsNestedInput = {
    create?: XOR<TagCreateWithoutSegmentsInput, TagUncheckedCreateWithoutSegmentsInput> | TagCreateWithoutSegmentsInput[] | TagUncheckedCreateWithoutSegmentsInput[]
    connectOrCreate?: TagCreateOrConnectWithoutSegmentsInput | TagCreateOrConnectWithoutSegmentsInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutSegmentsInput | TagUpsertWithWhereUniqueWithoutSegmentsInput[]
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutSegmentsInput | TagUpdateWithWhereUniqueWithoutSegmentsInput[]
    updateMany?: TagUpdateManyWithWhereWithoutSegmentsInput | TagUpdateManyWithWhereWithoutSegmentsInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type SegmentTagUpdateManyWithoutSegmentNestedInput = {
    create?: XOR<SegmentTagCreateWithoutSegmentInput, SegmentTagUncheckedCreateWithoutSegmentInput> | SegmentTagCreateWithoutSegmentInput[] | SegmentTagUncheckedCreateWithoutSegmentInput[]
    connectOrCreate?: SegmentTagCreateOrConnectWithoutSegmentInput | SegmentTagCreateOrConnectWithoutSegmentInput[]
    upsert?: SegmentTagUpsertWithWhereUniqueWithoutSegmentInput | SegmentTagUpsertWithWhereUniqueWithoutSegmentInput[]
    createMany?: SegmentTagCreateManySegmentInputEnvelope
    set?: SegmentTagWhereUniqueInput | SegmentTagWhereUniqueInput[]
    disconnect?: SegmentTagWhereUniqueInput | SegmentTagWhereUniqueInput[]
    delete?: SegmentTagWhereUniqueInput | SegmentTagWhereUniqueInput[]
    connect?: SegmentTagWhereUniqueInput | SegmentTagWhereUniqueInput[]
    update?: SegmentTagUpdateWithWhereUniqueWithoutSegmentInput | SegmentTagUpdateWithWhereUniqueWithoutSegmentInput[]
    updateMany?: SegmentTagUpdateManyWithWhereWithoutSegmentInput | SegmentTagUpdateManyWithWhereWithoutSegmentInput[]
    deleteMany?: SegmentTagScalarWhereInput | SegmentTagScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutSegmentNestedInput = {
    create?: XOR<CommentCreateWithoutSegmentInput, CommentUncheckedCreateWithoutSegmentInput> | CommentCreateWithoutSegmentInput[] | CommentUncheckedCreateWithoutSegmentInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutSegmentInput | CommentCreateOrConnectWithoutSegmentInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutSegmentInput | CommentUpsertWithWhereUniqueWithoutSegmentInput[]
    createMany?: CommentCreateManySegmentInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutSegmentInput | CommentUpdateWithWhereUniqueWithoutSegmentInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutSegmentInput | CommentUpdateManyWithWhereWithoutSegmentInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type ActivityLogUncheckedUpdateManyWithoutSegmentNestedInput = {
    create?: XOR<ActivityLogCreateWithoutSegmentInput, ActivityLogUncheckedCreateWithoutSegmentInput> | ActivityLogCreateWithoutSegmentInput[] | ActivityLogUncheckedCreateWithoutSegmentInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutSegmentInput | ActivityLogCreateOrConnectWithoutSegmentInput[]
    upsert?: ActivityLogUpsertWithWhereUniqueWithoutSegmentInput | ActivityLogUpsertWithWhereUniqueWithoutSegmentInput[]
    createMany?: ActivityLogCreateManySegmentInputEnvelope
    set?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    disconnect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    delete?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    update?: ActivityLogUpdateWithWhereUniqueWithoutSegmentInput | ActivityLogUpdateWithWhereUniqueWithoutSegmentInput[]
    updateMany?: ActivityLogUpdateManyWithWhereWithoutSegmentInput | ActivityLogUpdateManyWithWhereWithoutSegmentInput[]
    deleteMany?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
  }

  export type TagUncheckedUpdateManyWithoutSegmentsNestedInput = {
    create?: XOR<TagCreateWithoutSegmentsInput, TagUncheckedCreateWithoutSegmentsInput> | TagCreateWithoutSegmentsInput[] | TagUncheckedCreateWithoutSegmentsInput[]
    connectOrCreate?: TagCreateOrConnectWithoutSegmentsInput | TagCreateOrConnectWithoutSegmentsInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutSegmentsInput | TagUpsertWithWhereUniqueWithoutSegmentsInput[]
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutSegmentsInput | TagUpdateWithWhereUniqueWithoutSegmentsInput[]
    updateMany?: TagUpdateManyWithWhereWithoutSegmentsInput | TagUpdateManyWithWhereWithoutSegmentsInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type SegmentTagUncheckedUpdateManyWithoutSegmentNestedInput = {
    create?: XOR<SegmentTagCreateWithoutSegmentInput, SegmentTagUncheckedCreateWithoutSegmentInput> | SegmentTagCreateWithoutSegmentInput[] | SegmentTagUncheckedCreateWithoutSegmentInput[]
    connectOrCreate?: SegmentTagCreateOrConnectWithoutSegmentInput | SegmentTagCreateOrConnectWithoutSegmentInput[]
    upsert?: SegmentTagUpsertWithWhereUniqueWithoutSegmentInput | SegmentTagUpsertWithWhereUniqueWithoutSegmentInput[]
    createMany?: SegmentTagCreateManySegmentInputEnvelope
    set?: SegmentTagWhereUniqueInput | SegmentTagWhereUniqueInput[]
    disconnect?: SegmentTagWhereUniqueInput | SegmentTagWhereUniqueInput[]
    delete?: SegmentTagWhereUniqueInput | SegmentTagWhereUniqueInput[]
    connect?: SegmentTagWhereUniqueInput | SegmentTagWhereUniqueInput[]
    update?: SegmentTagUpdateWithWhereUniqueWithoutSegmentInput | SegmentTagUpdateWithWhereUniqueWithoutSegmentInput[]
    updateMany?: SegmentTagUpdateManyWithWhereWithoutSegmentInput | SegmentTagUpdateManyWithWhereWithoutSegmentInput[]
    deleteMany?: SegmentTagScalarWhereInput | SegmentTagScalarWhereInput[]
  }

  export type ProjectCreateNestedOneWithoutTmsInput = {
    create?: XOR<ProjectCreateWithoutTmsInput, ProjectUncheckedCreateWithoutTmsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutTmsInput
    connect?: ProjectWhereUniqueInput
  }

  export type ProjectUpdateOneRequiredWithoutTmsNestedInput = {
    create?: XOR<ProjectCreateWithoutTmsInput, ProjectUncheckedCreateWithoutTmsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutTmsInput
    upsert?: ProjectUpsertWithoutTmsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutTmsInput, ProjectUpdateWithoutTmsInput>, ProjectUncheckedUpdateWithoutTmsInput>
  }

  export type ProjectCreateNestedOneWithoutGlossariesInput = {
    create?: XOR<ProjectCreateWithoutGlossariesInput, ProjectUncheckedCreateWithoutGlossariesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutGlossariesInput
    connect?: ProjectWhereUniqueInput
  }

  export type TagCreateNestedManyWithoutGlossaryEntriesInput = {
    create?: XOR<TagCreateWithoutGlossaryEntriesInput, TagUncheckedCreateWithoutGlossaryEntriesInput> | TagCreateWithoutGlossaryEntriesInput[] | TagUncheckedCreateWithoutGlossaryEntriesInput[]
    connectOrCreate?: TagCreateOrConnectWithoutGlossaryEntriesInput | TagCreateOrConnectWithoutGlossaryEntriesInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type GlossaryEntryTagCreateNestedManyWithoutGlossaryEntryInput = {
    create?: XOR<GlossaryEntryTagCreateWithoutGlossaryEntryInput, GlossaryEntryTagUncheckedCreateWithoutGlossaryEntryInput> | GlossaryEntryTagCreateWithoutGlossaryEntryInput[] | GlossaryEntryTagUncheckedCreateWithoutGlossaryEntryInput[]
    connectOrCreate?: GlossaryEntryTagCreateOrConnectWithoutGlossaryEntryInput | GlossaryEntryTagCreateOrConnectWithoutGlossaryEntryInput[]
    createMany?: GlossaryEntryTagCreateManyGlossaryEntryInputEnvelope
    connect?: GlossaryEntryTagWhereUniqueInput | GlossaryEntryTagWhereUniqueInput[]
  }

  export type TagUncheckedCreateNestedManyWithoutGlossaryEntriesInput = {
    create?: XOR<TagCreateWithoutGlossaryEntriesInput, TagUncheckedCreateWithoutGlossaryEntriesInput> | TagCreateWithoutGlossaryEntriesInput[] | TagUncheckedCreateWithoutGlossaryEntriesInput[]
    connectOrCreate?: TagCreateOrConnectWithoutGlossaryEntriesInput | TagCreateOrConnectWithoutGlossaryEntriesInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type GlossaryEntryTagUncheckedCreateNestedManyWithoutGlossaryEntryInput = {
    create?: XOR<GlossaryEntryTagCreateWithoutGlossaryEntryInput, GlossaryEntryTagUncheckedCreateWithoutGlossaryEntryInput> | GlossaryEntryTagCreateWithoutGlossaryEntryInput[] | GlossaryEntryTagUncheckedCreateWithoutGlossaryEntryInput[]
    connectOrCreate?: GlossaryEntryTagCreateOrConnectWithoutGlossaryEntryInput | GlossaryEntryTagCreateOrConnectWithoutGlossaryEntryInput[]
    createMany?: GlossaryEntryTagCreateManyGlossaryEntryInputEnvelope
    connect?: GlossaryEntryTagWhereUniqueInput | GlossaryEntryTagWhereUniqueInput[]
  }

  export type ProjectUpdateOneRequiredWithoutGlossariesNestedInput = {
    create?: XOR<ProjectCreateWithoutGlossariesInput, ProjectUncheckedCreateWithoutGlossariesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutGlossariesInput
    upsert?: ProjectUpsertWithoutGlossariesInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutGlossariesInput, ProjectUpdateWithoutGlossariesInput>, ProjectUncheckedUpdateWithoutGlossariesInput>
  }

  export type TagUpdateManyWithoutGlossaryEntriesNestedInput = {
    create?: XOR<TagCreateWithoutGlossaryEntriesInput, TagUncheckedCreateWithoutGlossaryEntriesInput> | TagCreateWithoutGlossaryEntriesInput[] | TagUncheckedCreateWithoutGlossaryEntriesInput[]
    connectOrCreate?: TagCreateOrConnectWithoutGlossaryEntriesInput | TagCreateOrConnectWithoutGlossaryEntriesInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutGlossaryEntriesInput | TagUpsertWithWhereUniqueWithoutGlossaryEntriesInput[]
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutGlossaryEntriesInput | TagUpdateWithWhereUniqueWithoutGlossaryEntriesInput[]
    updateMany?: TagUpdateManyWithWhereWithoutGlossaryEntriesInput | TagUpdateManyWithWhereWithoutGlossaryEntriesInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type GlossaryEntryTagUpdateManyWithoutGlossaryEntryNestedInput = {
    create?: XOR<GlossaryEntryTagCreateWithoutGlossaryEntryInput, GlossaryEntryTagUncheckedCreateWithoutGlossaryEntryInput> | GlossaryEntryTagCreateWithoutGlossaryEntryInput[] | GlossaryEntryTagUncheckedCreateWithoutGlossaryEntryInput[]
    connectOrCreate?: GlossaryEntryTagCreateOrConnectWithoutGlossaryEntryInput | GlossaryEntryTagCreateOrConnectWithoutGlossaryEntryInput[]
    upsert?: GlossaryEntryTagUpsertWithWhereUniqueWithoutGlossaryEntryInput | GlossaryEntryTagUpsertWithWhereUniqueWithoutGlossaryEntryInput[]
    createMany?: GlossaryEntryTagCreateManyGlossaryEntryInputEnvelope
    set?: GlossaryEntryTagWhereUniqueInput | GlossaryEntryTagWhereUniqueInput[]
    disconnect?: GlossaryEntryTagWhereUniqueInput | GlossaryEntryTagWhereUniqueInput[]
    delete?: GlossaryEntryTagWhereUniqueInput | GlossaryEntryTagWhereUniqueInput[]
    connect?: GlossaryEntryTagWhereUniqueInput | GlossaryEntryTagWhereUniqueInput[]
    update?: GlossaryEntryTagUpdateWithWhereUniqueWithoutGlossaryEntryInput | GlossaryEntryTagUpdateWithWhereUniqueWithoutGlossaryEntryInput[]
    updateMany?: GlossaryEntryTagUpdateManyWithWhereWithoutGlossaryEntryInput | GlossaryEntryTagUpdateManyWithWhereWithoutGlossaryEntryInput[]
    deleteMany?: GlossaryEntryTagScalarWhereInput | GlossaryEntryTagScalarWhereInput[]
  }

  export type TagUncheckedUpdateManyWithoutGlossaryEntriesNestedInput = {
    create?: XOR<TagCreateWithoutGlossaryEntriesInput, TagUncheckedCreateWithoutGlossaryEntriesInput> | TagCreateWithoutGlossaryEntriesInput[] | TagUncheckedCreateWithoutGlossaryEntriesInput[]
    connectOrCreate?: TagCreateOrConnectWithoutGlossaryEntriesInput | TagCreateOrConnectWithoutGlossaryEntriesInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutGlossaryEntriesInput | TagUpsertWithWhereUniqueWithoutGlossaryEntriesInput[]
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutGlossaryEntriesInput | TagUpdateWithWhereUniqueWithoutGlossaryEntriesInput[]
    updateMany?: TagUpdateManyWithWhereWithoutGlossaryEntriesInput | TagUpdateManyWithWhereWithoutGlossaryEntriesInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type GlossaryEntryTagUncheckedUpdateManyWithoutGlossaryEntryNestedInput = {
    create?: XOR<GlossaryEntryTagCreateWithoutGlossaryEntryInput, GlossaryEntryTagUncheckedCreateWithoutGlossaryEntryInput> | GlossaryEntryTagCreateWithoutGlossaryEntryInput[] | GlossaryEntryTagUncheckedCreateWithoutGlossaryEntryInput[]
    connectOrCreate?: GlossaryEntryTagCreateOrConnectWithoutGlossaryEntryInput | GlossaryEntryTagCreateOrConnectWithoutGlossaryEntryInput[]
    upsert?: GlossaryEntryTagUpsertWithWhereUniqueWithoutGlossaryEntryInput | GlossaryEntryTagUpsertWithWhereUniqueWithoutGlossaryEntryInput[]
    createMany?: GlossaryEntryTagCreateManyGlossaryEntryInputEnvelope
    set?: GlossaryEntryTagWhereUniqueInput | GlossaryEntryTagWhereUniqueInput[]
    disconnect?: GlossaryEntryTagWhereUniqueInput | GlossaryEntryTagWhereUniqueInput[]
    delete?: GlossaryEntryTagWhereUniqueInput | GlossaryEntryTagWhereUniqueInput[]
    connect?: GlossaryEntryTagWhereUniqueInput | GlossaryEntryTagWhereUniqueInput[]
    update?: GlossaryEntryTagUpdateWithWhereUniqueWithoutGlossaryEntryInput | GlossaryEntryTagUpdateWithWhereUniqueWithoutGlossaryEntryInput[]
    updateMany?: GlossaryEntryTagUpdateManyWithWhereWithoutGlossaryEntryInput | GlossaryEntryTagUpdateManyWithWhereWithoutGlossaryEntryInput[]
    deleteMany?: GlossaryEntryTagScalarWhereInput | GlossaryEntryTagScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCommentsInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    connect?: UserWhereUniqueInput
  }

  export type SegmentCreateNestedOneWithoutCommentsInput = {
    create?: XOR<SegmentCreateWithoutCommentsInput, SegmentUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: SegmentCreateOrConnectWithoutCommentsInput
    connect?: SegmentWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    upsert?: UserUpsertWithoutCommentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommentsInput, UserUpdateWithoutCommentsInput>, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type SegmentUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<SegmentCreateWithoutCommentsInput, SegmentUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: SegmentCreateOrConnectWithoutCommentsInput
    upsert?: SegmentUpsertWithoutCommentsInput
    connect?: SegmentWhereUniqueInput
    update?: XOR<XOR<SegmentUpdateToOneWithWhereWithoutCommentsInput, SegmentUpdateWithoutCommentsInput>, SegmentUncheckedUpdateWithoutCommentsInput>
  }

  export type UserCreateNestedOneWithoutActivityLogsInput = {
    create?: XOR<UserCreateWithoutActivityLogsInput, UserUncheckedCreateWithoutActivityLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutActivityLogsInput
    connect?: UserWhereUniqueInput
  }

  export type SegmentCreateNestedOneWithoutActivityLogsInput = {
    create?: XOR<SegmentCreateWithoutActivityLogsInput, SegmentUncheckedCreateWithoutActivityLogsInput>
    connectOrCreate?: SegmentCreateOrConnectWithoutActivityLogsInput
    connect?: SegmentWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutActivityLogsNestedInput = {
    create?: XOR<UserCreateWithoutActivityLogsInput, UserUncheckedCreateWithoutActivityLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutActivityLogsInput
    upsert?: UserUpsertWithoutActivityLogsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutActivityLogsInput, UserUpdateWithoutActivityLogsInput>, UserUncheckedUpdateWithoutActivityLogsInput>
  }

  export type SegmentUpdateOneRequiredWithoutActivityLogsNestedInput = {
    create?: XOR<SegmentCreateWithoutActivityLogsInput, SegmentUncheckedCreateWithoutActivityLogsInput>
    connectOrCreate?: SegmentCreateOrConnectWithoutActivityLogsInput
    upsert?: SegmentUpsertWithoutActivityLogsInput
    connect?: SegmentWhereUniqueInput
    update?: XOR<XOR<SegmentUpdateToOneWithWhereWithoutActivityLogsInput, SegmentUpdateWithoutActivityLogsInput>, SegmentUncheckedUpdateWithoutActivityLogsInput>
  }

  export type ProjectCreateNestedManyWithoutLanguagePairsInput = {
    create?: XOR<ProjectCreateWithoutLanguagePairsInput, ProjectUncheckedCreateWithoutLanguagePairsInput> | ProjectCreateWithoutLanguagePairsInput[] | ProjectUncheckedCreateWithoutLanguagePairsInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutLanguagePairsInput | ProjectCreateOrConnectWithoutLanguagePairsInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutLanguagePairsInput = {
    create?: XOR<ProjectCreateWithoutLanguagePairsInput, ProjectUncheckedCreateWithoutLanguagePairsInput> | ProjectCreateWithoutLanguagePairsInput[] | ProjectUncheckedCreateWithoutLanguagePairsInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutLanguagePairsInput | ProjectCreateOrConnectWithoutLanguagePairsInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type ProjectUpdateManyWithoutLanguagePairsNestedInput = {
    create?: XOR<ProjectCreateWithoutLanguagePairsInput, ProjectUncheckedCreateWithoutLanguagePairsInput> | ProjectCreateWithoutLanguagePairsInput[] | ProjectUncheckedCreateWithoutLanguagePairsInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutLanguagePairsInput | ProjectCreateOrConnectWithoutLanguagePairsInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutLanguagePairsInput | ProjectUpsertWithWhereUniqueWithoutLanguagePairsInput[]
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutLanguagePairsInput | ProjectUpdateWithWhereUniqueWithoutLanguagePairsInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutLanguagePairsInput | ProjectUpdateManyWithWhereWithoutLanguagePairsInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutLanguagePairsNestedInput = {
    create?: XOR<ProjectCreateWithoutLanguagePairsInput, ProjectUncheckedCreateWithoutLanguagePairsInput> | ProjectCreateWithoutLanguagePairsInput[] | ProjectUncheckedCreateWithoutLanguagePairsInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutLanguagePairsInput | ProjectCreateOrConnectWithoutLanguagePairsInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutLanguagePairsInput | ProjectUpsertWithWhereUniqueWithoutLanguagePairsInput[]
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutLanguagePairsInput | ProjectUpdateWithWhereUniqueWithoutLanguagePairsInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutLanguagePairsInput | ProjectUpdateManyWithWhereWithoutLanguagePairsInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type ProjectCreateNestedOneWithoutFileUploadsInput = {
    create?: XOR<ProjectCreateWithoutFileUploadsInput, ProjectUncheckedCreateWithoutFileUploadsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutFileUploadsInput
    connect?: ProjectWhereUniqueInput
  }

  export type ProjectUpdateOneRequiredWithoutFileUploadsNestedInput = {
    create?: XOR<ProjectCreateWithoutFileUploadsInput, ProjectUncheckedCreateWithoutFileUploadsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutFileUploadsInput
    upsert?: ProjectUpsertWithoutFileUploadsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutFileUploadsInput, ProjectUpdateWithoutFileUploadsInput>, ProjectUncheckedUpdateWithoutFileUploadsInput>
  }

  export type GlossaryEntryCreateNestedManyWithoutTagsInput = {
    create?: XOR<GlossaryEntryCreateWithoutTagsInput, GlossaryEntryUncheckedCreateWithoutTagsInput> | GlossaryEntryCreateWithoutTagsInput[] | GlossaryEntryUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: GlossaryEntryCreateOrConnectWithoutTagsInput | GlossaryEntryCreateOrConnectWithoutTagsInput[]
    connect?: GlossaryEntryWhereUniqueInput | GlossaryEntryWhereUniqueInput[]
  }

  export type SegmentCreateNestedManyWithoutTagsInput = {
    create?: XOR<SegmentCreateWithoutTagsInput, SegmentUncheckedCreateWithoutTagsInput> | SegmentCreateWithoutTagsInput[] | SegmentUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: SegmentCreateOrConnectWithoutTagsInput | SegmentCreateOrConnectWithoutTagsInput[]
    connect?: SegmentWhereUniqueInput | SegmentWhereUniqueInput[]
  }

  export type GlossaryEntryTagCreateNestedManyWithoutTagInput = {
    create?: XOR<GlossaryEntryTagCreateWithoutTagInput, GlossaryEntryTagUncheckedCreateWithoutTagInput> | GlossaryEntryTagCreateWithoutTagInput[] | GlossaryEntryTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: GlossaryEntryTagCreateOrConnectWithoutTagInput | GlossaryEntryTagCreateOrConnectWithoutTagInput[]
    createMany?: GlossaryEntryTagCreateManyTagInputEnvelope
    connect?: GlossaryEntryTagWhereUniqueInput | GlossaryEntryTagWhereUniqueInput[]
  }

  export type SegmentTagCreateNestedManyWithoutTagInput = {
    create?: XOR<SegmentTagCreateWithoutTagInput, SegmentTagUncheckedCreateWithoutTagInput> | SegmentTagCreateWithoutTagInput[] | SegmentTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: SegmentTagCreateOrConnectWithoutTagInput | SegmentTagCreateOrConnectWithoutTagInput[]
    createMany?: SegmentTagCreateManyTagInputEnvelope
    connect?: SegmentTagWhereUniqueInput | SegmentTagWhereUniqueInput[]
  }

  export type GlossaryEntryUncheckedCreateNestedManyWithoutTagsInput = {
    create?: XOR<GlossaryEntryCreateWithoutTagsInput, GlossaryEntryUncheckedCreateWithoutTagsInput> | GlossaryEntryCreateWithoutTagsInput[] | GlossaryEntryUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: GlossaryEntryCreateOrConnectWithoutTagsInput | GlossaryEntryCreateOrConnectWithoutTagsInput[]
    connect?: GlossaryEntryWhereUniqueInput | GlossaryEntryWhereUniqueInput[]
  }

  export type SegmentUncheckedCreateNestedManyWithoutTagsInput = {
    create?: XOR<SegmentCreateWithoutTagsInput, SegmentUncheckedCreateWithoutTagsInput> | SegmentCreateWithoutTagsInput[] | SegmentUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: SegmentCreateOrConnectWithoutTagsInput | SegmentCreateOrConnectWithoutTagsInput[]
    connect?: SegmentWhereUniqueInput | SegmentWhereUniqueInput[]
  }

  export type GlossaryEntryTagUncheckedCreateNestedManyWithoutTagInput = {
    create?: XOR<GlossaryEntryTagCreateWithoutTagInput, GlossaryEntryTagUncheckedCreateWithoutTagInput> | GlossaryEntryTagCreateWithoutTagInput[] | GlossaryEntryTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: GlossaryEntryTagCreateOrConnectWithoutTagInput | GlossaryEntryTagCreateOrConnectWithoutTagInput[]
    createMany?: GlossaryEntryTagCreateManyTagInputEnvelope
    connect?: GlossaryEntryTagWhereUniqueInput | GlossaryEntryTagWhereUniqueInput[]
  }

  export type SegmentTagUncheckedCreateNestedManyWithoutTagInput = {
    create?: XOR<SegmentTagCreateWithoutTagInput, SegmentTagUncheckedCreateWithoutTagInput> | SegmentTagCreateWithoutTagInput[] | SegmentTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: SegmentTagCreateOrConnectWithoutTagInput | SegmentTagCreateOrConnectWithoutTagInput[]
    createMany?: SegmentTagCreateManyTagInputEnvelope
    connect?: SegmentTagWhereUniqueInput | SegmentTagWhereUniqueInput[]
  }

  export type GlossaryEntryUpdateManyWithoutTagsNestedInput = {
    create?: XOR<GlossaryEntryCreateWithoutTagsInput, GlossaryEntryUncheckedCreateWithoutTagsInput> | GlossaryEntryCreateWithoutTagsInput[] | GlossaryEntryUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: GlossaryEntryCreateOrConnectWithoutTagsInput | GlossaryEntryCreateOrConnectWithoutTagsInput[]
    upsert?: GlossaryEntryUpsertWithWhereUniqueWithoutTagsInput | GlossaryEntryUpsertWithWhereUniqueWithoutTagsInput[]
    set?: GlossaryEntryWhereUniqueInput | GlossaryEntryWhereUniqueInput[]
    disconnect?: GlossaryEntryWhereUniqueInput | GlossaryEntryWhereUniqueInput[]
    delete?: GlossaryEntryWhereUniqueInput | GlossaryEntryWhereUniqueInput[]
    connect?: GlossaryEntryWhereUniqueInput | GlossaryEntryWhereUniqueInput[]
    update?: GlossaryEntryUpdateWithWhereUniqueWithoutTagsInput | GlossaryEntryUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: GlossaryEntryUpdateManyWithWhereWithoutTagsInput | GlossaryEntryUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: GlossaryEntryScalarWhereInput | GlossaryEntryScalarWhereInput[]
  }

  export type SegmentUpdateManyWithoutTagsNestedInput = {
    create?: XOR<SegmentCreateWithoutTagsInput, SegmentUncheckedCreateWithoutTagsInput> | SegmentCreateWithoutTagsInput[] | SegmentUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: SegmentCreateOrConnectWithoutTagsInput | SegmentCreateOrConnectWithoutTagsInput[]
    upsert?: SegmentUpsertWithWhereUniqueWithoutTagsInput | SegmentUpsertWithWhereUniqueWithoutTagsInput[]
    set?: SegmentWhereUniqueInput | SegmentWhereUniqueInput[]
    disconnect?: SegmentWhereUniqueInput | SegmentWhereUniqueInput[]
    delete?: SegmentWhereUniqueInput | SegmentWhereUniqueInput[]
    connect?: SegmentWhereUniqueInput | SegmentWhereUniqueInput[]
    update?: SegmentUpdateWithWhereUniqueWithoutTagsInput | SegmentUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: SegmentUpdateManyWithWhereWithoutTagsInput | SegmentUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: SegmentScalarWhereInput | SegmentScalarWhereInput[]
  }

  export type GlossaryEntryTagUpdateManyWithoutTagNestedInput = {
    create?: XOR<GlossaryEntryTagCreateWithoutTagInput, GlossaryEntryTagUncheckedCreateWithoutTagInput> | GlossaryEntryTagCreateWithoutTagInput[] | GlossaryEntryTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: GlossaryEntryTagCreateOrConnectWithoutTagInput | GlossaryEntryTagCreateOrConnectWithoutTagInput[]
    upsert?: GlossaryEntryTagUpsertWithWhereUniqueWithoutTagInput | GlossaryEntryTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: GlossaryEntryTagCreateManyTagInputEnvelope
    set?: GlossaryEntryTagWhereUniqueInput | GlossaryEntryTagWhereUniqueInput[]
    disconnect?: GlossaryEntryTagWhereUniqueInput | GlossaryEntryTagWhereUniqueInput[]
    delete?: GlossaryEntryTagWhereUniqueInput | GlossaryEntryTagWhereUniqueInput[]
    connect?: GlossaryEntryTagWhereUniqueInput | GlossaryEntryTagWhereUniqueInput[]
    update?: GlossaryEntryTagUpdateWithWhereUniqueWithoutTagInput | GlossaryEntryTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: GlossaryEntryTagUpdateManyWithWhereWithoutTagInput | GlossaryEntryTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: GlossaryEntryTagScalarWhereInput | GlossaryEntryTagScalarWhereInput[]
  }

  export type SegmentTagUpdateManyWithoutTagNestedInput = {
    create?: XOR<SegmentTagCreateWithoutTagInput, SegmentTagUncheckedCreateWithoutTagInput> | SegmentTagCreateWithoutTagInput[] | SegmentTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: SegmentTagCreateOrConnectWithoutTagInput | SegmentTagCreateOrConnectWithoutTagInput[]
    upsert?: SegmentTagUpsertWithWhereUniqueWithoutTagInput | SegmentTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: SegmentTagCreateManyTagInputEnvelope
    set?: SegmentTagWhereUniqueInput | SegmentTagWhereUniqueInput[]
    disconnect?: SegmentTagWhereUniqueInput | SegmentTagWhereUniqueInput[]
    delete?: SegmentTagWhereUniqueInput | SegmentTagWhereUniqueInput[]
    connect?: SegmentTagWhereUniqueInput | SegmentTagWhereUniqueInput[]
    update?: SegmentTagUpdateWithWhereUniqueWithoutTagInput | SegmentTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: SegmentTagUpdateManyWithWhereWithoutTagInput | SegmentTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: SegmentTagScalarWhereInput | SegmentTagScalarWhereInput[]
  }

  export type GlossaryEntryUncheckedUpdateManyWithoutTagsNestedInput = {
    create?: XOR<GlossaryEntryCreateWithoutTagsInput, GlossaryEntryUncheckedCreateWithoutTagsInput> | GlossaryEntryCreateWithoutTagsInput[] | GlossaryEntryUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: GlossaryEntryCreateOrConnectWithoutTagsInput | GlossaryEntryCreateOrConnectWithoutTagsInput[]
    upsert?: GlossaryEntryUpsertWithWhereUniqueWithoutTagsInput | GlossaryEntryUpsertWithWhereUniqueWithoutTagsInput[]
    set?: GlossaryEntryWhereUniqueInput | GlossaryEntryWhereUniqueInput[]
    disconnect?: GlossaryEntryWhereUniqueInput | GlossaryEntryWhereUniqueInput[]
    delete?: GlossaryEntryWhereUniqueInput | GlossaryEntryWhereUniqueInput[]
    connect?: GlossaryEntryWhereUniqueInput | GlossaryEntryWhereUniqueInput[]
    update?: GlossaryEntryUpdateWithWhereUniqueWithoutTagsInput | GlossaryEntryUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: GlossaryEntryUpdateManyWithWhereWithoutTagsInput | GlossaryEntryUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: GlossaryEntryScalarWhereInput | GlossaryEntryScalarWhereInput[]
  }

  export type SegmentUncheckedUpdateManyWithoutTagsNestedInput = {
    create?: XOR<SegmentCreateWithoutTagsInput, SegmentUncheckedCreateWithoutTagsInput> | SegmentCreateWithoutTagsInput[] | SegmentUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: SegmentCreateOrConnectWithoutTagsInput | SegmentCreateOrConnectWithoutTagsInput[]
    upsert?: SegmentUpsertWithWhereUniqueWithoutTagsInput | SegmentUpsertWithWhereUniqueWithoutTagsInput[]
    set?: SegmentWhereUniqueInput | SegmentWhereUniqueInput[]
    disconnect?: SegmentWhereUniqueInput | SegmentWhereUniqueInput[]
    delete?: SegmentWhereUniqueInput | SegmentWhereUniqueInput[]
    connect?: SegmentWhereUniqueInput | SegmentWhereUniqueInput[]
    update?: SegmentUpdateWithWhereUniqueWithoutTagsInput | SegmentUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: SegmentUpdateManyWithWhereWithoutTagsInput | SegmentUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: SegmentScalarWhereInput | SegmentScalarWhereInput[]
  }

  export type GlossaryEntryTagUncheckedUpdateManyWithoutTagNestedInput = {
    create?: XOR<GlossaryEntryTagCreateWithoutTagInput, GlossaryEntryTagUncheckedCreateWithoutTagInput> | GlossaryEntryTagCreateWithoutTagInput[] | GlossaryEntryTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: GlossaryEntryTagCreateOrConnectWithoutTagInput | GlossaryEntryTagCreateOrConnectWithoutTagInput[]
    upsert?: GlossaryEntryTagUpsertWithWhereUniqueWithoutTagInput | GlossaryEntryTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: GlossaryEntryTagCreateManyTagInputEnvelope
    set?: GlossaryEntryTagWhereUniqueInput | GlossaryEntryTagWhereUniqueInput[]
    disconnect?: GlossaryEntryTagWhereUniqueInput | GlossaryEntryTagWhereUniqueInput[]
    delete?: GlossaryEntryTagWhereUniqueInput | GlossaryEntryTagWhereUniqueInput[]
    connect?: GlossaryEntryTagWhereUniqueInput | GlossaryEntryTagWhereUniqueInput[]
    update?: GlossaryEntryTagUpdateWithWhereUniqueWithoutTagInput | GlossaryEntryTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: GlossaryEntryTagUpdateManyWithWhereWithoutTagInput | GlossaryEntryTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: GlossaryEntryTagScalarWhereInput | GlossaryEntryTagScalarWhereInput[]
  }

  export type SegmentTagUncheckedUpdateManyWithoutTagNestedInput = {
    create?: XOR<SegmentTagCreateWithoutTagInput, SegmentTagUncheckedCreateWithoutTagInput> | SegmentTagCreateWithoutTagInput[] | SegmentTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: SegmentTagCreateOrConnectWithoutTagInput | SegmentTagCreateOrConnectWithoutTagInput[]
    upsert?: SegmentTagUpsertWithWhereUniqueWithoutTagInput | SegmentTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: SegmentTagCreateManyTagInputEnvelope
    set?: SegmentTagWhereUniqueInput | SegmentTagWhereUniqueInput[]
    disconnect?: SegmentTagWhereUniqueInput | SegmentTagWhereUniqueInput[]
    delete?: SegmentTagWhereUniqueInput | SegmentTagWhereUniqueInput[]
    connect?: SegmentTagWhereUniqueInput | SegmentTagWhereUniqueInput[]
    update?: SegmentTagUpdateWithWhereUniqueWithoutTagInput | SegmentTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: SegmentTagUpdateManyWithWhereWithoutTagInput | SegmentTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: SegmentTagScalarWhereInput | SegmentTagScalarWhereInput[]
  }

  export type GlossaryEntryCreateNestedOneWithoutGlossaryEntryTagsInput = {
    create?: XOR<GlossaryEntryCreateWithoutGlossaryEntryTagsInput, GlossaryEntryUncheckedCreateWithoutGlossaryEntryTagsInput>
    connectOrCreate?: GlossaryEntryCreateOrConnectWithoutGlossaryEntryTagsInput
    connect?: GlossaryEntryWhereUniqueInput
  }

  export type TagCreateNestedOneWithoutGlossaryEntryTagsInput = {
    create?: XOR<TagCreateWithoutGlossaryEntryTagsInput, TagUncheckedCreateWithoutGlossaryEntryTagsInput>
    connectOrCreate?: TagCreateOrConnectWithoutGlossaryEntryTagsInput
    connect?: TagWhereUniqueInput
  }

  export type GlossaryEntryUpdateOneRequiredWithoutGlossaryEntryTagsNestedInput = {
    create?: XOR<GlossaryEntryCreateWithoutGlossaryEntryTagsInput, GlossaryEntryUncheckedCreateWithoutGlossaryEntryTagsInput>
    connectOrCreate?: GlossaryEntryCreateOrConnectWithoutGlossaryEntryTagsInput
    upsert?: GlossaryEntryUpsertWithoutGlossaryEntryTagsInput
    connect?: GlossaryEntryWhereUniqueInput
    update?: XOR<XOR<GlossaryEntryUpdateToOneWithWhereWithoutGlossaryEntryTagsInput, GlossaryEntryUpdateWithoutGlossaryEntryTagsInput>, GlossaryEntryUncheckedUpdateWithoutGlossaryEntryTagsInput>
  }

  export type TagUpdateOneRequiredWithoutGlossaryEntryTagsNestedInput = {
    create?: XOR<TagCreateWithoutGlossaryEntryTagsInput, TagUncheckedCreateWithoutGlossaryEntryTagsInput>
    connectOrCreate?: TagCreateOrConnectWithoutGlossaryEntryTagsInput
    upsert?: TagUpsertWithoutGlossaryEntryTagsInput
    connect?: TagWhereUniqueInput
    update?: XOR<XOR<TagUpdateToOneWithWhereWithoutGlossaryEntryTagsInput, TagUpdateWithoutGlossaryEntryTagsInput>, TagUncheckedUpdateWithoutGlossaryEntryTagsInput>
  }

  export type SegmentCreateNestedOneWithoutSegmentTagsInput = {
    create?: XOR<SegmentCreateWithoutSegmentTagsInput, SegmentUncheckedCreateWithoutSegmentTagsInput>
    connectOrCreate?: SegmentCreateOrConnectWithoutSegmentTagsInput
    connect?: SegmentWhereUniqueInput
  }

  export type TagCreateNestedOneWithoutSegmentTagsInput = {
    create?: XOR<TagCreateWithoutSegmentTagsInput, TagUncheckedCreateWithoutSegmentTagsInput>
    connectOrCreate?: TagCreateOrConnectWithoutSegmentTagsInput
    connect?: TagWhereUniqueInput
  }

  export type SegmentUpdateOneRequiredWithoutSegmentTagsNestedInput = {
    create?: XOR<SegmentCreateWithoutSegmentTagsInput, SegmentUncheckedCreateWithoutSegmentTagsInput>
    connectOrCreate?: SegmentCreateOrConnectWithoutSegmentTagsInput
    upsert?: SegmentUpsertWithoutSegmentTagsInput
    connect?: SegmentWhereUniqueInput
    update?: XOR<XOR<SegmentUpdateToOneWithWhereWithoutSegmentTagsInput, SegmentUpdateWithoutSegmentTagsInput>, SegmentUncheckedUpdateWithoutSegmentTagsInput>
  }

  export type TagUpdateOneRequiredWithoutSegmentTagsNestedInput = {
    create?: XOR<TagCreateWithoutSegmentTagsInput, TagUncheckedCreateWithoutSegmentTagsInput>
    connectOrCreate?: TagCreateOrConnectWithoutSegmentTagsInput
    upsert?: TagUpsertWithoutSegmentTagsInput
    connect?: TagWhereUniqueInput
    update?: XOR<XOR<TagUpdateToOneWithWhereWithoutSegmentTagsInput, TagUpdateWithoutSegmentTagsInput>, TagUncheckedUpdateWithoutSegmentTagsInput>
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
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

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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

  export type NestedEnumSegmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SegmentStatus | EnumSegmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SegmentStatus[] | ListEnumSegmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SegmentStatus[] | ListEnumSegmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSegmentStatusFilter<$PrismaModel> | $Enums.SegmentStatus
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumSegmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SegmentStatus | EnumSegmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SegmentStatus[] | ListEnumSegmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SegmentStatus[] | ListEnumSegmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSegmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.SegmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSegmentStatusFilter<$PrismaModel>
    _max?: NestedEnumSegmentStatusFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProjectCreateWithoutOwnerInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    segments?: SegmentCreateNestedManyWithoutProjectInput
    tms?: TranslationMemoryCreateNestedManyWithoutProjectInput
    glossaries?: GlossaryEntryCreateNestedManyWithoutProjectInput
    languagePairs?: LanguagePairCreateNestedManyWithoutProjectsInput
    fileUploads?: FileUploadCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutOwnerInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    segments?: SegmentUncheckedCreateNestedManyWithoutProjectInput
    tms?: TranslationMemoryUncheckedCreateNestedManyWithoutProjectInput
    glossaries?: GlossaryEntryUncheckedCreateNestedManyWithoutProjectInput
    languagePairs?: LanguagePairUncheckedCreateNestedManyWithoutProjectsInput
    fileUploads?: FileUploadUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutOwnerInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutOwnerInput, ProjectUncheckedCreateWithoutOwnerInput>
  }

  export type ProjectCreateManyOwnerInputEnvelope = {
    data: ProjectCreateManyOwnerInput | ProjectCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type CommentCreateWithoutAuthorInput = {
    id?: string
    content: string
    createdAt?: Date | string
    segment: SegmentCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutAuthorInput = {
    id?: string
    content: string
    createdAt?: Date | string
    segmentId: string
  }

  export type CommentCreateOrConnectWithoutAuthorInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput>
  }

  export type CommentCreateManyAuthorInputEnvelope = {
    data: CommentCreateManyAuthorInput | CommentCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type ActivityLogCreateWithoutUserInput = {
    id?: string
    action: string
    detail?: string | null
    createdAt?: Date | string
    segment: SegmentCreateNestedOneWithoutActivityLogsInput
  }

  export type ActivityLogUncheckedCreateWithoutUserInput = {
    id?: string
    action: string
    detail?: string | null
    createdAt?: Date | string
    segmentId: string
  }

  export type ActivityLogCreateOrConnectWithoutUserInput = {
    where: ActivityLogWhereUniqueInput
    create: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput>
  }

  export type ActivityLogCreateManyUserInputEnvelope = {
    data: ActivityLogCreateManyUserInput | ActivityLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
  }

  export type ProjectUpsertWithWhereUniqueWithoutOwnerInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutOwnerInput, ProjectUncheckedUpdateWithoutOwnerInput>
    create: XOR<ProjectCreateWithoutOwnerInput, ProjectUncheckedCreateWithoutOwnerInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutOwnerInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutOwnerInput, ProjectUncheckedUpdateWithoutOwnerInput>
  }

  export type ProjectUpdateManyWithWhereWithoutOwnerInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutOwnerInput>
  }

  export type ProjectScalarWhereInput = {
    AND?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    OR?: ProjectScalarWhereInput[]
    NOT?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    id?: StringFilter<"Project"> | string
    name?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    ownerId?: StringFilter<"Project"> | string
  }

  export type CommentUpsertWithWhereUniqueWithoutAuthorInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutAuthorInput, CommentUncheckedUpdateWithoutAuthorInput>
    create: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutAuthorInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutAuthorInput, CommentUncheckedUpdateWithoutAuthorInput>
  }

  export type CommentUpdateManyWithWhereWithoutAuthorInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutAuthorInput>
  }

  export type CommentScalarWhereInput = {
    AND?: CommentScalarWhereInput | CommentScalarWhereInput[]
    OR?: CommentScalarWhereInput[]
    NOT?: CommentScalarWhereInput | CommentScalarWhereInput[]
    id?: StringFilter<"Comment"> | string
    content?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    authorId?: StringFilter<"Comment"> | string
    segmentId?: StringFilter<"Comment"> | string
  }

  export type ActivityLogUpsertWithWhereUniqueWithoutUserInput = {
    where: ActivityLogWhereUniqueInput
    update: XOR<ActivityLogUpdateWithoutUserInput, ActivityLogUncheckedUpdateWithoutUserInput>
    create: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput>
  }

  export type ActivityLogUpdateWithWhereUniqueWithoutUserInput = {
    where: ActivityLogWhereUniqueInput
    data: XOR<ActivityLogUpdateWithoutUserInput, ActivityLogUncheckedUpdateWithoutUserInput>
  }

  export type ActivityLogUpdateManyWithWhereWithoutUserInput = {
    where: ActivityLogScalarWhereInput
    data: XOR<ActivityLogUpdateManyMutationInput, ActivityLogUncheckedUpdateManyWithoutUserInput>
  }

  export type ActivityLogScalarWhereInput = {
    AND?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
    OR?: ActivityLogScalarWhereInput[]
    NOT?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
    id?: StringFilter<"ActivityLog"> | string
    action?: StringFilter<"ActivityLog"> | string
    detail?: StringNullableFilter<"ActivityLog"> | string | null
    createdAt?: DateTimeFilter<"ActivityLog"> | Date | string
    userId?: StringFilter<"ActivityLog"> | string
    segmentId?: StringFilter<"ActivityLog"> | string
  }

  export type UserCreateWithoutProjectsInput = {
    id?: string
    email?: string | null
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
    activityLogs?: ActivityLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProjectsInput = {
    id?: string
    email?: string | null
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProjectsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
  }

  export type SegmentCreateWithoutProjectInput = {
    id?: string
    index: number
    sourceText: string
    targetText?: string | null
    status?: $Enums.SegmentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentCreateNestedManyWithoutSegmentInput
    activityLogs?: ActivityLogCreateNestedManyWithoutSegmentInput
    tags?: TagCreateNestedManyWithoutSegmentsInput
    segmentTags?: SegmentTagCreateNestedManyWithoutSegmentInput
  }

  export type SegmentUncheckedCreateWithoutProjectInput = {
    id?: string
    index: number
    sourceText: string
    targetText?: string | null
    status?: $Enums.SegmentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutSegmentInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutSegmentInput
    tags?: TagUncheckedCreateNestedManyWithoutSegmentsInput
    segmentTags?: SegmentTagUncheckedCreateNestedManyWithoutSegmentInput
  }

  export type SegmentCreateOrConnectWithoutProjectInput = {
    where: SegmentWhereUniqueInput
    create: XOR<SegmentCreateWithoutProjectInput, SegmentUncheckedCreateWithoutProjectInput>
  }

  export type SegmentCreateManyProjectInputEnvelope = {
    data: SegmentCreateManyProjectInput | SegmentCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type TranslationMemoryCreateWithoutProjectInput = {
    id?: string
    sourceText: string
    targetText: string
    langPair: string
    score?: number
    createdAt?: Date | string
  }

  export type TranslationMemoryUncheckedCreateWithoutProjectInput = {
    id?: string
    sourceText: string
    targetText: string
    langPair: string
    score?: number
    createdAt?: Date | string
  }

  export type TranslationMemoryCreateOrConnectWithoutProjectInput = {
    where: TranslationMemoryWhereUniqueInput
    create: XOR<TranslationMemoryCreateWithoutProjectInput, TranslationMemoryUncheckedCreateWithoutProjectInput>
  }

  export type TranslationMemoryCreateManyProjectInputEnvelope = {
    data: TranslationMemoryCreateManyProjectInput | TranslationMemoryCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type GlossaryEntryCreateWithoutProjectInput = {
    id?: string
    term: string
    definition?: string | null
    sourceLang: string
    targetLang: string
    translation?: string | null
    createdAt?: Date | string
    tags?: TagCreateNestedManyWithoutGlossaryEntriesInput
    glossaryEntryTags?: GlossaryEntryTagCreateNestedManyWithoutGlossaryEntryInput
  }

  export type GlossaryEntryUncheckedCreateWithoutProjectInput = {
    id?: string
    term: string
    definition?: string | null
    sourceLang: string
    targetLang: string
    translation?: string | null
    createdAt?: Date | string
    tags?: TagUncheckedCreateNestedManyWithoutGlossaryEntriesInput
    glossaryEntryTags?: GlossaryEntryTagUncheckedCreateNestedManyWithoutGlossaryEntryInput
  }

  export type GlossaryEntryCreateOrConnectWithoutProjectInput = {
    where: GlossaryEntryWhereUniqueInput
    create: XOR<GlossaryEntryCreateWithoutProjectInput, GlossaryEntryUncheckedCreateWithoutProjectInput>
  }

  export type GlossaryEntryCreateManyProjectInputEnvelope = {
    data: GlossaryEntryCreateManyProjectInput | GlossaryEntryCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type LanguagePairCreateWithoutProjectsInput = {
    id?: string
    sourceLang: string
    targetLang: string
    createdAt?: Date | string
  }

  export type LanguagePairUncheckedCreateWithoutProjectsInput = {
    id?: string
    sourceLang: string
    targetLang: string
    createdAt?: Date | string
  }

  export type LanguagePairCreateOrConnectWithoutProjectsInput = {
    where: LanguagePairWhereUniqueInput
    create: XOR<LanguagePairCreateWithoutProjectsInput, LanguagePairUncheckedCreateWithoutProjectsInput>
  }

  export type FileUploadCreateWithoutProjectInput = {
    id?: string
    filename: string
    fileType: string
    url: string
    uploadedAt?: Date | string
  }

  export type FileUploadUncheckedCreateWithoutProjectInput = {
    id?: string
    filename: string
    fileType: string
    url: string
    uploadedAt?: Date | string
  }

  export type FileUploadCreateOrConnectWithoutProjectInput = {
    where: FileUploadWhereUniqueInput
    create: XOR<FileUploadCreateWithoutProjectInput, FileUploadUncheckedCreateWithoutProjectInput>
  }

  export type FileUploadCreateManyProjectInputEnvelope = {
    data: FileUploadCreateManyProjectInput | FileUploadCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutProjectsInput = {
    update: XOR<UserUpdateWithoutProjectsInput, UserUncheckedUpdateWithoutProjectsInput>
    create: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProjectsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProjectsInput, UserUncheckedUpdateWithoutProjectsInput>
  }

  export type UserUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutAuthorNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SegmentUpsertWithWhereUniqueWithoutProjectInput = {
    where: SegmentWhereUniqueInput
    update: XOR<SegmentUpdateWithoutProjectInput, SegmentUncheckedUpdateWithoutProjectInput>
    create: XOR<SegmentCreateWithoutProjectInput, SegmentUncheckedCreateWithoutProjectInput>
  }

  export type SegmentUpdateWithWhereUniqueWithoutProjectInput = {
    where: SegmentWhereUniqueInput
    data: XOR<SegmentUpdateWithoutProjectInput, SegmentUncheckedUpdateWithoutProjectInput>
  }

  export type SegmentUpdateManyWithWhereWithoutProjectInput = {
    where: SegmentScalarWhereInput
    data: XOR<SegmentUpdateManyMutationInput, SegmentUncheckedUpdateManyWithoutProjectInput>
  }

  export type SegmentScalarWhereInput = {
    AND?: SegmentScalarWhereInput | SegmentScalarWhereInput[]
    OR?: SegmentScalarWhereInput[]
    NOT?: SegmentScalarWhereInput | SegmentScalarWhereInput[]
    id?: StringFilter<"Segment"> | string
    index?: IntFilter<"Segment"> | number
    sourceText?: StringFilter<"Segment"> | string
    targetText?: StringNullableFilter<"Segment"> | string | null
    status?: EnumSegmentStatusFilter<"Segment"> | $Enums.SegmentStatus
    createdAt?: DateTimeFilter<"Segment"> | Date | string
    updatedAt?: DateTimeFilter<"Segment"> | Date | string
    projectId?: StringFilter<"Segment"> | string
  }

  export type TranslationMemoryUpsertWithWhereUniqueWithoutProjectInput = {
    where: TranslationMemoryWhereUniqueInput
    update: XOR<TranslationMemoryUpdateWithoutProjectInput, TranslationMemoryUncheckedUpdateWithoutProjectInput>
    create: XOR<TranslationMemoryCreateWithoutProjectInput, TranslationMemoryUncheckedCreateWithoutProjectInput>
  }

  export type TranslationMemoryUpdateWithWhereUniqueWithoutProjectInput = {
    where: TranslationMemoryWhereUniqueInput
    data: XOR<TranslationMemoryUpdateWithoutProjectInput, TranslationMemoryUncheckedUpdateWithoutProjectInput>
  }

  export type TranslationMemoryUpdateManyWithWhereWithoutProjectInput = {
    where: TranslationMemoryScalarWhereInput
    data: XOR<TranslationMemoryUpdateManyMutationInput, TranslationMemoryUncheckedUpdateManyWithoutProjectInput>
  }

  export type TranslationMemoryScalarWhereInput = {
    AND?: TranslationMemoryScalarWhereInput | TranslationMemoryScalarWhereInput[]
    OR?: TranslationMemoryScalarWhereInput[]
    NOT?: TranslationMemoryScalarWhereInput | TranslationMemoryScalarWhereInput[]
    id?: StringFilter<"TranslationMemory"> | string
    sourceText?: StringFilter<"TranslationMemory"> | string
    targetText?: StringFilter<"TranslationMemory"> | string
    langPair?: StringFilter<"TranslationMemory"> | string
    score?: IntFilter<"TranslationMemory"> | number
    createdAt?: DateTimeFilter<"TranslationMemory"> | Date | string
    projectId?: StringFilter<"TranslationMemory"> | string
  }

  export type GlossaryEntryUpsertWithWhereUniqueWithoutProjectInput = {
    where: GlossaryEntryWhereUniqueInput
    update: XOR<GlossaryEntryUpdateWithoutProjectInput, GlossaryEntryUncheckedUpdateWithoutProjectInput>
    create: XOR<GlossaryEntryCreateWithoutProjectInput, GlossaryEntryUncheckedCreateWithoutProjectInput>
  }

  export type GlossaryEntryUpdateWithWhereUniqueWithoutProjectInput = {
    where: GlossaryEntryWhereUniqueInput
    data: XOR<GlossaryEntryUpdateWithoutProjectInput, GlossaryEntryUncheckedUpdateWithoutProjectInput>
  }

  export type GlossaryEntryUpdateManyWithWhereWithoutProjectInput = {
    where: GlossaryEntryScalarWhereInput
    data: XOR<GlossaryEntryUpdateManyMutationInput, GlossaryEntryUncheckedUpdateManyWithoutProjectInput>
  }

  export type GlossaryEntryScalarWhereInput = {
    AND?: GlossaryEntryScalarWhereInput | GlossaryEntryScalarWhereInput[]
    OR?: GlossaryEntryScalarWhereInput[]
    NOT?: GlossaryEntryScalarWhereInput | GlossaryEntryScalarWhereInput[]
    id?: StringFilter<"GlossaryEntry"> | string
    term?: StringFilter<"GlossaryEntry"> | string
    definition?: StringNullableFilter<"GlossaryEntry"> | string | null
    sourceLang?: StringFilter<"GlossaryEntry"> | string
    targetLang?: StringFilter<"GlossaryEntry"> | string
    translation?: StringNullableFilter<"GlossaryEntry"> | string | null
    createdAt?: DateTimeFilter<"GlossaryEntry"> | Date | string
    projectId?: StringFilter<"GlossaryEntry"> | string
  }

  export type LanguagePairUpsertWithWhereUniqueWithoutProjectsInput = {
    where: LanguagePairWhereUniqueInput
    update: XOR<LanguagePairUpdateWithoutProjectsInput, LanguagePairUncheckedUpdateWithoutProjectsInput>
    create: XOR<LanguagePairCreateWithoutProjectsInput, LanguagePairUncheckedCreateWithoutProjectsInput>
  }

  export type LanguagePairUpdateWithWhereUniqueWithoutProjectsInput = {
    where: LanguagePairWhereUniqueInput
    data: XOR<LanguagePairUpdateWithoutProjectsInput, LanguagePairUncheckedUpdateWithoutProjectsInput>
  }

  export type LanguagePairUpdateManyWithWhereWithoutProjectsInput = {
    where: LanguagePairScalarWhereInput
    data: XOR<LanguagePairUpdateManyMutationInput, LanguagePairUncheckedUpdateManyWithoutProjectsInput>
  }

  export type LanguagePairScalarWhereInput = {
    AND?: LanguagePairScalarWhereInput | LanguagePairScalarWhereInput[]
    OR?: LanguagePairScalarWhereInput[]
    NOT?: LanguagePairScalarWhereInput | LanguagePairScalarWhereInput[]
    id?: StringFilter<"LanguagePair"> | string
    sourceLang?: StringFilter<"LanguagePair"> | string
    targetLang?: StringFilter<"LanguagePair"> | string
    createdAt?: DateTimeFilter<"LanguagePair"> | Date | string
  }

  export type FileUploadUpsertWithWhereUniqueWithoutProjectInput = {
    where: FileUploadWhereUniqueInput
    update: XOR<FileUploadUpdateWithoutProjectInput, FileUploadUncheckedUpdateWithoutProjectInput>
    create: XOR<FileUploadCreateWithoutProjectInput, FileUploadUncheckedCreateWithoutProjectInput>
  }

  export type FileUploadUpdateWithWhereUniqueWithoutProjectInput = {
    where: FileUploadWhereUniqueInput
    data: XOR<FileUploadUpdateWithoutProjectInput, FileUploadUncheckedUpdateWithoutProjectInput>
  }

  export type FileUploadUpdateManyWithWhereWithoutProjectInput = {
    where: FileUploadScalarWhereInput
    data: XOR<FileUploadUpdateManyMutationInput, FileUploadUncheckedUpdateManyWithoutProjectInput>
  }

  export type FileUploadScalarWhereInput = {
    AND?: FileUploadScalarWhereInput | FileUploadScalarWhereInput[]
    OR?: FileUploadScalarWhereInput[]
    NOT?: FileUploadScalarWhereInput | FileUploadScalarWhereInput[]
    id?: StringFilter<"FileUpload"> | string
    filename?: StringFilter<"FileUpload"> | string
    fileType?: StringFilter<"FileUpload"> | string
    url?: StringFilter<"FileUpload"> | string
    uploadedAt?: DateTimeFilter<"FileUpload"> | Date | string
    projectId?: StringFilter<"FileUpload"> | string
  }

  export type ProjectCreateWithoutSegmentsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutProjectsInput
    tms?: TranslationMemoryCreateNestedManyWithoutProjectInput
    glossaries?: GlossaryEntryCreateNestedManyWithoutProjectInput
    languagePairs?: LanguagePairCreateNestedManyWithoutProjectsInput
    fileUploads?: FileUploadCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutSegmentsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId: string
    tms?: TranslationMemoryUncheckedCreateNestedManyWithoutProjectInput
    glossaries?: GlossaryEntryUncheckedCreateNestedManyWithoutProjectInput
    languagePairs?: LanguagePairUncheckedCreateNestedManyWithoutProjectsInput
    fileUploads?: FileUploadUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutSegmentsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutSegmentsInput, ProjectUncheckedCreateWithoutSegmentsInput>
  }

  export type CommentCreateWithoutSegmentInput = {
    id?: string
    content: string
    createdAt?: Date | string
    author: UserCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutSegmentInput = {
    id?: string
    content: string
    createdAt?: Date | string
    authorId: string
  }

  export type CommentCreateOrConnectWithoutSegmentInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutSegmentInput, CommentUncheckedCreateWithoutSegmentInput>
  }

  export type CommentCreateManySegmentInputEnvelope = {
    data: CommentCreateManySegmentInput | CommentCreateManySegmentInput[]
    skipDuplicates?: boolean
  }

  export type ActivityLogCreateWithoutSegmentInput = {
    id?: string
    action: string
    detail?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutActivityLogsInput
  }

  export type ActivityLogUncheckedCreateWithoutSegmentInput = {
    id?: string
    action: string
    detail?: string | null
    createdAt?: Date | string
    userId: string
  }

  export type ActivityLogCreateOrConnectWithoutSegmentInput = {
    where: ActivityLogWhereUniqueInput
    create: XOR<ActivityLogCreateWithoutSegmentInput, ActivityLogUncheckedCreateWithoutSegmentInput>
  }

  export type ActivityLogCreateManySegmentInputEnvelope = {
    data: ActivityLogCreateManySegmentInput | ActivityLogCreateManySegmentInput[]
    skipDuplicates?: boolean
  }

  export type TagCreateWithoutSegmentsInput = {
    id?: string
    name: string
    glossaryEntries?: GlossaryEntryCreateNestedManyWithoutTagsInput
    glossaryEntryTags?: GlossaryEntryTagCreateNestedManyWithoutTagInput
    segmentTags?: SegmentTagCreateNestedManyWithoutTagInput
  }

  export type TagUncheckedCreateWithoutSegmentsInput = {
    id?: string
    name: string
    glossaryEntries?: GlossaryEntryUncheckedCreateNestedManyWithoutTagsInput
    glossaryEntryTags?: GlossaryEntryTagUncheckedCreateNestedManyWithoutTagInput
    segmentTags?: SegmentTagUncheckedCreateNestedManyWithoutTagInput
  }

  export type TagCreateOrConnectWithoutSegmentsInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutSegmentsInput, TagUncheckedCreateWithoutSegmentsInput>
  }

  export type SegmentTagCreateWithoutSegmentInput = {
    id?: string
    tag: TagCreateNestedOneWithoutSegmentTagsInput
  }

  export type SegmentTagUncheckedCreateWithoutSegmentInput = {
    id?: string
    tagId: string
  }

  export type SegmentTagCreateOrConnectWithoutSegmentInput = {
    where: SegmentTagWhereUniqueInput
    create: XOR<SegmentTagCreateWithoutSegmentInput, SegmentTagUncheckedCreateWithoutSegmentInput>
  }

  export type SegmentTagCreateManySegmentInputEnvelope = {
    data: SegmentTagCreateManySegmentInput | SegmentTagCreateManySegmentInput[]
    skipDuplicates?: boolean
  }

  export type ProjectUpsertWithoutSegmentsInput = {
    update: XOR<ProjectUpdateWithoutSegmentsInput, ProjectUncheckedUpdateWithoutSegmentsInput>
    create: XOR<ProjectCreateWithoutSegmentsInput, ProjectUncheckedCreateWithoutSegmentsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutSegmentsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutSegmentsInput, ProjectUncheckedUpdateWithoutSegmentsInput>
  }

  export type ProjectUpdateWithoutSegmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutProjectsNestedInput
    tms?: TranslationMemoryUpdateManyWithoutProjectNestedInput
    glossaries?: GlossaryEntryUpdateManyWithoutProjectNestedInput
    languagePairs?: LanguagePairUpdateManyWithoutProjectsNestedInput
    fileUploads?: FileUploadUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutSegmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: StringFieldUpdateOperationsInput | string
    tms?: TranslationMemoryUncheckedUpdateManyWithoutProjectNestedInput
    glossaries?: GlossaryEntryUncheckedUpdateManyWithoutProjectNestedInput
    languagePairs?: LanguagePairUncheckedUpdateManyWithoutProjectsNestedInput
    fileUploads?: FileUploadUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type CommentUpsertWithWhereUniqueWithoutSegmentInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutSegmentInput, CommentUncheckedUpdateWithoutSegmentInput>
    create: XOR<CommentCreateWithoutSegmentInput, CommentUncheckedCreateWithoutSegmentInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutSegmentInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutSegmentInput, CommentUncheckedUpdateWithoutSegmentInput>
  }

  export type CommentUpdateManyWithWhereWithoutSegmentInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutSegmentInput>
  }

  export type ActivityLogUpsertWithWhereUniqueWithoutSegmentInput = {
    where: ActivityLogWhereUniqueInput
    update: XOR<ActivityLogUpdateWithoutSegmentInput, ActivityLogUncheckedUpdateWithoutSegmentInput>
    create: XOR<ActivityLogCreateWithoutSegmentInput, ActivityLogUncheckedCreateWithoutSegmentInput>
  }

  export type ActivityLogUpdateWithWhereUniqueWithoutSegmentInput = {
    where: ActivityLogWhereUniqueInput
    data: XOR<ActivityLogUpdateWithoutSegmentInput, ActivityLogUncheckedUpdateWithoutSegmentInput>
  }

  export type ActivityLogUpdateManyWithWhereWithoutSegmentInput = {
    where: ActivityLogScalarWhereInput
    data: XOR<ActivityLogUpdateManyMutationInput, ActivityLogUncheckedUpdateManyWithoutSegmentInput>
  }

  export type TagUpsertWithWhereUniqueWithoutSegmentsInput = {
    where: TagWhereUniqueInput
    update: XOR<TagUpdateWithoutSegmentsInput, TagUncheckedUpdateWithoutSegmentsInput>
    create: XOR<TagCreateWithoutSegmentsInput, TagUncheckedCreateWithoutSegmentsInput>
  }

  export type TagUpdateWithWhereUniqueWithoutSegmentsInput = {
    where: TagWhereUniqueInput
    data: XOR<TagUpdateWithoutSegmentsInput, TagUncheckedUpdateWithoutSegmentsInput>
  }

  export type TagUpdateManyWithWhereWithoutSegmentsInput = {
    where: TagScalarWhereInput
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyWithoutSegmentsInput>
  }

  export type TagScalarWhereInput = {
    AND?: TagScalarWhereInput | TagScalarWhereInput[]
    OR?: TagScalarWhereInput[]
    NOT?: TagScalarWhereInput | TagScalarWhereInput[]
    id?: StringFilter<"Tag"> | string
    name?: StringFilter<"Tag"> | string
  }

  export type SegmentTagUpsertWithWhereUniqueWithoutSegmentInput = {
    where: SegmentTagWhereUniqueInput
    update: XOR<SegmentTagUpdateWithoutSegmentInput, SegmentTagUncheckedUpdateWithoutSegmentInput>
    create: XOR<SegmentTagCreateWithoutSegmentInput, SegmentTagUncheckedCreateWithoutSegmentInput>
  }

  export type SegmentTagUpdateWithWhereUniqueWithoutSegmentInput = {
    where: SegmentTagWhereUniqueInput
    data: XOR<SegmentTagUpdateWithoutSegmentInput, SegmentTagUncheckedUpdateWithoutSegmentInput>
  }

  export type SegmentTagUpdateManyWithWhereWithoutSegmentInput = {
    where: SegmentTagScalarWhereInput
    data: XOR<SegmentTagUpdateManyMutationInput, SegmentTagUncheckedUpdateManyWithoutSegmentInput>
  }

  export type SegmentTagScalarWhereInput = {
    AND?: SegmentTagScalarWhereInput | SegmentTagScalarWhereInput[]
    OR?: SegmentTagScalarWhereInput[]
    NOT?: SegmentTagScalarWhereInput | SegmentTagScalarWhereInput[]
    id?: StringFilter<"SegmentTag"> | string
    segmentId?: StringFilter<"SegmentTag"> | string
    tagId?: StringFilter<"SegmentTag"> | string
  }

  export type ProjectCreateWithoutTmsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutProjectsInput
    segments?: SegmentCreateNestedManyWithoutProjectInput
    glossaries?: GlossaryEntryCreateNestedManyWithoutProjectInput
    languagePairs?: LanguagePairCreateNestedManyWithoutProjectsInput
    fileUploads?: FileUploadCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutTmsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId: string
    segments?: SegmentUncheckedCreateNestedManyWithoutProjectInput
    glossaries?: GlossaryEntryUncheckedCreateNestedManyWithoutProjectInput
    languagePairs?: LanguagePairUncheckedCreateNestedManyWithoutProjectsInput
    fileUploads?: FileUploadUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutTmsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutTmsInput, ProjectUncheckedCreateWithoutTmsInput>
  }

  export type ProjectUpsertWithoutTmsInput = {
    update: XOR<ProjectUpdateWithoutTmsInput, ProjectUncheckedUpdateWithoutTmsInput>
    create: XOR<ProjectCreateWithoutTmsInput, ProjectUncheckedCreateWithoutTmsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutTmsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutTmsInput, ProjectUncheckedUpdateWithoutTmsInput>
  }

  export type ProjectUpdateWithoutTmsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutProjectsNestedInput
    segments?: SegmentUpdateManyWithoutProjectNestedInput
    glossaries?: GlossaryEntryUpdateManyWithoutProjectNestedInput
    languagePairs?: LanguagePairUpdateManyWithoutProjectsNestedInput
    fileUploads?: FileUploadUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutTmsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: StringFieldUpdateOperationsInput | string
    segments?: SegmentUncheckedUpdateManyWithoutProjectNestedInput
    glossaries?: GlossaryEntryUncheckedUpdateManyWithoutProjectNestedInput
    languagePairs?: LanguagePairUncheckedUpdateManyWithoutProjectsNestedInput
    fileUploads?: FileUploadUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateWithoutGlossariesInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutProjectsInput
    segments?: SegmentCreateNestedManyWithoutProjectInput
    tms?: TranslationMemoryCreateNestedManyWithoutProjectInput
    languagePairs?: LanguagePairCreateNestedManyWithoutProjectsInput
    fileUploads?: FileUploadCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutGlossariesInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId: string
    segments?: SegmentUncheckedCreateNestedManyWithoutProjectInput
    tms?: TranslationMemoryUncheckedCreateNestedManyWithoutProjectInput
    languagePairs?: LanguagePairUncheckedCreateNestedManyWithoutProjectsInput
    fileUploads?: FileUploadUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutGlossariesInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutGlossariesInput, ProjectUncheckedCreateWithoutGlossariesInput>
  }

  export type TagCreateWithoutGlossaryEntriesInput = {
    id?: string
    name: string
    segments?: SegmentCreateNestedManyWithoutTagsInput
    glossaryEntryTags?: GlossaryEntryTagCreateNestedManyWithoutTagInput
    segmentTags?: SegmentTagCreateNestedManyWithoutTagInput
  }

  export type TagUncheckedCreateWithoutGlossaryEntriesInput = {
    id?: string
    name: string
    segments?: SegmentUncheckedCreateNestedManyWithoutTagsInput
    glossaryEntryTags?: GlossaryEntryTagUncheckedCreateNestedManyWithoutTagInput
    segmentTags?: SegmentTagUncheckedCreateNestedManyWithoutTagInput
  }

  export type TagCreateOrConnectWithoutGlossaryEntriesInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutGlossaryEntriesInput, TagUncheckedCreateWithoutGlossaryEntriesInput>
  }

  export type GlossaryEntryTagCreateWithoutGlossaryEntryInput = {
    id?: string
    tag: TagCreateNestedOneWithoutGlossaryEntryTagsInput
  }

  export type GlossaryEntryTagUncheckedCreateWithoutGlossaryEntryInput = {
    id?: string
    tagId: string
  }

  export type GlossaryEntryTagCreateOrConnectWithoutGlossaryEntryInput = {
    where: GlossaryEntryTagWhereUniqueInput
    create: XOR<GlossaryEntryTagCreateWithoutGlossaryEntryInput, GlossaryEntryTagUncheckedCreateWithoutGlossaryEntryInput>
  }

  export type GlossaryEntryTagCreateManyGlossaryEntryInputEnvelope = {
    data: GlossaryEntryTagCreateManyGlossaryEntryInput | GlossaryEntryTagCreateManyGlossaryEntryInput[]
    skipDuplicates?: boolean
  }

  export type ProjectUpsertWithoutGlossariesInput = {
    update: XOR<ProjectUpdateWithoutGlossariesInput, ProjectUncheckedUpdateWithoutGlossariesInput>
    create: XOR<ProjectCreateWithoutGlossariesInput, ProjectUncheckedCreateWithoutGlossariesInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutGlossariesInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutGlossariesInput, ProjectUncheckedUpdateWithoutGlossariesInput>
  }

  export type ProjectUpdateWithoutGlossariesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutProjectsNestedInput
    segments?: SegmentUpdateManyWithoutProjectNestedInput
    tms?: TranslationMemoryUpdateManyWithoutProjectNestedInput
    languagePairs?: LanguagePairUpdateManyWithoutProjectsNestedInput
    fileUploads?: FileUploadUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutGlossariesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: StringFieldUpdateOperationsInput | string
    segments?: SegmentUncheckedUpdateManyWithoutProjectNestedInput
    tms?: TranslationMemoryUncheckedUpdateManyWithoutProjectNestedInput
    languagePairs?: LanguagePairUncheckedUpdateManyWithoutProjectsNestedInput
    fileUploads?: FileUploadUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type TagUpsertWithWhereUniqueWithoutGlossaryEntriesInput = {
    where: TagWhereUniqueInput
    update: XOR<TagUpdateWithoutGlossaryEntriesInput, TagUncheckedUpdateWithoutGlossaryEntriesInput>
    create: XOR<TagCreateWithoutGlossaryEntriesInput, TagUncheckedCreateWithoutGlossaryEntriesInput>
  }

  export type TagUpdateWithWhereUniqueWithoutGlossaryEntriesInput = {
    where: TagWhereUniqueInput
    data: XOR<TagUpdateWithoutGlossaryEntriesInput, TagUncheckedUpdateWithoutGlossaryEntriesInput>
  }

  export type TagUpdateManyWithWhereWithoutGlossaryEntriesInput = {
    where: TagScalarWhereInput
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyWithoutGlossaryEntriesInput>
  }

  export type GlossaryEntryTagUpsertWithWhereUniqueWithoutGlossaryEntryInput = {
    where: GlossaryEntryTagWhereUniqueInput
    update: XOR<GlossaryEntryTagUpdateWithoutGlossaryEntryInput, GlossaryEntryTagUncheckedUpdateWithoutGlossaryEntryInput>
    create: XOR<GlossaryEntryTagCreateWithoutGlossaryEntryInput, GlossaryEntryTagUncheckedCreateWithoutGlossaryEntryInput>
  }

  export type GlossaryEntryTagUpdateWithWhereUniqueWithoutGlossaryEntryInput = {
    where: GlossaryEntryTagWhereUniqueInput
    data: XOR<GlossaryEntryTagUpdateWithoutGlossaryEntryInput, GlossaryEntryTagUncheckedUpdateWithoutGlossaryEntryInput>
  }

  export type GlossaryEntryTagUpdateManyWithWhereWithoutGlossaryEntryInput = {
    where: GlossaryEntryTagScalarWhereInput
    data: XOR<GlossaryEntryTagUpdateManyMutationInput, GlossaryEntryTagUncheckedUpdateManyWithoutGlossaryEntryInput>
  }

  export type GlossaryEntryTagScalarWhereInput = {
    AND?: GlossaryEntryTagScalarWhereInput | GlossaryEntryTagScalarWhereInput[]
    OR?: GlossaryEntryTagScalarWhereInput[]
    NOT?: GlossaryEntryTagScalarWhereInput | GlossaryEntryTagScalarWhereInput[]
    id?: StringFilter<"GlossaryEntryTag"> | string
    glossaryId?: StringFilter<"GlossaryEntryTag"> | string
    tagId?: StringFilter<"GlossaryEntryTag"> | string
  }

  export type UserCreateWithoutCommentsInput = {
    id?: string
    email?: string | null
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    projects?: ProjectCreateNestedManyWithoutOwnerInput
    activityLogs?: ActivityLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCommentsInput = {
    id?: string
    email?: string | null
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    projects?: ProjectUncheckedCreateNestedManyWithoutOwnerInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCommentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
  }

  export type SegmentCreateWithoutCommentsInput = {
    id?: string
    index: number
    sourceText: string
    targetText?: string | null
    status?: $Enums.SegmentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutSegmentsInput
    activityLogs?: ActivityLogCreateNestedManyWithoutSegmentInput
    tags?: TagCreateNestedManyWithoutSegmentsInput
    segmentTags?: SegmentTagCreateNestedManyWithoutSegmentInput
  }

  export type SegmentUncheckedCreateWithoutCommentsInput = {
    id?: string
    index: number
    sourceText: string
    targetText?: string | null
    status?: $Enums.SegmentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    projectId: string
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutSegmentInput
    tags?: TagUncheckedCreateNestedManyWithoutSegmentsInput
    segmentTags?: SegmentTagUncheckedCreateNestedManyWithoutSegmentInput
  }

  export type SegmentCreateOrConnectWithoutCommentsInput = {
    where: SegmentWhereUniqueInput
    create: XOR<SegmentCreateWithoutCommentsInput, SegmentUncheckedCreateWithoutCommentsInput>
  }

  export type UserUpsertWithoutCommentsInput = {
    update: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCommentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    projects?: ProjectUpdateManyWithoutOwnerNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutOwnerNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SegmentUpsertWithoutCommentsInput = {
    update: XOR<SegmentUpdateWithoutCommentsInput, SegmentUncheckedUpdateWithoutCommentsInput>
    create: XOR<SegmentCreateWithoutCommentsInput, SegmentUncheckedCreateWithoutCommentsInput>
    where?: SegmentWhereInput
  }

  export type SegmentUpdateToOneWithWhereWithoutCommentsInput = {
    where?: SegmentWhereInput
    data: XOR<SegmentUpdateWithoutCommentsInput, SegmentUncheckedUpdateWithoutCommentsInput>
  }

  export type SegmentUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
    sourceText?: StringFieldUpdateOperationsInput | string
    targetText?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSegmentStatusFieldUpdateOperationsInput | $Enums.SegmentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutSegmentsNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutSegmentNestedInput
    tags?: TagUpdateManyWithoutSegmentsNestedInput
    segmentTags?: SegmentTagUpdateManyWithoutSegmentNestedInput
  }

  export type SegmentUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
    sourceText?: StringFieldUpdateOperationsInput | string
    targetText?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSegmentStatusFieldUpdateOperationsInput | $Enums.SegmentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: StringFieldUpdateOperationsInput | string
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutSegmentNestedInput
    tags?: TagUncheckedUpdateManyWithoutSegmentsNestedInput
    segmentTags?: SegmentTagUncheckedUpdateManyWithoutSegmentNestedInput
  }

  export type UserCreateWithoutActivityLogsInput = {
    id?: string
    email?: string | null
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    projects?: ProjectCreateNestedManyWithoutOwnerInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutActivityLogsInput = {
    id?: string
    email?: string | null
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    projects?: ProjectUncheckedCreateNestedManyWithoutOwnerInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutActivityLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutActivityLogsInput, UserUncheckedCreateWithoutActivityLogsInput>
  }

  export type SegmentCreateWithoutActivityLogsInput = {
    id?: string
    index: number
    sourceText: string
    targetText?: string | null
    status?: $Enums.SegmentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutSegmentsInput
    comments?: CommentCreateNestedManyWithoutSegmentInput
    tags?: TagCreateNestedManyWithoutSegmentsInput
    segmentTags?: SegmentTagCreateNestedManyWithoutSegmentInput
  }

  export type SegmentUncheckedCreateWithoutActivityLogsInput = {
    id?: string
    index: number
    sourceText: string
    targetText?: string | null
    status?: $Enums.SegmentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    projectId: string
    comments?: CommentUncheckedCreateNestedManyWithoutSegmentInput
    tags?: TagUncheckedCreateNestedManyWithoutSegmentsInput
    segmentTags?: SegmentTagUncheckedCreateNestedManyWithoutSegmentInput
  }

  export type SegmentCreateOrConnectWithoutActivityLogsInput = {
    where: SegmentWhereUniqueInput
    create: XOR<SegmentCreateWithoutActivityLogsInput, SegmentUncheckedCreateWithoutActivityLogsInput>
  }

  export type UserUpsertWithoutActivityLogsInput = {
    update: XOR<UserUpdateWithoutActivityLogsInput, UserUncheckedUpdateWithoutActivityLogsInput>
    create: XOR<UserCreateWithoutActivityLogsInput, UserUncheckedCreateWithoutActivityLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutActivityLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutActivityLogsInput, UserUncheckedUpdateWithoutActivityLogsInput>
  }

  export type UserUpdateWithoutActivityLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    projects?: ProjectUpdateManyWithoutOwnerNestedInput
    comments?: CommentUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutActivityLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutOwnerNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type SegmentUpsertWithoutActivityLogsInput = {
    update: XOR<SegmentUpdateWithoutActivityLogsInput, SegmentUncheckedUpdateWithoutActivityLogsInput>
    create: XOR<SegmentCreateWithoutActivityLogsInput, SegmentUncheckedCreateWithoutActivityLogsInput>
    where?: SegmentWhereInput
  }

  export type SegmentUpdateToOneWithWhereWithoutActivityLogsInput = {
    where?: SegmentWhereInput
    data: XOR<SegmentUpdateWithoutActivityLogsInput, SegmentUncheckedUpdateWithoutActivityLogsInput>
  }

  export type SegmentUpdateWithoutActivityLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
    sourceText?: StringFieldUpdateOperationsInput | string
    targetText?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSegmentStatusFieldUpdateOperationsInput | $Enums.SegmentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutSegmentsNestedInput
    comments?: CommentUpdateManyWithoutSegmentNestedInput
    tags?: TagUpdateManyWithoutSegmentsNestedInput
    segmentTags?: SegmentTagUpdateManyWithoutSegmentNestedInput
  }

  export type SegmentUncheckedUpdateWithoutActivityLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
    sourceText?: StringFieldUpdateOperationsInput | string
    targetText?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSegmentStatusFieldUpdateOperationsInput | $Enums.SegmentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: StringFieldUpdateOperationsInput | string
    comments?: CommentUncheckedUpdateManyWithoutSegmentNestedInput
    tags?: TagUncheckedUpdateManyWithoutSegmentsNestedInput
    segmentTags?: SegmentTagUncheckedUpdateManyWithoutSegmentNestedInput
  }

  export type ProjectCreateWithoutLanguagePairsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutProjectsInput
    segments?: SegmentCreateNestedManyWithoutProjectInput
    tms?: TranslationMemoryCreateNestedManyWithoutProjectInput
    glossaries?: GlossaryEntryCreateNestedManyWithoutProjectInput
    fileUploads?: FileUploadCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutLanguagePairsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId: string
    segments?: SegmentUncheckedCreateNestedManyWithoutProjectInput
    tms?: TranslationMemoryUncheckedCreateNestedManyWithoutProjectInput
    glossaries?: GlossaryEntryUncheckedCreateNestedManyWithoutProjectInput
    fileUploads?: FileUploadUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutLanguagePairsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutLanguagePairsInput, ProjectUncheckedCreateWithoutLanguagePairsInput>
  }

  export type ProjectUpsertWithWhereUniqueWithoutLanguagePairsInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutLanguagePairsInput, ProjectUncheckedUpdateWithoutLanguagePairsInput>
    create: XOR<ProjectCreateWithoutLanguagePairsInput, ProjectUncheckedCreateWithoutLanguagePairsInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutLanguagePairsInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutLanguagePairsInput, ProjectUncheckedUpdateWithoutLanguagePairsInput>
  }

  export type ProjectUpdateManyWithWhereWithoutLanguagePairsInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutLanguagePairsInput>
  }

  export type ProjectCreateWithoutFileUploadsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutProjectsInput
    segments?: SegmentCreateNestedManyWithoutProjectInput
    tms?: TranslationMemoryCreateNestedManyWithoutProjectInput
    glossaries?: GlossaryEntryCreateNestedManyWithoutProjectInput
    languagePairs?: LanguagePairCreateNestedManyWithoutProjectsInput
  }

  export type ProjectUncheckedCreateWithoutFileUploadsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId: string
    segments?: SegmentUncheckedCreateNestedManyWithoutProjectInput
    tms?: TranslationMemoryUncheckedCreateNestedManyWithoutProjectInput
    glossaries?: GlossaryEntryUncheckedCreateNestedManyWithoutProjectInput
    languagePairs?: LanguagePairUncheckedCreateNestedManyWithoutProjectsInput
  }

  export type ProjectCreateOrConnectWithoutFileUploadsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutFileUploadsInput, ProjectUncheckedCreateWithoutFileUploadsInput>
  }

  export type ProjectUpsertWithoutFileUploadsInput = {
    update: XOR<ProjectUpdateWithoutFileUploadsInput, ProjectUncheckedUpdateWithoutFileUploadsInput>
    create: XOR<ProjectCreateWithoutFileUploadsInput, ProjectUncheckedCreateWithoutFileUploadsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutFileUploadsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutFileUploadsInput, ProjectUncheckedUpdateWithoutFileUploadsInput>
  }

  export type ProjectUpdateWithoutFileUploadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutProjectsNestedInput
    segments?: SegmentUpdateManyWithoutProjectNestedInput
    tms?: TranslationMemoryUpdateManyWithoutProjectNestedInput
    glossaries?: GlossaryEntryUpdateManyWithoutProjectNestedInput
    languagePairs?: LanguagePairUpdateManyWithoutProjectsNestedInput
  }

  export type ProjectUncheckedUpdateWithoutFileUploadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: StringFieldUpdateOperationsInput | string
    segments?: SegmentUncheckedUpdateManyWithoutProjectNestedInput
    tms?: TranslationMemoryUncheckedUpdateManyWithoutProjectNestedInput
    glossaries?: GlossaryEntryUncheckedUpdateManyWithoutProjectNestedInput
    languagePairs?: LanguagePairUncheckedUpdateManyWithoutProjectsNestedInput
  }

  export type GlossaryEntryCreateWithoutTagsInput = {
    id?: string
    term: string
    definition?: string | null
    sourceLang: string
    targetLang: string
    translation?: string | null
    createdAt?: Date | string
    project: ProjectCreateNestedOneWithoutGlossariesInput
    glossaryEntryTags?: GlossaryEntryTagCreateNestedManyWithoutGlossaryEntryInput
  }

  export type GlossaryEntryUncheckedCreateWithoutTagsInput = {
    id?: string
    term: string
    definition?: string | null
    sourceLang: string
    targetLang: string
    translation?: string | null
    createdAt?: Date | string
    projectId: string
    glossaryEntryTags?: GlossaryEntryTagUncheckedCreateNestedManyWithoutGlossaryEntryInput
  }

  export type GlossaryEntryCreateOrConnectWithoutTagsInput = {
    where: GlossaryEntryWhereUniqueInput
    create: XOR<GlossaryEntryCreateWithoutTagsInput, GlossaryEntryUncheckedCreateWithoutTagsInput>
  }

  export type SegmentCreateWithoutTagsInput = {
    id?: string
    index: number
    sourceText: string
    targetText?: string | null
    status?: $Enums.SegmentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutSegmentsInput
    comments?: CommentCreateNestedManyWithoutSegmentInput
    activityLogs?: ActivityLogCreateNestedManyWithoutSegmentInput
    segmentTags?: SegmentTagCreateNestedManyWithoutSegmentInput
  }

  export type SegmentUncheckedCreateWithoutTagsInput = {
    id?: string
    index: number
    sourceText: string
    targetText?: string | null
    status?: $Enums.SegmentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    projectId: string
    comments?: CommentUncheckedCreateNestedManyWithoutSegmentInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutSegmentInput
    segmentTags?: SegmentTagUncheckedCreateNestedManyWithoutSegmentInput
  }

  export type SegmentCreateOrConnectWithoutTagsInput = {
    where: SegmentWhereUniqueInput
    create: XOR<SegmentCreateWithoutTagsInput, SegmentUncheckedCreateWithoutTagsInput>
  }

  export type GlossaryEntryTagCreateWithoutTagInput = {
    id?: string
    glossaryEntry: GlossaryEntryCreateNestedOneWithoutGlossaryEntryTagsInput
  }

  export type GlossaryEntryTagUncheckedCreateWithoutTagInput = {
    id?: string
    glossaryId: string
  }

  export type GlossaryEntryTagCreateOrConnectWithoutTagInput = {
    where: GlossaryEntryTagWhereUniqueInput
    create: XOR<GlossaryEntryTagCreateWithoutTagInput, GlossaryEntryTagUncheckedCreateWithoutTagInput>
  }

  export type GlossaryEntryTagCreateManyTagInputEnvelope = {
    data: GlossaryEntryTagCreateManyTagInput | GlossaryEntryTagCreateManyTagInput[]
    skipDuplicates?: boolean
  }

  export type SegmentTagCreateWithoutTagInput = {
    id?: string
    segment: SegmentCreateNestedOneWithoutSegmentTagsInput
  }

  export type SegmentTagUncheckedCreateWithoutTagInput = {
    id?: string
    segmentId: string
  }

  export type SegmentTagCreateOrConnectWithoutTagInput = {
    where: SegmentTagWhereUniqueInput
    create: XOR<SegmentTagCreateWithoutTagInput, SegmentTagUncheckedCreateWithoutTagInput>
  }

  export type SegmentTagCreateManyTagInputEnvelope = {
    data: SegmentTagCreateManyTagInput | SegmentTagCreateManyTagInput[]
    skipDuplicates?: boolean
  }

  export type GlossaryEntryUpsertWithWhereUniqueWithoutTagsInput = {
    where: GlossaryEntryWhereUniqueInput
    update: XOR<GlossaryEntryUpdateWithoutTagsInput, GlossaryEntryUncheckedUpdateWithoutTagsInput>
    create: XOR<GlossaryEntryCreateWithoutTagsInput, GlossaryEntryUncheckedCreateWithoutTagsInput>
  }

  export type GlossaryEntryUpdateWithWhereUniqueWithoutTagsInput = {
    where: GlossaryEntryWhereUniqueInput
    data: XOR<GlossaryEntryUpdateWithoutTagsInput, GlossaryEntryUncheckedUpdateWithoutTagsInput>
  }

  export type GlossaryEntryUpdateManyWithWhereWithoutTagsInput = {
    where: GlossaryEntryScalarWhereInput
    data: XOR<GlossaryEntryUpdateManyMutationInput, GlossaryEntryUncheckedUpdateManyWithoutTagsInput>
  }

  export type SegmentUpsertWithWhereUniqueWithoutTagsInput = {
    where: SegmentWhereUniqueInput
    update: XOR<SegmentUpdateWithoutTagsInput, SegmentUncheckedUpdateWithoutTagsInput>
    create: XOR<SegmentCreateWithoutTagsInput, SegmentUncheckedCreateWithoutTagsInput>
  }

  export type SegmentUpdateWithWhereUniqueWithoutTagsInput = {
    where: SegmentWhereUniqueInput
    data: XOR<SegmentUpdateWithoutTagsInput, SegmentUncheckedUpdateWithoutTagsInput>
  }

  export type SegmentUpdateManyWithWhereWithoutTagsInput = {
    where: SegmentScalarWhereInput
    data: XOR<SegmentUpdateManyMutationInput, SegmentUncheckedUpdateManyWithoutTagsInput>
  }

  export type GlossaryEntryTagUpsertWithWhereUniqueWithoutTagInput = {
    where: GlossaryEntryTagWhereUniqueInput
    update: XOR<GlossaryEntryTagUpdateWithoutTagInput, GlossaryEntryTagUncheckedUpdateWithoutTagInput>
    create: XOR<GlossaryEntryTagCreateWithoutTagInput, GlossaryEntryTagUncheckedCreateWithoutTagInput>
  }

  export type GlossaryEntryTagUpdateWithWhereUniqueWithoutTagInput = {
    where: GlossaryEntryTagWhereUniqueInput
    data: XOR<GlossaryEntryTagUpdateWithoutTagInput, GlossaryEntryTagUncheckedUpdateWithoutTagInput>
  }

  export type GlossaryEntryTagUpdateManyWithWhereWithoutTagInput = {
    where: GlossaryEntryTagScalarWhereInput
    data: XOR<GlossaryEntryTagUpdateManyMutationInput, GlossaryEntryTagUncheckedUpdateManyWithoutTagInput>
  }

  export type SegmentTagUpsertWithWhereUniqueWithoutTagInput = {
    where: SegmentTagWhereUniqueInput
    update: XOR<SegmentTagUpdateWithoutTagInput, SegmentTagUncheckedUpdateWithoutTagInput>
    create: XOR<SegmentTagCreateWithoutTagInput, SegmentTagUncheckedCreateWithoutTagInput>
  }

  export type SegmentTagUpdateWithWhereUniqueWithoutTagInput = {
    where: SegmentTagWhereUniqueInput
    data: XOR<SegmentTagUpdateWithoutTagInput, SegmentTagUncheckedUpdateWithoutTagInput>
  }

  export type SegmentTagUpdateManyWithWhereWithoutTagInput = {
    where: SegmentTagScalarWhereInput
    data: XOR<SegmentTagUpdateManyMutationInput, SegmentTagUncheckedUpdateManyWithoutTagInput>
  }

  export type GlossaryEntryCreateWithoutGlossaryEntryTagsInput = {
    id?: string
    term: string
    definition?: string | null
    sourceLang: string
    targetLang: string
    translation?: string | null
    createdAt?: Date | string
    project: ProjectCreateNestedOneWithoutGlossariesInput
    tags?: TagCreateNestedManyWithoutGlossaryEntriesInput
  }

  export type GlossaryEntryUncheckedCreateWithoutGlossaryEntryTagsInput = {
    id?: string
    term: string
    definition?: string | null
    sourceLang: string
    targetLang: string
    translation?: string | null
    createdAt?: Date | string
    projectId: string
    tags?: TagUncheckedCreateNestedManyWithoutGlossaryEntriesInput
  }

  export type GlossaryEntryCreateOrConnectWithoutGlossaryEntryTagsInput = {
    where: GlossaryEntryWhereUniqueInput
    create: XOR<GlossaryEntryCreateWithoutGlossaryEntryTagsInput, GlossaryEntryUncheckedCreateWithoutGlossaryEntryTagsInput>
  }

  export type TagCreateWithoutGlossaryEntryTagsInput = {
    id?: string
    name: string
    glossaryEntries?: GlossaryEntryCreateNestedManyWithoutTagsInput
    segments?: SegmentCreateNestedManyWithoutTagsInput
    segmentTags?: SegmentTagCreateNestedManyWithoutTagInput
  }

  export type TagUncheckedCreateWithoutGlossaryEntryTagsInput = {
    id?: string
    name: string
    glossaryEntries?: GlossaryEntryUncheckedCreateNestedManyWithoutTagsInput
    segments?: SegmentUncheckedCreateNestedManyWithoutTagsInput
    segmentTags?: SegmentTagUncheckedCreateNestedManyWithoutTagInput
  }

  export type TagCreateOrConnectWithoutGlossaryEntryTagsInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutGlossaryEntryTagsInput, TagUncheckedCreateWithoutGlossaryEntryTagsInput>
  }

  export type GlossaryEntryUpsertWithoutGlossaryEntryTagsInput = {
    update: XOR<GlossaryEntryUpdateWithoutGlossaryEntryTagsInput, GlossaryEntryUncheckedUpdateWithoutGlossaryEntryTagsInput>
    create: XOR<GlossaryEntryCreateWithoutGlossaryEntryTagsInput, GlossaryEntryUncheckedCreateWithoutGlossaryEntryTagsInput>
    where?: GlossaryEntryWhereInput
  }

  export type GlossaryEntryUpdateToOneWithWhereWithoutGlossaryEntryTagsInput = {
    where?: GlossaryEntryWhereInput
    data: XOR<GlossaryEntryUpdateWithoutGlossaryEntryTagsInput, GlossaryEntryUncheckedUpdateWithoutGlossaryEntryTagsInput>
  }

  export type GlossaryEntryUpdateWithoutGlossaryEntryTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    term?: StringFieldUpdateOperationsInput | string
    definition?: NullableStringFieldUpdateOperationsInput | string | null
    sourceLang?: StringFieldUpdateOperationsInput | string
    targetLang?: StringFieldUpdateOperationsInput | string
    translation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutGlossariesNestedInput
    tags?: TagUpdateManyWithoutGlossaryEntriesNestedInput
  }

  export type GlossaryEntryUncheckedUpdateWithoutGlossaryEntryTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    term?: StringFieldUpdateOperationsInput | string
    definition?: NullableStringFieldUpdateOperationsInput | string | null
    sourceLang?: StringFieldUpdateOperationsInput | string
    targetLang?: StringFieldUpdateOperationsInput | string
    translation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: StringFieldUpdateOperationsInput | string
    tags?: TagUncheckedUpdateManyWithoutGlossaryEntriesNestedInput
  }

  export type TagUpsertWithoutGlossaryEntryTagsInput = {
    update: XOR<TagUpdateWithoutGlossaryEntryTagsInput, TagUncheckedUpdateWithoutGlossaryEntryTagsInput>
    create: XOR<TagCreateWithoutGlossaryEntryTagsInput, TagUncheckedCreateWithoutGlossaryEntryTagsInput>
    where?: TagWhereInput
  }

  export type TagUpdateToOneWithWhereWithoutGlossaryEntryTagsInput = {
    where?: TagWhereInput
    data: XOR<TagUpdateWithoutGlossaryEntryTagsInput, TagUncheckedUpdateWithoutGlossaryEntryTagsInput>
  }

  export type TagUpdateWithoutGlossaryEntryTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    glossaryEntries?: GlossaryEntryUpdateManyWithoutTagsNestedInput
    segments?: SegmentUpdateManyWithoutTagsNestedInput
    segmentTags?: SegmentTagUpdateManyWithoutTagNestedInput
  }

  export type TagUncheckedUpdateWithoutGlossaryEntryTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    glossaryEntries?: GlossaryEntryUncheckedUpdateManyWithoutTagsNestedInput
    segments?: SegmentUncheckedUpdateManyWithoutTagsNestedInput
    segmentTags?: SegmentTagUncheckedUpdateManyWithoutTagNestedInput
  }

  export type SegmentCreateWithoutSegmentTagsInput = {
    id?: string
    index: number
    sourceText: string
    targetText?: string | null
    status?: $Enums.SegmentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutSegmentsInput
    comments?: CommentCreateNestedManyWithoutSegmentInput
    activityLogs?: ActivityLogCreateNestedManyWithoutSegmentInput
    tags?: TagCreateNestedManyWithoutSegmentsInput
  }

  export type SegmentUncheckedCreateWithoutSegmentTagsInput = {
    id?: string
    index: number
    sourceText: string
    targetText?: string | null
    status?: $Enums.SegmentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    projectId: string
    comments?: CommentUncheckedCreateNestedManyWithoutSegmentInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutSegmentInput
    tags?: TagUncheckedCreateNestedManyWithoutSegmentsInput
  }

  export type SegmentCreateOrConnectWithoutSegmentTagsInput = {
    where: SegmentWhereUniqueInput
    create: XOR<SegmentCreateWithoutSegmentTagsInput, SegmentUncheckedCreateWithoutSegmentTagsInput>
  }

  export type TagCreateWithoutSegmentTagsInput = {
    id?: string
    name: string
    glossaryEntries?: GlossaryEntryCreateNestedManyWithoutTagsInput
    segments?: SegmentCreateNestedManyWithoutTagsInput
    glossaryEntryTags?: GlossaryEntryTagCreateNestedManyWithoutTagInput
  }

  export type TagUncheckedCreateWithoutSegmentTagsInput = {
    id?: string
    name: string
    glossaryEntries?: GlossaryEntryUncheckedCreateNestedManyWithoutTagsInput
    segments?: SegmentUncheckedCreateNestedManyWithoutTagsInput
    glossaryEntryTags?: GlossaryEntryTagUncheckedCreateNestedManyWithoutTagInput
  }

  export type TagCreateOrConnectWithoutSegmentTagsInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutSegmentTagsInput, TagUncheckedCreateWithoutSegmentTagsInput>
  }

  export type SegmentUpsertWithoutSegmentTagsInput = {
    update: XOR<SegmentUpdateWithoutSegmentTagsInput, SegmentUncheckedUpdateWithoutSegmentTagsInput>
    create: XOR<SegmentCreateWithoutSegmentTagsInput, SegmentUncheckedCreateWithoutSegmentTagsInput>
    where?: SegmentWhereInput
  }

  export type SegmentUpdateToOneWithWhereWithoutSegmentTagsInput = {
    where?: SegmentWhereInput
    data: XOR<SegmentUpdateWithoutSegmentTagsInput, SegmentUncheckedUpdateWithoutSegmentTagsInput>
  }

  export type SegmentUpdateWithoutSegmentTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
    sourceText?: StringFieldUpdateOperationsInput | string
    targetText?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSegmentStatusFieldUpdateOperationsInput | $Enums.SegmentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutSegmentsNestedInput
    comments?: CommentUpdateManyWithoutSegmentNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutSegmentNestedInput
    tags?: TagUpdateManyWithoutSegmentsNestedInput
  }

  export type SegmentUncheckedUpdateWithoutSegmentTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
    sourceText?: StringFieldUpdateOperationsInput | string
    targetText?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSegmentStatusFieldUpdateOperationsInput | $Enums.SegmentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: StringFieldUpdateOperationsInput | string
    comments?: CommentUncheckedUpdateManyWithoutSegmentNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutSegmentNestedInput
    tags?: TagUncheckedUpdateManyWithoutSegmentsNestedInput
  }

  export type TagUpsertWithoutSegmentTagsInput = {
    update: XOR<TagUpdateWithoutSegmentTagsInput, TagUncheckedUpdateWithoutSegmentTagsInput>
    create: XOR<TagCreateWithoutSegmentTagsInput, TagUncheckedCreateWithoutSegmentTagsInput>
    where?: TagWhereInput
  }

  export type TagUpdateToOneWithWhereWithoutSegmentTagsInput = {
    where?: TagWhereInput
    data: XOR<TagUpdateWithoutSegmentTagsInput, TagUncheckedUpdateWithoutSegmentTagsInput>
  }

  export type TagUpdateWithoutSegmentTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    glossaryEntries?: GlossaryEntryUpdateManyWithoutTagsNestedInput
    segments?: SegmentUpdateManyWithoutTagsNestedInput
    glossaryEntryTags?: GlossaryEntryTagUpdateManyWithoutTagNestedInput
  }

  export type TagUncheckedUpdateWithoutSegmentTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    glossaryEntries?: GlossaryEntryUncheckedUpdateManyWithoutTagsNestedInput
    segments?: SegmentUncheckedUpdateManyWithoutTagsNestedInput
    glossaryEntryTags?: GlossaryEntryTagUncheckedUpdateManyWithoutTagNestedInput
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    email?: string | null
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    emailVerified?: Date | string | null
    image?: string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
    projects?: ProjectCreateNestedManyWithoutOwnerInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
    activityLogs?: ActivityLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    email?: string | null
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    emailVerified?: Date | string | null
    image?: string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    projects?: ProjectUncheckedCreateNestedManyWithoutOwnerInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
    projects?: ProjectUpdateManyWithoutOwnerNestedInput
    comments?: CommentUpdateManyWithoutAuthorNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutOwnerNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    email?: string | null
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    projects?: ProjectCreateNestedManyWithoutOwnerInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
    activityLogs?: ActivityLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    email?: string | null
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    projects?: ProjectUncheckedCreateNestedManyWithoutOwnerInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    projects?: ProjectUpdateManyWithoutOwnerNestedInput
    comments?: CommentUpdateManyWithoutAuthorNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutOwnerNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AccountCreateManyUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type SessionCreateManyUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type ProjectCreateManyOwnerInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentCreateManyAuthorInput = {
    id?: string
    content: string
    createdAt?: Date | string
    segmentId: string
  }

  export type ActivityLogCreateManyUserInput = {
    id?: string
    action: string
    detail?: string | null
    createdAt?: Date | string
    segmentId: string
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    segments?: SegmentUpdateManyWithoutProjectNestedInput
    tms?: TranslationMemoryUpdateManyWithoutProjectNestedInput
    glossaries?: GlossaryEntryUpdateManyWithoutProjectNestedInput
    languagePairs?: LanguagePairUpdateManyWithoutProjectsNestedInput
    fileUploads?: FileUploadUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    segments?: SegmentUncheckedUpdateManyWithoutProjectNestedInput
    tms?: TranslationMemoryUncheckedUpdateManyWithoutProjectNestedInput
    glossaries?: GlossaryEntryUncheckedUpdateManyWithoutProjectNestedInput
    languagePairs?: LanguagePairUncheckedUpdateManyWithoutProjectsNestedInput
    fileUploads?: FileUploadUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    segment?: SegmentUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    segmentId?: StringFieldUpdateOperationsInput | string
  }

  export type CommentUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    segmentId?: StringFieldUpdateOperationsInput | string
  }

  export type ActivityLogUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    segment?: SegmentUpdateOneRequiredWithoutActivityLogsNestedInput
  }

  export type ActivityLogUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    segmentId?: StringFieldUpdateOperationsInput | string
  }

  export type ActivityLogUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    segmentId?: StringFieldUpdateOperationsInput | string
  }

  export type SegmentCreateManyProjectInput = {
    id?: string
    index: number
    sourceText: string
    targetText?: string | null
    status?: $Enums.SegmentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TranslationMemoryCreateManyProjectInput = {
    id?: string
    sourceText: string
    targetText: string
    langPair: string
    score?: number
    createdAt?: Date | string
  }

  export type GlossaryEntryCreateManyProjectInput = {
    id?: string
    term: string
    definition?: string | null
    sourceLang: string
    targetLang: string
    translation?: string | null
    createdAt?: Date | string
  }

  export type FileUploadCreateManyProjectInput = {
    id?: string
    filename: string
    fileType: string
    url: string
    uploadedAt?: Date | string
  }

  export type SegmentUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
    sourceText?: StringFieldUpdateOperationsInput | string
    targetText?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSegmentStatusFieldUpdateOperationsInput | $Enums.SegmentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUpdateManyWithoutSegmentNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutSegmentNestedInput
    tags?: TagUpdateManyWithoutSegmentsNestedInput
    segmentTags?: SegmentTagUpdateManyWithoutSegmentNestedInput
  }

  export type SegmentUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
    sourceText?: StringFieldUpdateOperationsInput | string
    targetText?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSegmentStatusFieldUpdateOperationsInput | $Enums.SegmentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutSegmentNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutSegmentNestedInput
    tags?: TagUncheckedUpdateManyWithoutSegmentsNestedInput
    segmentTags?: SegmentTagUncheckedUpdateManyWithoutSegmentNestedInput
  }

  export type SegmentUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
    sourceText?: StringFieldUpdateOperationsInput | string
    targetText?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSegmentStatusFieldUpdateOperationsInput | $Enums.SegmentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TranslationMemoryUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceText?: StringFieldUpdateOperationsInput | string
    targetText?: StringFieldUpdateOperationsInput | string
    langPair?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TranslationMemoryUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceText?: StringFieldUpdateOperationsInput | string
    targetText?: StringFieldUpdateOperationsInput | string
    langPair?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TranslationMemoryUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceText?: StringFieldUpdateOperationsInput | string
    targetText?: StringFieldUpdateOperationsInput | string
    langPair?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GlossaryEntryUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    term?: StringFieldUpdateOperationsInput | string
    definition?: NullableStringFieldUpdateOperationsInput | string | null
    sourceLang?: StringFieldUpdateOperationsInput | string
    targetLang?: StringFieldUpdateOperationsInput | string
    translation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: TagUpdateManyWithoutGlossaryEntriesNestedInput
    glossaryEntryTags?: GlossaryEntryTagUpdateManyWithoutGlossaryEntryNestedInput
  }

  export type GlossaryEntryUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    term?: StringFieldUpdateOperationsInput | string
    definition?: NullableStringFieldUpdateOperationsInput | string | null
    sourceLang?: StringFieldUpdateOperationsInput | string
    targetLang?: StringFieldUpdateOperationsInput | string
    translation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: TagUncheckedUpdateManyWithoutGlossaryEntriesNestedInput
    glossaryEntryTags?: GlossaryEntryTagUncheckedUpdateManyWithoutGlossaryEntryNestedInput
  }

  export type GlossaryEntryUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    term?: StringFieldUpdateOperationsInput | string
    definition?: NullableStringFieldUpdateOperationsInput | string | null
    sourceLang?: StringFieldUpdateOperationsInput | string
    targetLang?: StringFieldUpdateOperationsInput | string
    translation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LanguagePairUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceLang?: StringFieldUpdateOperationsInput | string
    targetLang?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LanguagePairUncheckedUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceLang?: StringFieldUpdateOperationsInput | string
    targetLang?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LanguagePairUncheckedUpdateManyWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceLang?: StringFieldUpdateOperationsInput | string
    targetLang?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileUploadUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    fileType?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileUploadUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    fileType?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileUploadUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    fileType?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateManySegmentInput = {
    id?: string
    content: string
    createdAt?: Date | string
    authorId: string
  }

  export type ActivityLogCreateManySegmentInput = {
    id?: string
    action: string
    detail?: string | null
    createdAt?: Date | string
    userId: string
  }

  export type SegmentTagCreateManySegmentInput = {
    id?: string
    tagId: string
  }

  export type CommentUpdateWithoutSegmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutSegmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: StringFieldUpdateOperationsInput | string
  }

  export type CommentUncheckedUpdateManyWithoutSegmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: StringFieldUpdateOperationsInput | string
  }

  export type ActivityLogUpdateWithoutSegmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutActivityLogsNestedInput
  }

  export type ActivityLogUncheckedUpdateWithoutSegmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ActivityLogUncheckedUpdateManyWithoutSegmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type TagUpdateWithoutSegmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    glossaryEntries?: GlossaryEntryUpdateManyWithoutTagsNestedInput
    glossaryEntryTags?: GlossaryEntryTagUpdateManyWithoutTagNestedInput
    segmentTags?: SegmentTagUpdateManyWithoutTagNestedInput
  }

  export type TagUncheckedUpdateWithoutSegmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    glossaryEntries?: GlossaryEntryUncheckedUpdateManyWithoutTagsNestedInput
    glossaryEntryTags?: GlossaryEntryTagUncheckedUpdateManyWithoutTagNestedInput
    segmentTags?: SegmentTagUncheckedUpdateManyWithoutTagNestedInput
  }

  export type TagUncheckedUpdateManyWithoutSegmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SegmentTagUpdateWithoutSegmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    tag?: TagUpdateOneRequiredWithoutSegmentTagsNestedInput
  }

  export type SegmentTagUncheckedUpdateWithoutSegmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type SegmentTagUncheckedUpdateManyWithoutSegmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type GlossaryEntryTagCreateManyGlossaryEntryInput = {
    id?: string
    tagId: string
  }

  export type TagUpdateWithoutGlossaryEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    segments?: SegmentUpdateManyWithoutTagsNestedInput
    glossaryEntryTags?: GlossaryEntryTagUpdateManyWithoutTagNestedInput
    segmentTags?: SegmentTagUpdateManyWithoutTagNestedInput
  }

  export type TagUncheckedUpdateWithoutGlossaryEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    segments?: SegmentUncheckedUpdateManyWithoutTagsNestedInput
    glossaryEntryTags?: GlossaryEntryTagUncheckedUpdateManyWithoutTagNestedInput
    segmentTags?: SegmentTagUncheckedUpdateManyWithoutTagNestedInput
  }

  export type TagUncheckedUpdateManyWithoutGlossaryEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type GlossaryEntryTagUpdateWithoutGlossaryEntryInput = {
    id?: StringFieldUpdateOperationsInput | string
    tag?: TagUpdateOneRequiredWithoutGlossaryEntryTagsNestedInput
  }

  export type GlossaryEntryTagUncheckedUpdateWithoutGlossaryEntryInput = {
    id?: StringFieldUpdateOperationsInput | string
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type GlossaryEntryTagUncheckedUpdateManyWithoutGlossaryEntryInput = {
    id?: StringFieldUpdateOperationsInput | string
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectUpdateWithoutLanguagePairsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutProjectsNestedInput
    segments?: SegmentUpdateManyWithoutProjectNestedInput
    tms?: TranslationMemoryUpdateManyWithoutProjectNestedInput
    glossaries?: GlossaryEntryUpdateManyWithoutProjectNestedInput
    fileUploads?: FileUploadUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutLanguagePairsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: StringFieldUpdateOperationsInput | string
    segments?: SegmentUncheckedUpdateManyWithoutProjectNestedInput
    tms?: TranslationMemoryUncheckedUpdateManyWithoutProjectNestedInput
    glossaries?: GlossaryEntryUncheckedUpdateManyWithoutProjectNestedInput
    fileUploads?: FileUploadUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutLanguagePairsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: StringFieldUpdateOperationsInput | string
  }

  export type GlossaryEntryTagCreateManyTagInput = {
    id?: string
    glossaryId: string
  }

  export type SegmentTagCreateManyTagInput = {
    id?: string
    segmentId: string
  }

  export type GlossaryEntryUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    term?: StringFieldUpdateOperationsInput | string
    definition?: NullableStringFieldUpdateOperationsInput | string | null
    sourceLang?: StringFieldUpdateOperationsInput | string
    targetLang?: StringFieldUpdateOperationsInput | string
    translation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutGlossariesNestedInput
    glossaryEntryTags?: GlossaryEntryTagUpdateManyWithoutGlossaryEntryNestedInput
  }

  export type GlossaryEntryUncheckedUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    term?: StringFieldUpdateOperationsInput | string
    definition?: NullableStringFieldUpdateOperationsInput | string | null
    sourceLang?: StringFieldUpdateOperationsInput | string
    targetLang?: StringFieldUpdateOperationsInput | string
    translation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: StringFieldUpdateOperationsInput | string
    glossaryEntryTags?: GlossaryEntryTagUncheckedUpdateManyWithoutGlossaryEntryNestedInput
  }

  export type GlossaryEntryUncheckedUpdateManyWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    term?: StringFieldUpdateOperationsInput | string
    definition?: NullableStringFieldUpdateOperationsInput | string | null
    sourceLang?: StringFieldUpdateOperationsInput | string
    targetLang?: StringFieldUpdateOperationsInput | string
    translation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: StringFieldUpdateOperationsInput | string
  }

  export type SegmentUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
    sourceText?: StringFieldUpdateOperationsInput | string
    targetText?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSegmentStatusFieldUpdateOperationsInput | $Enums.SegmentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutSegmentsNestedInput
    comments?: CommentUpdateManyWithoutSegmentNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutSegmentNestedInput
    segmentTags?: SegmentTagUpdateManyWithoutSegmentNestedInput
  }

  export type SegmentUncheckedUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
    sourceText?: StringFieldUpdateOperationsInput | string
    targetText?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSegmentStatusFieldUpdateOperationsInput | $Enums.SegmentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: StringFieldUpdateOperationsInput | string
    comments?: CommentUncheckedUpdateManyWithoutSegmentNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutSegmentNestedInput
    segmentTags?: SegmentTagUncheckedUpdateManyWithoutSegmentNestedInput
  }

  export type SegmentUncheckedUpdateManyWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
    sourceText?: StringFieldUpdateOperationsInput | string
    targetText?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSegmentStatusFieldUpdateOperationsInput | $Enums.SegmentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: StringFieldUpdateOperationsInput | string
  }

  export type GlossaryEntryTagUpdateWithoutTagInput = {
    id?: StringFieldUpdateOperationsInput | string
    glossaryEntry?: GlossaryEntryUpdateOneRequiredWithoutGlossaryEntryTagsNestedInput
  }

  export type GlossaryEntryTagUncheckedUpdateWithoutTagInput = {
    id?: StringFieldUpdateOperationsInput | string
    glossaryId?: StringFieldUpdateOperationsInput | string
  }

  export type GlossaryEntryTagUncheckedUpdateManyWithoutTagInput = {
    id?: StringFieldUpdateOperationsInput | string
    glossaryId?: StringFieldUpdateOperationsInput | string
  }

  export type SegmentTagUpdateWithoutTagInput = {
    id?: StringFieldUpdateOperationsInput | string
    segment?: SegmentUpdateOneRequiredWithoutSegmentTagsNestedInput
  }

  export type SegmentTagUncheckedUpdateWithoutTagInput = {
    id?: StringFieldUpdateOperationsInput | string
    segmentId?: StringFieldUpdateOperationsInput | string
  }

  export type SegmentTagUncheckedUpdateManyWithoutTagInput = {
    id?: StringFieldUpdateOperationsInput | string
    segmentId?: StringFieldUpdateOperationsInput | string
  }



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