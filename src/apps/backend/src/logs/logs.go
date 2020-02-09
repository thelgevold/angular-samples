package logs

import (
	"log"
	"net/http"
	"encoding/json"
)

type Log struct {
	Text string `json:"text"`
	Severity int `json:"severity"`
}

func Get(w http.ResponseWriter, r *http.Request) {
	log1 := Log{Text:"loading failed", Severity:1}
	log2 := Log{Text:"system failure", Severity:2}
	log3 := Log{Text:"slow response", Severity:2}
	log4 := Log{Text:"login failed", Severity:4}
	log5 := Log{Text:"null argument exception", Severity:10}

	logs := []Log {log1, log2, log3, log4, log5}

	payload, err := json.Marshal(logs)

	if err != nil {
		log.Println(err)
	}

	w.Header().Set("Content-Type", "application/json")
	w.Write(payload)
}

