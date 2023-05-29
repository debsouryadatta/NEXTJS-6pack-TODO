import React, { Suspense } from 'react'
import AddTodoForm from './AddTodoForm'
import Todos from './Todos'

const Page = async () => {
  return (
    <div className='container'>
      <AddTodoForm />

      <Suspense fallback={<div>Loading...</div>}>
        <Todos />
      </Suspense>
    </div>
  )
}

export default Page
