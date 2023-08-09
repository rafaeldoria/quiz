import issues from '../dbIssues'

export default function handler(req, res) {
	const id = +req.query.id
    const issue = issues.filter(issue => issue.id === id)

    if(issue.length === 1){
      	const issueSelected = issue[0].randomAnswers()
        // const objt = issueSelected.chosenAnswer(0).transformerToObject()
      	res.status(200).json(issueSelected.transformerToObject())
    }else{
		console.log('notfound')
        res.status(204).send()
    }
}