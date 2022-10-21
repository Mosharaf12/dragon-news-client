import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from 'react-icons/fa';

const NewsSummaryCart = ({news}) => {
    console.log(news);
    const {_id, title, author, details, image_url, rating, total_view}=news;
    return (
        <Card className="mb-4">
      <Card.Header className='d-flex justify-content-between align-items-center'>
        <div className='d-flex'>
           <Image
           roundedCircle
           className='me-3'
           src={author?.img}
           style={{height: '60px'}}
           >
           </Image>
           <div>
            <p>{author?.name}</p>
            <p>{author?.published_date}</p>
           </div>
        </div>
        <div>
            <FaRegBookmark></FaRegBookmark>
            <FaShareAlt></FaShareAlt>
        </div>


      </Card.Header>
      <Card.Body>
        <Card.Title> {title} </Card.Title>
        <Card.Img variant='top' src={image_url}/>
        <Card.Text>
          {
            details.length >250 ?
            <p>{details.slice(0,250)+ '...'}
            <Link to={`/news/${_id}`}>Read More</Link></p>
            :
            <p>{details}</p>
          }
        </Card.Text>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between">
        <div>
            <FaStar className='text-warning me-2'></FaStar>
            <span>{rating?.number}</span>
        </div>
        <div>
            <span className='me-2'>{total_view}</span>
            <FaEye></FaEye>
        </div>
      </Card.Footer>
    </Card>
    );
};

export default NewsSummaryCart;