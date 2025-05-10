import { ReactNode } from 'react';

export default function LoginLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <div>LoginLayout</div>
      {children}
    </div>
  );
}
