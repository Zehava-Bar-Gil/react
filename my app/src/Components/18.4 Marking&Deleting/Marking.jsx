import react from 'react';

const InitState = [
    {id: 0, name: 'one', check: false},
    {id: 1, name: 'two', check: false},
    {id: 2, name: 'three', check: false},
    {id: 3, name: 'four', check: false},
    {id: 4, name: 'five', check: false}
];

const Marking = () => {
    const [dataList, setDataList] = react.useState(InitState);
    const [delItems , setDelItems] = react.useState([]);

    const handelChecbox = (id) => {
       let allList = [...dataList];
       let findOne = allList.filter((item)=>{
           return item.id ===id;
       })
        findOne[0].check = !findOne[0].check;
        setDataList(allList)

        let deleteList = [...delItems]
        let isDel = deleteList.filter((item)=>{
            return item.id === id
        })
        //
        // if(isDel.length > 0){
        //     setDelItems(deleteList.filter((item)=>{
        //         return item.id !== id;
        //     }))
        // }
        // else{
        //     deleteList.push(findOne[0])
        //
        //     setDelItems(deleteList)
        // }
        //
        // console.log(delItems)
    }

    const deleteItems =()=>{
        let newData = dataList.filter((item)=>{
            return item.check === false;
        })

        setDataList(newData)
    }

    const resetItems = ()=>{
        // let InitStateCopy = InitState.map(())
        setDataList(InitState)
    }

    return (
        <>
            <input type={"button"} value={"delete"} onClick={deleteItems }/>
            <input type={"button"} value={"reset"} onClick={resetItems }/>
            {
                dataList.map((data, index) => {
                    return <div key={index}>
                        <input type={"checkbox"}
                               onChange={() => {
                                   handelChecbox(data.id)
                               }}
                               checked={data.check}
                        />
                        {data.name}
                    </div>
                })
            }
        </>
    )
}

export default Marking;
