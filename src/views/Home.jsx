import React from 'react'

const Home = (props) => {
    //filters out about page
    const pages = props.pages;
    const aboutPage = pages.filter((page) => {return page.slug === 'about'})
    const about = aboutPage[0]

    return (
         <div className="content">
            <div dangerouslySetInnerHTML={{__html: about.content.rendered}} />
        </div>
    )
}

export default Home