import { NextRequest, NextResponse } from 'next/server'


export default function middleware(req) {
    const user = localStorage.getItem('user')
    console.log('middlewares')
    if (!user && req.url !== '/') {

        return NextResponse.redirect('/login')
    }
}