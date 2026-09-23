import { Collection, Map } from "immutable";

export type CollectionOf<T> = Collection.Keyed<string, T[keyof T]>;
export type EntryOf<T> = CollectionOf<{ data: T }>;
export type UnknownCollection = Map<string, unknown>;

export type WidgetsForFn = <T, R extends Record<string, T>>(field: R[]) => {data: {[K in keyof R]: T}[]}[];

export interface PreviewTemplateSubcomponent {
  entry: UnknownCollection;
}