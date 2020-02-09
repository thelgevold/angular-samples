package main

import (
	"log"
	"net/http"
	"github.com/gorilla/mux"
	"api/cars"
	"api/friends"
	"api/persons"
	"api/logs"
)

func main() {

	router := mux.NewRouter()
	
	router.HandleFunc("/cars", cars.Get).Methods("GET")
	router.HandleFunc("/friends", friends.Get).Methods("GET")
	router.HandleFunc("/persons", persons.Get).Methods("GET")
	router.HandleFunc("/logs", logs.Get).Methods("GET")
	
	http.Handle("/", router)

	log.Println("Listening on :8080")
	log.Fatal(http.ListenAndServe(":8080", nil))
}
