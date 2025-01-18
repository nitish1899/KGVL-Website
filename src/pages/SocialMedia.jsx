import React, { useEffect } from 'react'
import { useState } from 'react'
function SocialMedia() {
   const [posts,setPosts]=useState([]);
   useEffect(()=>{
     const fetchData=async ()=>{
        try {
            const res=await fetch(`https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption,permalink&access_token=IGQWRNdHJ5LUNJME42SDNRRGJrVGtjNTc1UkFNVW1pM2xMdFpvb0RfYjVDWFhqemZAJbFFXQkhWTU5BbmRpUHlYZAGRGYmx6RWZAJbjhEVU1DOHJCdXRaZAjNaTXRDeWhWVGp2VTU1cVQySWJwaV9iYk9MbGNFY1J0RXcZD`);
            if(res.ok){
                const data = await res.json();
                setPosts(data.data);
            }
            else console.log("failed to fetch");
        } catch (error) {
            console.log(error);
        }
     }
     fetchData();
     console.log(posts);
   },[])
  return (
    <div>
        <h1>Social Media Posts</h1>
        {
            posts.map((el)=>{
               return <div>
                  <img src={el.media_url}/>
                  <p>{el.caption}</p>
               </div>
            })
        }
    </div>
  )
}

export default SocialMedia
