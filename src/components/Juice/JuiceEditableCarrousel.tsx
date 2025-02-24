import { JuiceEditableCarrouselProps } from "../../models/Juice";
import { JuiceEditable } from "./JuiceEditable";

export const JuiceEditableCarrousel: React.FC<JuiceEditableCarrouselProps> = ({
    juices,
    handleDelete,
    handleEdit
}) => {
    return (
        <div className="grid grid-flow-col auto-cols-max overflow-x-scroll gap-3 m-4 pb-2.5">
        {juices.map(juice => (
            <JuiceEditable key={juice.name} juice={juice} handleDelete={handleDelete} handleEdit={handleEdit}/>
        ))}
        </div>
    );
}