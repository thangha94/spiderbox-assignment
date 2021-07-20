import React from 'react';
import './News.scss';

const News = ({ data, updateFavorite }) => {
    return (
        <div className="news">
            <a className="news__wrapper" target="_blank" href={data.url}>
                <img className="news__image" src={data.urlToImage} alt={data.title} />
                <div className="news__title">{data.title}</div>
            </a>
            <div className="news__source">From: {data.source.name}</div>
            <div className="news__author">Author: {data.author}</div>
            <button onClick={() => updateFavorite(data)}>{data.favorite ? 'Remove Favorite' : 'Add Favorite'} {data.favorite}</button>
        </div>
    );
};

export default News;