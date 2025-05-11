import prisma from '@/libs/prisma';
import { Suspense } from 'react';

// best practice use zod to validate response

export default async function TodoPage() {
  // 1.Fetch data from external api
  // const data = await fetch('https://jsonplaceholder.typicode.com/users').then(result => result.json());
  // const { data, error, success } = userSchema.safeParse(data)
  // if (!success) throw Error('Invalid data response')

  // const data = await result.json();
  // 2.Fetch data from DB ex. typeorm, prisma
  // await new Promise(resolve => setTimeout(() => resolve(''), 5000));
  // const data = await prisma.todo.findMany();

  // const p1 = new Promise(resolve => setTimeout(() => resolve(''), 5000));
  // const data = await prisma.todo.findMany();
  // const p2 = new Promise(resolve => setTimeout(() => resolve(3), 2000));

  // const [a, totalTodo] = await Promise.all([p1, p2]);

  return (
    <>
      Todo List
      <Suspense fallback={<div className="">Fetching...</div>}>
        <TodoList />
      </Suspense>
      <Suspense fallback={<div>Calculating...</div>}>
        <Total />
      </Suspense>
      {/* {data.map(el => (
        <p>{el.title}</p>
      ))}
      {totalTodo} */}
      Footer
    </>
  );
}

async function Total() {
  const totalTodo = (await new Promise(resolve => setTimeout(() => resolve(3), 2000))) as number;
  return <p>{totalTodo}</p>;
}

async function TodoList() {
  await new Promise(resolve => setTimeout(() => resolve(''), 5000));
  const data = await prisma.todo.findMany();
  return (
    <>
      {data.map(el => (
        <p key={el.id}>{el.title}</p>
      ))}
    </>
  );
}
