import Image from 'next/image'
import React from 'react'
import RedditImage from '../assets/images/reddit.png'
import { 
  ChevronDownIcon, 
  HomeIcon,
  MenuIcon, 
  SearchIcon 
  } from '@heroicons/react/solid'
import { 
  BellIcon,
  ChatIcon,
  GlobeIcon,
  PlusIcon,
  SparklesIcon,
  SpeakerphoneIcon,
  VideoCameraIcon, 
  } from '@heroicons/react/outline'

  import { signIn, signOut, useSession } from 'next-auth/react'

type Props = {}

function Header({}: Props) {
  const { data: session } = useSession()

  return (
    <div className='sticky top-0 z-50 flex bg-white px-4 py-2 shadow-sm'>
      <div className='relative h-10 w-20 flex-shrink-0 cursor-pointer'>
        <Image 
          src={RedditImage}
          alt="reddit"
          layout='fill'
          objectFit='contain'
        />
      </div>

      <div className='flex items-center mx-7 xl:min-w-[300px]'>
        <HomeIcon className='h-5 w-5'/>
        <p className='mx-2 hidden flex-1 lg:inline'>Home</p>
        <ChevronDownIcon className='h-5 w-5'/>
      </div>

      {/* Search box */}
      <form className='flex flex-1 items-center space-x-2 border rounded-sm border-gray-200 
      bg-gray-100 px-3 py-1 '>
        <SearchIcon className='h-6 w-6 text-gray-500'/> 
        <input className="flex-1 bg-transparent outline-none" type="text" placeholder='Search Reddit' />
        <button type="submit" hidden />       
      </form>

      <div className='hidden lg:inline-flex mx-5 items-center space-x-2 text-gray-500'>
        <SparklesIcon className='icon'/>
        <GlobeIcon className='icon'/>
        <VideoCameraIcon className='icon'/>
        <hr className='h-10 border border-gray-100'/>
        <ChatIcon className='icon'/>
        <BellIcon className='icon'/>
        <PlusIcon className='icon'/>
        <SpeakerphoneIcon className='icon'/>
      </div>

      <div className='ml-5 flex items-center lg:hidden text-gray-500'>
        <MenuIcon className='icon'/>
      </div>

      {/* Sign in/sign out button */}
      {session ? (
           <div onClick={() => signOut()} className='hidden lg:flex cursor-pointer items-center space-x-2 border border-gray-100 p-2'>
           <div className='relative h-5 w-5 flex-shrink-0'>
             <Image
               src="https://links.papareact.com/23l"
               alt="Sign in"
               layout="fill"
               objectFit='contain'
             />
           </div>

           <div className='flex-1 text-xs'>
            <p className='truncate'>{session?.user?.name}</p>
            <p className='text-gray-400'>1 Karma</p>
           </div>

           <ChevronDownIcon className='h-5 flex-shrink-0 text-gray-400'/>
   
         </div>  
      ) : (
        <div onClick={() => signIn()} className='hidden lg:flex cursor-pointer items-center space-x-2 border border-gray-100 p-2'>
        <div className='relative h-5 w-5 flex-shrink-0'>
          <Image
            src="https://links.papareact.com/23l"
            alt="Sign in"
            layout="fill"
            objectFit='contain'
          />
        </div>

        <p className='text-gray-400'>Sign In</p>
      </div>
      )}
 
    </div>
  )
}

export default Header