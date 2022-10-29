//(가) 다음 프로그램의 ㈀~㈃에 넣을 내용을 작성하라.(나) 이 프로그램의 출력 결과를 구하라.IntPtr.cpp

#include <iostream>
using namespace std;
int main()
{
    cout << "202134-154253 김효민" << std::endl;
    int a = 10, b = 100;
    int *ptr = &a; // 포인터 ptr을 선언한 후에 a를 가리키도록 초기화함
    cout << "ptr이 가리키는 곳의 값 : " << ptr << endl;
    *ptr = 20; // ptr이 가리키는 곳에 20을 저장
    cout << "변수 a의 값 : " << a << endl;
    int *ptr2 = &b; // ptr이 b를 가리키게 함
    cout << "변수 b의 값 : " << *ptr2 << endl;
    return 0;
}