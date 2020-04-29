const { MongoClient, ObjectId } = require('mongodb')
const { bold } = require('kleur')
const { config } = require('../config/index')

const USER = encodeURIComponent(config.dbUser)
const PASSWORD = encodeURIComponent(config.dbPassword)
const DB_NAME = config.dbName

const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@cluster0-8vrd1.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`

class Mongo {
  constructor() {
    this.client = new MongoClient(MONGO_URI, { useUnifiedTopology: true })
    this.database = DB_NAME
  }

  connect() {
    if (!Mongo.connection) {
      Mongo.connection = new Promise((resolve, reject) => {
        this.client.connect((error) => {
          if (error) {
            console.log(bold().red(`[error] couldn't connect to database`))
            reject(error)
          }
          console.log(
            bold().green('[mongo] successfully connected to database')
          )
          resolve(this.client.db(this.database))
        })
      })
    }

    return Mongo.connection
  }

  async getAll(collection, query) {
    const database = await this.connect()
    const response = await database.collection(collection).find(query).toArray()

    return response
  }

  async get(collection, id) {
    const database = await this.connect()
    const response = await database
      .collection(collection)
      .findOne({ _id: ObjectId(id) })

    return response
  }

  async create(collection, data) {
    const database = await this.connect()
    const response = await database.collection(collection).insertOne(data)

    return response.insertedId
  }

  async update(collection, id, data) {
    const database = await this.connect()
    const response = await database
      .collection(collection)
      .updateOne({ _id: ObjectId(id) }, { $set: data }, { upsert: true })

    return response.upsertedId || id
  }

  async delete(collection, id) {
    const database = await this.connect()
    const response = await database
      .collection(collection)
      .deleteOne({ _id: ObjectId(id) })

    // Returns a count with number of deleted elements
    return response.deleteCount ? id : null
  }
}

module.exports = Mongo
