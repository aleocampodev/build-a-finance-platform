import {Hono} from 'hono'

const app = new Hono()

app.get('/', (c) => c.json('list authors'))
app.post('/', (c) => c.json('create an author', 201))
app.get('/:id', (c) => c.json(`get ${c.req.param('id')}`))
app.delete('/:id', (c) => c.json(`delete ${c.req.param('id')}`))

export default app
