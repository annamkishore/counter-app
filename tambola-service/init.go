package main

import (
	"github.com/gofiber/fiber/v2"
	"math/rand"
)

var numBoard = map[int]bool{}
var gameInfo = map[string]interface{}{
	"currentNumber":  0,
	"visitedNumbers": []int{},
}

func initBoard() {
	for i := 1; i <= 90; i++ {
		numBoard[i] = false
	}
}

func nextRandom() int {
	balanceNumbers := []int{}

	for i := 1; i < 90; i++ {
		if numBoard[i] == false {
			balanceNumbers = append(balanceNumbers, i)
		}
	}
	return rand.Intn(len(balanceNumbers))
}

func nextNumber(c *fiber.Ctx) error {
	if gameInfo["currentNumber"].(int) != 0 {
		gameInfo["visitedNumbers"] = append(gameInfo["visitedNumbers"].([]int), gameInfo["currentNumber"].(int))
	}

	gameInfo["currentNumber"] = nextRandom()
	numBoard[gameInfo["currentNumber"].(int)] = true
	return c.JSON(gameInfo)
}
