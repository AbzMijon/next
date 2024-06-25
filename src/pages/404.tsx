import { ROUTES } from "@/constants";
import { useRouter } from "next/router";
import styled from "styled-components";

const StyledNotFoundPage = styled.div `
    .notFound {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        .notFound__card {
            display: flex;
            justify-content: center;
            flex-direction: column;
            padding: 20px 40px;
            .notFound__card-title {
                font-size: 100px;
                margin-bottom: 15px;
                text-align: center;
            }
        }
    }
`

function NotFoundPage() {

    const router = useRouter();
    const handleReturnHome = () => {
        router.push(ROUTES.mainPage);
    }

    return (
        <StyledNotFoundPage>
            <div className="notFound">
                <div className="notFound__card">
                    <h1 className="notFound__card-title">404</h1>
                    <h2 className="notFound__card-subtitle">OPPS! PAGE NOT FOUND</h2>
                    <p className="notFound__card-text">Sorry, but page not found, you can return to home or report this problem to us, sorry</p>
                    <div className="notFound__card-btns">
                        <button className="notFound__card-return" type="button" onClick={handleReturnHome}>RETURN HOME</button>
                        <button className="notFound__card-report" type="button">REPORT PROBLEM</button>
                    </div>
                </div>
            </div>
        </StyledNotFoundPage>
    )
}

export default NotFoundPage;