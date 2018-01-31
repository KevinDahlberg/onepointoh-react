import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {

    filterAboutPage = (pagesArray) => {
        const aboutPage = pagesArray.filter((page => page.slug === 'about'));
        return aboutPage[0];
    }

    render() {
        const { pages, isFetchingPages } = this.props;
        console.log(pages, isFetchingPages);
        const about = this.filterAboutPage(pages);
        return (
            <div className="content">
            {isFetchingPages ?
                null :
                <div dangerouslySetInnerHTML={{__html: about.content.rendered}} />
            }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isFetchingPages: state.siteReducer.isFetchingPages,
    pages: state.siteReducer.pages,
});

export default connect(mapStateToProps, null)(Home);