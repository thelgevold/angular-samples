package friends

import (
	"log"
	"net/http"
	"encoding/json"
)

type Friend struct {
	Name string `json:"name"`
}

func Get(w http.ResponseWriter, r *http.Request) {
	friend1 := Friend{Name:"Joe"}
	friend2 := Friend{Name:"Tim"}
	friend3 := Friend{Name:"Jim"}
	friend4 := Friend{Name:"Jane"}

	friends := []Friend {friend1, friend2, friend3, friend4}

	payload, err := json.Marshal(friends)

	if err != nil {
		log.Println(err)
	}

	w.Header().Set("Content-Type", "application/json")
	w.Write(payload)
}

