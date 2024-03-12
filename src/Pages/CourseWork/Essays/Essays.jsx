import styled from "styled-components";
import SingleEssay from "./SingleEssay.jsx";

const Essay = () => {
    return (
        <EssayStyled>
            <h2>Essay</h2>

            <SingleEssay
                question={
                    "Q1: Explain the difference between HTML, CSS and JavaScript"
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
                question={"Q2: What is the difference between Git and Github?"}
            >
                <p>
                    In the landscape of software development, Git and GitHub are
                    frequently mentioned. While they are often used in
                    conjunction, they serve distinct purposes within the realm
                    of version control and project collaboration.
                </p>

                <ul>
                    <p>
                        <b>Git:</b>
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
                        <b>GitHub:</b>
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
                question={
                    "Q3: What is the difference between JQuery and React?"
                }
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
            <SingleEssay
                question={
                    "Q4: What is the difference between a Front-End and Back-End Developer?"
                }
            >
                Answer 4 goes here.
            </SingleEssay>
            <SingleEssay
                question={
                    "Q5: In React, what are the different ways we can link to resources (e.g. Root Relative vs Document Relative)?"
                }
            >
                Answer 5 goes here.
            </SingleEssay>
            <SingleEssay
                question={
                    "Q6: What is the difference between jpg, gif, png and svg images?"
                }
            >
                <p>JPG (JPEG) - Joint Photographic Experts Group:</p>
                <ul>
                    <li>
                        <b>Compression: </b>Lossy, which means it reduces file
                        size by permanently eliminating certain information,
                        especially in areas of uniform color.
                    </li>
                    <li>
                        <b>Best For: </b>Photographs and realistic images with
                        smooth variations in color.
                    </li>
                    <li>
                        <b>Transparency:</b> Does not support transparency.
                    </li>
                    <li>
                        <b>Animation:</b> Does not support animation.
                    </li>
                </ul>
                <p>GIF - Graphics Interchange Format:</p>
                <ul>
                    <li>
                        <b>Compression: </b> Lossless, but limited to a
                        256-color palette, making it unsuitable for full-color
                        photographs.
                    </li>
                    <li>
                        <b>Best For: </b>Simple animations and graphics with a
                        small color palette.
                    </li>
                    <li>
                        <b>Transparency:</b> Supports simple transparency by
                        allowing one color to be marked as transparent.
                    </li>
                    <li>
                        <b>Animation:</b> Supports basic animation.
                    </li>
                </ul>

                <p>PNG - Portable Network Graphics:</p>
                <ul>
                    <li>
                        <b>Compression: </b>Lossless, providing high-quality
                        images but with larger file sizes compared to JPG.
                    </li>
                    <li>
                        <b>Best For: </b>Images that require transparency or
                        have sharp contrast edges like logos, text, and icons.
                    </li>
                    <li>
                        <b>Transparency:</b> Supports alpha transparency
                        (varying levels of transparency).
                    </li>
                    <li>
                        <b>Animation:</b> PNG itself does not support animation,
                        but the APNG (Animated PNG) extension does.
                    </li>
                </ul>

                <p>SVG - Scalable Vector Graphics:</p>
                <ul>
                    <li>
                        <b>Compression: </b>Not applicable in the traditional
                        sense because SVG files are XML-based vector images.
                    </li>
                    <li>
                        <b>Best For: </b>Logos, icons, and illustrations that
                        need to scale cleanly at any size. Great for responsive
                        web design.
                    </li>
                    <li>
                        <b>Transparency:</b> Supports transparency.
                    </li>
                    <li>
                        <b>Animation:</b> Can be animated with CSS or
                        JavaScript.
                    </li>
                </ul>
            </SingleEssay>
            <SingleEssay
                question={
                    "Q7: Define the following Agile roles: Product Manager, Product Owner, Business Analyst, Scrum Master, UX Designer, Developer/Engineer, QA/SDET, and DevOps"
                }
            >
                <p>
                    Agile methodologies, such as Scrum, emphasize flexible,
                    iterative development and collaboration among
                    cross-functional teams to deliver products. Each role within
                    an Agile team has specific responsibilities that contribute
                    to the project's success. Here are definitions for each
                    role.
                </p>
                <p>Product Manager:</p>
                <ul>
                    <li>
                        Oversees the development and success of a product from a
                        high-level perspective. They focus on the product's
                        strategy, roadmap, and feature definition, often
                        liaising between the stakeholders and the development
                        team to ensure the product meets business goals and user
                        needs.
                    </li>
                </ul>

                <p>Product Owner:</p>
                <ul>
                    <li>
                        Acts as the liaison between the development team and the
                        stakeholders. In Scrum, the Product Owner is responsible
                        for managing the product backlog, prioritizing features,
                        and ensuring that the team understands the items in the
                        product backlog to the level needed. They represent the
                        end users' and customers' interests.
                    </li>
                </ul>

                <p>Business Analyst:</p>
                <ul>
                    <li>
                        Works to identify business needs and translate them into
                        technical requirements. The Business Analyst helps to
                        clarify the business logic of the project for the
                        development team, ensuring that the solutions being
                        developed meet the project objectives and solve the
                        right problems.
                    </li>
                </ul>

                <p>Scrum Master:</p>
                <ul>
                    <li>
                        Ensures that the team follows Agile practices and
                        principles, particularly those specific to Scrum. The
                        Scrum Master facilitates Scrum ceremonies, removes
                        impediments, and works to ensure that the team is
                        productive and that the work environment is conducive to
                        achieving the sprint goals.
                    </li>
                </ul>

                <p>UX (User Experience) Designer:</p>
                <ul>
                    <li>
                        Focuses on the usability, accessibility, and overall
                        experience of the product for end-users. The UX Designer
                        conducts research to understand user needs and designs
                        the overall functionality of the product, often creating
                        wireframes, prototypes, and user flows to guide
                        development.
                    </li>
                </ul>

                <p>Developer/Engineer:</p>
                <ul>
                    <li>
                        Writes and maintains the source code of the application.
                        Developers are involved in the technical design,
                        implementation, testing, and debugging of the product.
                        They work closely with other team members to ensure that
                        features are developed according to requirements.
                    </li>
                </ul>

                <p>
                    QA (Quality Assurance)/SDET (Software Development Engineer
                    in Test):
                </p>
                <ul>
                    <li>
                        Ensures the product meets quality standards by designing
                        and implementing tests, reporting and managing defects,
                        and verifying fixes. SDETs, in particular, combine
                        software development skills with QA expertise to
                        automate testing and create tools to improve test
                        processes.
                    </li>
                </ul>

                <p>DevOps:</p>
                <ul>
                    <li>
                        Focuses on the practices, tools, and culture that enable
                        the rapid, reliable deployment and operation of
                        software. DevOps roles work to bridge the gap between
                        development and operations, aiming for continuous
                        integration (CI) and continuous delivery (CD) of code to
                        production environments. They manage infrastructure,
                        automate workflows, and monitor performance.
                    </li>
                </ul>
                <p>
                    Each role contributes to the Agile process, ensuring that
                    the team efficiently and effectively delivers high-quality
                    products that meet user needs and business goals.
                </p>
            </SingleEssay>
            <SingleEssay question={"Q8:Sample question..."}>
                Answer 8 goes here.
            </SingleEssay>
        </EssayStyled>
    );
};

export default Essay;

const EssayStyled = styled.div``;
