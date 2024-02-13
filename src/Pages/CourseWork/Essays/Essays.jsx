import styled from "styled-components";
import SingleEssay from "./SingleEssay.jsx";

const Essay = () => {
    return (
        <EssayStyled>
            <h2>Essay</h2>

            <SingleEssay
                question={
                    "Explain the difference between HTML, CSS and JavaScript"
                }
            >
                <p> HTML (HyperText Markup Language)</p>
                <ul>
                    <li>Standard markup language for creating web pages.</li>
                    <li>Provides the structure of a webpage. </li>
                    <li>
                        Uses tags to denote different types of content
                        (headings, paragraphs, lists, links, images, etc.).
                    </li>
                    <li>Nota programming language, but a markup language.</li>
                </ul>

                <p>CSS (Cascading Style Sheets)</p>
                <ul>
                    <li>
                        Style sheet language used for describing the
                        presentation of a document written in HTML.
                    </li>
                    <li>
                        Manages the visual aspect of a web page (layout, colors,
                        fonts, etc.).{" "}
                    </li>
                    <li>
                        Separates content (HTML) from design/style, allowing for
                        more flexibility and control.
                    </li>
                    <li>Cancontrol multiple web pages' appearance at once.</li>
                </ul>

                <p>JavaScript</p>
                <ul>
                    <li>
                        A programming language that allows you to create
                        dynamically updating content, control multimedia,
                        animate images, and much more.
                    </li>
                    <li>Makes websites interactive and functional. </li>
                    <li>
                        Can be used both on the client-side (in the browser) and
                        server-side (on the server hosting the site).
                    </li>
                    <li>
                        Offers more functionality compared to HTML and CSS which
                        are not programming languages.
                    </li>
                </ul>
            </SingleEssay>
            <SingleEssay
                question={"Q2:What is the difference between Git and Github?"}
            >
                <p>
                    In the landscape of software development, Git and GitHub are
                    frequently mentioned. While they are often used in
                    conjunction, they serve distinct purposes within the realm
                    of version control and project collaboration.
                </p>

                <ul>
                    <p>
                        <b>Git</b>
                    </p>
                    <li>
                        <b>Version Control System: </b>Git is a distributed
                        version control system.
                    </li>
                    <li>
                        <b>Local Operations</b>: Mainly used for tracking
                        changes in source code during software development. It
                        allows multiple developers to work on the same project
                        without interfering with each other.
                    </li>
                    <li>
                        <b>Distributed Nature:</b> Every developer has the full
                        history of their code repository locally, leading to
                        faster operations.
                    </li>
                    <li>
                        <b>Branching and Merging:</b> Offers robust tools for
                        branching and merging, allowing developers to create
                        separate branches for development and safely merge new
                        features into the main codebase.
                    </li>
                    <li>
                        <b>Open Source:</b> Free and open-source, can be used
                        independently of any online hosting service.
                    </li>

                    <p>
                        <b>GitHub</b>
                    </p>

                    <li>
                        <b>Web-based Hosting Service:</b> GitHub is an Internet
                        hosting service for version control using Git.
                    </li>
                    <li>
                        <b>Collaboration Features:</b> Provides a web-based
                        graphical interface. It offers collaboration features
                        such as bug tracking, feature requests, task management,
                        and wikis for every project.
                    </li>
                    <li>
                        <b>Centralized Source-Code Hosting:</b> Offers
                        centralized repository hosting, making it easier for
                        individuals and teams to manage Git repositories.
                    </li>
                    <li>
                        <b>Integration with Other Services:</b> Provides
                        integration with many development tools and platforms.
                    </li>
                </ul>
            </SingleEssay>
            <SingleEssay
                question={"Q3:What is the difference between JQuery and React?"}
            >
                <p>
                    JQuery and React are both JavaScript libraries, but they
                    serve different purposes and have distinct approaches to
                    building web applications. Here's a comparison:
                </p>

                <ul>
                    <li>
                        <b>Focus:</b> JQuery focuses on simplifying DOM
                        manipulation and event handling, while React focuses on
                        building efficient, dynamic user interfaces through a
                        component-based architecture.
                    </li>
                    <li>
                        <b>Architecture:</b> JQuery is a library that offers a
                        set of tools for common tasks, whereas React provides a
                        structured framework for building web applications using
                        a component-based approach.
                    </li>

                    <li>
                        <b>Performance:</b> For dynamic applications with high
                        user interaction and data updates, React's virtual DOM
                        offers better performance by reducing the need to
                        directly manipulate the DOM.
                    </li>

                    <li>
                        <b>Modern Web Development:</b> React aligns more closely
                        with modern web development practices, offering a more
                        structured approach to building large-scale applications
                        and improving code maintainability.
                    </li>
                </ul>
            </SingleEssay>
            <SingleEssay question={"Q4:Sample question..."}>
                Answer 4 goes here.
            </SingleEssay>
            <SingleEssay question={"Q5:Sample question..."}>
                Answer 5 goes here.
            </SingleEssay>
        </EssayStyled>
    );
};

export default Essay;

const EssayStyled = styled.div``;
