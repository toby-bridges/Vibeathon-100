import GoogleAnalytics from "./google-analytics";
import OpenPanelAnalytics from "./open-panel-analytics";
import { PlausibleAnalytics } from "./plausible-analytics";
import { VercelAnalyticsComponent } from "./vercel-analytics";

export function Analytics() {
  if (process.env.NODE_ENV !== "production") {
    return null;
  }

  return (
    <>
      {/* Vercel Analytics - 默认启用 */}
      <VercelAnalyticsComponent />

      {/* openpanel analytics - 备用方案 */}
      <OpenPanelAnalytics />

      {/* google analytics */}
      <GoogleAnalytics />

      {/* plausible analytics */}
      <PlausibleAnalytics />
    </>
  );
}
