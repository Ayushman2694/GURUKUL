export default function PageNotFound() {
  return (
    <div className="flex flex-col items-center w-full justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
        <p className="text-2xl font-semibold text-gray-800 mb-2">
          Oops! Page not found
        </p>
        <p className="text-lg text-gray-600 mb-8">
          The page you’re looking for doesn’t exist.
        </p>
      </div>
      <div className="mt-12"></div>
    </div>
  );
}
