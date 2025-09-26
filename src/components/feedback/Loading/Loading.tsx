import type { TLoading } from "@customTypes/shared";

type TLoadingProps = {
  loading: TLoading;
  error: string | null;
  children: React.ReactNode;
};

const Loading = ({ loading, error, children }: TLoadingProps) => {
  if (loading === "pending") {
    return <p>loading please wait...</p>;
  }
  if (loading === "failed") {
    return <p>{error}</p>;
  }

  return <div>{children}</div>;
};

export default Loading;
