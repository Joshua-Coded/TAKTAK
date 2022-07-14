import axios from 'axios';

import { Video } from "../types";
import VideoCard from '../components/VideoCard';
import NoResult from '../components/NoResult';



interface IProps {
  videos: Video[] 
}


const Home = ({ videos}: IProps) => {
  console.log(videos);
  
  return (
       <div className="flex flex-col gap-10 videos h-full">
         {videos.length ? (
          videos.map((video: Video) =>(
          <VideoCard  post={video} key={video._id}/>
          ))
        ) : (
          <NoResult text={'No Videos'} />
        )}
    </div>
          
  )
}   

//fetching data in nextjs
  
  export const getServerSideProps = async () => {
  const { data } = await axios.get('http://localhost:3000/api/post');
  console.log(data);




  return {
  props: {
    videos: data
  } 
  

  }
}

export default Home
