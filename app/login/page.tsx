import LoginButton from '@/components/login-button';
import { Metadata } from 'next';
import image from '@/public/offer.jpg';
import Image from 'next/image';

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
      {/* <img src={image.src} alt="" /> */}
      {/* <Image src={image} alt="test logo" quality={50} />
      <Image src="/offer.jpg" width={1920} height={100} alt="test logo" /> */}
      <div className="relative h-64 w-64 object-contain">
        <Image
          src="https://images.pexels.com/photos/1583582/pexels-photo-1583582.jpeg?auto=compress&cs=tinysrgb&w=600"
          fill
          alt="test logo"
        />
      </div>
    </div>
  );
}

// IMAGE
// 1.Local Image
// 2.Remote Image https://www,pexel...

// const button = document.querySelector('button')
// button.addEventListener('click', handdleClick)

// /login
// function A() {
//   return (
//     <GLobalError>
//       <RootLayout>
//         <Provider>
//           <ErrorBOundary />
//           <NotFoundErrorBoundary>
//             <Suspense> // /app/loading.tsx
//             <MainLayout>
//               <LoginPage>
//                 <Menu />
//                 <ErroBoundary>
//                   <Suspense fallback={<div>Loading</div>}> // app/todo/loading.tsx
//
// <TodoPage>
//    <Suspense>
//       <TodoList />
//    </Suspense>
// </TodoPage>
//                   </Suspense>
//                 </ErroBoundary>
//               </LoginPage>
//             </MainLayout>
//             </Suspense>
//           </NotFoundErrorBoundary>
//         </Provider>
//       </RootLayout>
//     </GLobalError>
//   );
// }
