import { useEffect, useState } from 'react'
import IssueModel from '../model/issue'
import Quiz from '../components/Quiz'
import { useRouter } from 'next/router'

const BASE_URL = 'http://localhost:3000/api'

export default function Home() {
  const router = useRouter()

  const [ids, setIds] = useState<number[]>([])
  const [issue, setIssue] = useState<IssueModel>()
  const [correctIssues, setCorrectIssues] = useState<number>(0)

  async function loadingIds() {
    const resp = await fetch(`${BASE_URL}/quiz`)
    const ids = await resp.json()
    setIds(ids)
  }

  async function loadingIssue(idIssue : number) {
    const resp = await fetch(`${BASE_URL}/issues/${idIssue}`)
    const obj = await resp.json()
    const newIssue = IssueModel.returnIssueModel(obj)
    setIssue(newIssue)
  }

  useEffect(() => {
    loadingIds()
  }, [])

  useEffect(() => {
    ids.length > 0 && loadingIssue(ids[0])
  }, [ids])

  function issueAnswered(issueAnswered: IssueModel) {
    setIssue(issueAnswered)
    const hit = issueAnswered.hit
    setCorrectIssues(correctIssues + (hit ? 1 : 0))
  }

  function nextIdIssue() {
      const nextIndex = ids.indexOf(issue.id) + 1
      return ids[nextIndex]
  }

  function nextStep() {
    const nextId = nextIdIssue()
    nextId ? nextToIssue(nextId) : end()
  }

  function nextToIssue(nextId: number) {
    loadingIssue(nextId)
  }

  function end() {
    router.push({
      pathname: "/result",
      query: {
        total: ids.length,
        corrects: correctIssues
      }
    })
  }
  
  return issue ? 
      <Quiz
        issue={issue}
        last={nextIdIssue() === undefined}
        issueAnswered={issueAnswered}
        nextStep={nextStep}
      />
    : false
}
