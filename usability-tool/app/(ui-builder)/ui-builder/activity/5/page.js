import UIBuilder from "@/components/ui-builder/UIBuilder";

const scenario = require("/lib/UIBuilder/scenario-idk.json");

export default function UIBuilderPage() {
  return (
    <UIBuilder
      scenario={scenario}
      widgetData={scenario.widgetData}
      heuristic={5}
    />
  );
}
