export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold text-center text-blue-700">
        Self Service UI Assistant
      </h1>
      <p className="mt-4 text-gray-600 text-center">
        Start managing your environments with a visual and intuitive assistant.
      </p>
      <button className="mt-6 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
        Create New Request
      </button>
    </main>
  );
}
