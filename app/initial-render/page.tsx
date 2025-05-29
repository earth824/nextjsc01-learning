import ClientComponent from '@/app/initial-render/client-component';
import ServerComponent from '@/app/initial-render/server-component';
import { unstable_noStore } from 'next/cache';
// import { cookies } from 'next/headers';

// export const dynamic = 'force-dynamic';
// export const revalidate = 0;
export const revalidate = 30;

export default async function InitialRender() {
  // const cookiesStore = await cookies();
  // const a = cookiesStore.get('lllll');
  // unstable_noStore();

  const data = await fetch('https://jsonplaceholder.typicode.com/todos', { cache: 'no-store' }).then(response =>
    response.json()
  );

  return (
    <div>
      {data.length}
      <ServerComponent />
      <ClientComponent />
    </div>
  );
}

//            Static                                Dynamic
//            build time                            request time
//            content does not change               data frequently change, shopping cart, search page
//            faster host on cdn                    slower
//            ISR (incremental static regeneration)
//            regenerate peoridically
// initla bulid 0 ===> generate static content (page v.1)
// within 0 to 30 ===> get old content (page v.1)
// after 30 ===> first request still get old content (page v.1) and page rebuild in the background (page v.2)    stale while revalidate
// within 30 aftet firtst request from above (page v.2)
// after 30 ===> first request still get old content (page v.2) and page rebuild in the background (page v.3)
// depend on how often content on the page change
