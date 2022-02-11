#include <iostream>
#include <thread>

// g++ -std=c++11 -pthread fundamentos/threads/main.cpp -o fundamentos/threads/main
// fundamentos/threads/main

void foo();

int main() {
  std::thread thread_obj(foo);

  return 0;
}

void foo() {
  std::cout << "foo" << std::endl;
}
