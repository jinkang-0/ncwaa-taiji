import "@/app/(root)/globals.scss";
import "swiper/css";
import "swiper/css/mousewheel";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { kaushanScript, sen } from "@/lib/fonts";

export default function BaseTemplatePreview({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`siteContainer ${kaushanScript.variable} ${sen.variable}`}>
      {children}
    </div>
  );
}
