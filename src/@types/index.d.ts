declare module "*.module.scss" {
  const classes: { [key: string]: string };
  export default classes;
}
// window
interface Window {
  __sdk__: any;
}
