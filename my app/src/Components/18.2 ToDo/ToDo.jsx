import react from 'react';

const ToDo = ({}) => {
    const [data, setData] = react.useState([
        {name: "CSS", completed: true},
        {name: "JavaScript", completed: true},
        {name: "Learn React", completed: false},
        {name: "Learn mongoDB", completed: false},
        {name: "Learn Node JS", completed: false},
    ]);

    const isComplete = (mode) => {
        if (mode === true) {
            return "V"
        }
        return "X"
    }


    const changeMode = (name) => {
        let newDataList = [...data];
        let someData = newDataList.filter((d) => {
            return d.name === name;
        })
        someData[0].completed = !someData[0].completed
        setData(newDataList)
    }

    return (
        <div>
            {data.map((d, index) => {
                return <div>
                    {d.name}
                    <input type="button" onClick={() => {
                        changeMode(d.name)
                    }} value={isComplete(d.completed)}/>
                </div>
                
            })}
        </div>
    )
}


export default ToDo;
