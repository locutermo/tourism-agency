'use server'
 
import { cookies } from 'next/headers'
 
export async function create(name,data) {  
  cookies().set({
    name: name,
    value: typeof data == Object ? JSON.stringify(data) : data,
    httpOnly: true,
    path: '/',
  })
}

