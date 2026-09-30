import CMS from "decap-cms-app";
import InfoPagePreview from "./info/info-page-preview";

CMS.init();
CMS.registerPreviewStyle("admin/global.css");
CMS.registerPreviewTemplate("homePage", InfoPagePreview);

export default function CMSCore() {
  return null;
}
