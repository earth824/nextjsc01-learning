'use server';

import { FormState } from '@/types';
import { isRedirectError } from 'next/dist/client/components/redirect-error';
import { redirect } from 'next/navigation';
import { cache } from 'react';
import { z, ZodError } from 'zod';

export async function submit(data: FormData) {
  console.log('sumbitted');
  console.log(data);
}

const formSchema = z.object({
  email: z.string().email(),
  firstName: z.string().min(1),
  age: z.coerce.number().positive()
});

export async function submitWithActionState(prevState: FormState, formData: FormData): Promise<FormState> {
  try {
    const value = {
      email: formData.get('email'),
      firstName: formData.get('firstName'),
      age: formData.get('age')
    };
    const result = formSchema.parse(value);

    // return { success: true, message: 'Success submit' };
    redirect('/');
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }
    if (error instanceof ZodError) {
      return { formData, success: false, message: 'Validation Error', error: error.flatten().fieldErrors };
    }
    return { success: false, formData, message: 'Something went wrong' };
  }
}

async function fetchTodo() {
  // const result = await axios.get(SERVER_URL)
  // const result = await prisma.todo.findMany()
  // return result
}

const cacheFetchTodo = cache(fetchTodo);

// export const revalidate = 60000 (ISR)
// export const dynamic = 'force-dynamic'
// export const revalidate = 0
// revalidatePath('/product'), revalidateTag('')
// const result = fetch('SERVER_URL/product', { tag: 'fetch-product' })
// const result1 = fetch('SERVER_URL/aaaa'
// function updateProduct(id:string) { revalidateTag('fetch-product')   }

// function ProductPage() {
// unstable_nostore()
// const result = await fetch(SERVER_URL) // v.14 AUTOMATIC CACHE, v.15 NO CACHE
// const result = await fetch(SERVER_URL, { cache: 'force-cache' })
// }

/// Authentication
// 1.varify username and email from user table ==session_id qwerty=> user (id) 12345
// 2.generate random unique string or token ===> zxcvbn
// 3.store session id in table ==> table session (column userId, sessionId, expireTime) record ===> 12345 zxcvbn
// 4.sent session id back to client ==> cookie.set('session_id', 'zxcvbn')

// Verfy Authentication
// 1. GET session id from cookie ===> cookie.get('session_id') ==> 'zxcvbn' OR null(redirect /login) OR cookie expire(redirect /login)
// 2. Query from table sessiooon ===>   12345 zxcvbn //SELECT * FROM session WHERE session_id = 'zxcvbn'
// 3. sent response by user id 12345 // QURERY FROM profile table with userId = 12345

// 1. verify username and password from user table ===> user object (id) 12345
// 2. generate jwt token with payload(user id(12345)) ===>
// 3. sent response with jwt token ===> aaaaa.bbbb.cccc ===>  cookie.set('access_token', 'aaaaa.bbbb.cccc') OR json response { access_token: 'aaaaa.bbbb.cccc' }

// 1. get jwt from cookie ===> cookie.get('access_token') ===> aaaaa.bbbb.cccc    or extract jwt from authorization header ===> 'Bearer jwt'.split(' ')[1] ===> aaaaa.bbbb.cccc
// 2. verify jwt token ===> verify  aaaaa.bbbb.cccc ====> success or not ===> if success ====> payload (user id(12345))
// 3. sent response by user id 12345 // QURERY FROM profile table with userId = 12345
