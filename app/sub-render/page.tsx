import SubClient from '@/app/sub-render/sub-client';

export default async function SubRender({ searchParams }: { searchParams: Promise<{ test: string }> }) {
  const para = await searchParams;
  return (
    <div>
      <SubServerComponent />
      <SubClient />
    </div>
  );
}

function SubServerComponent() {
  console.log('SubServerComponent');
  return <div>SubServerComponent</div>;
}
