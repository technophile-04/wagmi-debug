import { ConnectButton } from "../components/ConnectButton";
import { Connected } from "../components/Connected";
import { WriteContract } from "../components/WriteContract";

export function Page() {
  return (
    <>
      <h1>wagmi + RainbowKit + Next.js</h1>

      <ConnectButton />

      <Connected>
        <h2>Write Contract</h2>
        <WriteContract />
      </Connected>
    </>
  );
}

export default Page;
