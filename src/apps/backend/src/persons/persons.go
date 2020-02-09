package persons

import (
	"log"
	"net/http"
	"encoding/json"
)

type Person struct {
	Name string `json:"name"`
	Address string `json:"address"`
}

func Get(w http.ResponseWriter, r *http.Request) {
	person1 := Person{Name:"Joe", Address:"Test Street1"}
	person2 := Person{Name:"Tim", Address:"Test Street2"}
	person3 := Person{Name:"Jim", Address:"Test Street3"}
	person4 := Person{Name:"Jane", Address:"Test Street4"}

	persons := []Person {person1, person2, person3, person4}

	payload, err := json.Marshal(persons)

	if err != nil {
		log.Println(err)
	}

	w.Header().Set("Content-Type", "application/json")
	w.Write(payload)
}

