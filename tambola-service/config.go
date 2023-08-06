package main

import (
	"encoding/json"
	"fmt"
	"os"
)

var appConfig = map[string]interface{}{
	"port":     os.Getenv("port"),
	"basePath": "/api/v1/tambola",
}

func showConfig() {
	config, _ := json.MarshalIndent(appConfig, "", "  ")
	fmt.Println("----tambola-service----", string(config))
}
