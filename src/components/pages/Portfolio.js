import React from 'react';
import Page from './Page';

const PortfolioCard = ({ image, title, copy }) => {
    return (
        <div className="col-lg card m-4" key={`portfolioCard-${title}`}>
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

        // store portfolio card components
        const cards = (
            Object.keys(portfolioLinks).map((key) => {
                const { image, title, copy } = portfolioLinks[key];

                return (
                    <PortfolioCard key={`portfolioCard-${title}`} image={image} title={title} copy={copy} />
                )
            })
        )

        // portfolio card rows
        let rows = [];
        for(let i=0; i < cards.length; i+=2){
            rows.push(
                <div className="row">
                    {cards[i]}
                    {/* {(i+1 >= cards.length ? <div style={{visibility: 'hidden'}} className="col-lg card m-4 foo"></div> : cards[i+1])} */}
                    {cards[i+1] || <div style={{visibility: 'hidden'}} className="col-lg card m-4 foo"></div> }
                </div>
            );
        }

        return rows;
    }
}