import { Button } from "@/components/ui/button";
import { CheckCheckIcon, XCircle } from "lucide-react";
import Link from "next/link";

export default function ErrorStripe(){
    return(
        <div className="h-screen">
    <div className="mt-32 md:max-w-[50vw] mx-auto my-6">
        <XCircle className="text-red-600 w-16 h-16 mx-auto my-6"/>
        <div className="text-center">
            <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">Payment Error</h3>
            <p className="text-gray-600 my-2">Something went wrong while making the payment</p>
            <Button className="mt-5" asChild>
                <Link href="/">
                    Return to the store
                </Link>
            </Button>
        </div>
    </div>
</div>
    )
}