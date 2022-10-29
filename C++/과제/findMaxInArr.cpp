#include <iostream>
using namespace std;
int main()
{
    int data[10] = {10, 23, 5, 9, 22, 48, 12, 10, 55, 31};
    int max = data[0];          // data의 0번 값을 max로 가정함
    cout << "데이터 : " << max; // 0번 데이터 출력
    for (int i : data)
    {                     // 나머지 9개의 데이터 비교
        cout << " " << i; // i번 데이터 출력
        if (max < i)      // i번 데이터가 max보다 큰가 비교
            max = i;      // max를 i번 데이터로 바꿈
    }
    cout << "\n\n배열의 최댓값 : " << max << endl;
    return 0;
}