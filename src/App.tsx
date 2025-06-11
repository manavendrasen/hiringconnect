import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "./components/layout/app-sidebar"
import { HRView } from "./pages/hr-view"
import { LeadershipView } from "./pages/leadership-view"
import { Workflows } from "./pages/workflows"
import { EmployeeView } from "./pages/employee-view"
import { AdminView } from "./pages/admin-view"
import { DataRefresh } from "./pages/data-refresh"

function App() {
  return (
    <Router>
      <SidebarProvider defaultOpen={true}>
        <AppSidebar />
        <SidebarInset>
          <Routes>
            <Route path="/" element={<HRView />} />
            <Route path="/leadership" element={<LeadershipView />} />
            <Route path="/workflows" element={<Workflows />} />
            <Route path="/employee" element={<EmployeeView />} />
            <Route path="/admin" element={<AdminView />} />
            <Route path="/data-refresh" element={<DataRefresh />} />
          </Routes>
        </SidebarInset>
      </SidebarProvider>
    </Router>
  )
}

export default App
