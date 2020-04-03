import React from 'react';
export default function ContentArea(props) {
    const boldFirst = (description) => {
        var first = description.substr(0, description.indexOf(" "));
        return (
            <React.Fragment>
                <b style={{color: 'white'}}>
                {first}
                </b>
                {description.substr(description.indexOf(" "))}
            </React.Fragment>
        );
    }
    const About = ({content}) => {
        return (
            <React.Fragment>
            <div className="content-left content-side">
                <div className="about-container">
                    <p>
                        {boldFirst(content.description)}
                    </p>
                </div>
            </div>
            <div className="content-side">
                <div className="about-container-qualifications">
                    <span>
                        <b>
                            Qualifications
                        </b>
                    </span>
                    <p>
                        {content.qualifications}
                    </p>
                </div>
            </div>
            </React.Fragment>
        )
    }
    const Project = ({content}) => {
        return (
            <React.Fragment>
            <div className="content-left content-side">
                <div className="project-title-container">
                    <p className="project-title">
                        {content.title}
                    </p>
                    <hr />
                    <p className="project-title-content">
                        {content.titleContent}
                    </p>
                </div>
            </div>
            <div className="content-side">
                <div className="project-display-container">
                    <div className="project-display-row">
                        <div className="project-display-item">
                            <img src={content.images[0]} />
                        </div>
                        <div className="project-display-item">
                            <a href={content.redirect} />
                        </div>
                    </div>
                    <div className="project-display-row">
                        <div className="project-display-item">
                            <p>Technology</p>
                            <hr/>
                            <ul>
                                {content.technology.map(tech => (
                                    <li>{tech}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="project-display-item">
                        <img src={content.images[1]} />
                        </div>
                    </div>
                </div>
            </div>
            </React.Fragment>
        )
    }
    return (
        <div className={props.class}>
            <div className="content-container">
                {props.project ? <Project content={props.content} /> : <About content={props.content}/>}
            </div>
        </div>
    );
}