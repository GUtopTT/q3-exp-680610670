import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { OverviewCards } from "./OverviewCards"
import { CategoryCards } from "./CategoryCards"

export function DashboardTabs() {
  return (
    <Tabs defaultValue="overview" className="w-full">
      
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="category">By Category</TabsTrigger>
      </TabsList>

      
      <TabsContent value="overview">
        <OverviewCards />
      </TabsContent>
      <TabsContent value="category">
        <CategoryCards />
      </TabsContent>
    </Tabs>
  )
}
