import React from 'react';
import { Link } from 'react-router-dom';



const Home = () => {
  const posts = [
    {
      id: 1,
      title: 'Explore the various website template options to create a blog that best represents your brand. Each template can be customized to fit your style of storytelling.',
      desc: ' Each template can be customized to fit your style of storytelling.',
      img: 'https://cdn.pixabay.com/photo/2015/06/22/08/38/siblings-817369_640.jpg',
    },
    {
      id: 2,
      title: 'Explore the various website template options to create a blog that best represents your brand. Each template can be customized to fit your style of storytelling.',
      desc: ' Each template can be customized to fit your style of storytelling.',
      img: 'https://cdn.pixabay.com/photo/2016/11/14/03/22/elephant-1822481_960_720.jpg',
    },
    {
      id: 3,
      title: 'Explore the various website template options to create a blog that best represents your brand. Each template can be customized to fit your style of storytelling.',
      desc: ' Each template can be customized to fit your style of storytelling.',
      img: 'https://cdn.pixabay.com/photo/2016/11/08/05/11/children-1807511_640.jpg',
    },
    {
      id: 4,
      title: 'Explore the various website template options to create a blog that best represents your brand. Each template can be customized to fit your style of storytelling.',
      desc: 'Each template can be customized to fit your style of storytelling.',
      img: 'https://media.istockphoto.com/id/1149180878/photo/dark-toned-photo-of-bouquet.jpg?s=612x612&w=0&k=20&c=gAiiG_Qp_eYCXKey2QMnirfHLV466-SO4vsXrX1IBLc=',
    },

  ];

  return (
    <div>
      <div className="home">
        <div className="posts">
          {posts.map(post => (
            <div className="post" key={post.id}>
              <div className="img">
                <img src={post.img} alt="" />
              </div>
              <div className="content">
                <Link className='link' to={`/post/${post.id}`}>
                  <h1>{post.title}</h1>
                  <p>{post.desc}</p>
                  <button>Read More...</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Home
