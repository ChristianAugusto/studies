package main 

import ( 
    "fmt"
    "strings"
) 

// Main function 
func main() { 

    // Creating and initializing strings 
    str1 := "Welcome to Geeks for Geeks"
    str2 := "This is the article of the Go string is a replacement"

    fmt.Println("Original strings") 
    fmt.Println("String 1: ", str1) 
    fmt.Println("String 2: ", str2) 

    // Replacing strings 
    // Using Replace() function 
    res1 := strings.Replace(str1, "e", "E", 3) // n = 3
    res2 := strings.Replace(str2, "is", "IS", -2) // n = -2    If n < 0, there is no limit on the number of replacements.
    res3 := strings.Replace(str1, "Geeks", "GFG", 0) // n = 0     

    // Displaying the result 
    fmt.Println("\nStrings(After replacement)") 
    fmt.Println("Result 1: ", res1) 
    fmt.Println("Result 2: ", res2) 
    fmt.Println("Result 3: ", res3) 
}