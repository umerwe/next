import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"
export function DropdownBtn() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <ChevronDown className="text-gray-400 w-5 h-5" strokeWidth={3} />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-36" align="start">
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        5 adults
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        6 adults
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        7 adults
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}