export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    </div>
  );
}
