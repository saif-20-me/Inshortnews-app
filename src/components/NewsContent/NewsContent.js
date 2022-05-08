import { Container } from '@mui/material'
import React from 'react'
import NewsCard from '../NewsCard/NewsCard'
import './NewsContent.css'

const NewsContent = ({ newsArray, newsResults, loadmore, setLoadmore }) => {
    return (
        <Container maxWidth="md">
            <div className="content">
                <div className="downloadMessage">
                    <span className="downloadText">
                        For the best experience we recommend to use Inshorts App
                    </span>
                    <img
                        src='https://assets.inshorts.com/website_assets/images/appstore.png'
                        height='80%'
                        alt='play store '>
                    </img>
                    <img
                        src='https://assets.inshorts.com/website_assets/images/playstore.png'
                        height='80%'
                        alt='play store '>
                    </img>
                </div>
                {newsArray.map((newsItem) => (

                    <NewsCard newsItem={newsItem} key={newsItem.title} />
                )
                )}
                {loadmore <= newsResults && (
                    <>
                        <hr />
                        <button className='loadmore'
                            onClick={() => setLoadmore(loadmore + 20)}> Load More</button>
                    </>
                )}
            </div>
        </Container>
    );
};

export default NewsContent