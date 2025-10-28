export default function DashboardPage() {
  return (
    <main className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">📊 Dashboard</h1>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg font-medium text-gray-700 mb-2">Active Environments</h2>
          <p className="text-3xl font-bold text-blue-600">5</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg font-medium text-gray-700 mb-2">Pending Requests</h2>
          <p className="text-3xl font-bold text-yellow-500">2</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg font-medium text-gray-700 mb-2">Last Deployment</h2>
          <p className="text-gray-600">Oct 25, 2025 – 14:42</p>
        </div>
      </section>
    </main>
  );
}
