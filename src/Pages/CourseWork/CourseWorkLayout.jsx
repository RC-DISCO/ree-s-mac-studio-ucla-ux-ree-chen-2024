import styled from "styled-components";
import { Outlet, NavLink } from "react-router-dom";
import Inset from "@/Common/PagesLayout/Inset.jsx";

const CourseWorkLayout = () => {
    return (
        <CourseWorkLayoutStyled>
            <Inset>
                <h1> Product </h1>
                <nav className="sublinks">
                    <NavLink to="/course-work">Menu</NavLink>
                    <NavLink to="/course-work/sun-and-moon">Promotioin</NavLink>
                    <NavLink to="/course-work/responsive">
                        Buy Cift Cards
                    </NavLink>
                </nav>
                <Outlet />
            </Inset>
        </CourseWorkLayoutStyled>
    );
};

export default CourseWorkLayout;

const CourseWorkLayoutStyled = styled.div``;
