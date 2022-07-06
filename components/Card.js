import Image from 'next/image'
import { ThumbUpIcon } from '@heroicons/react/solid';
export default function Card({result}) {
    const BASE_URL="https://image.tmdb.org/t/p/original";
  return (
    
    <div className='p-3 hover:text-white active:text-red-400 xl:hover:scale-105 transition-transform duration-200'>
        <Image className="cursor-pointer" layout="responsive" src={BASE_URL+result.backdrop_path} height={150} width={200}/>

        <div className='cursor-pointer'>
            <p className='truncate'>{result.overview}</p>
            <p>{result.title || result.name}</p>
            <p className='flex items-center'>{result.release_date || release.first_air_date}
            <ThumbUpIcon className='h-6 ml-3 mr-2'/>
            {result.vote_count}
            </p>
        </div>
    </div>
  )
}
