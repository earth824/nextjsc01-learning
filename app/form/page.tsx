'use client';

import { submit, submitWithActionState } from '@/libs/actions';
import { FormState } from '@/types';
import clsx, { ClassValue } from 'clsx';
import { useRouter } from 'next/navigation';
import { useActionState } from 'react';
import { twMerge } from 'tailwind-merge';

// error: { email: 'email is required', firstName: 'first name is req', age: 'age mus be a number' }

const initial: FormState = {
  success: false,
  formData: new FormData(),
  message: ''
};

export default function Form() {
  // (prevState, formData) => nextState
  const [state, formAction, isPending] = useActionState(submitWithActionState, initial);
  const router = useRouter();

  if (state.success) {
    // router.push('/');
    return;
  }

  console.log(state);

  const email = state.formData.get('email');
  const firstName = state.formData.get('firstName');
  const age = state.formData.get('age');

  return (
    <form action={formAction} method="POST" className="grid gap-6 mt-8">
      <div>
        <input
          name="email"
          type="text"
          placeholder="Email"
          className={cn('border border-gray-300 px-3 py-1.5', state.error?.email && 'border-red-500')}
          defaultValue={isString(email) ? email : ''}
        />
        {state.error?.email &&
          state.error?.email.map(el => (
            <p className="text-red-500" key={el}>
              {el}
            </p>
          ))}
      </div>
      <input
        name="firstName"
        type="text"
        placeholder="FirstName"
        className="border border-t-gray-300 px-3 py-1.5"
        defaultValue={isString(firstName) ? firstName : ''}
      />
      <input
        name="age"
        type="text"
        placeholder="Age"
        className="border border-t-gray-300 px-3 py-1.5"
        defaultValue={isString(age) ? age : ''}
      />
      <button disabled={isPending} className="bg-blue-500 px-4 py-2 cursor-pointer">
        Submit
      </button>
    </form>
  );
}

function isString(data: unknown): data is string {
  return typeof data === 'string';
}

function cn(...input: ClassValue[]) {
  return twMerge(clsx(...input));
}

// const a = 20;
// clsx('bg-red-500', { 'p-8': a > 20 }, 'p-4'); // 'bg-red-500 p-8 p-4'
// twMerge('bg-red-500 p-8 p-4'); // 'bg-red-500 p-4'

// handleSubmit
// const [data, setData] = useState([]);
// const [loading, setLoading] = useState(false);
// async function handleSubmit(e) {
//   e.preventDefault()
//   setLoading(true)
//   await axios.post('/todo', {title: ''})
//   setLoading(false)
// }

clsx;
