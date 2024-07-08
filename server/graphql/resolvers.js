import Entry from '../models/Entry.js'; // Import the Entry model

const resolvers = {
  Query: {
    async getEntries() {
      return await Entry.find();
    }
  },
  Mutation: {
    async createEntry(_, { body }) {
      if (!body) {
        throw new Error('Entry body cannot be empty');
      }
      const newEntry = new Entry({
        body,
        createdAt: new Date().toISOString()
      });

      return await newEntry.save(); // MongoDB save method
    },
    async deleteEntry(_, { entryId }) {
      await Entry.findByIdAndDelete(entryId);
      return 'Entry deleted';
    },
    async editEntry(_, { entryId, body }) {
      return await Entry.findByIdAndUpdate(entryId, { body }, { new: true });
    }
  }
};

export default resolvers;