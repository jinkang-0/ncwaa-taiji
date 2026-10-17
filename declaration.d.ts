declare module "*.scss";
declare module "*.css";
declare module "swiper/css";
declare module "swiper/css/*";

declare module "*.yml" {
  const value: Record<string, unknown>;
  export default value;
}

declare module "*.yaml" {
  const value: Record<string, unknown>;
  export default value;
}
