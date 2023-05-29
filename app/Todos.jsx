import React from 'react'
import { TodoItem } from '@/components/ServerComponents'
import { cookies } from 'next/headers'

const fetchTodo = async (token) => {
    try {
        const res = await fetch(`${process.env.URL}/api/mytask`, {
            cache: "no-cache", // SSR
            headers: {
                cookie: `token=${token}`,
            }
        })

        const data = await res.json()

        if (!data.success) return []
        // console.log(data.tasks);
        return data.tasks

    } catch (error) {
        return []
    }
}

const Todos = async () => {
    const token = cookies().get("token")?.value

    const tasks = await fetchTodo(token)

    return (
        <>
            <section className='todosContainer'>
                {tasks.map((i) => {
                    return <TodoItem title={i.title} description={i.description} id={i._id} key={i._id} completed={i.isCompleted} />
                })}
            </section>
        </>
    )
}

export default Todos