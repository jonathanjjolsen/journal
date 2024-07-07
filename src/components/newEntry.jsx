import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_ENTRY } from '../utils/mutations';



const NewEntry = () => {
    const [currentDate, setCurrentDate] = useState('');
    const [content, setContent] = useState('');
    const [addEntry, { data, loading, error }] = useMutation(ADD_ENTRY);

    useEffect(() => {
        const date = new Date();
        const formattedDate = date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
        setCurrentDate(formattedDate);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addEntry({ variables: { content } });
            setContent(''); // Clear the textarea after submission
        } catch (err) {
            console.error('Error adding entry:', err);
        }
    };

    return (
        <div>
            <h2>New Entry</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="content">{currentDate}</label>
                <textarea
                    id="content"
                    className='text-box'
                    name="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                ></textarea>
                <button type="submit">Save</button>
            </form>
            {loading && <p>Saving entry...</p>}
            {error && <p>Error: {error.message}</p>}
            {data && <p>Entry saved successfully!</p>}
        </div>
    );
};

export default NewEntry;
