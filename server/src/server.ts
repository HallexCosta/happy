import { app } from './app'

import './database/connection'

app.listen(3333, () => console.log('> Listening app on port 3333'))