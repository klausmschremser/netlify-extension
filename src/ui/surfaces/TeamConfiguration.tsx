import {
  Card,
  CardLoader,
  CardTitle,
  Checkbox,
  Form,
  FormField,
  FormFieldSecret,
  TeamConfigurationSurface,
} from "@netlify/sdk/ui/react/components";
import { useNetlifySDK } from "@netlify/sdk/ui/react";
import { TeamConfigSchema } from "../../schema/team-config.js";
import { trpc } from "../trpc.js";
import logoImg from "../../assets/netlify-logo.png";

export const TeamConfiguration = () => {
  const sdk = useNetlifySDK();
  const trpcUtils = trpc.useUtils();
  const teamSettingsQuery = trpc.teamSettings.query.useQuery();
  const teamSettingsMutation = trpc.teamSettings.mutate.useMutation({
    onSuccess: async () => {
      await trpcUtils.teamSettings.query.invalidate();
    },
  });

  if (teamSettingsQuery.isLoading) {
    return <CardLoader />;
  }

  return (
    <TeamConfigurationSurface>
      <Card>
        <img src={logoImg} />
        <CardTitle>No config necessary for {sdk.extension.name}</CardTitle>
        <Form
          defaultValues={
            teamSettingsQuery.data ?? {
              exampleString: "",
              exampleSecret: "",
              exampleBoolean: false,
              exampleNumber: 123,
            }
          }
          schema={TeamConfigSchema}
          onSubmit={teamSettingsMutation.mutateAsync}
        >
        </Form>
      </Card>
    </TeamConfigurationSurface>
  );
};
