import React, { useState, useEffect } from 'react';

const NewEntry = () => {
    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
        const date = new Date();
        const formattedDate = date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
        setCurrentDate(formattedDate);
    }, []);

    return (
        <div>
            <h2>New Entry</h2>
            <form>
                <label htmlFor="content">{currentDate}</label>
                <textarea id="content" className='text-box' name="content"></textarea>
                <button type="submit">Save</button>
            </form>
        </div>
    );
};

export default NewEntry;
