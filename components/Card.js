import Image from 'next/image'
import { ThumbUpIcon } from '@heroicons/react/solid';
export default function Card({result}) {
    const BASE_URL="https://image.tmdb.org/t/p/original";
  return (
    
    <div>
        <Image layout="responsive" src={BASE_URL+result.backdrop_path} height={100} width={100}/>

        <div>
            <p className='truncate'>{result.overview}</p>
            <p>{result.title || result.name}</p>
            <p>{result.release_date || release.first_air_date}
            <ThumbUpIcon className='h-6'/>
            {result.vote_count}
            </p>
        </div>
    </div>
  )
}
