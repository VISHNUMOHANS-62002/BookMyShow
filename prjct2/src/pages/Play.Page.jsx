import React from 'react'
import DefaultlayoutHoc from '../layouts/Default.layout'
import PlayFilters from '../components/PlayFilters/PlayFilters.Component'
import Poster from '../components/Poster/Poster.Component'

const PlayPage = () => {
  return (
    <>
    <div className='container mx-auto px-4 my-10'>
      <div className='w-full flex flex-col-reverse lg:flex-row-reverse gap-4'>
        <h2 className='text-2xl font-bold mb-4'>Plays In Hospets</h2>
        <div className='flex flex-wrap'>
          <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
          <Poster isPlay={true} src='' title='So Rude Of Be My Sweet' />
          </div>
          <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
          <Poster isPlay={true} src='' title='So Rude Of Be My Sweet' subtitle='Comedy Shows||English,Kannada|18+Yrs|2hr 30 min'/>
          </div>
          <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
          <Poster isPlay={true} src='' title='So Rude Of Be My Sweet ' subtitle='Comedy Shows||English,Kannada|18+Yrs|2hr 30 min'/>
          </div>
          <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
          <Poster isPlay={true} src='' title='So Rude Of Be My Sweet'subtitle='Comedy Shows||English,Kannada|18+Yrs|2hr 30 min' />
          </div>
          <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
          <Poster isPlay={true} src='' title='So Rude Of Be My Sweet'subtitle='Comedy Shows||English,Kannada|18+Yrs|2hr 30 min' />
          </div>
          <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
          <Poster isPlay={true} src='' title='So Rude Of Be My Sweet' subtitle='Comedy Shows||English,Kannada|18+Yrs|2hr 30 min'/>
          </div>
        </div>
      </div>
      <div className='lg:w-1/4 p-4 bg:white rounded'>
      <h2 text-2xl font-bold mb-4>Filters</h2>
      <div ><PlayFilters title="Date" tags="{[Today,Tommorrow,This weekend]}"/></div>
      <div ><PlayFilters title="Language" tags="{[English,Kannada,Malayalam]}"/></div>
      </div>
    </div>
    </>
  )
}

export default DefaultlayoutHoc(PlayPage)