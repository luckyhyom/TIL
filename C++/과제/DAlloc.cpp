#include <iostream>
using namespace std;
int main()
{
    cout << "202134-154253 김효민" << std::endl;
    char *sPtr;
    int maxSLen; // 입력할단어의최대길이
    cout << "단어의 최대 길이를 입력하시오 : ";
    cin >> maxSLen;
    sPtr = new char[maxSLen]; // maxSLen개의 문자를 저장할 메모리 할당

    cout << "단어를 입력하시오 : ";
    cin >> sPtr;
    int len{0};                                     // 단어의 문자 수
    for (char *p = sPtr; *p != sPtr[maxSLen]; *p++) // p를 이용하여 sPtr의 시작부터 끝까지 반복
        len++;
    cout << sPtr << "의 문자 수: " << len << endl;
    delete[] sPtr; // ㈀에서 할당한 메모리 반환
}
