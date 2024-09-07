import { LoaderCircle } from "lucide-react";

const Loader: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex items-center gap-2">
        <p>Logging In</p>
        <LoaderCircle className="h-4 w-4 animate-spin" />
      </div>
    </div>
  );
};

export default Loader;
