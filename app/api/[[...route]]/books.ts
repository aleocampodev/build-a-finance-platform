import {Hono} from 'hono'

const app = new Hono()

app.get('/', (c) => c.json('list books'))
app.post('/', (c) => c.json('create an book', 201))
app.get('/:id', (c) => c.json(`get book${c.req.param('id')}`))
app.delete('/:id', (c) => c.json(`delete ${c.req.param('id')}`))

export default app
