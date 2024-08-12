import React, {useEffect, useState} from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
const data = useLoaderData()
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Repositories: {data.public_repos}
    <img src={data.avatar_url} width={300} alt="" />
    </div>
  )
}

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/0110smriti');
    return response.json()
}

export default Github