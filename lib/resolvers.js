'use strict'

const connectDB = require('./db');
const { ObjectID } = require('mongodb')

// Setting up Resolvers

module.exports = {
  Query: {
    getCourses: async () => {
      let db
      let courses = []
      try {
        db = await connectDB()
        courses = db && await db.collection('courses').find().toArray()
      } catch (error) {
        console.error(error);
      }

      return courses
    },
    getCourse: async (root, { id }) => {
      let db
      let course
      try {
        db = await connectDB()
        course = db && await db.collection('courses').findOne({ _id: ObjectID(id)})
      } catch (error) {
        console.error(error);
      }

      return course

    },
  }
}