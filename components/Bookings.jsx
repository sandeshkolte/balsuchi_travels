import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarDays, MapPin, User, Phone, Car } from 'lucide-react'

export default function MobileTravelBookingCard({
  departureDate,
  from,
  to,
  name,
  phone,
  via
}) {
  return (
    <Card className="w-full max-w-[300px] mx-auto">
      <CardHeader className="pb-2">
        {/* <CardTitle className="text-lg font-bold text-center">Booking Details</CardTitle> */}
      </CardHeader>
      <CardContent className="grid grid-cols-[auto,1fr] gap-x-3 gap-y-2 items-center text-sm">
        <CalendarDays className="h-4 w-4 text-muted-foreground" />
        <p>{departureDate}</p>
        
        <MapPin className="h-4 w-4 text-muted-foreground" />
        <p>{from} → {to}</p>
        
        <User className="h-4 w-4 text-muted-foreground" />
        <p className="truncate" title={name}>{name}</p>
        
        <Phone className="h-4 w-4 text-muted-foreground" />
        <p>{phone}</p>
        
        <Car className="h-4 w-4 text-muted-foreground" />
        <p>{via}</p>
      </CardContent>
    </Card>
  )
}

