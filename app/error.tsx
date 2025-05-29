'use client';

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

// hashFn ===> hash plain text into hashValue(digest)

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div>
      <h1>500</h1>
      <p>Something went wrong !!!</p>
      <button onClick={reset}>Try again</button>
    </div>
  );
}
