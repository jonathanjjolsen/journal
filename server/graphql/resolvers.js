import Entry from '../models/Entry.js'; //Importing the Entry model

const resolvers = {
    Query: {
        async getEntries(_, {entryID}) {
            return await Entry.findById(entryID);
        }
    },
    Mutation: {
        createEntry: async (_, { content }) => {
          const entry = new Entry({
            content,
            createdAt: new Date().toISOString(),
          });
          await entry.save();
          return entry;
        },
      },
};

export default resolvers;