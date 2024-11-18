package main

import (
	"hidrogonica/handlers"
	"hidrogonica/public"
	"log"
	"log/slog"
	"net/http"
)

func main() {
	listenAddr := ":3000"
	mux := http.NewServeMux()
	mux.Handle("GET /public/assets/", http.StripPrefix("/public/", http.FileServer(http.FS(public.FS))))
	mux.HandleFunc("GET /", handlers.App)

	slog.Info("HTTP server startedd", "listenAddr", listenAddr)
	err := http.ListenAndServe(listenAddr, mux)
	log.Fatal(err)
}
