import Details from "@/components/pages/details/details"

interface DetailsPageProps {
  params: Promise<{
    id: string
  }>
}

export default async function DetailsPage({ params }: DetailsPageProps) {
  const { id } = await params

  return <Details id={id} />
}
