import { JuiceMinimalProps } from "../../models/Juice"

export const JuiceMinimal: React.FC<JuiceMinimalProps> = ({juice}) => {
  const {name, creatorName} = juice

  return (
    <div data-cy-id="juice-minimal">
      <div
        className="rounded-lg bg-lime-100 pb-3 w-45">
        <img src="applejuice.jfif" alt={`image of a ${name}`} className="rounded-t-lg h-40 w-45 object-cover object-top"/>
        <h3 className="mb-1 mt-2 text-xl font-semibold text-dark text-center px-1">
          {name}
        </h3>
        <div className="text-center px-1">
          <p data-cy-id="creator-name">Created by {creatorName}</p>
        </div>
      </div>
    </div>
  )
}
