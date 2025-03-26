export type Value = string | readonly string[] | number | undefined;

export interface FormatterValueProps {
  value: Value;
  metaData: {
    digits?: number;
  };
}
