import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"
  import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

  export default function DrawerButton({trigger,title,content}) {
    return (
        <Drawer >
        <DrawerTrigger>{trigger}</DrawerTrigger>
        <DrawerContent classname="h-56" >
          <DrawerHeader  >
            <DrawerTitle>{title}</DrawerTitle>
            <DrawerDescription>
                <div className="text-left text-gray-800 mb-10" >
                    <div className="py-2" >
                <Label htmlFor="email">From</Label>
                <Input className="text-xl" id="text" placeholder="e.g. Nagpur" />
                    </div>
                    <div className="py-2" >
                <Label htmlFor="email">To</Label>
                <Input className="text-xl" id="text" placeholder="e.g. Mumbai" />
                    </div>
                    <div className="py-2" >
                <Label htmlFor="email">From</Label>
                <Input id="text" placeholder="" />
                    </div>
                </div>
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            {/* <Button>Submit</Button> */}
            <DrawerClose>
              {/* <Button variant="outline">Cancel</Button> */}
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      
    )
  }