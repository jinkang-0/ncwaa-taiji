import { PreviewTemplateComponentProps } from "decap-cms-core";

// nextjs metadata generation props
interface GenerateMetadataProps {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

// utility types

type PreviewTemplateProps<T> = PreviewTemplateComponentProps & { data: T };

type Prettify<T> = {} & {
  [K in keyof T]: T[K];
};

type Serialize<T> = {
  [K in keyof T]: T[K] extends Types.ObjectId
    ? string
    : T[K] extends Array<infer U>
      ? Array<Serialize<U>>
      : T[K] extends object
        ? Serialize<T[K]>
        : T[K];
};
