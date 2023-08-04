package main

import (
	"fmt"
	"github.com/gofiber/fiber/v2"
	"math/rand"
)

var numBoard = map[int]bool{}
var visitSequence = []int{}

func initBoard() {
	for i := 1; i <= 90; i++ {
		numBoard[i] = false
	}
}

func nextNumber(c *fiber.Ctx) error {
	balanceNumbers := []int{}

	for i := 1; i < 90; i++ {
		if numBoard[i] == false {
			balanceNumbers = append(balanceNumbers, i)
		}
	}

	var number int = rand.Intn(len(balanceNumbers))
	numBoard[number] = true
	visitSequence = append(visitSequence, number)
	return c.SendString(fmt.Sprintf("%d", number))
}

func main() {
	initBoard()

	app := fiber.New()
	app.Get("/next-number", nextNumber)
	err := app.Listen(":4002")
	if err != nil {
		fmt.Println(err)
		return
	}
}
