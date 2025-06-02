const { MongoClient } = require('mongodb');

// Replace with your MongoDB Atlas connection string
const MONGODB_URI = 'mongodb+srv://maleek:maleek2005@cluster0.mg78e1y.mongodb.net/';
const DB_NAME = 'lessonshop';

const lessons = [
  { subject: 'Mathematics', price: 50, location: 'London', spaces: 5, icon: '/images/math.jpeg' },
  { subject: 'Physics', price: 60, location: 'Manchester', spaces: 5, icon: '/images/physics.jpeg' },
  { subject: 'Chemistry', price: 55, location: 'Birmingham', spaces: 5, icon: '/images/chemistry.jpeg' },
  { subject: 'Biology', price: 45, location: 'Liverpool', spaces: 5, icon: '/images/biology.jpeg' },
  { subject: 'English', price: 40, location: 'Leeds', spaces: 5, icon: '/images/english.jpeg' },
  { subject: 'History', price: 35, location: 'Sheffield', spaces: 5, icon: '/images/history.jpeg' },
  { subject: 'Geography', price: 30, location: 'Bristol', spaces: 5, icon: '/images/geography.jpeg' },
  { subject: 'Computer Science', price: 70, location: 'London', spaces: 5, icon: '/images/computer.jpeg' }
];

async function seed() {
  const client = new MongoClient(MONGODB_URI, { useUnifiedTopology: true });
  try {
    await client.connect();
    const db = client.db(DB_NAME);
    const collection = db.collection('lessons');
    await collection.deleteMany({});
    const result = await collection.insertMany(lessons);
    console.log(`${result.insertedCount} lessons inserted.`);
  } catch (err) {
    console.error('Seeding failed:', err);
  } finally {
    await client.close();
  }
}

seed();