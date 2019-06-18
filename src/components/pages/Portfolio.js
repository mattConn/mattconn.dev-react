import React from 'react';
import Page from './Page';

const PortfolioCard = ({ image, title, copy, style}) => {
    return (
        <div
            style={style || {}}
            className="col-lg card m-4"
            key={`portfolioCard-${title}`}
        >
            <img className="img-fluid rounded" src={image} alt={`Image of "${title}" project.`} />

            <h3>{title}</h3>
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

        // add spacer card if odd number of entries
        if(cards.length % 2 !== 0){
            cards.push(
                <PortfolioCard style={{visibility: 'hidden'}} key={`portfolioCard-spacer`} image={null} title={'spacer'} copy={null} />
            );
        }

        // portfolio card rows
        let rows = [];
        for(let i=0; i < cards.length; i+=2){
            rows.push(
                <div className="row" key={`portfolioRow-${i/2 + 1}`}>
                    {cards[i]}
                    {cards[i+1]}
                </div>
            );
        }

        return rows;
    }
}