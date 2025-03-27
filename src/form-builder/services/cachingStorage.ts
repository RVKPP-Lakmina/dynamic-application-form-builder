export default class CachingStorage {
  private static cache: Record<
    string,
    string | number | boolean | Record<string, unknown> | unknown[]
  > = {};

  constructor() {
    // Instance cache is unnecessary since all methods are static
  }

  static has(key: string): boolean {
    return key in this.cache;
  }

  static set<
    T extends string | number | boolean | Record<string, unknown> | unknown[]
  >(key: string, value: T): void {
    this.cache[key] = value;
  }

  static get<
    T extends string | number | boolean | Record<string, unknown> | unknown[]
  >(key: string): T | undefined {
    return this.cache[key] as T;
  }

  static remove(key: string): void {
    delete this.cache[key];
  }

  static fetchOnce<
    T extends string | number | boolean | Record<string, unknown> | unknown[]
  >(key: string, fetcher: () => Promise<T>): Promise<T> {
    if (key in this.cache) {
      return Promise.resolve(this.cache[key] as T);
    }
    return fetcher().then((response) => {
      this.cache[key] = response;
      return response;
    });
  }

  static clear(): void {
    this.cache = {};
  }
}
