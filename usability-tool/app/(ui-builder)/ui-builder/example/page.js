import UIBuilder from "@/components/ui-builder/UIBuilder";

const scenario = require("/lib/UIBuilder/scenario-ExampleScenario.json");

export default function UIBuilderPage(){
  return (
    <UIBuilder scenario={scenario} widgetData={scenario.widgetData}/>
  )
}