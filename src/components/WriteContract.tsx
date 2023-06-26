"use client";

import { BaseError } from "viem";
import { useContractWrite, useWaitForTransaction } from "wagmi";

import { wagmiContractConfig } from "./contracts";
import { stringify } from "../utils/stringify";

export function WriteContract() {
  const { writeAsync, data, error, isLoading, isError } = useContractWrite({
    ...wagmiContractConfig,
    functionName: "setGreeting",
    args: ["Hello"],
    value: "0.1",
  });
  const {
    data: receipt,
    isLoading: isPending,
    isSuccess,
  } = useWaitForTransaction({ hash: data?.hash });

  return (
    <>
      <h3>Mint a wagmi</h3>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          await writeAsync();
        }}
      >
        <button disabled={isLoading} type="submit">
          Mint
        </button>
      </form>

      {isLoading && <div>Check wallet...</div>}
      {isPending && <div>Transaction pending...</div>}
      {isSuccess && (
        <>
          <div>Transaction Hash: {data?.hash}</div>
          <div>
            Transaction Receipt: <pre>{stringify(receipt, null, 2)}</pre>
          </div>
        </>
      )}
      {isError && <div>{(error as BaseError)?.shortMessage}</div>}
    </>
  );
}
