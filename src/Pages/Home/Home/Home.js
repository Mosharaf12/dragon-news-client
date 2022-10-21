import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCart from '../../Shared/NewsSummaryCart/NewsSummaryCart';

const Home = () => {
    const allNews = useLoaderData();
    return (
        <div>
            <h2>dragon news home : {allNews.length}</h2>
            {
                allNews.map(news => <NewsSummaryCart
                    key={news._id}
                    news={news}
                >
                    
                </NewsSummaryCart>)
            }
        </div>
    );
};

export default Home;