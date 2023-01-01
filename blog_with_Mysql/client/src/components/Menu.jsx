import React from 'react'

const Menu = () => {

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
    <div className='menu'>
        <h1>Other posts you may like</h1>
        {posts.map(post=>(
            <div className="post" key={post.id}>
            <img src={post.img} alt="" />
            <h2>{post.title}</h2>
            <button>Read More</button>
            </div>
        ))}
      
    </div>
  )
}

export default Menu
