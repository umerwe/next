import MainCard from "@/components/cards/main-card"
import { appartmentsData } from "@/data/appartments-data"
import { propertiesData } from "@/data/properties-data"
import { roomsData } from "@/data/rooms-data"

const ListingPage = () => {
  return (
    <div>
      <MainCard
        isAll={true}
        properties={propertiesData}
        apartments={appartmentsData}
        rooms={roomsData}
      />
    </div>
  )
}

export default ListingPage
