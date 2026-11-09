import { useStyleLinker } from "@/hooks";
import { CompendiumForms } from "@/lib/cms";
import { PreviewTemplateProps } from "@/lib/types";
import { PreviewTemplateComponentProps } from "decap-cms-core";
import BaseTemplatePreview from "../base-template-preview";
import MainPreview from "../main-preview";
import FormsContextProvider from "@/components/compendium/forms-context";
import { CompendiumProvider } from "@/components/compendium/compendium-context";
import CompendiumDialogContent from "@/components/compendium/compendium-dialog-content";
import CompendiumShelf from "@/components/compendium/compendium-shelf";
import CompendiumPagePreviewWrapper from "./compendium-page-wrapper";
import { enumerateData } from "@/lib/utils";

export function FormPreviewTemplate(props: PreviewTemplateComponentProps) {
  const data = props.entry.get("data").toJS() as CompendiumForms;
  if (!data) return null;
  return <FormPreview data={data} {...props} />;
}

export default function FormPreview({
  data,
  ...props
}: PreviewTemplateProps<CompendiumForms>) {
  useStyleLinker(props);

  return (
    <BaseTemplatePreview>
      <MainPreview>
        <FormsContextProvider>
          <CompendiumProvider cardDisabled>
            <CompendiumPagePreviewWrapper>
              <CompendiumShelf
                items={[data]}
                title="Featured"
                type="Featured"
              />
              <CompendiumShelf
                items={enumerateData(data, 3, (data) => ({
                  ...data,
                  name: `_${data.name}`,
                }))}
                title={data.type}
                type="Default"
              />

              <CompendiumDialogContent form={data} />
            </CompendiumPagePreviewWrapper>
          </CompendiumProvider>
        </FormsContextProvider>
      </MainPreview>
    </BaseTemplatePreview>
  );
}
