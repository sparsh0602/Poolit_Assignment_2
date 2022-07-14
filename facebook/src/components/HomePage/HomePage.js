import React from 'react'
import './homePage.css'
import Header from './Header/Header'
import LeftSideBar from './leftSideBar/LeftSideBar'
import Post from './Center/Post'
import RightSideBar from './rightSideBar/RightSideBar'
import {useLocation} from 'react-router-dom';
import { useEffect } from 'react'

export default function HomePage() {
    const {state} = useLocation();

    useEffect(() => {
        document.title=`${state.obj.val.name} | Facebook`
    }, [])
    
    return (
        <div>
            <Header name={state.obj.val.name}/>
            <div className="mainContent">
                <div className="desktop_only">
                    <LeftSideBar name={state.obj.val.name}/>
                </div>
                <div>
                <Post data={state}/>
                </div>
                <div className="desktop_only">
                    <RightSideBar />
                </div>
            </div>

        
        </div>
    )
}
