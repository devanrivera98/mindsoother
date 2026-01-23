import { ClipLoader } from "react-spinners";

export default function LoadingIcon({ loading }: { loading: boolean }) {
  return <ClipLoader color="#099576" size={50} loading={loading} />;
}
