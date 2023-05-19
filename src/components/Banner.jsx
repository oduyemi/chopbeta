import Button from "./elements/Button";


export const Banner = () => {
    return(
        <div className="banner  w-full md-2/3 px-7 mx-auto relative flex items-center justify-between">
            <div className="banner-description w-full md-1/2 p-3 ml-10">
                <h2 className="text-4xl font-semi-bold text-white pl-4">
                    The Food Plug
                </h2>
                <p className="font-light text-lg text-red-600 py-2 mt-3 pl-4 mb-10">
                    Connect with locals and order your home-made meals.
                </p>
                <div className="btn-container mt-2 pl-4">
                    <Button>Order Now</Button>
                    <a href="/menu" className="text-yellow-400 hover:text-yellow-500 font-bold text-decoration-line px-3">
                        See Menu
                    </a>
                </div>
            </div>
            <div className="banner-image w-full md-1/2 p-3 flex justify-around">
                <img src={require("../assets/images/soups.png")} alt="hero banner" className="max-h-65 w-1/2"  />
            </div>
        </div>
    )
}