export interface JwtAdapter<T> {
  generate(payload: T): { token: string };
}
