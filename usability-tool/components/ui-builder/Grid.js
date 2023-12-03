import { useDroppable } from "@dnd-kit/core"

import styles from "@/styles/UIBuilder.module.scss";
import { getContextSuite } from "./UIBuilderContextProvider";

import DraggableComponent from "./DraggableComponent";
import BoneSelector from "./BoneSelector";

export default function Grid(props){

  const {gridWidgets} = getContextSuite();

  const {isOver, setNodeRef} = useDroppable({
    id: 'UIBuilderGrid',
  });

  return (
    <div ref={setNodeRef} className={styles.gridBody}>
      {gridWidgets.length > 0 && gridWidgets.map((widget, index) => (
        <DraggableComponent id={widget.id} widget={widget}>
          <BoneSelector type={widget.bone}/>
        </DraggableComponent>
      ))}
    </div>
  )
}