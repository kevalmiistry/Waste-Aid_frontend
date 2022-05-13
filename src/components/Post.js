import React, { useContext } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link, useLocation } from 'react-router-dom';
import PostContext from '../Context/Posts/PostContext';
import moment from 'moment';

const Post = (props) => {
  const { deleteAMPost } = useContext(PostContext);

  const {
    am_name,
    _id,
    title,
    description,
    amount_collected,
    user_count,
    date,
    images
  } = props.content;
  let location = useLocation();

  return (
    <>
      <div className="post__main">
        <div className="image__slider">
          <Carousel
            showStatus={false}
            showThumbs={false}
            width={'100%'}
            dynamicHeight={false}
          >
            {Object.entries(images).map((item) => {
              if (item[1].url !== null) {
                return (
                  <div key={item[1].url}>
                    <img alt="" src={item[1].url} />
                  </div>
                );
              } else {
                return null;
              }
            })}
          </Carousel>
        </div>
        <p style={{ marginLeft: '18px', marginTop: '8px' }}>
          Aidman: <span style={{ fontWeight: '800' }}>{am_name}</span>
        </p>
        <h3 className="post__title">{title}</h3>
        <p className="post__description">{description}</p>
        <div className="post__mid__section flx flx-between flx-al-center">
          <p className="post__amount">{amount_collected} Grams Collected</p>

          <div className="flx flx-al-center">
            <p className="post__usercount">{user_count}</p>
            <i className="fas fa-users"></i>
          </div>
        </div>
        <div className="flx flx-between flx-al-center">
          <div>
            <i className="far fa-calendar"></i>
            <small className="post__date">
              {moment(date).format('DD-MMM-YYYY')}
            </small>
          </div>
          <div className="flx flx-al-center">
            <Link style={{ textDecoration: 'none' }} to={`/post/${_id}`}>
              <p className="post__expand mx-1">
                Know More<i className="fas fa-angle-right"></i>
              </p>
            </Link>
          </div>
        </div>
        {location.pathname === '/aidman' && (
          <div onClick={() => deleteAMPost(_id)} title="Delete Post">
            <svg
              title="Delete Post"
              className="delete"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM394.8 466.1C393.2 492.3 372.3 512 346.9 512H101.1C75.75 512 54.77 492.3 53.19 466.1L31.1 128H416L394.8 466.1z" />
            </svg>
          </div>
        )}
      </div>
    </>
  );
};

export default Post;
