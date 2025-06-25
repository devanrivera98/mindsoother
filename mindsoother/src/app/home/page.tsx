import Disclaimer from "./Disclaimer";
import HowItWorks from "./HowItWorks";
import IntroHome from "./IntroHome";
import TherapeuticApproaches from "./TherapeuticApproaches";
import TryTheExplorer from "./TryTheExplorer";

export default function Homepage() {
  return (
    <>
      <IntroHome />
      <HowItWorks />
      <TherapeuticApproaches />
      <TryTheExplorer />
      <Disclaimer />
    </>
  );
}
