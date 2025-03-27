#include<bits\stdc++.h>
using namespace std;
int main(){
// largest number
    int arr[]={8,10,5,7,9};
    int n= sizeof(arr)/sizeof(int);
    int large= arr[0];
    for(int i=0;i<n;i++){
        if(large<arr[i]){
            large=arr[i];
        }
    }
    cout<<large;
    return 0;
}