export type Juice = {
    name: string
    fruits: string[]
    creatorName: string
}

export interface JuiceMinimalProps {
    juice: Juice,
}

export interface JuiceCarrouselMinimalProps {
    juices: Juice[],
}

export interface JuiceEditableProps {
    juice: Juice,
    handleDelete: (name: string) => void
    handleEdit: (name: string, fruits: string, creatorName: string) => void
}

export interface JuiceEditableCarrouselProps {
    juices: Juice[]
    handleDelete: (name: string) => void
    handleEdit: (name: string, fruits: string, creatorName: string) => void
}
  