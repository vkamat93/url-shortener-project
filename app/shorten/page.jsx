"use client"
import Link from 'next/link'
import React, { useState } from 'react'


const Shorten = () => {
    const [url, setUrl] = useState("")
    const [shorturl, setShorturl] = useState("")
    const [generated, setGenerated] = useState("")

    const generate = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "url": url,
            "shorturl": shorturl
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("/api/generate", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
                setUrl("")
                setShorturl("")

                console.log(result)
                alert(result.message)
            })
            .catch((error) => console.error(error));

    }

    return (
        <div className='mx-auto max-w-lg bg-purple-100 my-16 p-8 rounded-lg flex flex-col gap-3 shadow-lg'>
            <h1 className='font-bold text-2xl'>Generate your short URLs</h1>
            <div className='flex flex-col gap-2'>

                <input type="text"
                    value={url}
                    className='p-4 focus:outline-purple-600 rounded-md'
                    placeholder='Enter your URL'
                    onChange={e => { setUrl(e.target.value) }} />

                <input type="text"
                    value={shorturl}
                    className='p-4 focus:outline-purple-600 rounded-md'
                    placeholder='Enter your preferred URL text'
                    onChange={e => { setShorturl(e.target.value) }} />

                <button onClick={generate} className='bg-purple-500 rounded-lg p-3 py-1 text-white font-bold my-3'>Generate</button>
            </div>

            {generated && <>
                <span className='font-bold text-lg'>Your Link</span> <code><Link target="_blank" href={generated} >{generated}</Link>
                </code></>}
        </div>
    )
}

export default Shorten