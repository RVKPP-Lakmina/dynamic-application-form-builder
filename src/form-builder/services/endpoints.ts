export function endpoints(): Record<string, string> {
  return {
    form: "/form",
  };
}

export function persistenceEndpoints(): Record<string, string> {
  const endpoint = endpoints();
  return {
    form: `/scws/persistence/api/v1${endpoint.form}`,
  };
}
