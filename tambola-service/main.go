package main

import (
	"fmt"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

func main() {
	showConfig()
	initBoard()

	app := fiber.New()
	app.Use(cors.New())
	appRoute := app.Group(fmt.Sprint(appConfig["basePath"]))
	appRoute.Get("/next-number", nextNumber)
	err := app.Listen(fmt.Sprintf(":%s", appConfig["port"]))
	if err != nil {
		fmt.Println(err)
		return
	}
}
