'use client'
import { collection, orderBy, query } from 'firebase/firestore'
import { useCollection } from 'react-firebase-hooks/firestore'
import { useSession } from 'next-auth/react'
import { db } from '../firebase'
import { ArrowDownCircleIcon } from '@heroicons/react/24/solid'

import Message from './Message'

type Props = {
  chatId: string
}

export default function Chat({ chatId }: Props) {
  const { data: session } = useSession()

  const [messages, loading, error] = useCollection(
    session && query(
      collection(db, 'users', session?.user?.email!, 'chats', chatId, 'messages'),
      orderBy('createdAt', 'asc')
    ))
  return <div className="flex-1 overflow]-y-auto overflow-x-hidden">
    {messages?.empty && (
      <>
        <p className="mt-10 text-center text-white">
          Type a prompt in below to get started!
        </p>
        <ArrowDownCircleIcon className="h-10 w-10 mx-auto mt-5 text-white animate-bounce" />
      </>
    )}
    {messages?.docs.map(m => (
      <Message key={m.id} message={m.data()} />
    ))}
  </div>
}

