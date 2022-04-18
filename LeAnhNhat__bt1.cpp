#include<iostream>
#include<math.h>
using namespace std;

class diemthi
{
private:
    float diem_toan;
    float diem_ly;
    float diem_hoa;
   	float dtb;
public:
    void nhap_diem();
    void xuat_diem();
    float diem_tb();
    void xep_loai();
    friend istream& operator>>(istream &in, diemthi& a);
	friend ostream& operator<<(ostream &out, diemthi &a);
    diemthi();
    ~diemthi();
};

void diemthi::nhap_diem()
{   
    do{
        cout<<"\nNhap diem toan: "; cin>>diem_toan;
        cout<<"\nNhap diem ly: "; cin>>diem_ly;
        cout<<"\nNhap diem hoa: "; cin>>diem_hoa;
    }while(diem_toan>10||diem_toan<0||diem_ly<0||diem_ly>10||diem_hoa<0||diem_hoa>10);
    
}

void diemthi::xuat_diem()
{
    cout<<"\nDiem toan: "<<diem_toan;
    cout<<"\nDiem ly: "<<diem_ly;
    cout<<"\nDiem hoa: "<<diem_hoa;
    cout<<"\nDiem Trung Binh: "<<diem_tb();
}



void diemthi::xep_loai()
{
	if(diem_tb()>=8) 
	{
       cout << "A"; 
   	} 
	else if((diem_tb() >= 7) && (diem_tb() < 8)) 
	{
       cout << "B";
   	} 
   	else if((diem_tb() >= 6) && (diem_tb() < 7)) 
	{
       cout << "C"; 
   	} 
	else if((diem_tb() >= 4) && (diem_tb() < 6)) 
	{
       cout << "D"; 
   	} 
	else if((diem_tb()>=0) && (diem_tb() < 4)) 
	{
       cout << "F";
   	} 
	else 
	{
       cout << "Diem khong hop le";
   	}
	
}

float diemthi::diem_tb()
{
	return this->dtb=(this->diem_toan+this->diem_hoa+this->diem_ly)/3;
}

istream& operator>>(istream &in, diemthi& a){
	// cout<<"Diem Toan: "; in>>a.diem_toan;
	// cout<<"Diem Ly: "; in>>a.diem_ly;
	// cout<<"Diem Hoa: "; in>>a.diem_hoa;
	// cout<<"Diem Trung Binh: "; in>>a.xep_loai();

    /* Phần này quá tải nhập thì mình gọi hàm nhập ở trên đã khai báo */
    a.nhap_diem();
	return in;
}

ostream& operator<<(ostream &out, diemthi &a)
{
	// out<<a.diem_toan<<" "<<a.diem_ly<<" "<<a.diem_hoa<<" ";

    /* Phần này xuất dữ liệu mình cũng gọi hàm xuất đã khai báo */
    a.xuat_diem();
    out << endl << "Xep loai: ";
    a.xep_loai();
    out << endl;
	return out;
}

diemthi:: diemthi()
{
    
}

diemthi::~diemthi()
{

}

int main()
{
    /*diemthi x;
    cout<<"\nNhap diem: ";
    x.nhap_diem();
    cout<<"\nXuat diem: ";
    x.xuat_diem();
    cout<<"\nXep loai: ";
    x.xep_loai();*/
	diemthi x;
    cin>>x;
    cout <<x;
    system("pause");
    return 0;
}
