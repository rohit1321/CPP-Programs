#include<bits/stdc++.h>
using namespace std;

void ssmallestelement(int arr[],int n){
    int small = INT_MAX;
    int second_small = INT_MAX;
    for(int i=0;i<n;i++){
        if(arr[i] < small)
        {
           second_small = small;
           small = arr[i];
        }
    }
    cout<<"second small:- "<< second_small;
};

// void bubblsort(int arr[], int n){
    


int main(){
    int arr[]={1,2,4,7,7,5};
    int n=sizeof(arr)/sizeof(int);
    ssmallestelement(arr,n);
    
    // ssmallestelement(arr,n);
    return 0;
}