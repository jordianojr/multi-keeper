import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import { useRouter } from 'next/router'
import Link from "next/link"
import Button from 'react-bootstrap/Button';

export default function Home() {
    const router = useRouter()
    return (
        <div>
            <Header />
            <div style={{textAlign: "center"}}>
                <h1 style={{position: "relative", width: "560px", margin: "30px auto 20px auto"}} >Welcome to the Note Keeping App</h1>
                <p style={{position: "relative", width: "280px", margin: "30px auto 20px auto"}} >Start organizing your notes today!</p>
                <div style={{ textAlign: 'center' }}>
                    <Link href="/product">
                        <Button variant="secondary" size="lg" style={{ width: '280px', margin: '30px auto 20px auto', color: 'white', fontFamily: 'sans-serif' }}>
                            Get started!
                        </Button>
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    )
}
