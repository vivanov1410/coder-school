package main

import "fmt"

func main() {
	// https://golang.org/ref/spec#Types

	// String Type
	var name string   // declare a variable
	name = "Slava"    // set value to variable
	fmt.Println(name) // print out value of the variable

	var name2 string = "Misha"       // declare and initialize variable
	fmt.Println("My name is", name2) // print out value of the variable

	name3 := "Sveta"                    // another way to declare and initialize a variable
	fmt.Println("We all love " + name3) // print out value of the variable

	// Integer Type
	var numberOfChairs int32 // -2147483648 to 2147483647
	numberOfChairs = 3
	fmt.Println("I have", numberOfChairs, "chairs")

	var realNumberOfChairs uint8 // 0 - 255
	realNumberOfChairs = 15
	fmt.Println("I really only have", realNumberOfChairs, "chairs")

	// Float Type
	var radius float32 = 300.5
	fmt.Println("My circle has a radius of", radius, "meters")

	// Boolean Type
	var isOn bool = true
	fmt.Println("Is my light is on?", isOn)

	isDead := false
	fmt.Println("Is enemy dead?", isDead)
}
