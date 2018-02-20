import React from 'react';

const filterPage = (singlePage, pages) => {
    const filteredPage = pages.filter((page => page.slug === singlePage));
    return filteredPage[0]
}

const Content = (props) => {
    const { pages, page } = props;
    const pageToView = filterPage(page, pages);
    return (
        <div dangerouslySetInnerHTML={{__html: pageToView.content.rendered}} />
    )
}

export default Content;