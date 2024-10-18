"use client"
import { TrendingUp } from "lucide-react"
import { CartesianGrid, LabelList, Line, LineChart } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A line chart with a custom label"

const chartData = [
    { browser: "chrome", visitors: 100, fill: "white" },
    { browser: "safari", visitors: 110, fill: "white" },
    { browser: "firefox", visitors: 120, fill: "white" },
    { browser: "edge", visitors: 90, fill: "white" },
    { browser: "other", visitors: 100, fill: "white" },
  ];
  
  

const chartConfig = {
  visitors: {
    label: "Visitors",
    color: "white",
  },
  chrome: {
    label: "Chrome",
    color: "white",
  },
  safari: {
    label: "Safari",
    color: "white",
  },
  firefox: {
    label: "Firefox",
    color: "white",
  },
  edge: {
    label: "Edge",
    color: "white",
  },
  other: {
    label: "Other",
    color: "white",
  },
} satisfies ChartConfig

export function RoadMap() {
  return (


    
    
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 24,
              left: 24,
              right: 24,
            }}
          >

            <Line
              dataKey="visitors"
              type="natural"
              stroke="white" // Change line color to white
              strokeWidth={2}
              dot={{
                fill: "white", // Change dot color to white
              }}
              activeDot={{
                r: 6,
              }}
            >
              <LabelList
                position="top"
                offset={12}
                className="text-white"
                fontSize={12}
                dataKey="browser"
                formatter={(value: keyof typeof chartConfig) =>
                  chartConfig[value]?.label
                }
              />
            </Line>
          </LineChart>
        


  )
}
