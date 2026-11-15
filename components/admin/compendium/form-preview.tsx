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
import FormDialogWrapper from "./form-dialog-wrapper";

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
    <FormsContextProvider>
      <CompendiumProvider cardDisabled>
        <BaseTemplatePreview>
          <MainPreview>
            <CompendiumPagePreviewWrapper>
              <CompendiumShelf
                items={[data]}
                title="Featured"
                type="Featured"
              />
              <CompendiumShelf
                items={enumerateData(data, 3, (data) => ({
                  ...data,
                  id: `_${data.id}`,
                }))}
                title={data.type}
                type="Default"
              />
            </CompendiumPagePreviewWrapper>
          </MainPreview>

          <FormDialogWrapper>
            <CompendiumDialogContent form={data} />
          </FormDialogWrapper>
        </BaseTemplatePreview>
      </CompendiumProvider>
    </FormsContextProvider>
  );
}
