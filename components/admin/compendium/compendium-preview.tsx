import { CompendiumProvider } from "@/components/compendium/compendium-context";
import BaseTemplatePreview from "../base-template-preview";
import FormsContextProvider from "@/components/compendium/forms-context";
import CompendiumPagePreview from "./compendium-page-preview";
import { PreviewTemplateComponentProps } from "decap-cms-core";
import { Compendium } from "@/lib/cms";
import { PreviewTemplateProps } from "@/lib/types";
import { useStyleLinker } from "@/hooks";
import MainPreview from "../main-preview";

export function CompendiumPreviewTemplate(
  props: PreviewTemplateComponentProps,
) {
  const data = props.entry.get("data").toJS() as Compendium;
  if (!data) return null;
  return <CompendiumPreview data={data} {...props} />;
}

export default function CompendiumPreview({
  data,
  ...props
}: PreviewTemplateProps<Compendium>) {
  useStyleLinker(props);

  return (
    <BaseTemplatePreview>
      <MainPreview>
        <FormsContextProvider>
          <CompendiumProvider cardDisabled>
            <CompendiumPagePreview collections={data.collections} />
          </CompendiumProvider>
        </FormsContextProvider>
      </MainPreview>
    </BaseTemplatePreview>
  );
}
