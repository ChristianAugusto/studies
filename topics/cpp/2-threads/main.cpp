#include <iostream>
#include <thread>

using namespace std;

void task1(string msg)
{
  cout << msg << endl;
}

int main()
{
  thread thread_1(task1, "thread 1");
  thread thread_2(task1, "thread 2");
  thread thread_3(task1, "thread 3");
  thread thread_4(task1, "thread 4");

  thread_1.join();
  thread_2.join();
  thread_3.join();
  thread_4.join();

  cout << "End" << endl;

  return 0;
}
