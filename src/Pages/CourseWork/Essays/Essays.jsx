import styled from "styled-components";
import SingleEssay from "./SingleEssay.jsx";

const Essay = () => {
    return (
        <EssayStyled>
            <h2>Menu</h2>

            <SingleEssay question={"SUNRIGHT BOBA MILK"}>
                <b>01 BROWN SUGAR BOBA MILK</b>
                <ul>
                    <p>
                        Fresh milk sweetened with our house-made brown sugar and
                        served with boba
                    </p>
                </ul>

                <b>02 NamCREME BRÛLÉE BOBA MILK</b>
                <ul>
                    <p>
                        Fresh milk sweetened with our house-made brown sugar and
                        served with creme brûlée foam & boba
                    </p>
                </ul>

                <b>03 PUDDING BOBA MILK</b>
                <ul>
                    <p>
                        Fresh milk sweetened with our house-made brown sugar and
                        served with pudding and boba
                    </p>
                </ul>

                <b>04 OREO BRÛLÉE BOBA MILK</b>
                <ul>
                    <p>
                        Creme brûlée foam and crushed Oreos combined with
                        sweetened fresh milk and served with boba
                    </p>
                </ul>

                <b>05 RED BEAN BOBA MILK</b>
                <ul>
                    <p>
                        Fresh milk sweetened with our house-made brown sugar and
                        served with red bean and boba
                    </p>
                </ul>

                <b>06 TARO BOBA MILK</b>
                <ul>
                    <p>
                        Fresh milk sweetened with our house-made brown sugar and
                        served with fresh taro and boba
                    </p>
                </ul>

                <b>07 GRASS JELLY BOBA MILK</b>
                <ul>
                    <p>
                        Fresh milk sweetened with our house-made brown sugar and
                        topped with grass jelly and boba{" "}
                    </p>
                </ul>
            </SingleEssay>

            <SingleEssay question={"CHEESE FOAM"}>
                <b>01 CEYLON CHEESE</b>
                <ul>
                    <p>
                        Ceylon black tea topped with a layer of freshly made
                        sea-salt cheese foam
                    </p>
                </ul>

                <b>02 JASMINE CHEESE</b>
                <ul>
                    <p>
                        asmine green tea topped with a layer of freshly made
                        sea-salt cheese foam
                    </p>
                </ul>

                <b>03 OLONG CHEESE</b>
                <ul>
                    <p>
                        Roasted oolong tea topped with a layer of freshly made
                        sea-salt cheese foam
                    </p>
                </ul>

                <b>04 FOUR SEASONS CHEESE</b>
                <ul>
                    <p>
                        Four seasons tea topped with a layer of freshly made
                        sea-salt cheese foam
                    </p>
                </ul>

                <b>05 WHITE PEACH OOLONG CHEESE</b>
                <ul>
                    <p>
                        Lightly flavored white peach oolong tea topped with a
                        layer of freshly made sea-salt cheese foam
                    </p>
                </ul>
            </SingleEssay>

            <SingleEssay question={"FROSTIES"}>
                <b>01 STRAWBERRY</b>
                <ul>
                    <p>
                        Ice blended fresh strawberries smoothie served with a
                        layer of rich cheese foam
                    </p>
                </ul>

                <b>02 MATCHA RED BEAN</b>
                <ul>
                    <p>
                        Ice blended matcha smoothie coated with matcha brûlée
                        and topped with sweet red bean
                    </p>
                </ul>

                <b>03 FRESH TARO</b>
                <ul>
                    <p>Ice blended fresh taro smoothie served with real taro</p>
                </ul>
            </SingleEssay>
        </EssayStyled>
    );
};

export default Essay;

const EssayStyled = styled.div``;
