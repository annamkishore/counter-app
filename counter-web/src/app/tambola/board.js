"use client"
import {useEffect, useState} from "react";

import {Avatar, Col, Row} from 'antd'
import axios from "axios"
import {TambolaEndpoints} from "@/app/services/rest-endpoints.js";

let board = {}
export default function Board() {
  let [gameInfo, setGameInfo] = useState({
    currNumber: 18,
    visitedNumbers: [28, 29, 6, 19],
  })

  useEffect(() => {
    for (let i = 1; i <= 90; i++) {
      board[i] = false
    }

    setInterval(getNextRandom, 3 * 1000)
  }, [])

  let getNextRandom = () => {
    // let nextNumber = await axios.get(TambolaEndpoints.nextNumber)
    axios.get(TambolaEndpoints.nextNumber).then(response => {
      setGameInfo({
        currNumber: response.data.currentNumber,
        visitedNumbers: response.data.visitedNumbers
      })
    })
  }

  return <div style={{display: "inline-block"}}>
    {/* Top Line */}
    <Row style={{marginBottom: "1rem", textAlign: "right"}}>
      <Col span={24}>
        {
          gameInfo.visitedNumbers.map(item => {
            return <Avatar size={64} key={`v-${item}`}
                           style={{fontSize: "2rem", color: "darkgreen", marginRight: "0.4rem"}}>
              {item}
            </Avatar>
          })
        }
        {
          <Avatar shape={"square"} size={128} key={`v-${gameInfo.currNumber}`}
                  style={{
                    fontSize: "5rem",
                    fontWeight: "bold",
                    color: "darkgreen",
                    margin: "0 0.4rem 0.4rem 0"
                  }}>{gameInfo.currNumber}</Avatar>
        }
      </Col>
    </Row>
    {/* Board */}
    <Row>
      <Col span={24}>
        {Object.entries(board).map(entry => {
          let [index, visited] = entry
          return <>
            <Avatar size={64} key={`b-${index}`}
                    style={{
                      color: gameInfo.visitedNumbers.includes(index - 0) ? "darkgreen" : "lightgrey",
                      fontSize: "2rem",
                      margin: "0 0.4rem 0.3rem 0"
                    }}>
              {index}
            </Avatar>
            {index % 10 === 0 && <br key={`br-${index}`}/>}
          </>
        })
        }
      </Col>
    </Row>
  </div>
}