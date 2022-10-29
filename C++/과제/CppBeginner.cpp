#include <iostream>
using namespace std;

class CppBeginner
{
public:
    void hello() const
    {
        cout << "202134-154253 김효민" << std::endl;
        cout << "나의 첫 번쨰 C++ 프로그램" << std::endl;
    }
};

int main()
{
    CppBeginner me;
    me.hello();
}