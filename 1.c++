#include<bits\stdc++.h>
using namespace std;
int main(){

    int  arr[] = {8,10,5,7,9};
    int  small= arr[0];
    int n= sizeof(arr)/sizeof(int);
    for(int i=0;i<n;i++){
        if(small>arr[i]){
            small=arr[i];
        }
    }

    cout<<small;

    return 0;
}