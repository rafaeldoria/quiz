import random from '../../../functions/array'
import issues from '../dbIssues'

// eslint-disable-next-line import/no-anonymous-default-export
export default function quiz(req, res) {
    const ids = issues.map(issue => issue.id)
    res.status(200).json(random(ids))
}