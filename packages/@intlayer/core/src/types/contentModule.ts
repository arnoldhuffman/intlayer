import type {
  EnumerationContent,
  TranslationContent,
} from '../transpiler/index';

export type TypedNode =
  | TranslationContent<unknown>
  | EnumerationContent<unknown>;

export type ContentValue =
  | string
  | {
      [key: string]: ContentValue;
    }
  | (() => ContentValue)
  | Promise<ContentValue>
  | TypedNode;

type ArrayOfSameType<T> = T extends (infer U)[]
  ? U extends T[number]
    ? T
    : never
  : never;

export type Content = Record<
  string,
  ContentValue | ArrayOfSameType<ContentValue[]> | undefined
>;

export type FlatContentValue =
  | string
  | {
      [key: string]: FlatContentValue;
    }
  | TypedNode;

export type FlatContent = Record<string, FlatContentValue | undefined>;

export type ContentModule = Content & {
  id: string;
  filePath?: string;
};
