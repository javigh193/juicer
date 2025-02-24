import { JuiceCarrouselMinimalProps } from "../../models/Juice";
import { JuiceMinimal } from "./JuiceMinimal";

export const JuiceMinimalCarrousel: React.FC<JuiceCarrouselMinimalProps> = ({
    juices,
}) => {
    return (
        <>
        <div data-cy-id="juice-carrousel-minimal-title" className="flex align-middle justify-center text-xl font-bold">
            <h3>Check the creations of our juice loving community!</h3>
        </div>
        <div className="grid grid-flow-col auto-cols-max overflow-x-scroll gap-3 m-4 pb-2.5">
            {juices.map(juice => (
                <JuiceMinimal key={juice.name} juice={juice} />
            ))}
        </div>
        </>
    );
}