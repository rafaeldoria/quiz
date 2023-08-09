import { useEffect, useRef, useState } from 'react'
import Issue from '../components/Issue'
import AnswerModel from '../model/answer'
import IssueModel from '../model/issue'
import styles from '../styles/Home.module.css'
import Button from '../components/Button'
import Quiz from '../components/Quiz'
import issues from './api/dbIssues';

const teste = new IssueModel(1, 'Teste?', [
  AnswerModel.incorrect('a'),
  AnswerModel.incorrect('b'),
  AnswerModel.incorrect('c'),
  AnswerModel.correct('d'),
])

export default function Home() {
  const [issue, setIssue] = useState(teste)
  // const issueRef = useRef<IssueModel>()

  // useEffect(() => {
  //   issueRef.current = issue
  // }, [issue])

  // function onResponse(index: number) {
  //   setIssue(issue.chosenAnswer(index))
  // }

  // function timeout() {
  //   if(issue.notAnswerd){
  //     setIssue(issue.chosenAnswer(-1))
  //   }
  //   // if(issueRef.current.notAnswerd){
  //   //   setIssue(issue.chosenAnswer(-1))
  //   // }
  // }

  function issueAnswerd(issue: IssueModel) {

  }

  function nextStep() {

  }
  
  return (
      <Quiz 
        issue={issue}
        last={false}
        issueAnswered={issueAnswerd}
        nextStep={nextStep}
      />
  )
}
