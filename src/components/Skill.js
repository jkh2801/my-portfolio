import './Skill.scss'

export default function Skill() {
    const skills = [
        {content: "Language", skill: [{name: "Java", value: "70%"}, {name: "JavaScript", value: "55%"}, {name: "Python", value: "30%"}]},
        {content: "Front-End", skill: [{name: "Html", value: "70%"}, {name: "CSS", value: "70%"}, {name: "jQuery", value: "50%"}, {name: "React", value: "50%"}]},
        {content: "Back-End", skill: [{name: "Spring", value: "70%"}, {name: "Node.js", value: "50%"}, {name: "My-SQL", value: "50%"}]},
        {content: "ETC", skill: [{name: "AWS S3", value: "30%"}, {name: "HADOOP", value: "30%"}]}
    ]
    const list = skills.map(({content, skill}, index) => 
    <div className="content" key={index}>
        <h2>{content}</h2>
        {skill.map(({name, value}, index) => 
        <div className="skill" key={index}>
        <span className="Name">{name}</span>
        <div className="percent">
            <div className="progress" style={{width: value}}></div>
        </div>
        <span className="Value">{value}</span>
    </div>)}
    </div>)
    return (
        <section className="skills">
            <div className="container">
                {list}
            </div>
        </section>
    )
}