

export const getProducts = async (req,res)=>{
    try{
        const products=await Product.find({});
        res.status(200).json({success:true,data:products});
    }catch(error){
        console.error("Get product:",error);
        res.status(500).json({success:false,message:"Server Error"});
    }
}

export const createProducts = async (req,res)=>{
    res.send("Server is ready");
    const product=req.body;

    if(!product.name || !product.price || !product.image){
        return res.status(400).json({success:false,message:"Please provide all fields"});
    }

    const newProduct=new Product(product);

    try{
        await newProduct.save();
        res.status(201).json({success:true,data:newProduct});

    }catch(error){
        console.error("Error while creating a product:",error);
        res.status(500).json({success:false,message:"Server Error"})
    }

}

export const deleteProducts = async (req,res) =>{
    const {id}=req.params;
    try{
        await Product.findByIdAndDelete(id);
        res.status(200).json({success:true,message:"Product deleted"});

    }catch(error){
        console.error("Error while deleting product:",error);
        res.status(404).json({success:false,message:"Product not found"});
    }
}

export const updateProducts = async (req,res)=>{
    const {id}=req.params;
    const product=req.body;
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success:false,message:"Invalid Product Id"});
    }
    try{
        const updateProduct=await Product.findByIdAndUpdate(id,product,{new:true});
        res.status(200).json({success:true,data:updateProduct})

    }catch(error){
        res.status(500).json({success:false,message:"Server Error"});
    }
}