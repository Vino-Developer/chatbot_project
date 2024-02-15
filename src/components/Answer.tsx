type AnswerProp={
    data:string|null
}

const Answer = ({data}:AnswerProp) => {
    console.log(data);

  return (
    <div id="ans-data">
        
        <span id="answer">{data}</span>
        
    </div>
  )
}

export default Answer