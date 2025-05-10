import LoginButton from '@/components/login-button';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login Page 888',
  description: 'This is the best gambling website in the world'
};

export default function LoginPage() {
  return (
    // <div className={cssClass['flex-center']}>
    <div className="flex-center">
      Login Page
      <LoginButton />
    </div>
  );
}

// const button = document.querySelector('button')
// button.addEventListener('click', handdleClick)
