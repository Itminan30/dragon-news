import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';
import useTitle from '../../../hooks/useTitle';

const Category = () => {
    const { id } = useParams();
    const categoryNews = useLoaderData();
    useTitle("Home")


    return (
        <div>
            {parseInt(id) === 0 ?  <h2 className='mb-4'>Dragon News</h2> : <h2 className='mb-4'>This Category has {categoryNews.length} news</h2>}
            {
                categoryNews.map(news => <NewsCard
                    key={news._id}
                    news={news}
                ></NewsCard>)
            }
        </div>
    );
};

export default Category;