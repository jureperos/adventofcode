package main

import (
    "fmt"
    "io"
    "os"
)

func main() {

    // this opens the file fo reading.
    file, err := os.Open("calories.txt")

    if err != nil {
        panic(err)
    }
    defer file.Close()

    // read entire contents of the file into a byte slice.
    RawCalories, err := io.ReadAll(file)
    if err != nil {
        panic(err)
    }

    // Print contents of the byte slice to the console.
    fmt.Printf("%s", RawCalories)

}
