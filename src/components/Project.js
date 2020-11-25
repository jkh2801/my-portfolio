import './Project.scss'
import img1 from './image/img1.png'
import img2 from './image/img2.png'

export default function Project() {
    const openPage = (idx) => {
        const location = ["https://jkh2801.github.io/iphone/", "https://jkh2801.github.io/financial-book/"]
        window.open(location[idx])
    }

    return (
        <section className="project">
            <div className="container">
                <div className="content">
                    <div className="title">
                        <h4>#01</h4>
                        <h1>iPhone 12</h1>
                        <div className="btnBx">
                            <div className="btn" onClick={() => openPage(0)}>Go Page</div>
                        </div>
                    </div>
                    <div className="img">
                        <img src={img1} alt=""></img>
                    </div>
                </div>
                <div className="content">
                    <div className="summary">
                        <h2>프로젝트 특징</h2>
                        <ul>
                            <li>반응형 웹 (UI)</li>
                            <li>React Hooks를 이용한 State 관리</li>
                        </ul>
                        <h2>프로젝트 소감</h2>
                        <p>- React를 이용하여 간단한 웹페이지를 만들어 보았습니다. <br/>기존의 HTML에서와 다른 React에서의 이벤트 처리를 경험할 수 있었고, React Hooks와 Rendering 과정을 자세히 공부해볼 수 있었던 기회가 되었습니다.</p>
                    </div>
                </div>
            </div>
            <div className="container">
            <div className="content">
                    <div className="title">
                        <h4>#02</h4>
                        <h1>Financial Book</h1>
                        <div className="btnBx">
                            <div className="btn" onClick={() => openPage(1)}>Go Page</div>
                        </div>
                    </div>
                    <div className="img">
                        <img src={img2} alt=""></img>
                    </div>
                </div>
                <div className="content">
                    <div className="summary">
                        <h2>프로젝트 특징</h2>
                        <ul>
                            <li>반응형 웹 (UI)</li>
                            <li>React Hooks를 이용한 State 관리</li>
                        </ul>
                        <h2>프로젝트 소감</h2>
                        <p>- React를 이용하여 간단한 웹페이지를 만들어 보았습니다. <br/>기존의 HTML에서와 다른 React에서의 이벤트 처리를 경험할 수 있었고, React Hooks와 Rendering 과정을 자세히 공부해볼 수 있었던 기회가 되었습니다.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}