import Entry from '../models/Entry.js'; //Importing the Entry model

const resolvers = {
    Query: {
        async getEntries(_, {entryID}) {
            return await Entry.findById(entryID);
        }
    },
    Mutation: {
        async createEntry(_, {body}) {
            const newEntry = new Entry({
                body,
                createdAt: new Date().toISOString()
            });

            return await newEntry.save(); //MongoDB save method
        },
        async deleteEntry(_, {entryId}) {
            await Entry.findByIdAndDelete(entryId);
            return 'Entry deleted';
        },
        async editEntry(_, {entryId, body}) {
            return await Entry.findByIdAndUpdate(entryId, {body}, {new: true});
        }
    }
};

export default resolvers;