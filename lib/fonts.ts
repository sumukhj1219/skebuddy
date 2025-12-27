import { Inter,  Sankofa_Display } from "next/font/google";

export const sankofa = Sankofa_Display({
    variable: "--font-sankofa_display",
    weight: "400",
    subsets: ["latin"]
})

export const inter = Inter({
    variable: "--font-inter",
    weight: "700",
    subsets: ["latin"]
})