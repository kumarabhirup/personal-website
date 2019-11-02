import './env'
import * as mongoose from 'mongoose'

mongoose.connect(
  `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTER}.gcp.mongodb.net/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`,
  { useNewUrlParser: true }
)

const db = mongoose.connection

export default db
