import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import EditorsInsights from '../EditorsInsights/EditorsInsights';

const News = () => {
    const news = useLoaderData();
    const { image_url, title, details, category_id } = news
    return (
        <div>
            <h2>Dragon News</h2>
            <Card className='border container'>
                <Card.Body>
                    <Card.Img src={image_url}></Card.Img>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{details}</Card.Text>
                    <Link to={`/category/${category_id}`}>
                        <Button variant="danger"><FaArrowLeft></FaArrowLeft> All news in this category</Button>
                    </Link>

                </Card.Body>
            </Card>

            <EditorsInsights></EditorsInsights>
        </div>
    );
};

export default News;