import { useEffect } from "react";
import { useRouter } from "next/navigation";
import useUser from "@/providers/user/use-user-context";
import Loader from "@/components/common/loader";

const ProtectedLayout: React.FC<{ children: React.ReactElement }> = ({
  children,
}) => {
  const { loading, user } = useUser();
  const router = useRouter();

  useEffect(() => {
    // Ensure user data is fetched before redirection
    if (!loading && !user) {
      router.push("/login");
    }
  }, [loading, user, router]);

  if (loading) {
    return <Loader />;
  }

  if (user) {
    return <>{children}</>;
  }

  return null;
};

export default ProtectedLayout;
