import React from 'react';
import { Card } from 'react-bootstrap';
import { BsBookmark, BsShare, BsFillStarFill } from 'react-icons/bs';
import { FaEye, FaRegStar, FaStar } from 'react-icons/fa';
import { IconContext } from "react-icons";
import { Link } from 'react-router-dom';
import moment from 'moment';
import Rating from 'react-rating';


const NewsCard = ({ news }) => {
    const { _id, title, author, image_url, details, total_view, rating } = news;
    return (
        <div>
            <Card className="mb-4">
                <Card.Header>
                    <div className='d-flex align-items-center justify-content-between p-2'>
                        <div className='w-50 d-flex align-items-center'>
                            <img style={{ height: "40px" }} className='img-fluid rounded-circle' src={author?.img} alt="" />
                            <div className='ms-4'>
                                <h4 className=' mb-0'>{author?.name}</h4>
                                <p className='text-secondary mb-0 fs-6'><small>{moment(author?.published_date).format("yyyy-MM-D")}</small></p>
                            </div>
                        </div>

                        <div>
                            <IconContext.Provider value={{ className: "global-class-name", size: '1.4em' }}>
                                <BsBookmark />  <BsShare className='ms-2' />
                            </IconContext.Provider>
                        </div>
                    </div>
                </Card.Header>

                <Card.Body>
                    <Card.Title className='fw-bold fs-3 mt-3'>{title}</Card.Title>
                    <div className='mt-4'>
                        <img className='img-fluid' src={image_url} alt="" />
                    </div>
                    <Card.Text className='text-secondary mt-4'>
                        {details.length < 250 ? <>{details}</> :
                            <>{details.slice(0, 250)} ..... <Link className='text-decoration-none text-warning' to={`/news/${_id}`}>Read More</Link></>
                        }
                    </Card.Text>
                </Card.Body>

                <Card.Footer className="text-muted">
                    <div className='d-flex justify-content-between align-items-center'>
                        <div className='m-2 d-flex align-items-center gap-1'>
                            <Rating
                                placeholderRating={rating.number || 4.5}
                                readonly
                                emptySymbol={<FaRegStar className='text-warning'></FaRegStar>}
                                placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                                fullSymbol={<FaStar className='text-warning'></FaStar>}
                            />
                            <p className='ms-2 mb-0'>{rating.number}</p>
                        </div>

                        <div>
                            <IconContext.Provider value={{ className: "global-class-name", size: '1.4em' }}>
                                <FaEye />
                            </IconContext.Provider>
                            <span className='ms-2'>{total_view}</span>
                        </div>
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default NewsCard;