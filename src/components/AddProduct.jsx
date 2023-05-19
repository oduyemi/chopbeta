export const AddProduct = ({ onAddProduct }) => {
    return(
        <div className="flex justify-end">
            <button onClick={onAddProduct} className="bg-yellow-500 hover:bg-yellow-900 rounded-full w-5 h-5 flex items-center justify-center text-lg text-white"><span>+</span></button>
        </div>
    )
}