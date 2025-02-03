import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CPMIRegistration } from "@/components/cpmi/CPMIRegistration"
import { CPMIDocuments } from "@/components/cpmi/CPMIDocuments"
import { CPMIInterviews } from "@/components/cpmi/CPMIInterviews"
import { CPMIJobs } from "@/components/cpmi/CPMIJobs"
import { CPMIExport } from "@/components/cpmi/CPMIExport"

export default function CPMI() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">CPMI Management</h1>
      
      <Tabs defaultValue="registration" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="registration">Registration</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
          <TabsTrigger value="interviews">Interviews</TabsTrigger>
          <TabsTrigger value="jobs">Job Listings</TabsTrigger>
          <TabsTrigger value="export">Export Data</TabsTrigger>
        </TabsList>
        
        <TabsContent value="registration">
          <CPMIRegistration />
        </TabsContent>
        
        <TabsContent value="documents">
          <CPMIDocuments />
        </TabsContent>
        
        <TabsContent value="interviews">
          <CPMIInterviews />
        </TabsContent>
        
        <TabsContent value="jobs">
          <CPMIJobs />
        </TabsContent>
        
        <TabsContent value="export">
          <CPMIExport />
        </TabsContent>
      </Tabs>
    </div>
  )
}