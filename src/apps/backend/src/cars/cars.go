package cars

import (
	"log"
	"net/http"
	"encoding/json"
)

type Car struct {
	Name string `json:"name"`
	Key string `json:"key"`
	TopSpeed string `json:"topSpeed"`
}

func Get(w http.ResponseWriter, r *http.Request) {
	car1 := Car{Name:"Countach", Key: "countach", TopSpeed: "254 km/h (158 mph)-295 km/h (183 mph)"}
	car2 := Car{Name:"Veneno", Key: "veneno", TopSpeed: "356 km/h (221 mph)"}
	car3 := Car{Name:"Aventador", Key: "aventador", TopSpeed: "349 km/h (217 mph)"}

	cars := []Car {car1, car2, car3}

	payload, err := json.Marshal(cars)

	if err != nil {
		log.Println(err)
	}

	w.Header().Set("Content-Type", "application/json")
	w.Write(payload)
}

