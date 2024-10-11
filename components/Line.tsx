"use client";

import { TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart2";

export const description = "A multiple line chart showing influencers and editors";

const chartData = [
  { year: "2021", influencers: 1.5, editors: 0.1 },  // 1.5 million influencers, 0.8 million editors
  { year: "2022", influencers: 1.8, editors: 0.2 }, // 1.8 million influencers, 0.75 million editors
  { year: "2023", influencers: 2.0, editors: 0.3 },  // 2.0 million influencers, 0.9 million editors
  { year: "2024", influencers: 2.2, editors: 0.4 },  // 2.2 million influencers, 0.7 million editors
  { year: "2025", influencers: 2.5, editors: 0.5 }, // 2.5 million influencers, 0.65 million editors
  { year: "2026", influencers: 3.0, editors: 0.6 },  // 3.0 million influencers, 0.6 million editors
];

const chartConfig = {
  influencers: {
    label: "Influencers (in millions)",
    color: "white",
  },
  editors: {
    label: "Editors (in millions)",
    color: "white",
  },
} satisfies ChartConfig;

export function Component() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Influencers vs. Premium Editors Supply</CardTitle>
        <CardDescription>2021 - 2026</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="year"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              stroke="white" // Set XAxis labels to white
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent style={{ color: 'white' }} />} /> {/* Ensure tooltip text is white */}
            <Line
              dataKey="influencers"
              type="monotone"
              stroke="white"
              strokeWidth={3}
              dot={false}
            />
            <Line
              dataKey="editors"
              type="monotone"
              stroke="red"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm text-white">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by 8.4% in influencers this year <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-white">
              Showing total influencers and editors supply for the last 6 years
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
