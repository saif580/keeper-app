import React from 'react';
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Note from './Note.jsx'
import notes from '../notes.js';

function App() {
    return <div>
        <Header />
        {notes.map((data) => {
            return (
                <Note
                    key={data.key}
                    title={data.title}
                    content={data.content}
                />
            )
        })}
        <Footer />
    </div>
}

export default App;