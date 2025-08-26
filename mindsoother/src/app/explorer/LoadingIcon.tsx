import { ClipLoader } from "react-spinners";

export default function LoadingIcon({ loading }: { loading: boolean }) {
  return <ClipLoader color="#4f46e5" size={50} loading={loading} />;
}
