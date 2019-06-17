import React from 'react';
import Page from './Page';

export default class About extends Page {
    title = 'About';

    render(){
        return (
            <section className="about">
                <article>
                    <h2>Hello</h2>
                    <p>I'm a web developer with a BS in Communications pursuing a second BS in Computer Science.</p>
                    <p>Previously, I worked as a web developer for The Charles NYC.</p>
                    <p>I recently spoke at Brooklyn JS on game development with Phaser. You can see my slides <a href="game-development-with-phaser">here</a> and code <a href="https://github.com/mattConn/phaser3-game">here</a>.</p>
                    <p>I also did an independent study on <a href="https://github.com/mattConn/differential-geometry-exercises">differential geometry</a> in Fall 2018.</p>
                    <p>Contact: matthew.b.connelly [at] gmail.com</p>
                </article>
            </section>
        )
    }
}