import React from 'react'
import Edit from '../img/edit.png';
import Delete from '../img/delete.png';
import { Link } from 'react-router-dom';
import Menu from '../components/Menu';


const Single = () => {
  return (
    <div className='single'>
      <div className='content'>
        <img src='https://media.istockphoto.com/id/636985112/photo/happy-toon-kid-with-his-alien-friends.jpg?s=612x612&w=0&k=20&c=ESaD-SmMWWHo_rfmMczp7F0b0tRKTV4ql8MNhLxiYY4=' alt="" />
      
        <div className='user'>
          <img src="https://media.istockphoto.com/id/1288538088/photo/portrait-young-confident-smart-asian-businessman-look-at-camera-and-smile.jpg?s=612x612&w=0&k=20&c=qkOwVHZFC-fbtbTnufVGaXFhnQBcfEjzbu5ThSXVLR0=" alt="" />
     
          <div className='info'>
            <span>Gazen</span>
            <p>Posted 2 days ago!</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur repellat maxime molestiae debitis, facere veniam natus illo. Illum quidem officiis asperiores quos! Autem amet aliquam vel vero harum, nesciunt ipsam id hic tempore accusantium obcaecati sunt molestias laudantium. Iure eaque asperiores quod voluptatum, nobis doloribus suscipit, consequatur rerum minus architecto similique reprehenderit totam distinctio sit ex pariatur quia harum accusantium error veritatis perspiciatis sunt. Natus corrupti, non necessitatibus, tempora soluta atque eum nulla ducimus a odio impedit animi laboriosam, tenetur iure obcaecati dicta omnis perspiciatis. At maxime et asperiores, culpa commodi accusamus quas cumque dolorum aliquid. Dolore, illum. Animi illo voluptate, eum sed reprehenderit facere ratione suscipit tempore consectetur dolores. Ab facilis eaque ipsam, sed quae dolore vel laborum expedita inventore quam assumenda necessitatibus commodi! Sed eveniet perferendis praesentium quaerat velit dicta odio ipsa animi exercitationem, quibusdam, suscipit illum deserunt. Cupiditate eaque alias iste, sunt officia odit tenetur, eum reiciendis laborum, doloribus iure mollitia illum asperiores qui. Amet, neque provident, molestiae incidunt cum ducimus, similique voluptates quisquam alias consequuntur modi dolores quis! Facere tenetur harum totam, vel id assumenda dolorum itaque temporibus aspernatur facilis laudantium natus repellendus dolores eaque recusandae voluptas mollitia sit nihil nulla sapiente. Neque obcaecati molestiae porro.</p>
        <br />
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur repellat maxime molestiae debitis, facere veniam natus illo. Illum quidem officiis asperiores quos! Autem amet aliquam vel vero harum, nesciunt ipsam id hic tempore accusantium obcaecati sunt molestias laudantium. Iure eaque asperiores quod voluptatum, nobis doloribus suscipit, consequatur rerum minus architecto similique reprehenderit totam distinctio sit ex pariatur quia harum accusantium error veritatis perspiciatis sunt. Natus corrupti, non necessitatibus, tempora soluta atque eum nulla ducimus a odio impedit animi laboriosam, tenetur iure obcaecati dicta omnis perspiciatis. At maxime et asperiores, culpa commodi accusamus quas cumque dolorum aliquid. Dolore, illum. Animi illo voluptate, eum sed reprehenderit facere ratione suscipit tempore consectetur dolores. Ab facilis eaque ipsam, sed quae dolore vel laborum expedita inventore quam assumenda necessitatibus commodi! Sed eveniet perferendis praesentium quaerat velit dicta odio ipsa animi exercitationem, quibusdam, suscipit illum deserunt. Cupiditate eaque alias iste, sunt officia odit tenetur, eum reiciendis laborum, doloribus iure mollitia illum asperiores qui. Amet, neque provident, molestiae incidunt cum ducimus, similique voluptates quisquam alias consequuntur modi dolores quis! Facere tenetur harum totam, vel id assumenda dolorum itaque temporibus aspernatur facilis laudantium natus repellendus dolores eaque recusandae voluptas mollitia sit nihil nulla sapiente. Neque obcaecati molestiae porro.</p>

        </div>
      <Menu/>

      
    </div>
  )
}

export default Single
