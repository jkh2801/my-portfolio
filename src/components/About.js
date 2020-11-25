import './About.scss'
import Jeong from './image/jeong.png'

export default function About() {
    return (
        <section className="about">
            <div className="container">
                <div className="content">
                    <div className="intro">
                        <div className="img"><img src={Jeong} alt=""></img></div>
                        <div className="text">안녕하세요. Front-End 개발자를 목표로 한 걸음을 내딛는 신입 개발자 정건호 입니다. 아직 채워야 할 부분이 많지만, 자기완성을 향해 꾸준히 나아가는 개발자가 되겠습니다.</div>
                    </div>
                </div>
                <div className="content">
                    <div className="box">
                        <h4>왜 개발자가 되기로 하였는가?</h4>
                        <p>저의 인생에서 여러 굴곡들이 있었는데 제일 큰 굴곡은 IT 로의 전향 일 것입니다. 인터넷에서 코딩 부트캠프를 신청한 것이 그 시작이었습니다. 코딩에 대해 아무것도 몰랐던 제가 커리큘럼을 따라가면서 개발에 대한 즐거움과 성장가능성을 발견할 수 있었습니다. 프로젝트에서  웹개발을 담당하면서 제가 생각한 것을 직접 구현하여 즐거워하고 새로운 기술에 몰두하여 스스로의 성취를 느끼며 개발자의 길로 가기로 결정했습니다. 
                            <br/><br/>
                            풀스택 개발자가 저의 목표이지만, 저는 시각적인 요소를 중요하기 때문에 프론트엔드 개발자로서의 역량을 쌓고 싶습니다. 보기 좋은 UI가 누구나에게나 사용되기 좋은 것처럼 저도 가시성과 유용성을 갖춘 화면딴을 구현하고 싶습니다. 
                            지난 교육을 통해 React, Vue에 대해 배웠으며, 이러한 경험을 활용하여 직접 업무를 수행하고 싶습니다.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}