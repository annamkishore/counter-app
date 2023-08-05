"use client"

import {Avatar, Col, Row, Space} from 'antd'

export default function Tambola() {

  let gameData = {
    currNumber: 18,
    visitedNumbers: [28, 29, 6, 19],
    board: {}
  }

  let board = gameData.board
  for (let i = 1; i <= 90; i++) {
    board[i] = false
  }


  return <div style={{textAlign: "center"}}>
    <Row align={"middle"} style={{marginBottom: "1rem"}}>
      <Col span={24}>
        <Space>
          {
            gameData.visitedNumbers.map(item => {
              return <Avatar size={64} key={`v-${item}`}
                             style={{fontSize: "2rem"}}>{item}</Avatar>
            })
          }
          {
            <Avatar shape={"square"} size={64}
                    style={{fontSize: "2rem"}}>{gameData.currNumber}</Avatar>
          }
        </Space>
      </Col>
    </Row>
    <Row align={"middle"}>
      <Col span={24}>
        {Object.entries(board).map(entry => {
          let [index, visited] = entry
          return <>
            <Avatar size={64} key={`b-${index}`}
                    style={{fontSize: "2rem", margin: "0 0.4rem 0.3rem 0"}}>{index}</Avatar>
            {index % 10 === 0 && <br key={`br-${index}`}/>}
          </>
        })
        }
      </Col>
    </Row>
  </div>
}