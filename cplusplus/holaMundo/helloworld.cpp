#include <iostream>

using namespace std;

class person
{
public:
    void eat()
    {
        cout << "Estoy comiendo  " << endl;
    }
};

class student : public person
{
public:
    void study()
    {
        cout << "Estoy estudiando mi pana  " << endl;
    }
};

int main()
{
    cout << "i guess you're my little pogchamp " << endl;
    student s;
    s.study();
    s.eat();
    cin.get();
}