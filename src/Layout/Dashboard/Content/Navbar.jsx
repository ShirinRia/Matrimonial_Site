import user from "../../../assets/user.png"

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center w-full">
            <p className="text-[#575A61] text-3xl font-semibold">
                Dashboard
            </p>

            <div className="flex items-center gap-5">
                <div className="w-[50px] h-[50px] rounded-full bg-white flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M5.31328 12.9153L4.56806 12.8307L4.56806 12.8307L5.31328 12.9153ZM5.76046 8.97519L6.50568 9.05977L5.76046 8.97519ZM4.44779 14.8721L3.87668 14.386H3.87668L4.44779 14.8721ZM19.4319 12.8307C19.3852 12.4191 19.0137 12.1233 18.6021 12.17C18.1906 12.2168 17.8948 12.5883 17.9415 12.9998L19.4319 12.8307ZM19.5522 14.8721L18.9811 15.3583L19.5522 14.8721ZM9.73005 4.37366L9.973 5.08322C10.2763 4.97938 10.4801 4.69424 10.4801 4.37366H9.73005ZM13.1539 3.28059C13.4237 3.59487 13.8973 3.6309 14.2115 3.36107C14.5258 3.09125 14.5618 2.61774 14.292 2.30347L13.1539 3.28059ZM15.7023 20.2632C15.8477 19.8753 15.6511 19.4431 15.2632 19.2977C14.8753 19.1523 14.4431 19.3489 14.2977 19.7368L15.7023 20.2632ZM9.7023 19.7368C9.55694 19.3489 9.12467 19.1523 8.7368 19.2977C8.34893 19.4431 8.15234 19.8753 8.2977 20.2632L9.7023 19.7368ZM17.7772 17.25H6.22281V18.75H17.7772V17.25ZM6.05849 12.9998L6.50568 9.05977L5.01525 8.89061L4.56806 12.8307L6.05849 12.9998ZM5.01889 15.3583C5.59621 14.6801 5.96028 13.8652 6.05849 12.9998L4.56806 12.8307C4.50519 13.3846 4.27067 13.9231 3.87668 14.386L5.01889 15.3583ZM17.9415 12.9998C18.0397 13.8652 18.4038 14.6801 18.9811 15.3583L20.1233 14.386C19.7293 13.9231 19.4948 13.3846 19.4319 12.8307L17.9415 12.9998ZM6.22281 17.25C5.56777 17.25 5.10443 16.926 4.89056 16.5492C4.68409 16.1854 4.68714 15.748 5.01889 15.3583L3.87668 14.386C3.11141 15.285 3.08777 16.4116 3.58598 17.2895C4.07679 18.1544 5.04947 18.75 6.22281 18.75V17.25ZM17.7772 18.75C18.9505 18.75 19.9232 18.1544 20.414 17.2895C20.9122 16.4116 20.8886 15.285 20.1233 14.386L18.9811 15.3583C19.3129 15.748 19.3159 16.1854 19.1094 16.5492C18.8956 16.926 18.4322 17.25 17.7772 17.25V18.75ZM10.4801 4.37366V4.26995H8.98005V4.37366H10.4801ZM6.50568 9.05977C6.7087 7.27101 8.05587 5.73962 9.973 5.08322L9.48711 3.6641C7.11944 4.47476 5.29449 6.43026 5.01525 8.89061L6.50568 9.05977ZM12 1.25C10.3321 1.25 8.98005 2.60208 8.98005 4.26995H10.4801C10.4801 3.4305 11.1606 2.75 12 2.75V1.25ZM12 2.75C12.4613 2.75 12.874 2.95459 13.1539 3.28059L14.292 2.30347C13.7393 1.65971 12.9171 1.25 12 1.25V2.75ZM14.2977 19.7368C13.975 20.5979 13.0846 21.25 12 21.25V22.75C13.6855 22.75 15.1516 21.7325 15.7023 20.2632L14.2977 19.7368ZM12 21.25C10.9154 21.25 10.025 20.5979 9.7023 19.7368L8.2977 20.2632C8.84835 21.7325 10.3145 22.75 12 22.75V21.25Z" fill="black" fillOpacity="0.7" />
                        <path d="M21 7C21 8.65685 19.6569 10 18 10C16.3431 10 15 8.65685 15 7C15 5.34315 16.3431 4 18 4C19.6569 4 21 5.34315 21 7Z" fill="#0BC908" stroke="#0BC908" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                </div>
                <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-2">
                    <div className="avatar">
                        <div className="w-9 rounded-full ">
                            <img src={user} />
                        </div>
                       
                    </div>
                    <p className="text-[#575A61E5]">
                        Shiblu Ahmad
                        </p>
                </div>

            </div>

        </nav>
    );
};
// 
export default Navbar;