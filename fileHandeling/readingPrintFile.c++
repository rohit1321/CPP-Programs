#include<bits\stdc++.h>
#include<fstream>
using namespace std;
int main(){
    
    /* 
        create .txt file 
        write something thier    3 lines
        read all 3 line  and print it on terminal
    // */

    // ofstream fout;
    // fout.open("rawData.txt");
    // fout<<"hey hello,\n";
    // fout<<"How are you ?\n";
    // fout<<"Hey..! I am prety good.";
    // fout.close();

    // ifstream fin;
    // fin.open("rawData.txt");

    // string line;
    // while(getline(fin,line)){
    //     cout<<line<<endl;
    // };
    // fin.close();
    // ofstream fout;
    // fout.open("t.txt");
    // fout<<"i am first line\n";
    // fout<<"i am second line \n";
    // fout.close();

    // ifstream fin;
    // string line;
    // fin.open("t.txt");
    // while(getline(fin,line)){
    //     cout<<line<<endl;
    // }
    // fin.close();

    ofstream fout;
    fout.open("number.txt");
    fout<<"1 2 3 4 5 6 7";
    fout.close();

    ifstream fin;
    fin.open("number.txt");
    int a;
    while(!fin.eof()){
        cout<<
    }
    return 0;
}