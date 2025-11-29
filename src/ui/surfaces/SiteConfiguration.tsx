import {
  Card,
  CardTitle,
  SiteConfigurationSurface,
} from "@netlify/sdk/ui/react/components";
import { useNetlifySDK } from "@netlify/sdk/ui/react";

export const SiteConfiguration = () => {
  const sdk = useNetlifySDK();

  return (
    <SiteConfigurationSurface>
      <Card>
        <CardTitle>No Configuration necessary for {sdk.extension.name}</CardTitle>
        <p></p>
      </Card>
    </SiteConfigurationSurface>
  );
};
