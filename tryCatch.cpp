#include<bits\stdc++.h>
using namespace std;
int main(){
    try{
        int a=3;
        if(a==2){
            cout<<"i am 2";
        }
        else{
            throw 505;
        }
    }
    catch( ...){
        cout<<"i am catch ";
    }

      return 0;
}