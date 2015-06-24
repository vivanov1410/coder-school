package main

import "fmt"

func main() {
	var name string
	name = "Slava"

	var name2 int = 3

	var number int
	number = 3

	fmt.Println(name, name2, number)

	fmt.Println("Введите имя:")
	var newName string
	fmt.Scan(&newName)
	fmt.Println("Ваше имя", newName)
}
