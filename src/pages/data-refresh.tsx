import { Header } from "@/components/layout/header"

export function DataRefresh() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header title="Data Refresh" showCreateButton={false} />

      <main className="flex-1 p-6">
        <div className="text-center py-12">
          <h2 className="text-2xl font-semibold mb-4">Data Refresh</h2>
          <p className="text-muted-foreground">This view is under development.</p>
        </div>
      </main>
    </div>
  )
}
