import issues from '../dbIssues'

export default function handler(req, res) {
	const id = +req.query.id
    const issue = issues.filter(issue => issue.id === id)

    if(issue.length === 1){
      	const issue_ = issue[0].randomAnswers()
        const objt = issue_.chosenAnswer(0).transformerToObject()
      	res.status(200).json(objt)
      	// res.status(200).json(issue_.transformerToObject())
    }else{
		console.log('notfound')
        res.status(204).send()
    }
}