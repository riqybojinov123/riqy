import { Hono } from 'hono'

type Todo = { id: number; message: string; done: boolean }

const app = new Hono()
let todos: Todo[] = [
  { id: 1, message: 'Membaca', done: false },
  { id: 2, message: 'Menulis', done: true },
  { id: 3, message: 'Berenang', done: false },
  { id: 4, message: 'Berlari', done: true },
]

app.get('/', c => c.text('Ok'))
app.get('/todos', c => c.json(todos))

app.get('/todos/:id', c => {
  const todo = todos.find(t => t.id === Number(c.req.param('id')))
  return todo ? c.json(todo) : c.json({ message: 'Todo tidak ditemukan' }, 404)
})

app.post('/todos', async c => {
  const body = await c.req.json<{ message?: string; done?: boolean }>()
  if (!body.message || typeof body.message !== 'string')
    return c.json({ message: 'Field message wajib diisi' }, 400)

  const todo: Todo = {
    id: Math.max(0, ...todos.map(t => t.id)) + 1,
    message: body.message,
    done: Boolean(body.done),
  }
  todos.push(todo)
  return c.json(todo, 201)
})

app.put('/todos/:id', async c => {
  const i = todos.findIndex(t => t.id === Number(c.req.param('id')))
  if (i < 0) return c.json({ message: 'Todo tidak ditemukan' }, 404)

  const body = await c.req.json<{ message?: string; done?: boolean }>()
  todos[i] = {
    ...todos[i],
    message: body.message ?? todos[i].message,
    done: typeof body.done === 'boolean' ? body.done : todos[i].done,
  }
  return c.json(todos[i])
})

app.delete('/todos/:id', c => {
  const i = todos.findIndex(t => t.id === Number(c.req.param('id')))
  if (i < 0) return c.json({ message: 'Todo tidak ditemukan' }, 404)

  const [data] = todos.splice(i, 1)
  return c.json({ message: 'Todo berhasil dihapus', data })
})

export default app
