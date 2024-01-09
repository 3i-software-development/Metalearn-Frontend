import { useGetFullTextQuery } from '@/lib/Midleware/NewQuery'
import { useRouter } from 'next/router'
import React from 'react'

const NewDetail = () => {
    const router = useRouter()
    const id = router.query.id

    const {data} = useGetFullTextQuery({
        id
    })
    const sanitizedHtml = data?.full_text;
    console.log(data)
    return (
        <div style={{textAlign: 'center', padding: '50px 30px'}} dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />
    )
}

export default NewDetail