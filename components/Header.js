import Image from 'next/image'
import HeaderIcon from './HeaderIcon'
import { HomeIcon, PhoneIcon,UserIcon,InformationCircleIcon } from '@heroicons/react/solid'
export default function Header() {
  return (
    <div>
    <div>
    <HeaderIcon Icon={HomeIcon} title="Home"/>
    <HeaderIcon Icon={UserIcon} title="Account"/>
    <HeaderIcon Icon={PhoneIcon} title="Contact"/>
    <HeaderIcon Icon={InformationCircleIcon} title="About"/>
    </div>
    <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/640px-IMDB_Logo_2016.svg.png" 
        height={100} width={100}
    />
    </div>
  )
}
