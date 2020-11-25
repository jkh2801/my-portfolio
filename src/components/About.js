import './About.scss'

export default function About() {
    console.log("about")
    const box = [
        {title: "간단한 자기소개", desc : ""},
        {title: "개발자가 되고 싶은 계기", desc : ""},
        {title: "앞으로의 목표", desc : ""}
    ]
    const list = box.map(({title, desc}, index) => 
    <div className="box" key={index}>
        <h2>{title}</h2>
        <p>{desc}</p>
    </div>)
    return (
        <section className="about">
            <div className="content">
                {list}
            </div>
        </section>
    )
}