export default function RequestsPage() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Requests</h1>
      <p className="text-gray-600 mb-6">
        View and manage infrastructure or environment requests.
      </p>

      <div className="border rounded-lg p-4 bg-white shadow">
        <p className="text-sm text-gray-500">No requests yet. Start by creating a new one.</p>
      </div>
    </main>
  );
}
