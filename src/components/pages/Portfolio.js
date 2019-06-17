import React from 'react';
import Page from './Page';

const PortfolioCard = ({ image, title, copy }) => {
    return (
        <div className="col-sm card m-3" key={`portfolioCard-${title}`}>
            <img className="img-fluid rounded" src={image} alt={`Image of "${title}" project.`} />
            <section className="copy">
                <p>{copy}</p>
            </section>
        </div>
    );
}


export default class Portfolio extends Page {
    title = 'Portfolio';

    render() {
        const { portfolioLinks } = this.props;
        return (
            Object.keys(portfolioLinks).map((key) => {
                const { image, title, copy } = portfolioLinks[key];

                return <PortfolioCard key={`portfolioCard-${title}`} image={image} title={title} copy={copy} />
            })
        )
    }
}